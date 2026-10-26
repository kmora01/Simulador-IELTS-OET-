/* Motor de examen para Listening y Reading (preguntas con corrección automática). */
const Runner = (() => {
  const { esc, $, $$, fmt } = UI;
  const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let S = null; // estado de la sesión en curso

  function questionsOf(test) {
    const list = [];
    test.parts.forEach((p, pi) => p.groups.forEach((g, gi) => {
      if (g.type === 'multi') g.nums.forEach(n => list.push({ n, pi, gi, key: 'm' + g.nums[0], tag: g.tag || 'multi-select' }));
      else g.items.forEach(it => list.push({ n: it.n, pi, gi, key: String(it.n), tag: it.tag || g.tag || defaultTag(g) }));
    }));
    return list.sort((a, b) => a.n - b.n);
  }
  function defaultTag(g) { return { gap: 'note-completion', mcq: 'mcq', match: 'matching', tfng: 'tfng', ynng: 'ynng' }[g.type] || g.type; }
  function partRange(test, pi) {
    const ns = questionsOf(test).filter(q => q.pi === pi).map(q => q.n);
    return [Math.min(...ns), Math.max(...ns)];
  }

  function start(test, opts) {
    opts = opts || {};
    const st = Store.state;
    const mode = opts.mode || st.settings.mode;
    const stages = test.stages || [{ duration: test.duration || 3600, parts: test.parts.map((_, i) => i) }];
    const resume = test.skill === 'reading' && st.active && st.active.testId === test.id ? st.active : null;
    S = {
      test, mode, stages, qs: questionsOf(test),
      ans: resume ? resume.ans : {}, flags: resume ? resume.flags : {},
      stage: resume ? resume.stage : 0, part: resume ? resume.part : 0,
      endAt: resume ? resume.endAt : null, startedAt: resume ? resume.startedAt : Date.now(),
      timer: null, audioPart: -1, audioDone: false, reviewEnd: null, finished: false
    };
    document.body.classList.add('in-exam');
    document.documentElement.style.setProperty('--exam-size', (st.settings.fontSize || 16) + 'px');
    render();
    if (test.skill === 'reading') {
      if (!S.endAt) S.endAt = Date.now() + stages[S.stage].duration * 1000;
      if (mode === 'practice') S.endAt = null;
      startTimer();
      persist();
    } else {
      listeningIntro();
    }
  }

  function persist() {
    if (!S || S.test.skill !== 'reading' || S.finished) return;
    Store.setActive({ testId: S.test.id, ans: S.ans, flags: S.flags, stage: S.stage, part: S.part, endAt: S.endAt, startedAt: S.startedAt });
  }

  function lockedPart(pi) { return S.stages.some((st, si) => si < S.stage && st.parts.includes(pi)); }
  function stageOfPart(pi) { return S.stages.findIndex(st => st.parts.includes(pi)); }

  /* ---------- Render ---------- */
  function render() {
    const t = S.test, p = t.parts[S.part];
    const isReading = t.skill === 'reading';
    const name = Store.state.profile.name || 'Candidato';
    const app = $('#app');
    app.innerHTML = `
    <div class="exam">
      <div class="exam-bar">
        <div><div class="title">${esc(t.title)}</div><div class="cand">${esc(name)} · ${S.mode === 'exam' ? 'Modo examen' : 'Modo práctica'}</div></div>
        <div class="spacer"></div>
        <span class="timer" id="timer">${S.timerText || '--:--'}</span>
        <button class="icon-btn" id="fontDown" title="Reducir texto">A−</button>
        <button class="icon-btn" id="fontUp" title="Aumentar texto">A+</button>
        <button class="icon-btn" id="finishBtn">Entregar</button>
        <button class="icon-btn" id="exitBtn" title="Salir">✕</button>
      </div>
      <div class="exam-sub">
        <b>${esc(p.title)}</b><span>${esc(p.intro || '')}</span>
        ${isReading ? `<span class="mobile-switch seg" style="margin-left:auto"><button data-v="p">Texto</button><button data-v="q">Preguntas</button></span>` : ''}
      </div>
      <div class="exam-body ${isReading ? 'split show-q' : ''}" id="examBody">
        ${isReading ? `<div class="pane passage" id="passagePane"><div class="pane-inner passage">${p.passage}</div></div>` : ''}
        <div class="pane questions" id="qPane"><div class="pane-inner">
          ${!isReading ? audioPanel() : ''}
          ${lockedPart(S.part) ? `<div class="alert warn">Esta parte está cerrada: su tiempo terminó.</div>` : ''}
          ${p.groups.map((g, gi) => renderGroup(g, gi)).join('')}
        </div></div>
      </div>
      <div class="exam-nav">
        <div class="parts">${t.parts.map((pp, pi) => navPart(pp, pi)).join('')}</div>
        <div class="arrows"><button id="prevQ" aria-label="Anterior">‹</button><button id="nextQ" aria-label="Siguiente">›</button></div>
      </div>
    </div>`;
    bind();
    restoreAnswers();
    refreshNav();
    if (!isReading) updateAudioPanel();
    if (isReading) { const sw = $('.mobile-switch'); if (sw) setPane(window.innerWidth <= 900 ? (S.paneView || 'p') : 'q'); }
  }

  function navPart(p, pi) {
    const qs = S.qs.filter(q => q.pi === pi);
    const uniq = [...new Set(qs.map(q => q.n))];
    return `<div class="part-nav ${pi === S.part ? 'current' : ''}" data-pi="${pi}">
      <button class="plabel" data-part="${pi}">${esc(p.label || p.title)} <span class="cnt" data-cnt="${pi}"></span></button>
      ${uniq.map(n => `<button class="qbtn ${lockedPart(pi) ? 'locked' : ''}" data-q="${n}">${n}</button>`).join('')}
    </div>`;
  }

  function flagBtn(n) { return `<button class="flag-btn" data-flag="${n}" title="Marcar para revisar">⚑</button>`; }

  function renderGroup(g, gi) {
    const dis = lockedPart(S.part) ? 'disabled' : '';
    let h = `<div class="q-group" data-gi="${gi}"><div class="instr">${g.title ? `<b class="gtitle">${esc(g.title)}</b>` : ''}${g.instructions}</div>`;
    if (g.svg) h += `<div class="map-wrap">${g.svg}</div>`;
    if (g.type !== 'gap' && g.content) h += `<div class="q-content" style="margin-bottom:12px">${g.content.replace(/\[\[(\d+)\]\]/g, '<b>($1)</b> ________')}</div>`;
    if (g.type === 'gap') {
      h += `<div class="q-content">${g.content.replace(/\[\[(\d+)\]\]/g, (_, n) => `<input class="gap" id="q${n}" data-n="${n}" placeholder="${n}" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" ${dis} aria-label="Pregunta ${n}">`)}</div>`;
    } else if (g.type === 'mcq') {
      h += g.items.map(it => `<div class="q-item" id="q${it.n}"><div class="q-text"><span class="qnum">${it.n}</span><div>${it.q}</div>${flagBtn(it.n)}</div>
        <div class="opts">${it.opts.map((o, i) => `<label class="opt"><input type="radio" name="r${it.n}" value="${LETTERS[i]}" data-n="${it.n}" ${dis}><span class="letter">${LETTERS[i]}</span><span>${o}</span></label>`).join('')}</div></div>`).join('');
    } else if (g.type === 'multi') {
      h += `<div class="q-item" id="q${g.nums[0]}"><div class="q-text"><span class="qnum">${g.nums.join('–')}</span><div>${g.q}</div>${flagBtn(g.nums[0])}</div>
        <div class="opts">${g.opts.map((o, i) => `<label class="opt"><input type="checkbox" value="${LETTERS[i]}" data-m="${g.nums[0]}" data-max="${g.nums.length}" ${dis}><span class="letter">${LETTERS[i]}</span><span>${o}</span></label>`).join('')}</div></div>`;
      g.nums.slice(1).forEach(n => { h += `<span id="q${n}"></span>`; });
    } else if (g.type === 'match' || g.type === 'tfng' || g.type === 'ynng') {
      const options = g.type === 'tfng' ? ['TRUE', 'FALSE', 'NOT GIVEN'].map(k => ({ k, t: '' }))
        : g.type === 'ynng' ? ['YES', 'NO', 'NOT GIVEN'].map(k => ({ k, t: '' })) : g.options;
      if (g.type === 'match' && g.showOptions !== false) {
        h += `<div class="option-box">${g.optionsTitle ? `<b>${esc(g.optionsTitle)}</b>` : ''}${g.options.map(o => `<div><b>${esc(o.k)}</b>&nbsp;&nbsp;${o.t}</div>`).join('')}</div>`;
      }
      if (g.type !== 'match') {
        h += g.items.map(it => `<div class="q-item" id="q${it.n}"><div class="q-text"><span class="qnum">${it.n}</span><div>${it.q}</div>${flagBtn(it.n)}</div>
          <div class="opts">${options.map(o => `<label class="opt"><input type="radio" name="r${it.n}" value="${o.k}" data-n="${it.n}" ${dis}><span>${o.k}</span></label>`).join('')}</div></div>`).join('');
      } else {
        h += g.items.map(it => `<div class="match-row" id="q${it.n}"><div class="q-text" style="margin:0"><span class="qnum">${it.n}</span><div>${it.q}</div></div>
          <select data-n="${it.n}" ${dis} aria-label="Pregunta ${it.n}"><option value="">—</option>${options.map(o => `<option value="${esc(o.k)}">${esc(o.k)}${g.compact ? ' ' + esc(stripTags(o.t)).slice(0, 40) : ''}</option>`).join('')}</select></div>`).join('');
      }
    }
    return h + '</div>';
  }
  function stripTags(s) { return String(s).replace(/<[^>]+>/g, ''); }

  function restoreAnswers() {
    $$('[data-n]', $('#qPane')).forEach(el => {
      const v = S.ans[el.dataset.n];
      if (v == null) return;
      if (el.type === 'radio') { el.checked = el.value === v; el.closest('.opt').classList.toggle('sel', el.checked); }
      else el.value = v;
    });
    $$('[data-m]').forEach(el => {
      const v = S.ans['m' + el.dataset.m] || [];
      el.checked = v.includes(el.value); el.closest('.opt').classList.toggle('sel', el.checked);
    });
    $$('[data-flag]').forEach(b => b.classList.toggle('on', !!S.flags[b.dataset.flag]));
  }

  function answered(q) {
    if (q.key[0] === 'm') {
      const g = S.test.parts[q.pi].groups[q.gi], arr = S.ans[q.key] || [];
      return g.nums.indexOf(q.n) < arr.length;
    }
    const v = S.ans[q.key]; return v != null && String(v).trim() !== '';
  }
  function refreshNav() {
    $$('.qbtn').forEach(b => {
      const n = +b.dataset.q, q = S.qs.find(x => x.n === n);
      b.classList.toggle('done', answered(q));
      b.classList.toggle('flag', !!S.flags[n] || !!(q.key[0] === 'm' && S.flags[q.key.slice(1)]));
    });
    S.test.parts.forEach((p, pi) => {
      const qs = S.qs.filter(q => q.pi === pi), d = qs.filter(answered).length;
      const c = $(`[data-cnt="${pi}"]`); if (c) c.textContent = `${d}/${qs.length}`;
    });
  }

  function setPane(v) {
    S.paneView = v;
    const body = $('#examBody');
    body.classList.toggle('show-q', v === 'q'); body.classList.toggle('show-p', v === 'p');
    $$('.mobile-switch button').forEach(b => b.classList.toggle('active', b.dataset.v === v));
  }

  function goPart(pi, n) {
    if (pi !== S.part) { S.part = pi; persist(); render(); }
    if (n != null) {
      const el = document.getElementById('q' + n);
      if (el) {
        if ($('.mobile-switch') && window.innerWidth <= 900) setPane('q');
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        const inp = el.matches('input,select') ? el : el.querySelector('input,select');
        if (inp && !inp.disabled && inp.type !== 'radio' && inp.type !== 'checkbox') setTimeout(() => inp.focus({ preventScroll: true }), 250);
      }
    }
    S.focusN = n;
  }

  let saveT = null;
  function bind() {
    const pane = $('#qPane');
    pane.addEventListener('input', e => {
      const el = e.target;
      if (el.dataset.n && el.type !== 'radio') S.ans[el.dataset.n] = el.value;
      clearTimeout(saveT); saveT = setTimeout(persist, 400);
      refreshNav();
    });
    pane.addEventListener('change', e => {
      const el = e.target;
      if (el.type === 'radio') {
        S.ans[el.dataset.n] = el.value;
        $$(`input[name="${el.name}"]`).forEach(r => r.closest('.opt').classList.toggle('sel', r.checked));
      } else if (el.type === 'checkbox') {
        const key = 'm' + el.dataset.m, max = +el.dataset.max;
        let arr = (S.ans[key] || []).filter(x => x !== el.value);
        if (el.checked) { if (arr.length >= max) { el.checked = false; UI.toast(`Elige solo ${max} opciones`); } else arr.push(el.value); }
        S.ans[key] = arr.sort();
        el.closest('.opt').classList.toggle('sel', el.checked);
      } else if (el.tagName === 'SELECT') S.ans[el.dataset.n] = el.value;
      persist(); refreshNav();
    });
    pane.addEventListener('click', e => {
      const f = e.target.closest('[data-flag]');
      if (f) { const n = f.dataset.flag; S.flags[n] = !S.flags[n]; f.classList.toggle('on', S.flags[n]); persist(); refreshNav(); }
      const a = e.target.closest('[data-audio]');
      if (a) audioAction(a.dataset.audio);
    });
    pane.addEventListener('focusin', e => { const n = e.target.dataset && (e.target.dataset.n || e.target.dataset.m); if (n) S.focusN = +n; });
    $$('.qbtn').forEach(b => b.onclick = () => {
      const n = +b.dataset.q, q = S.qs.find(x => x.n === n);
      goPart(q.pi, n);
    });
    $$('.plabel').forEach(b => b.onclick = () => goPart(+b.dataset.part, null));
    $('#prevQ').onclick = () => step(-1);
    $('#nextQ').onclick = () => step(1);
    $('#finishBtn').onclick = () => finishPrompt();
    $('#exitBtn').onclick = () => exitPrompt();
    $('#fontUp').onclick = () => font(1);
    $('#fontDown').onclick = () => font(-1);
    $$('.mobile-switch button').forEach(b => b.onclick = () => setPane(b.dataset.v));
    const pp = $('#passagePane');
    if (pp) bindHighlight(pp);
  }
  function step(d) {
    const ns = [...new Set(S.qs.map(q => q.n))];
    let i = ns.indexOf(S.focusN);
    if (i < 0) { const first = S.qs.find(q => q.pi === S.part); i = ns.indexOf(first.n) - (d > 0 ? 1 : -1); }
    const j = Math.max(0, Math.min(ns.length - 1, i + d));
    const q = S.qs.find(x => x.n === ns[j]);
    goPart(q.pi, q.n);
  }
  function font(d) {
    const st = Store.state.settings;
    st.fontSize = Math.max(13, Math.min(24, (st.fontSize || 16) + d)); Store.save();
    document.documentElement.style.setProperty('--exam-size', st.fontSize + 'px');
  }

  function bindHighlight(pp) {
    let tool = null;
    const hide = () => { if (tool) { tool.remove(); tool = null; } };
    const show = () => {
      const sel = window.getSelection();
      if (!sel || sel.isCollapsed || !pp.contains(sel.anchorNode)) { hide(); return; }
      const r = sel.getRangeAt(0).getBoundingClientRect();
      hide();
      tool = document.createElement('div'); tool.className = 'hl-tool';
      tool.innerHTML = '<button data-a="hl">🖍 Resaltar</button>';
      tool.style.top = Math.max(8, r.top - 44) + 'px'; tool.style.left = Math.max(8, Math.min(window.innerWidth - 130, r.left)) + 'px';
      tool.onmousedown = e => e.preventDefault();
      tool.onclick = () => {
        try { const range = sel.getRangeAt(0); const m = document.createElement('mark'); m.className = 'hl'; range.surroundContents(m); }
        catch (e) { UI.toast('Selecciona texto dentro de un mismo párrafo'); }
        sel.removeAllRanges(); hide();
      };
      document.body.appendChild(tool);
    };
    pp.addEventListener('mouseup', () => setTimeout(show, 10));
    pp.addEventListener('touchend', () => setTimeout(show, 350));
    pp.addEventListener('click', e => {
      const m = e.target.closest('mark.hl');
      if (m && window.getSelection().isCollapsed) { m.replaceWith(...m.childNodes); }
    });
    pp.addEventListener('scroll', hide);
  }

  /* ---------- Timer ---------- */
  function startTimer() {
    if (S.timer) S.timer.stop();
    const el = () => $('#timer');
    if (!S.endAt) { // práctica: cronómetro ascendente
      const iv = setInterval(() => { const t = el(); if (t) t.textContent = S.timerText = '⏱ ' + fmt((Date.now() - S.startedAt) / 1000); }, 1000);
      S.timer = { stop: () => clearInterval(iv) };
      return;
    }
    const label = S.stages.length > 1 ? (S.stages[S.stage].label + ' · ') : '';
    S.timer = UI.countdown(S.endAt, left => {
      const t = el(); if (!t) return;
      t.textContent = S.timerText = label + fmt(left);
      t.classList.toggle('low', left < 300);
    }, () => stageTimeUp());
  }
  async function stageTimeUp() {
    if (S.finished) return;
    if (S.stage < S.stages.length - 1) {
      await UI.modal(`<h3>Tiempo terminado: ${esc(S.stages[S.stage].label)}</h3><p>Esta parte se cierra y ya no podrás modificarla. Comienza ${esc(S.stages[S.stage + 1].label)} (${Math.round(S.stages[S.stage + 1].duration / 60)} minutos).</p>`, [{ label: 'Continuar' }]);
      nextStage();
    } else {
      await UI.modal('<h3>Se acabó el tiempo</h3><p>Tus respuestas se han entregado automáticamente.</p>', [{ label: 'Ver resultado' }]);
      submit();
    }
  }
  function nextStage() {
    S.stage++;
    S.endAt = Date.now() + S.stages[S.stage].duration * 1000;
    S.part = S.stages[S.stage].parts[0];
    persist(); render(); startTimer();
  }

  /* ---------- Listening ---------- */
  function audioPanel() {
    const p = S.test.parts[S.part];
    const practice = S.mode === 'practice';
    return `<div class="audio-panel" id="audioPanel">
      <div class="eq"><i></i><i></i><i></i><i></i></div>
      <div class="audio-status"><div id="audioStatus">Audio</div><div class="audio-progress"><i id="audioBar"></i></div></div>
      ${practice ? `<div class="btn-row"><button class="btn sm" data-audio="play">▶ Reproducir ${esc(p.label)}</button><button class="btn sm ghost" data-audio="pause">⏸</button><button class="btn sm ghost" data-audio="stop">⏹</button></div>` : ''}
      ${!TTS.supported() ? `<div class="alert warn" style="width:100%;margin:0">Tu navegador no permite generar el audio. Usa Chrome, Edge o Safari actualizados. <button class="btn sm ghost" data-audio="transcript">Ver transcripción</button></div>` : ''}
    </div><div id="transcriptBox"></div>`;
  }
  function updateAudioPanel(frac) {
    const st = $('#audioStatus'), bar = $('#audioBar'), panel = $('#audioPanel');
    if (!st) return;
    const playing = TTS.running && !TTS.paused;
    panel.classList.toggle('playing', playing);
    if (S.audioPart >= 0 && TTS.running) st.textContent = `🔊 Reproduciendo: ${S.test.parts[S.audioPart].title}` + (S.audioPart !== S.part ? ' (estás viendo otra parte)' : '');
    else if (S.reviewEnd) st.textContent = 'Audio terminado. Tiempo para revisar tus respuestas.';
    else if (S.mode === 'practice') st.textContent = 'Modo práctica: reproduce cada parte cuando quieras.';
    else st.textContent = 'Esperando audio…';
    if (bar && frac != null) bar.style.width = Math.round(frac * 100) + '%';
  }
  function audioAction(a) {
    if (a === 'play') { if (TTS.paused && S.audioPart === S.part) TTS.resume(); else playPart(S.part, false); }
    if (a === 'pause') TTS.pause();
    if (a === 'stop') { TTS.stop(false); S.audioPart = -1; }
    if (a === 'transcript') { $('#transcriptBox').innerHTML = transcriptHtml(S.test.parts[S.part]); }
    setTimeout(updateAudioPanel, 100);
  }
  function transcriptHtml(p) {
    return `<div class="transcript">${p.audio.filter(s => s.t).map(s => `<p><span class="spk">${esc((p.speakers[s.s] || {}).name || s.s)}:</span> ${esc(s.t)}</p>`).join('')}</div>`;
  }
  function listeningIntro() {
    const practice = S.mode === 'practice';
    const t = $('#timer');
    if (practice) {
      S.startedAt = Date.now(); S.endAt = null; startTimer();
      return;
    }
    if (t) t.textContent = 'Audio';
    UI.modal(`<h3>${esc(S.test.title)}</h3>
      <p>Escucharás ${S.test.parts.length} grabaciones <b>una sola vez</b>, como en el examen real. Hay pausas para leer las preguntas antes de cada parte.</p>
      <ul><li>Usa auriculares y sube el volumen.</li><li>Puedes escribir mientras escuchas; la vista cambia sola a la parte que suena.</li>
      <li>Al terminar el audio tendrás ${Math.round((S.test.reviewTime || 120) / 60)} minuto(s) para revisar.</li></ul>`, [{ label: '▶ Comenzar audio' }])
      .then(() => { S.startedAt = Date.now(); playPart(0, true); });
  }
  function playPart(pi, chain) {
    const p = S.test.parts[pi];
    S.audioPart = pi;
    if (chain && pi !== S.part) goPart(pi, null);
    const tEl = $('#timer');
    if (chain) S.timerText = '🔊 ' + p.label;
    if (tEl && chain) tEl.textContent = S.timerText;
    TTS.play(p.audio, p.speakers, {
      rate: Store.state.settings.rate,
      onProgress: f => updateAudioPanel(f),
      onEnd: ok => {
        S.audioPart = -1;
        if (!chain || S.finished) { updateAudioPanel(1); return; }
        if (pi < S.test.parts.length - 1) playPart(pi + 1, true);
        else startReview();
      }
    });
    updateAudioPanel(0);
  }
  function startReview() {
    S.reviewEnd = Date.now() + (S.test.reviewTime || 120) * 1000;
    updateAudioPanel(1);
    S.timer = UI.countdown(S.reviewEnd, left => { const t = $('#timer'); if (t) { t.textContent = S.timerText = 'Revisión ' + fmt(left); t.classList.toggle('low', left < 30); } },
      async () => { if (S.finished) return; await UI.modal('<h3>Tiempo de revisión terminado</h3><p>Tus respuestas se han entregado.</p>', [{ label: 'Ver resultado' }]); submit(); });
  }

  /* ---------- Entrega ---------- */
  async function finishPrompt() {
    const total = S.qs.length, done = S.qs.filter(answered).length;
    const flagged = Object.keys(S.flags).filter(k => S.flags[k]).length;
    let extra = '';
    if (S.stage < S.stages.length - 1) {
      const ok = await UI.confirm({ title: `Terminar ${S.stages[S.stage].label}`, html: `Pasarás a ${esc(S.stages[S.stage + 1].label)}. No podrás volver a modificar esta parte.` }, 'Continuar', 'Seguir aquí');
      if (ok) nextStage();
      return;
    }
    const ok = await UI.confirm({ title: '¿Entregar el examen?', html: `Has respondido <b>${done} de ${total}</b> preguntas.${flagged ? ` Tienes ${flagged} marcada(s) para revisar.` : ''}${extra}` }, 'Entregar', 'Volver');
    if (ok) submit();
  }
  async function exitPrompt() {
    const reading = S.test.skill === 'reading';
    const ok = await UI.confirm({ title: 'Salir del examen', html: reading ? 'Tu progreso queda guardado y podrás continuar este intento más tarde (el tiempo sigue corriendo en modo examen).' : 'Se detendrá el audio y este intento no se guardará.' }, 'Salir', 'Cancelar');
    if (!ok) return;
    cleanup();
    if (!reading) Store.clearActive();
    location.hash = '#/' + S.test.exam;
  }
  function cleanup() {
    if (S && S.timer) S.timer.stop();
    TTS.stop(false);
    document.body.classList.remove('in-exam');
    $$('.hl-tool').forEach(x => x.remove());
  }

  function grade() {
    const t = S.test, details = [];
    t.parts.forEach((p, pi) => p.groups.forEach(g => {
      if (g.type === 'multi') {
        const chosen = S.ans['m' + g.nums[0]] || [];
        const right = chosen.filter(c => g.a.includes(c)).length;
        g.nums.forEach((n, i) => details.push({ n, part: pi, tag: g.tag || 'multi-select', given: chosen.join(', '), answer: g.a.join(', '), ok: i < right }));
      } else g.items.forEach(it => {
        const given = S.ans[it.n] || '';
        const ok = g.type === 'gap' ? Scoring.checkGap(given, it.a, g.limit) : String(given).toUpperCase() === String(it.a).toUpperCase();
        details.push({ n: it.n, part: pi, tag: it.tag || g.tag || defaultTag(g), given, answer: Array.isArray(it.a) ? it.a[0] : it.a, alts: Array.isArray(it.a) ? it.a.slice(1) : [], ok });
      });
    }));
    details.sort((a, b) => a.n - b.n);
    const raw = details.filter(d => d.ok).length, max = details.length;
    let score, grade = null;
    if (t.exam === 'ielts') score = Scoring.ieltsBand(raw, t.skill === 'listening' ? 'listening' : 'reading-' + (t.variant || 'academic'), max);
    else { score = Scoring.oetFromRaw(raw, max); grade = Scoring.oetGrade(score); }
    return { details, raw, max, score, grade };
  }
  function submit() {
    if (S.finished) return;
    S.finished = true;
    const r = grade();
    cleanup();
    if (S.test.skill === 'reading') Store.clearActive();
    const id = Store.addAttempt({
      exam: S.test.exam, skill: S.test.skill, variant: S.test.variant || null, testId: S.test.id, title: S.test.title,
      mode: S.mode, raw: r.raw, max: r.max, score: r.score, grade: r.grade, details: r.details,
      elapsed: Math.round((Date.now() - S.startedAt) / 1000)
    });
    location.hash = '#/resultado/' + id;
  }

  return { start, cleanup, transcriptHtml, questionsOf };
})();
