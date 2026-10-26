/* Audio: síntesis de voz (Listening y examinador), grabación y reconocimiento de voz. */
const TTS = (() => {
  const synth = window.speechSynthesis;
  let voices = [];
  let queue = [], idx = 0, running = false, paused = false, opts = {}, timer = null, current = null, keepAlive = null;
  const speakerVoice = {};

  function supported() { return !!synth && typeof SpeechSynthesisUtterance !== 'undefined'; }
  function loadVoices() {
    if (!supported()) return;
    const all = synth.getVoices();
    const pref = ['en-GB', 'en-AU', 'en-US', 'en-IE', 'en-NZ', 'en-CA', 'en-ZA', 'en-IN'];
    voices = all.filter(v => /^en[-_]/i.test(v.lang) || v.lang === 'en')
      .sort((a, b) => {
        const ia = pref.indexOf(a.lang.replace('_', '-')), ib = pref.indexOf(b.lang.replace('_', '-'));
        const qa = /natural|neural|google|premium|enhanced/i.test(a.name) ? -1 : 0, qb = /natural|neural|google|premium|enhanced/i.test(b.name) ? -1 : 0;
        return (qa - qb) || ((ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib));
      });
  }
  if (supported()) { loadVoices(); synth.onvoiceschanged = loadVoices; }

  const FEMALE = /female|woman|samantha|karen|moira|tessa|serena|kate|susan|zira|hazel|libby|sonia|natasha|catherine|fiona|victoria|allison|ava|aria|jenny|emma|amy|joanna|salli|kimberly|olivia|google uk english female|google us english/i;
  const MALE = /male|daniel|oliver|arthur|george|ryan|thomas|alex|fred|lee|james|guy|david|mark|brian|matthew|william|google uk english male/i;

  function voiceFor(speaker, gender) {
    if (speakerVoice[speaker]) return speakerVoice[speaker];
    if (!voices.length) loadVoices();
    const used = Object.values(speakerVoice).map(x => x.voice);
    const byG = voices.filter(v => gender === 'm' ? (MALE.test(v.name) && !/female/i.test(v.name)) : FEMALE.test(v.name));
    let v = byG.find(x => !used.includes(x)) || byG[0] || voices.find(x => !used.includes(x)) || voices[0] || null;
    const known = v && (gender === 'm' ? MALE.test(v.name) && !/female/i.test(v.name) : FEMALE.test(v.name));
    const pitch = known ? 1 : (gender === 'm' ? 0.8 : 1.15);
    speakerVoice[speaker] = { voice: v, pitch };
    return speakerVoice[speaker];
  }

  // Divide en oraciones para evitar el corte de Chrome en enunciados largos.
  function split(text) { return (text.match(/[^.!?]+[.!?]*["')\]]*\s*/g) || [text]).map(s => s.trim()).filter(Boolean); }

  function build(script, speakers) {
    const q = [];
    script.forEach((seg, i) => {
      if (seg.pause) { q.push({ pause: seg.pause, seg: i }); return; }
      const sp = speakers && speakers[seg.s] || { g: 'f' };
      split(seg.t).forEach(t => q.push({ text: t, s: seg.s, g: sp.g, seg: i }));
    });
    return q;
  }

  function next() {
    if (!running || paused) return;
    if (idx >= queue.length) { stop(true); return; }
    const item = queue[idx];
    opts.onProgress && opts.onProgress(idx / queue.length, item);
    if (item.pause) {
      const ms = item.pause * 1000 * (opts.pauseScale == null ? 1 : opts.pauseScale);
      timer = setTimeout(() => { idx++; next(); }, ms);
      return;
    }
    const u = new SpeechSynthesisUtterance(item.text);
    const vv = voiceFor(item.s, item.g);
    if (vv.voice) { u.voice = vv.voice; u.lang = vv.voice.lang; } else u.lang = 'en-GB';
    u.pitch = vv.pitch; u.rate = opts.rate || 0.95;
    u.onend = () => { if (current === u) { idx++; setTimeout(next, 120); } };
    u.onerror = (e) => { if (current === u && e.error !== 'interrupted' && e.error !== 'canceled') { idx++; setTimeout(next, 120); } };
    current = u;
    synth.speak(u);
  }

  function play(script, speakers, o) {
    stop(false);
    opts = o || {}; queue = build(script, speakers); idx = 0; running = true; paused = false;
    for (const k in speakerVoice) delete speakerVoice[k];
    if (!supported()) { opts.onEnd && opts.onEnd(false); running = false; return; }
    synth.cancel();
    // Algunos navegadores pausan la síntesis tras ~15 s; esto la mantiene activa.
    keepAlive = setInterval(() => { if (synth.speaking && !synth.paused && !paused) { synth.pause(); synth.resume(); } }, 10000);
    next();
  }
  function stop(finished) {
    const wasRunning = running;
    running = false; paused = false; current = null;
    clearTimeout(timer); clearInterval(keepAlive);
    if (supported()) synth.cancel();
    if (wasRunning && finished && opts.onEnd) opts.onEnd(true);
  }
  function pause() { if (!running) return; paused = true; clearTimeout(timer); current = null; synth.cancel(); }
  function resume() { if (!running || !paused) return; paused = false; next(); }
  function say(text, o) {
    o = o || {};
    play([{ s: o.speaker || 'X', t: text }], { [o.speaker || 'X']: { g: o.g || 'f' } }, { rate: o.rate || (Store.state.settings.rate), onEnd: o.onEnd });
  }
  return { supported, play, stop, pause, resume, say, get running() { return running; }, get paused() { return paused; } };
})();

const Recorder = (() => {
  let mr = null, chunks = [], stream = null;
  function supported() { return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder); }
  async function start() {
    if (!supported()) throw new Error('Grabación no disponible en este navegador');
    stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    chunks = [];
    mr = new MediaRecorder(stream);
    mr.ondataavailable = e => { if (e.data && e.data.size) chunks.push(e.data); };
    mr.start();
  }
  function stop() {
    return new Promise(resolve => {
      if (!mr || mr.state === 'inactive') { resolve(null); return; }
      mr.onstop = () => {
        const blob = new Blob(chunks, { type: mr.mimeType || 'audio/webm' });
        stream && stream.getTracks().forEach(t => t.stop());
        resolve(URL.createObjectURL(blob));
      };
      mr.stop();
    });
  }
  return { supported, start, stop };
})();

const STT = (() => {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  let rec = null, finalText = '', on = false, cb = null;
  function supported() { return !!SR; }
  function start(onUpdate) {
    if (!SR) return false;
    finalText = ''; cb = onUpdate; on = true;
    rec = new SR(); rec.lang = 'en-GB'; rec.continuous = true; rec.interimResults = true;
    rec.onresult = e => {
      let interim = '';
      for (let i = e.resultIndex; i < e.results.length; i++) {
        if (e.results[i].isFinal) finalText += e.results[i][0].transcript.trim() + ' ';
        else interim += e.results[i][0].transcript;
      }
      cb && cb(finalText + interim);
    };
    rec.onend = () => { if (on) { try { rec.start(); } catch (e) { } } };
    rec.onerror = e => { if (e.error === 'not-allowed' || e.error === 'service-not-allowed') on = false; };
    try { rec.start(); } catch (e) { return false; }
    return true;
  }
  function stop() { on = false; if (rec) { try { rec.stop(); } catch (e) { } } return finalText.trim(); }
  return { supported, start, stop };
})();
