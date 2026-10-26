/* Speaking: simulación del examen (IELTS y OET), práctica rápida, shadowing y criterios. */
const Speaking = (() => {
  const { esc, $, $$, fmt } = UI;
  const audioUrls = {}; // grabaciones de la sesión actual (no se guardan al cerrar)

  const CRITERIA = {
    ielts: [
      { key: 'fc', label: 'Fluency & Coherence', max: 9, step: 1, desc: { 5: 'Pausas y repeticiones frecuentes; conectores limitados.', 6: 'Habla con extensión pero con alguna pérdida de coherencia.', 7: 'Habla con extensión sin esfuerzo notable; conectores flexibles.', 8: 'Fluido; dudas ocasionales para buscar ideas, no palabras.', 9: 'Fluido y totalmente coherente.' } },
      { key: 'lr', label: 'Lexical Resource', max: 9, step: 1, desc: { 5: 'Vocabulario limitado a temas familiares.', 6: 'Vocabulario suficiente; parafrasea con éxito.', 7: 'Vocabulario flexible, algunas expresiones idiomáticas.', 8: 'Amplio y preciso, idiomático con naturalidad.', 9: 'Total flexibilidad y precisión.' } },
      { key: 'gra', label: 'Grammatical Range & Accuracy', max: 9, step: 1, desc: { 5: 'Estructuras básicas con errores frecuentes.', 6: 'Mezcla de estructuras simples y complejas con errores.', 7: 'Estructuras complejas con frecuencia; errores ocasionales.', 8: 'Amplia variedad; mayoría de frases sin errores.', 9: 'Estructuras naturales y precisas siempre.' } },
      { key: 'p', label: 'Pronunciation', max: 9, step: 1, desc: { 5: 'Se entiende con esfuerzo; errores de sonidos.', 6: 'Generalmente comprensible; control irregular de entonación.', 7: 'Fácil de entender; buen uso de acento y entonación.', 8: 'Fácil de entender en todo momento; acento L1 mínimo.', 9: 'Pronunciación precisa y natural.' } }
    ],
    oet: [
      { key: 'intel', label: 'Intelligibility', max: 6, step: 1, group: 'Lingüístico', desc: { 2: 'Difícil de entender.', 4: 'Comprensible con algo de esfuerzo del oyente.', 6: 'Fácil de entender; acento no interfiere.' } },
      { key: 'flu', label: 'Fluency', max: 6, step: 1, group: 'Lingüístico', desc: { 2: 'Pausas largas y habla fragmentada.', 4: 'Ritmo aceptable con dudas.', 6: 'Ritmo natural y continuo.' } },
      { key: 'appr', label: 'Appropriateness of Language', max: 6, step: 1, group: 'Lingüístico', desc: { 2: 'Jerga médica o tono inadecuado para el paciente.', 4: 'Mayormente adecuado; alguna jerga sin explicar.', 6: 'Lenguaje claro, empático y adaptado al paciente.' } },
      { key: 'res', label: 'Resources of Grammar & Expression', max: 6, step: 1, group: 'Lingüístico', desc: { 2: 'Rango muy limitado.', 4: 'Rango suficiente con errores.', 6: 'Rango amplio y preciso.' } },
      { key: 'rel', label: 'Relationship building', max: 3, step: 1, group: 'Comunicación clínica', desc: { 0: 'No establece relación.', 1: 'Saludo básico; poca empatía.', 2: 'Respetuoso y empático en general.', 3: 'Relación sólida: saludo, presentación, empatía constante.' } },
      { key: 'persp', label: "Understanding the patient's perspective", max: 3, step: 1, group: 'Comunicación clínica', desc: { 0: 'Ignora preocupaciones.', 1: 'Las detecta pero no responde.', 2: 'Explora y responde a algunas.', 3: 'Explora ideas, preocupaciones y expectativas y las incorpora.' } },
      { key: 'struct', label: 'Providing structure', max: 3, step: 1, group: 'Comunicación clínica', desc: { 0: 'Sin estructura.', 1: 'Estructura poco clara.', 2: 'Secuencia lógica con algunas señales.', 3: 'Señaliza transiciones y organiza toda la conversación.' } },
      { key: 'gath', label: 'Information gathering', max: 3, step: 1, group: 'Comunicación clínica', desc: { 0: 'No hace preguntas útiles.', 1: 'Preguntas cerradas casi siempre.', 2: 'Combina preguntas abiertas y cerradas.', 3: 'Preguntas abiertas, escucha activa y resume.' } },
      { key: 'give', label: 'Information giving', max: 3, step: 1, group: 'Comunicación clínica', desc: { 0: 'Información confusa.', 1: 'Información en bloques difíciles de seguir.', 2: 'Explica en partes; comprueba algo de comprensión.', 3: 'Explica en partes, comprueba comprensión y lo que el paciente ya sabe.' } }
    ]
  };

  function score(exam, c) {
    if (exam === 'ielts') return { score: Scoring.roundIelts((c.fc + c.lr + c.gra + c.p) / 4) };
    const total = Object.values(c).reduce((a, b) => a + b, 0);
    const s = Math.round(total / 39 * 500 / 10) * 10;
    return { score: s, total, grade: Scoring.oetGrade(s) };
  }

  const FILLERS = ['um', 'uh', 'er', 'erm', 'ah', 'like', 'you know', 'i mean', 'sort of', 'kind of', 'basically', 'actually'];
  function metrics(text, seconds) {
    const t = (text || '').toLowerCase();
    const words = t.split(/\s+/).filter(w => /[a-z]/.test(w));
    const fillers = FILLERS.reduce((n, f) => n + (t.match(new RegExp('\\b' + f + '\\b', 'g')) || []).length, 0);
    const uniq = words.length ? Math.round(new Set(words.map(w => w.replace(/[^a-z']/g, ''))).size / words.length * 100) : 0;
    const linkers = ['because', 'so', 'however', 'although', 'for example', 'for instance', 'on the other hand', 'whereas', 'which', 'firstly', 'also', 'actually', 'in addition', 'what i mean is'].filter(l => new RegExp('\\b' + l + '\\b').test(t));
    return { words: words.length, wpm: seconds > 5 ? Math.round(words.length / (seconds / 60)) : 0, fillers, uniq, linkers: linkers.length };
  }
  function metricsHtml(m, seconds) {
    const tip = m.wpm && m.wpm < 90 ? 'Ritmo lento: intenta extender tus respuestas con ejemplos.' : m.wpm > 180 ? 'Ritmo muy rápido: haz pausas naturales para ser más claro.' : 'Ritmo natural (100–160 ppm es un buen rango).';
    return `<div class="metric-grid">
      <div class="metric"><div class="v">${m.words}</div><div class="l">Palabras</div></div>
      <div class="metric"><div class="v">${fmt(seconds)}</div><div class="l">Tiempo hablado</div></div>
      <div class="metric"><div class="v">${m.wpm || '—'}</div><div class="l">Palabras/min</div></div>
      <div class="metric"><div class="v">${m.fillers}</div><div class="l">Muletillas (um, like…)</div></div>
      <div class="metric"><div class="v">${m.uniq}%</div><div class="l">Variedad léxica</div></div>
      <div class="metric"><div class="v">${m.linkers}</div><div class="l">Conectores distintos</div></div>
    </div><p class="small muted" style="margin-top:8px">${tip} Las métricas dependen del reconocimiento de voz del navegador y son orientativas.</p>`;
  }

  /* ---------- Simulación de examen ---------- */
  let X = null;
  function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

  function buildIelts() {
    const D = DATA.speaking.ielts, steps = [];
    steps.push({ type: 'say', part: 0, text: "Good morning. My name is Alex and I'll be your examiner today. Can you tell me your full name, please?", time: 15 });
    steps.push({ type: 'say', part: 0, text: 'Thank you. And can you tell me where you are from?', time: 20 });
    const topics = shuffle(D.part1).slice(0, 2);
    steps.push({ type: 'info', part: 1, text: "In this first part, I'd like to ask you some questions about yourself." });
    topics.forEach(tp => {
      tp.qs.slice(0, 4).forEach((q, i) => steps.push({ type: 'say', part: 1, text: i === 0 ? `Let's talk about ${tp.topic.toLowerCase()}. ${q}` : q, time: 30 }));
    });
    const card = shuffle(D.part2)[0];
    steps.push({ type: 'card', part: 2, card, prep: 60, talk: 120 });
    steps.push({ type: 'say', part: 2, text: card.followUp || 'Thank you. Is this something you would recommend to other people?', time: 20 });
    steps.push({ type: 'info', part: 3, text: `We've been talking about ${card.theme}. I'd like to discuss with you one or two more general questions related to this.` });
    card.part3.forEach(q => steps.push({ type: 'say', part: 3, text: q, time: 60 }));
    steps.push({ type: 'end', part: 3, text: 'Thank you. That is the end of the speaking test.' });
    return { exam: 'ielts', title: 'IELTS Speaking', steps, cardId: card.id };
  }
  function buildOet() {
    const all = DATA.speaking.oet, prof = Store.state.profile.profession;
    let pool = all.filter(r => r.profession === prof); if (pool.length < 2) pool = all;
    const rps = shuffle(pool).slice(0, 2);
    const steps = [{ type: 'say', part: 0, text: "Hello, I'm your interlocutor today. Before we start the role-plays, could you tell me a little about your professional background?", time: 45 },
    { type: 'say', part: 0, text: 'Thank you. And what made you choose your profession?', time: 45 }];
    rps.forEach((rp, i) => {
      steps.push({ type: 'roleprep', part: i + 1, rp, prep: 180 });
      steps.push({ type: 'roleplay', part: i + 1, rp, talk: 300 });
    });
    steps.push({ type: 'end', part: 2, text: 'Thank you. That is the end of the speaking test.' });
    return { exam: 'oet', title: 'OET Speaking — ' + (rps[0].professionLabel || ''), steps, rpIds: rps.map(r => r.id) };
  }

  function start(exam) {
    X = Object.assign(exam === 'ielts' ? buildIelts() : buildOet(), { i: -1, log: [], transcript: '', recOn: false, sttOn: false, timer: null, startedAt: Date.now(), stepStart: 0, mark: 0 });
    document.body.classList.add('in-exam');
    shell();
    const mic = Recorder.supported(), stt = STT.supported();
    UI.modal(`<h3>${esc(X.title)}</h3>
      <p>Simulación con examinador por voz. ${exam === 'ielts' ? 'Duración: 11–14 minutos en 3 partes.' : 'Calentamiento y 2 role-plays (3 min de preparación + 5 min cada uno).'}</p>
      <ul><li>${mic ? '✅ Se grabará tu voz para que puedas escucharte al final.' : '⚠️ Este navegador no permite grabar audio.'}</li>
      <li>${stt ? '✅ Transcripción automática activada (en inglés).' : '⚠️ Sin transcripción automática (usa Chrome o Edge para activarla).'}</li>
      <li>Permite el acceso al micrófono cuando el navegador lo pida.</li></ul>`, [{ label: 'Cancelar', value: false, cls: 'ghost' }, { label: '🎙️ Empezar', value: true }])
      .then(async ok => {
        if (!ok) { quit(); return; }
        if (mic) { try { await Recorder.start(); X.recOn = true; } catch (e) { UI.toast('No se pudo acceder al micrófono'); } }
        if (stt) X.sttOn = STT.start(t => { X.transcript = t; const lt = $('#liveT'); if (lt) lt.textContent = t.slice(X.mark) || '…'; });
        next();
      });
  }
  function shell() {
    $('#app').innerHTML = `<div class="exam">
      <div class="exam-bar"><div><div class="title">${esc(X.title)}</div><div class="cand">${esc(Store.state.profile.name || 'Candidato')}</div></div><div class="spacer"></div>
      <span class="timer" id="timer">--:--</span><button class="icon-btn" id="exitBtn">✕</button></div>
      <div class="exam-sub" id="sub"></div>
      <div class="exam-body"><div class="pane"><div class="pane-inner" id="stage"></div></div></div>
    </div>`;
    $('#exitBtn').onclick = async () => { if (await UI.confirm({ title: 'Salir', html: 'Se perderá esta simulación.' }, 'Salir')) quit(); };
  }
  function quit() { cleanup(); location.hash = '#/' + (X ? X.exam : ''); }
  function cleanup() { if (X && X.timer) X.timer.stop(); TTS.stop(false); STT.stop(); Recorder.stop(); document.body.classList.remove('in-exam'); }

  function closeStep() {
    if (X.i < 0) return;
    const s = X.steps[X.i];
    if (['say', 'card', 'roleplay'].includes(s.type)) {
      X.log.push({ part: s.part, q: s.text || (s.card && s.card.card) || (s.rp && s.rp.title), transcript: X.transcript.slice(X.mark).trim(), seconds: Math.round((Date.now() - X.stepStart) / 1000), type: s.type });
    }
  }
  function partName(p) { return X.exam === 'ielts' ? (p === 0 ? 'Introducción' : 'Part ' + p) : (p === 0 ? 'Calentamiento (no evaluado)' : 'Role-play ' + p); }

  function next() {
    if (X.timer) X.timer.stop();
    TTS.stop(false);
    closeStep();
    X.i++;
    const s = X.steps[X.i];
    if (!s) return finish();
    $('#sub').innerHTML = `<b>${partName(s.part)}</b><span class="muted">Paso ${X.i + 1} de ${X.steps.length}</span>`;
    const stage = $('#stage');
    const examiner = text => `<div class="examiner"><div class="avatar">🧑‍🏫</div><div class="bubble">${esc(text)}</div></div>`;
    const live = `<p class="small muted" style="margin:12px 0 4px">${X.recOn ? '<span class="rec-dot"></span>Grabando' : ''} ${X.sttOn ? '· Transcripción en vivo:' : ''}</p>${X.sttOn ? '<div class="live-transcript" id="liveT">…</div>' : ''}`;
    if (s.type === 'info' || s.type === 'end') {
      stage.innerHTML = examiner(s.text) + `<button class="btn" id="go">${s.type === 'end' ? 'Ver resultados' : 'Continuar'}</button>`;
      TTS.say(s.text, { g: 'm', speaker: 'E' });
      $('#go').onclick = next;
      return;
    }
    if (s.type === 'say') {
      stage.innerHTML = examiner(s.text) + `<div class="big-timer" id="bt">${fmt(s.time)}</div>${live}
        <div class="btn-row" style="margin-top:14px"><button class="btn ghost" id="rep">🔁 Repetir pregunta</button><button class="btn" id="go">Siguiente ›</button></div>
        <p class="small muted">Responde en voz alta. En el examen real el examinador te interrumpirá si te extiendes demasiado.</p>`;
      const begin = () => { X.mark = X.transcript.length; X.stepStart = Date.now(); runTimer(s.time, false); };
      TTS.say(s.text, { g: 'm', speaker: 'E', onEnd: begin });
      if (!TTS.supported()) begin();
      $('#rep').onclick = () => TTS.say(s.text, { g: 'm', speaker: 'E' });
      $('#go').onclick = next;
      return;
    }
    if (s.type === 'card') {
      const c = s.card;
      const intro = "Now, I'm going to give you a topic and I'd like you to talk about it for one to two minutes. Before you talk, you'll have one minute to think about what you are going to say. You can make some notes if you wish.";
      stage.innerHTML = examiner(intro) + `<div class="cue-card"><p><b>${esc(c.card)}</b></p><p>You should say:</p><ul>${c.bullets.map(b => `<li>${esc(b)}</li>`).join('')}</ul><p>${esc(c.close)}</p></div>
        <p class="small muted" style="margin-top:10px" id="phase">Preparación: 1 minuto</p><div class="big-timer" id="bt">01:00</div>
        <label class="field"><span>Notas (opcional)</span><textarea rows="3" id="notes"></textarea></label>
        <div id="talkArea"></div>
        <div class="btn-row"><button class="btn" id="go">Empezar a hablar</button></div>`;
      TTS.say(intro, { g: 'm', speaker: 'E' });
      let talking = false;
      const talk = () => {
        if (talking) return; talking = true; TTS.stop(false);
        $('#phase').textContent = 'Habla durante 1–2 minutos. El examinador te detendrá a los 2 minutos.';
        $('#talkArea').innerHTML = live;
        X.mark = X.transcript.length; X.stepStart = Date.now();
        $('#go').textContent = 'Terminé ›'; $('#go').onclick = next;
        TTS.say("All right? Remember you have one to two minutes for this. I'll tell you when the time is up. Can you start speaking now, please?", { g: 'm', speaker: 'E', onEnd: () => runTimer(s.talk, true) });
        if (!TTS.supported()) runTimer(s.talk, true);
      };
      X.timer = UI.countdown(Date.now() + s.prep * 1000, l => { const b = $('#bt'); if (b && !talking) b.textContent = fmt(l); }, talk);
      $('#go').onclick = talk;
      return;
    }
    if (s.type === 'roleprep') {
      stage.innerHTML = roleCard(s.rp) + `<p class="small muted" style="margin-top:10px">Tiempo de preparación (3 minutos). Lee la tarjeta y planifica: saludo, preguntas abiertas, explicación sencilla, comprobación de comprensión y cierre.</p>
        <div class="big-timer" id="bt">03:00</div><label class="field"><span>Notas</span><textarea rows="4"></textarea></label><button class="btn" id="go">Empezar role-play ›</button>`;
      X.timer = UI.countdown(Date.now() + s.prep * 1000, l => { const b = $('#bt'); if (b) b.textContent = fmt(l); }, next);
      $('#go').onclick = next;
      return;
    }
    if (s.type === 'roleplay') {
      const rp = s.rp; let li = 0;
      stage.innerHTML = roleCard(rp, true) + `<div class="big-timer" id="bt">05:00</div>
        <div class="examiner"><div class="avatar">🧑</div><div class="bubble" id="pt">${rp.patient.opener ? esc(rp.patient.opener) : 'Tú comienzas la conversación. Saluda y preséntate.'}</div></div>
        ${live}
        <div class="btn-row" style="margin-top:12px"><button class="btn secondary" id="pl">🗣️ Siguiente intervención del paciente</button><button class="btn" id="go">Terminar role-play ›</button></div>
        <p class="small muted">Habla como lo harías con el paciente real. Pulsa el botón cuando quieras que el paciente responda o plantee su siguiente preocupación.</p>`;
      X.mark = X.transcript.length; X.stepStart = Date.now();
      runTimer(s.talk, true);
      if (rp.patient.opener) TTS.say(rp.patient.opener, { g: rp.patient.g || 'f', speaker: 'P' });
      $('#pl').onclick = () => {
        const line = rp.patient.lines[li];
        if (!line) { $('#pt').textContent = '(El paciente no tiene más intervenciones: cierra la consulta y resume el plan.)'; return; }
        $('#pt').textContent = line; TTS.say(line, { g: rp.patient.g || 'f', speaker: 'P' }); li++;
      };
      $('#go').onclick = next;
    }
  }
  function roleCard(rp, compact) {
    return `<div class="role-card"><div class="rc-head"><span>CANDIDATE CARD — ${esc(rp.professionLabel)}</span><span>${esc(rp.setting)}</span></div>
      <div class="rc-body"><p><b>${esc(rp.title)}</b></p><p>${esc(rp.candidate.intro)}</p>${compact ? '<details open><summary>Tareas</summary>' : '<p><b>Task:</b></p>'}<ul>${rp.candidate.tasks.map(t => `<li>${esc(t)}</li>`).join('')}</ul>${compact ? '</details>' : ''}</div></div>`;
  }
  function runTimer(sec, auto) {
    if (X.timer) X.timer.stop();
    X.timer = UI.countdown(Date.now() + sec * 1000, l => { const b = $('#bt'); if (b) { b.textContent = fmt(l); b.style.color = l < 10 ? 'var(--danger)' : ''; } const t = $('#timer'); if (t) t.textContent = fmt((Date.now() - X.startedAt) / 1000); },
      () => { if (auto) { TTS.say('Thank you.', { g: 'm', speaker: 'E' }); setTimeout(next, 1200); } });
  }
  async function finish() {
    if (X.timer) X.timer.stop();
    TTS.stop(false);
    STT.stop();
    const url = X.recOn ? await Recorder.stop() : null;
    document.body.classList.remove('in-exam');
    const full = X.log.map(l => l.transcript).join(' ');
    const secs = X.log.reduce((a, l) => a + l.seconds, 0);
    const id = Store.addAttempt({
      exam: X.exam, skill: 'speaking', title: X.title, items: X.log, metrics: metrics(full, secs), seconds: secs,
      hasTranscript: X.sttOn, criteria: null, score: null, elapsed: Math.round((Date.now() - X.startedAt) / 1000)
    });
    if (url) audioUrls[id] = url;
    location.hash = '#/resultado/' + id;
  }

  /* ---------- Práctica rápida (pestaña Speaking y Vocabulario) ---------- */
  function practiceView(root) {
    const D = DATA.speaking;
    root.innerHTML = `
      <div class="card">
        <h3>🎯 Pregunta rápida con grabación</h3>
        <p class="muted small">Elige un tipo de pregunta, escúchala, responde en voz alta y revisa tu transcripción, métricas y grabación.</p>
        <div class="seg" id="qtype">
          <button data-t="p1" class="active">IELTS Part 1</button><button data-t="p2">IELTS Part 2</button><button data-t="p3">IELTS Part 3</button><button data-t="oet">OET frase clínica</button>
        </div>
        <div id="qbox" style="margin-top:14px"></div>
      </div>
      <div class="card">
        <h3>🔁 Shadowing y pronunciación</h3>
        <p class="muted small">Escucha la frase, repítela imitando ritmo y entonación, y comprueba qué palabras reconoció el navegador.</p>
        <div class="seg" id="shType"><button data-t="ielts" class="active">IELTS</button><button data-t="oet">OET (clínico)</button></div>
        <div id="shBox" style="margin-top:14px"></div>
      </div>
      <div class="card">
        <h3>📋 Frases útiles</h3>
        <div class="tabs" id="phTabs">${D.phrases.map((g, i) => `<button data-i="${i}" class="${i === 0 ? 'active' : ''}">${esc(g.group)}</button>`).join('')}</div>
        <div id="phBox"></div>
      </div>`;
    let qtype = 'p1';
    const qbox = $('#qbox');
    const newQ = () => {
      let q, time, card = null;
      if (qtype === 'p1') { const tp = shuffle(D.ielts.part1)[0]; q = shuffle(tp.qs)[0]; time = 30; }
      if (qtype === 'p2') { card = shuffle(D.ielts.part2)[0]; q = card.card; time = 120; }
      if (qtype === 'p3') { const c = shuffle(D.ielts.part2)[0]; q = shuffle(c.part3)[0]; time = 60; }
      if (qtype === 'oet') { const it = shuffle(D.oetPrompts)[0]; q = it.q; time = 45; card = { hint: it.hint }; }
      qbox.innerHTML = `${card && card.bullets ? `<div class="cue-card"><p><b>${esc(card.card)}</b></p><p>You should say:</p><ul>${card.bullets.map(b => `<li>${esc(b)}</li>`).join('')}</ul><p>${esc(card.close)}</p></div>` : `<div class="examiner"><div class="avatar">🧑‍🏫</div><div class="bubble">${esc(q)}</div></div>`}
        ${card && card.hint ? `<p class="small muted">💡 ${esc(card.hint)}</p>` : ''}
        <div class="big-timer" id="pqT">${fmt(time)}</div>
        <div class="btn-row"><button class="btn ghost" id="pqListen">🔊 Escuchar</button><button class="btn" id="pqRec">🎙️ Grabar respuesta</button><button class="btn ghost" id="pqNew">↻ Otra pregunta</button></div>
        <div id="pqOut" style="margin-top:12px"></div>`;
      $('#pqListen').onclick = () => TTS.say(card && card.bullets ? card.card + '. You should say: ' + card.bullets.join('; ') + '. ' + card.close : q, { g: 'm', speaker: 'E' });
      $('#pqNew').onclick = newQ;
      let recording = false, t0 = 0, cd = null, txt = '';
      const stop = async () => {
        if (!recording) return; recording = false; cd && cd.stop();
        const final = STT.stop(); const url = await Recorder.stop().catch(() => null);
        const secs = Math.round((Date.now() - t0) / 1000);
        const m = metrics(final || txt, secs);
        $('#pqRec').textContent = '🎙️ Grabar de nuevo';
        $('#pqOut').innerHTML = `${url ? `<audio controls src="${url}" style="width:100%;margin-bottom:10px"></audio>` : ''}
          ${STT.supported() ? `<div class="live-transcript">${esc(final || txt || '(no se reconoció voz)')}</div>` : ''}<div style="margin-top:10px">${metricsHtml(m, secs)}</div>`;
        Store.logActivity();
      };
      $('#pqRec').onclick = async () => {
        if (recording) return stop();
        TTS.stop(false);
        try { if (Recorder.supported()) await Recorder.start(); } catch (e) { UI.toast('Micrófono no disponible'); }
        recording = true; t0 = Date.now(); txt = '';
        $('#pqRec').textContent = '⏹ Detener';
        $('#pqOut').innerHTML = `<p class="small"><span class="rec-dot"></span>Grabando…</p><div class="live-transcript" id="pqLive">…</div>`;
        STT.start(t => { txt = t; const e = $('#pqLive'); if (e) e.textContent = t; });
        cd = UI.countdown(Date.now() + time * 1000, l => { const e = $('#pqT'); if (e) e.textContent = fmt(l); }, stop);
      };
    };
    $$('#qtype button').forEach(b => b.onclick = () => { $$('#qtype button').forEach(x => x.classList.toggle('active', x === b)); qtype = b.dataset.t; newQ(); });
    newQ();

    // Shadowing
    let shType = 'ielts', shI = 0;
    const shBox = $('#shBox');
    const shRender = () => {
      const list = D.shadowing[shType], s = list[shI % list.length];
      shBox.innerHTML = `<div class="examiner"><div class="avatar">🔊</div><div class="bubble" style="font-size:1.1rem">${esc(s)}</div></div>
        <div class="btn-row"><button class="btn ghost" id="shPlay">🔊 Escuchar</button><button class="btn ghost" id="shSlow">🐢 Lento</button><button class="btn" id="shRec">🎙️ Repetir</button><button class="btn ghost" id="shNext">Siguiente ›</button></div>
        <div id="shOut" style="margin-top:10px"></div>`;
      $('#shPlay').onclick = () => TTS.say(s, { g: 'f', speaker: 'S' });
      $('#shSlow').onclick = () => TTS.say(s, { g: 'f', speaker: 'S', rate: 0.7 });
      $('#shNext').onclick = () => { shI++; shRender(); };
      $('#shRec').onclick = () => {
        if (!STT.supported()) { UI.toast('El reconocimiento de voz requiere Chrome, Edge o Safari reciente'); return; }
        $('#shOut').innerHTML = '<p class="small"><span class="rec-dot"></span>Escuchando… repite la frase.</p>';
        let heard = '';
        STT.start(t => { heard = t; });
        setTimeout(() => {
          const final = (STT.stop() || heard).toLowerCase();
          const target = s.toLowerCase().replace(/[^a-z' ]/g, '').split(/\s+/).filter(Boolean);
          const got = new Set(final.replace(/[^a-z' ]/g, '').split(/\s+/));
          const hits = target.filter(w => got.has(w)).length;
          const pct = target.length ? Math.round(hits / target.length * 100) : 0;
          $('#shOut').innerHTML = `<p><b>${pct}%</b> de palabras reconocidas ${pct >= 85 ? '🎉' : pct >= 60 ? '👍' : '— repite más despacio'}</p>
            <p>${target.map(w => `<span class="${got.has(w) ? 'ok-t' : 'bad-t'}">${esc(w)}</span>`).join(' ')}</p><p class="small muted">Oído: “${esc(final || '—')}”</p>`;
          Store.logActivity();
        }, Math.max(4000, s.split(' ').length * 550));
      };
    };
    $$('#shType button').forEach(b => b.onclick = () => { $$('#shType button').forEach(x => x.classList.toggle('active', x === b)); shType = b.dataset.t; shI = 0; shRender(); });
    shRender();

    // Frases
    const phRender = i => {
      $('#phBox').innerHTML = `<div class="table-wrap"><table class="tbl">${D.phrases[i].items.map(p => `<tr><td style="width:44px"><button class="btn sm ghost" data-say="${esc(p.en)}">🔊</button></td><td><b>${esc(p.en)}</b><div class="small muted">${esc(p.es)}</div></td></tr>`).join('')}</table></div>`;
      $$('#phBox [data-say]').forEach(b => b.onclick = () => TTS.say(b.dataset.say, { g: 'f', speaker: 'S' }));
    };
    $$('#phTabs button').forEach(b => b.onclick = () => { $$('#phTabs button').forEach(x => x.classList.toggle('active', x === b)); phRender(+b.dataset.i); });
    phRender(0);
  }

  return { CRITERIA, score, metrics, metricsHtml, start, cleanup, practiceView, audioUrls };
})();
