/* Enrutador y páginas principales. */
const App = (() => {
  const { esc, $, $$ } = UI;
  const root = () => $('#app');

  function applyTheme() {
    const t = Store.state.settings.theme;
    if (t === 'light' || t === 'dark') document.documentElement.setAttribute('data-theme', t);
    else document.documentElement.removeAttribute('data-theme');
  }

  function tests(filter) { return Object.values(DATA.tests).filter(t => Object.keys(filter).every(k => t[k] === filter[k])); }
  function bestFor(testId) {
    const l = Store.attempts({ testId });
    return l.length ? l.reduce((m, a) => a.score > m.score ? a : m) : null;
  }
  function modeSeg() {
    const m = Store.state.settings.mode;
    return `<div class="seg" id="modeSeg"><button data-m="exam" class="${m === 'exam' ? 'active' : ''}">⏱ Modo examen</button><button data-m="practice" class="${m === 'practice' ? 'active' : ''}">🧘 Modo práctica</button></div>`;
  }
  function bindModeSeg() {
    $$('#modeSeg button').forEach(b => b.onclick = () => { Store.state.settings.mode = b.dataset.m; Store.save(); $$('#modeSeg button').forEach(x => x.classList.toggle('active', x === b)); UI.toast(b.dataset.m === 'exam' ? 'Modo examen: tiempo real y audio una sola vez' : 'Modo práctica: sin límite de tiempo y audio repetible'); });
  }
  function activeBanner() {
    const a = Store.state.active;
    if (!a) return '';
    const title = a.writing ? a.title : (DATA.tests[a.testId] || {}).title;
    if (!title) return '';
    return `<div class="alert warn" style="display:flex;gap:10px;align-items:center;flex-wrap:wrap"><span>⏸ Tienes un intento sin terminar: <b>${esc(title)}</b></span>
      <span style="margin-left:auto" class="btn-row"><button class="btn sm" id="resumeBtn">Continuar</button><button class="btn sm ghost" id="discardBtn">Descartar</button></span></div>`;
  }
  function bindActive() {
    const r = $('#resumeBtn'), d = $('#discardBtn');
    if (r) r.onclick = () => { const a = Store.state.active; if (a.writing) location.hash = a.exam === 'ielts' ? `#/writing/ielts/${a.variant}` : '#/writing/oet'; else location.hash = '#/test/' + a.testId; };
    if (d) d.onclick = () => { Store.clearActive(); route(); };
  }

  function testCard(t, extra) {
    const best = bestFor(t.id);
    const ico = { listening: '🎧', reading: '📖' }[t.skill];
    return `<div class="card test-card"><div style="display:flex;gap:12px;align-items:center"><div class="skill-ico">${ico}</div><div><b>${esc(t.title)}</b><div class="small muted">${esc(t.summary)}</div></div></div>
      <div class="meta">${t.meta.map(m => `<span class="pill">${esc(m)}</span>`).join('')}${extra || ''}</div>
      <div class="foot"><span class="small muted">${best ? 'Mejor: <b>' + (t.exam === 'ielts' ? best.score.toFixed(1) : best.score + ' (' + best.grade + ')') + '</b> · ' + best.raw + '/' + best.max : 'Sin intentos'}</span><a class="btn" href="#/test/${t.id}">Empezar</a></div></div>`;
  }
  function simpleCard(ico, title, sub, meta, href, last) {
    return `<div class="card test-card"><div style="display:flex;gap:12px;align-items:center"><div class="skill-ico">${ico}</div><div><b>${esc(title)}</b><div class="small muted">${esc(sub)}</div></div></div>
      <div class="meta">${meta.map(m => `<span class="pill">${esc(m)}</span>`).join('')}</div>
      <div class="foot"><span class="small muted">${last || ''}</span><a class="btn" href="${href}">Empezar</a></div></div>`;
  }
  function lastScore(exam, skill) {
    const a = Dashboard.latest(exam, skill);
    if (!a) return 'Sin intentos';
    return 'Último: <b>' + (exam === 'ielts' ? a.score.toFixed(1) : a.score + ' (' + (a.grade || Scoring.oetGrade(a.score)) + ')') + '</b>';
  }

  /* ---------- Páginas ---------- */
  function home() {
    const I = Dashboard.summary('ielts'), weak = Dashboard.weakAreas(3), vs = Vocab.stats();
    const nextStep = weak[0];
    root().innerHTML = `
      ${activeBanner()}
      <section class="hero">
        <h1>Prepárate para IELTS y OET como si fuera el día del examen</h1>
        <p>Secciones cronometradas con el mismo formato, tipos de pregunta y tiempos que el examen real, audio con voces en inglés, puntuación estimada (bandas IELTS y escala OET 0–500) y un panel que te dice qué entrenar.</p>
        <div class="btn-row" style="margin-top:14px"><a class="btn" href="#/ielts">🎓 Practicar IELTS</a><a class="btn" href="#/oet">🩺 Practicar OET</a><a class="btn secondary" href="#/practica">🎙️ Speaking y Vocabulario</a></div>
      </section>
      <div class="grid grid-4" style="margin-top:16px">
        <div class="card stat"><span class="lbl">Banda IELTS estimada</span><span class="val">${I.overall != null ? I.overall.toFixed(1) : '—'}</span><span class="small muted">${I.partial.length}/4 destrezas</span></div>
        <div class="card stat"><span class="lbl">Secciones completadas</span><span class="val">${Store.state.attempts.length}</span><span class="small muted">guardadas en este dispositivo</span></div>
        <div class="card stat"><span class="lbl">Racha</span><span class="val">🔥 ${Store.streak()}</span><span class="small muted">días seguidos</span></div>
        <div class="card stat"><span class="lbl">Vocabulario</span><span class="val">${vs.mastered}/${vs.total}</span><span class="small muted">palabras dominadas</span></div>
      </div>
      <div class="grid grid-2" style="margin-top:14px">
        <div class="card"><h3>👉 Tu siguiente paso</h3>${nextStep ? `<p>Tu punto más débil ahora es <b>${esc(nextStep.label)}</b> (${nextStep.exam.toUpperCase()} ${nextStep.skill}, ${nextStep.pct}%).</p><p class="small muted">${esc(nextStep.tip)}</p><a class="btn" href="#/${nextStep.exam}">Practicar ${nextStep.exam.toUpperCase()}</a>`
        : `<p>Empieza con una sección de diagnóstico. Recomendado: <b>Listening</b> (30 min) y <b>Reading</b> (60 min) para medir tu nivel de partida.</p><div class="btn-row"><a class="btn" href="#/ielts">Diagnóstico IELTS</a><a class="btn secondary" href="#/oet">Diagnóstico OET</a></div>`}</div>
        <div class="card"><h3>📚 ¿Cómo funciona cada examen?</h3><p class="small muted">Resumen de estructura, tiempos, tipos de pregunta, criterios y cómo se calcula la puntuación.</p><div class="btn-row"><a class="btn secondary" href="#/guia/ielts">Guía IELTS</a><a class="btn secondary" href="#/guia/oet">Guía OET</a></div></div>
      </div>
      <p class="footer">Contenido de práctica original. Este sitio no está afiliado a IELTS (British Council, IDP, Cambridge) ni a OET (Cambridge Boxhill Language Assessment). Las puntuaciones son estimaciones.</p>`;
    bindActive();
  }

  function ielts() {
    const P = Store.state.profile, v = P.ieltsVariant;
    const L = tests({ exam: 'ielts', skill: 'listening' }), R = tests({ exam: 'ielts', skill: 'reading' });
    root().innerHTML = `
      ${activeBanner()}
      <div class="section-title" style="margin-top:0"><div><h1 style="margin:0">🎓 IELTS</h1><p class="muted" style="margin:0">Listening y Speaking son iguales en ambos módulos; Reading y Writing cambian.</p></div>${modeSeg()}</div>
      <div class="card" style="display:flex;gap:12px;align-items:center;flex-wrap:wrap"><b>Módulo:</b>
        <div class="seg" id="varSeg"><button data-v="academic" class="${v === 'academic' ? 'active' : ''}">Academic</button><button data-v="general" class="${v === 'general' ? 'active' : ''}">General Training</button></div>
        <span class="small muted">Academic: universidad y registro profesional. General Training: migración y trabajo.</span><a href="#/guia/ielts" style="margin-left:auto">Guía del examen →</a></div>

      <div class="card" style="margin-top:14px;display:flex;gap:14px;align-items:center;flex-wrap:wrap;border-color:var(--primary)"><div style="flex:1;min-width:220px"><h3 style="margin:0">🏁 Simulacro completo</h3><p class="small muted" style="margin:0">Listening (30 min) → Reading (60 min) → Writing (60 min) → Speaking (11–14 min), en el orden del examen real. Al terminar cada sección pasas a la siguiente.</p></div><button class="btn" id="fullBtn">Empezar simulacro</button></div>

      <div class="section-title"><h2>🎧 Listening</h2><span class="small muted">4 partes · 40 preguntas · ~30 min</span></div>
      <div class="grid grid-2">${L.map(t => testCard(t)).join('')}</div>
      <div class="section-title"><h2>📖 Reading</h2><span class="small muted">3 secciones · 40 preguntas · 60 min</span></div>
      <div class="grid grid-2">${R.sort((a, b) => (a.variant === v ? -1 : 1) - (b.variant === v ? -1 : 1)).map(t => testCard(t, t.variant === v ? '<span class="pill blue">Tu módulo</span>' : '')).join('')}</div>
      <div class="section-title"><h2>✍️ Writing</h2><span class="small muted">2 tareas · 60 min</span></div>
      <div class="grid grid-2">
        ${simpleCard('✍️', 'Writing Academic', 'Task 1: describir un gráfico (150 palabras) · Task 2: ensayo (250 palabras)', ['60 min', DATA.writing.ielts.academicTask1.length + ' gráficos', DATA.writing.ielts.task2.length + ' ensayos'], '#/writing/ielts/academic', lastScore('ielts', 'writing'))}
        ${simpleCard('✉️', 'Writing General Training', 'Task 1: carta (150 palabras) · Task 2: ensayo (250 palabras)', ['60 min', DATA.writing.ielts.gtTask1.length + ' cartas', DATA.writing.ielts.task2.length + ' ensayos'], '#/writing/ielts/general', '')}
      </div>
      <div class="section-title"><h2>🗣️ Speaking</h2><span class="small muted">3 partes · 11–14 min</span></div>
      <div class="grid grid-2">
        ${simpleCard('🗣️', 'Speaking Test con examinador', 'Part 1 entrevista · Part 2 tarjeta (1 min preparación + 2 min) · Part 3 discusión', ['Grabación', 'Transcripción', 'Autoevaluación'], '#/speaking/ielts', lastScore('ielts', 'speaking'))}
        ${simpleCard('🎙️', 'Práctica libre de Speaking', 'Preguntas sueltas, shadowing y frases útiles', ['Sin presión'], '#/practica', '')}
      </div>`;
    bindModeSeg(); bindActive();
    $$('#varSeg button').forEach(b => b.onclick = () => { P.ieltsVariant = b.dataset.v; Store.save(); ielts(); });
    $('#fullBtn').onclick = () => startMock('ielts');
  }

  function oet() {
    const P = Store.state.profile;
    const L = tests({ exam: 'oet', skill: 'listening' }), R = tests({ exam: 'oet', skill: 'reading' });
    root().innerHTML = `
      ${activeBanner()}
      <div class="section-title" style="margin-top:0"><div><h1 style="margin:0">🩺 OET — Occupational English Test</h1><p class="muted" style="margin:0">Listening y Reading son comunes a las 12 profesiones; Writing y Speaking son específicos de tu profesión.</p></div>${modeSeg()}</div>
      <div class="card" style="display:flex;gap:12px;align-items:center;flex-wrap:wrap"><b>Profesión:</b>
        <select id="profSel" style="width:auto">${Dashboard.PROFESSIONS.map(([k, l]) => `<option value="${k}" ${k === P.profession ? 'selected' : ''}>${l}</option>`).join('')}</select>
        <span class="small muted">Material de Writing/Speaking disponible para Nursing y Medicine; otras profesiones usan casos generales.</span><a href="#/guia/oet" style="margin-left:auto">Guía del examen →</a></div>
      <div class="card" style="margin-top:14px;display:flex;gap:14px;align-items:center;flex-wrap:wrap;border-color:var(--accent)"><div style="flex:1;min-width:220px"><h3 style="margin:0">🏁 Simulacro completo</h3><p class="small muted" style="margin:0">Listening (~40 min) → Reading (60 min) → Writing (45 min) → Speaking (~20 min).</p></div><button class="btn accent" id="fullBtn">Empezar simulacro</button></div>
      <div class="section-title"><h2>🎧 Listening</h2><span class="small muted">Partes A, B, C · 42 preguntas · ~40 min</span></div>
      <div class="grid grid-2">${L.map(t => testCard(t)).join('')}</div>
      <div class="section-title"><h2>📖 Reading</h2><span class="small muted">Part A 15 min · Parts B y C 45 min · 42 preguntas</span></div>
      <div class="grid grid-2">${R.map(t => testCard(t)).join('')}</div>
      <div class="section-title"><h2>✍️ Writing</h2><span class="small muted">5 min lectura + 40 min escritura</span></div>
      <div class="grid grid-2">${simpleCard('✉️', 'Carta clínica (referral / discharge / transfer)', 'Lee las notas del caso y escribe una carta de 180–200 palabras', ['45 min', DATA.writing.oet.length + ' casos', '6 criterios OET'], '#/writing/oet', lastScore('oet', 'writing'))}</div>
      <div class="section-title"><h2>🗣️ Speaking</h2><span class="small muted">2 role-plays · 3 min preparación + 5 min cada uno</span></div>
      <div class="grid grid-2">
        ${simpleCard('🧑‍⚕️', 'Role-plays con paciente virtual', 'Tarjeta del candidato, preparación cronometrada y paciente que responde por voz', ['Grabación', 'Criterios clínicos'], '#/speaking/oet', lastScore('oet', 'speaking'))}
        ${simpleCard('📋', 'Frases clínicas y shadowing', 'Empatía, explicar sin jerga, comprobar comprensión', ['Práctica libre'], '#/practica', '')}
      </div>`;
    bindModeSeg(); bindActive();
    $('#profSel').onchange = e => { P.profession = e.target.value; Store.save(); UI.toast('Profesión guardada'); };
    $('#fullBtn').onclick = () => startMock('oet');
  }

  function practica() {
    const tab = sessionStorage.getItem('practicaTab') || 'speaking';
    root().innerHTML = `<h1>🎙️ Speaking y Vocabulario</h1>
      <div class="tabs" id="pTabs"><button data-t="speaking" class="${tab === 'speaking' ? 'active' : ''}">🗣️ Speaking</button><button data-t="vocab" class="${tab === 'vocab' ? 'active' : ''}">📚 Vocabulario</button></div>
      <div id="pBox"></div>`;
    const show = t => {
      try { sessionStorage.setItem('practicaTab', t); } catch (e) { }
      $$('#pTabs button').forEach(b => b.classList.toggle('active', b.dataset.t === t));
      TTS.stop(false);
      if (t === 'speaking') Speaking.practiceView($('#pBox')); else Vocab.view($('#pBox'));
    };
    $$('#pTabs button').forEach(b => b.onclick = () => show(b.dataset.t));
    show(tab);
  }

  function guide(exam) {
    root().innerHTML = `<div class="card guide">${DATA.guide[exam] || ''}</div><div class="btn-row" style="margin-top:14px"><a class="btn" href="#/${exam}">Practicar ${exam.toUpperCase()}</a></div>`;
  }

  /* ---------- Simulacro completo ---------- */
  function mockSteps(exam) {
    const v = Store.state.profile.ieltsVariant;
    const pick = (skill, variant) => {
      const list = tests(Object.assign({ exam, skill }, variant ? { variant } : {}));
      const fresh = list.filter(t => !Store.attempts({ testId: t.id }).length);
      return '#/test/' + (fresh[0] || list[Math.floor(Math.random() * list.length)]).id;
    };
    if (exam === 'ielts') return [pick('listening'), pick('reading', v), '#/writing/ielts/' + v, '#/speaking/ielts'];
    return [pick('listening'), pick('reading'), '#/writing/oet', '#/speaking/oet'];
  }
  async function startMock(exam) {
    const ok = await UI.confirm({ title: 'Simulacro completo', html: `Harás las 4 secciones seguidas en ${Store.state.settings.mode === 'exam' ? '<b>modo examen</b>' : '<b>modo práctica</b>'}. Busca un lugar tranquilo y usa auriculares. ¿Empezamos?` }, 'Empezar');
    if (!ok) return;
    const steps = mockSteps(exam);
    sessionStorage.setItem('mock', JSON.stringify({ exam, steps, i: 0, attempts: [] }));
    location.hash = steps[0];
  }
  function mockBanner(attempt) {
    let m; try { m = JSON.parse(sessionStorage.getItem('mock') || 'null'); } catch (e) { m = null; }
    if (!m || m.exam !== attempt.exam) return;
    if (!m.attempts.includes(attempt.id)) { m.attempts.push(attempt.id); m.i++; sessionStorage.setItem('mock', JSON.stringify(m)); }
    const div = document.createElement('div');
    if (m.i < m.steps.length) {
      div.className = 'alert';
      div.innerHTML = `<b>Simulacro ${m.exam.toUpperCase()}:</b> sección ${m.i} de ${m.steps.length} completada. <div class="btn-row" style="margin-top:8px"><a class="btn sm" href="${m.steps[m.i]}">Siguiente sección ›</a><button class="btn sm ghost" id="mockStop">Terminar simulacro</button></div>`;
    } else {
      div.className = 'alert ok';
      const all = m.attempts.map(id => Store.getAttempt(id)).filter(Boolean);
      div.innerHTML = `<b>🎉 Simulacro completo terminado.</b> Evalúa Writing y Speaking para tener tu puntuación global. <a href="#/progreso">Ver resumen en Progreso</a><div class="small" style="margin-top:6px">${all.map(a => `<a href="#/resultado/${a.id}">${esc(a.skill)}: ${a.score == null ? 'por evaluar' : a.exam === 'ielts' ? a.score.toFixed(1) : a.score}</a>`).join(' · ')}</div>`;
      sessionStorage.removeItem('mock');
    }
    root().prepend(div);
    const st = $('#mockStop'); if (st) st.onclick = () => { sessionStorage.removeItem('mock'); div.remove(); };
  }

  /* ---------- Router ---------- */
  function cleanupAll() { Runner.cleanup(); Writing.cleanup(); Speaking.cleanup(); document.body.classList.remove('in-exam'); }
  function route() {
    const h = location.hash.replace(/^#\/?/, '');
    const [page, a, b] = h.split('/');
    cleanupAll();
    $$('#nav a').forEach(x => x.classList.toggle('active', x.dataset.route === (page || 'home') || (page === 'guia' && x.dataset.route === a)));
    window.scrollTo(0, 0);
    if (!page) return home();
    if (page === 'ielts') return ielts();
    if (page === 'oet') return oet();
    if (page === 'practica') return practica();
    if (page === 'progreso') return Dashboard.render(root());
    if (page === 'guia') return guide(a === 'oet' ? 'oet' : 'ielts');
    if (page === 'test') { const t = DATA.tests[a]; if (!t) return home(); return Runner.start(t); }
    if (page === 'writing') {
      if (Store.state.active && Store.state.active.writing && Store.state.active.exam === a && (a === 'oet' || Store.state.active.variant === b)) return Writing.resumeIfAny();
      return a === 'oet' ? Writing.startOet() : Writing.startIelts(b === 'general' ? 'general' : 'academic');
    }
    if (page === 'speaking') return Speaking.start(a === 'oet' ? 'oet' : 'ielts');
    if (page === 'resultado') {
      Results.render(root(), a);
      const at = Store.getAttempt(a); if (at) mockBanner(at);
      return;
    }
    home();
  }

  function init() {
    applyTheme();
    window.addEventListener('hashchange', route);
    route();
  }
  return { init, applyTheme, route };
})();

document.addEventListener('DOMContentLoaded', App.init);
