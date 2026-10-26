/* Writing: examen cronometrado, análisis automático del texto y criterios de evaluación. */
const Writing = (() => {
  const { esc, $, $$, fmt } = UI;
  let W = null;

  const CRITERIA = {
    ielts: [
      { key: 'ta', label: 'Task Achievement / Response', max: 9, step: 1, desc: { 5: 'Responde parcialmente; ideas poco desarrolladas o detalles irrelevantes.', 6: 'Responde a todas las partes, pero algunas ideas quedan poco desarrolladas.', 7: 'Cubre todos los requisitos; postura clara y desarrollada (T1: overview clara).', 8: 'Respuesta completa, ideas bien extendidas y apoyadas.', 9: 'Respuesta plenamente desarrollada y precisa.' } },
      { key: 'cc', label: 'Coherence & Cohesion', max: 9, step: 1, desc: { 5: 'Organización limitada; conectores repetitivos o mal usados.', 6: 'Organización coherente; conectores correctos aunque mecánicos.', 7: 'Progresión clara; variedad de conectores y párrafos lógicos.', 8: 'Secuencia lógica; cohesión natural en todo el texto.', 9: 'Cohesión que no llama la atención; párrafos impecables.' } },
      { key: 'lr', label: 'Lexical Resource', max: 9, step: 1, desc: { 5: 'Vocabulario limitado y repetitivo; errores que dificultan.', 6: 'Vocabulario adecuado; intenta palabras menos comunes con errores.', 7: 'Vocabulario flexible; algunas colocaciones y palabras poco comunes.', 8: 'Amplio y preciso; errores ocasionales.', 9: 'Vocabulario sofisticado y natural.' } },
      { key: 'gra', label: 'Grammatical Range & Accuracy', max: 9, step: 1, desc: { 5: 'Estructuras limitadas; errores frecuentes.', 6: 'Mezcla de oraciones simples y complejas; algunos errores.', 7: 'Variedad de estructuras complejas; muchas oraciones sin errores.', 8: 'Amplia variedad; la mayoría de oraciones sin errores.', 9: 'Precisión total con estructuras variadas.' } }
    ],
    oet: [
      { key: 'purpose', label: 'Purpose (propósito)', max: 3, step: 1, desc: { 0: 'El propósito no se identifica.', 1: 'El propósito se deduce con dificultad.', 2: 'Propósito presente pero no inmediato o poco desarrollado.', 3: 'Propósito claro desde el inicio y ampliado en la carta.' } },
      { key: 'content', label: 'Content (contenido)', max: 7, step: 1, desc: { 3: 'Faltan datos clave o hay información irrelevante/incorrecta.', 5: 'Incluye casi toda la información relevante con algunas omisiones.', 7: 'Toda la información necesaria y precisa para el lector.' } },
      { key: 'concise', label: 'Conciseness & Clarity', max: 7, step: 1, desc: { 3: 'Mucho detalle innecesario; resumen poco claro.', 5: 'Mayormente conciso, con algo de información sobrante.', 7: 'Resumen claro y eficiente; solo lo relevante.' } },
      { key: 'genre', label: 'Genre & Style', max: 7, step: 1, desc: { 3: 'Registro inapropiado (informal, abreviaturas, notas copiadas).', 5: 'Registro mayormente profesional con fallos.', 7: 'Registro y tono plenamente adecuados para el lector.' } },
      { key: 'org', label: 'Organisation & Layout', max: 7, step: 1, desc: { 3: 'Párrafos sin lógica; formato de carta deficiente.', 5: 'Organización aceptable; algunos párrafos mal agrupados.', 7: 'Párrafos lógicos y formato de carta correcto.' } },
      { key: 'lang', label: 'Language (precisión)', max: 7, step: 1, desc: { 3: 'Errores frecuentes que afectan la claridad.', 5: 'Algunos errores que no impiden la comprensión.', 7: 'Gramática, vocabulario, ortografía y puntuación precisos.' } }
    ]
  };

  const LINKERS = ['however', 'moreover', 'furthermore', 'in addition', 'therefore', 'consequently', 'as a result', 'on the other hand', 'whereas', 'while', 'although', 'despite', 'in contrast', 'similarly', 'for example', 'for instance', 'such as', 'in conclusion', 'to sum up', 'overall', 'firstly', 'secondly', 'finally', 'nevertheless', 'thus', 'hence', 'because', 'since', 'which', 'meanwhile', 'subsequently', 'in particular', 'notably', 'by contrast', 'accordingly', 'in summary'];
  const STOP = new Set('the a an and or but of to in on at for with by from is are was were be been it this that these those as which who their they there his her its we you i my our your have has had not do does did can could would should will may might also than then so if into about more most very much many such over under between during after before up down out off all any each other some no only own same too just'.split(' '));

  function analyze(text, kind) {
    const t = text.trim();
    const words = t ? t.split(/\s+/).filter(w => /[a-z0-9]/i.test(w)) : [];
    const sentences = t.split(/[.!?]+(?=\s|$)/).map(s => s.trim()).filter(s => s.split(/\s+/).length > 2);
    const paras = t.split(/\n\s*\n|\n/).map(s => s.trim()).filter(s => s.split(/\s+/).length > 3);
    const low = ' ' + t.toLowerCase().replace(/\s+/g, ' ') + ' ';
    const linkers = LINKERS.filter(l => new RegExp('\\b' + l.replace(/ /g, '\\s+') + '\\b').test(low));
    const content = words.map(w => w.toLowerCase().replace(/[^a-z'-]/g, '')).filter(w => w.length > 3 && !STOP.has(w));
    const freq = {}; content.forEach(w => freq[w] = (freq[w] || 0) + 1);
    const repeated = Object.entries(freq).filter(([, c]) => c >= 4).sort((a, b) => b[1] - a[1]).slice(0, 6);
    const unique = content.length ? new Set(content).size / content.length : 0;
    const contractions = (t.match(/\b\w+'(t|re|ve|ll|d|m|s)\b/gi) || []).filter(c => !/'s$/i.test(c) || /\b(it|that|there|he|she|what)'s\b/i.test(c));
    const complex = (low.match(/\b(which|who|whom|whose|although|whereas|while|if|unless|because|since|when|that)\b/g) || []).length;
    const checks = [];
    const add = (ok, msg) => checks.push({ ok, msg });
    const min = { 'ielts-t1': 150, 'ielts-t2': 250, 'ielts-gt1': 150, oet: 180 }[kind] || 0;
    add(words.length >= min, `Extensión: ${words.length} palabras (mínimo ${min}${kind === 'oet' ? ', ideal 180–200 en el cuerpo' : ''}).`);
    if (kind === 'oet' && words.length > 260) add(false, 'Texto demasiado largo: la concisión se penaliza. Elimina datos que el lector no necesita.');
    add(paras.length >= (kind === 'ielts-t2' ? 4 : 3), `Párrafos detectados: ${paras.length}${kind === 'ielts-t2' ? ' (recomendado: introducción, 2 párrafos de desarrollo, conclusión)' : ''}.`);
    add(linkers.length >= 4, `Conectores distintos: ${linkers.length}${linkers.length ? ' (' + linkers.slice(0, 8).join(', ') + ')' : ''}.`);
    if (kind === 'ielts-t1') {
      add(/\b(overall|in general|it is clear|it is evident|generally)\b/i.test(t), 'Incluye una visión general (overview: "Overall, ...") — imprescindible para banda 7+.');
      add((t.match(/\d/g) || []).length >= 5, 'Apoya la descripción con cifras del gráfico.');
    }
    if (kind === 'ielts-gt1' || kind === 'oet') {
      add(/^\s*dear\b/im.test(t), 'Saludo formal ("Dear ...").');
      add(/\b(yours sincerely|yours faithfully|kind regards|best regards|best wishes|regards)\b/i.test(t), 'Cierre de carta ("Yours sincerely", etc.).');
    }
    if (kind === 'ielts-t2') add(/\b(in conclusion|to conclude|to sum up|in summary|overall)\b/i.test(t), 'Conclusión explícita.');
    if (kind === 'oet') {
      add(/\bre:|\bregarding\b|\breference\b/i.test(t), 'Línea de referencia ("Re: Mr/Ms ..., DOB ...").');
      add(/\b(i am writing|i'm writing|i write)\b/i.test(t), 'Propósito al inicio ("I am writing to refer/update ...").');
      add(contractions.length === 0, contractions.length ? `Evita contracciones en una carta profesional: ${[...new Set(contractions)].slice(0, 5).join(', ')}.` : 'Sin contracciones (registro formal).');
    }
    if (repeated.length) add(false, 'Palabras repetidas: ' + repeated.map(([w, c]) => `${w} (×${c})`).join(', ') + '. Usa sinónimos o pronombres.');
    return {
      words: words.length, sentences: sentences.length, paras: paras.length, linkers, unique: Math.round(unique * 100),
      avgSentence: sentences.length ? Math.round(words.length / sentences.length) : 0, complex, checks, min
    };
  }

  function suggest(exam, a) {
    if (exam === 'ielts') {
      let ta = 6, cc = 6, lr = 6, gra = 6;
      if (a.words < a.min) ta -= a.words < a.min * 0.75 ? 2 : 1;
      if (a.checks.some(c => !c.ok && /overview|Conclusión/.test(c.msg))) ta -= 1;
      if (a.paras < 3) cc -= 1; if (a.linkers.length >= 7) cc += 1; if (a.linkers.length < 3) cc -= 1;
      if (a.unique >= 70) lr += 1; if (a.unique < 50) lr -= 1;
      if (a.complex >= 8 && a.avgSentence >= 14) gra += 1; if (a.avgSentence < 9) gra -= 1;
      const c = v => Math.max(0, Math.min(9, v));
      return { ta: c(ta), cc: c(cc), lr: c(lr), gra: c(gra) };
    }
    let purpose = 2;
    const has = re => a.checks.some(c => c.ok && re.test(c.msg));
    if (has(/Propósito al inicio/)) purpose = 3;
    let content = 5, concise = a.words > 260 ? 3 : a.words < 150 ? 4 : 5, genre = has(/Sin contracciones/) ? 5 : 4, org = a.paras >= 4 ? 5 : 4, lang = 5;
    return { purpose, content, concise, genre, org, lang };
  }

  function score(exam, crit, attempt) {
    if (exam === 'ielts') {
      // Banda por tarea = media de 4 criterios; Task 2 vale el doble.
      const perTask = attempt.tasks.map(t => t.crit ? Scoring.roundIelts((t.crit.ta + t.crit.cc + t.crit.lr + t.crit.gra) / 4) : null);
      if (perTask.some(x => x == null)) return null;
      return { score: Scoring.roundIelts((perTask[0] + 2 * perTask[1]) / 3), perTask };
    }
    const c = attempt.tasks[0].crit; if (!c) return null;
    const total = c.purpose + c.content + c.concise + c.genre + c.org + c.lang;
    const s = Math.round(total / 38 * 500 / 10) * 10;
    return { score: s, total, grade: Scoring.oetGrade(s) };
  }

  /* ---------- Runner ---------- */
  function pick(list, avoidIds) { const pool = list.filter(x => !avoidIds.includes(x.id)); const src = pool.length ? pool : list; return src[Math.floor(Math.random() * src.length)]; }
  function recentIds() { return Store.attempts().filter(a => a.skill === 'writing').slice(-6).flatMap(a => (a.tasks || []).map(t => t.id)); }

  function startIelts(variant, ids) {
    const D = DATA.writing.ielts, recent = recentIds();
    const t1list = variant === 'general' ? D.gtTask1 : D.academicTask1;
    const t1 = (ids && t1list.find(x => x.id === ids[0])) || pick(t1list, recent);
    const t2 = (ids && D.task2.find(x => x.id === ids[1])) || pick(D.task2, recent);
    begin({
      exam: 'ielts', variant, title: `IELTS ${variant === 'general' ? 'General Training' : 'Academic'} Writing`,
      tasks: [
        { id: t1.id, label: 'Part 1', kind: variant === 'general' ? 'ielts-gt1' : 'ielts-t1', min: 150, src: t1 },
        { id: t2.id, label: 'Part 2', kind: 'ielts-t2', min: 250, src: t2 }
      ], duration: 3600, reading: 0
    });
  }
  function startOet(id) {
    const list = DATA.writing.oet;
    const prof = Store.state.profile.profession;
    const t = (id && list.find(x => x.id === id)) || pick(list.filter(x => x.profession === prof).length ? list.filter(x => x.profession === prof) : list, recentIds());
    begin({ exam: 'oet', title: `OET Writing — ${t.professionLabel}`, tasks: [{ id: t.id, label: 'Letter', kind: 'oet', min: 180, src: t }], duration: 2400, reading: 300 });
  }

  function begin(cfg) {
    const act = Store.state.active;
    const resume = act && act.writing && act.title === cfg.title && act.taskIds.join() === cfg.tasks.map(t => t.id).join() ? act : null;
    W = Object.assign(cfg, {
      cur: 0, texts: resume ? resume.texts : cfg.tasks.map(() => ''), startedAt: resume ? resume.startedAt : Date.now(),
      phase: resume ? resume.phase : (cfg.reading ? 'reading' : 'writing'), endAt: resume ? resume.endAt : null, mode: Store.state.settings.mode, timer: null, done: false
    });
    if (!W.endAt) W.endAt = Date.now() + (W.phase === 'reading' ? W.reading : W.duration) * 1000;
    if (W.mode === 'practice') W.endAt = null;
    document.body.classList.add('in-exam');
    document.documentElement.style.setProperty('--exam-size', (Store.state.settings.fontSize || 16) + 'px');
    render(); timer(); persist();
  }
  function persist() {
    if (!W || W.done) return;
    Store.setActive({ writing: true, title: W.title, exam: W.exam, variant: W.variant, taskIds: W.tasks.map(t => t.id), texts: W.texts, startedAt: W.startedAt, endAt: W.endAt, phase: W.phase });
  }

  function promptHtml(task) {
    const s = task.src;
    if (task.kind === 'ielts-t1') return `<p><b>You should spend about 20 minutes on this task.</b></p><div class="task-box">${s.prompt}<p><i>Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</i></p></div><div class="chart-wrap">${chart(s.chart)}</div><p><b>Write at least 150 words.</b></p>`;
    if (task.kind === 'ielts-gt1') return `<p><b>You should spend about 20 minutes on this task.</b></p><div class="task-box">${s.prompt}<p>In your letter:</p><ul>${s.bullets.map(b => `<li>${b}</li>`).join('')}</ul></div><p><b>Write at least 150 words.</b></p><p>You do NOT need to write any addresses. Begin your letter as follows:</p><p><b>${esc(s.opening)}</b></p>`;
    if (task.kind === 'ielts-t2') return `<p><b>You should spend about 40 minutes on this task.</b></p><p>Write about the following topic:</p><div class="task-box">${s.prompt}</div><p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p><p><b>Write at least 250 words.</b></p>`;
    return `<div class="case-notes"><p class="muted small">Reading time: 5 minutes. Writing time: 40 minutes.</p><p><b>Read the case notes and complete the writing task which follows.</b></p>${s.notes}<div class="task-box"><b>Writing Task</b><p>${s.task}</p><p>In your answer:</p><ul><li>Expand the relevant notes into complete sentences</li><li>Do not use note form</li><li>Use letter format</li></ul><p>The body of the letter should be approximately 180–200 words.</p></div></div>`;
  }
  function chart(c) {
    if (!c) return '';
    if (c.type === 'bar') return UI.barChart(c);
    if (c.type === 'line') return UI.lineChart(c);
    if (c.type === 'pie') return `<div style="display:flex;flex-wrap:wrap;gap:8px">${c.pies.map(p => `<div style="flex:1;min-width:240px">${UI.pieChart(p)}</div>`).join('')}</div>`;
    if (c.type === 'table') return `<div class="table-wrap"><p style="text-align:center"><b>${esc(c.title)}</b></p><table class="tbl" style="border:1px solid var(--border)"><tr>${c.head.map(h => `<th>${esc(h)}</th>`).join('')}</tr>${c.rows.map(r => `<tr>${r.map(x => `<td>${esc(x)}</td>`).join('')}</tr>`).join('')}</table></div>`;
    if (c.type === 'svg') return c.svg;
    return '';
  }

  function render() {
    const task = W.tasks[W.cur], name = Store.state.profile.name || 'Candidato';
    const reading = W.phase === 'reading';
    $('#app').innerHTML = `
    <div class="exam">
      <div class="exam-bar">
        <div><div class="title">${esc(W.title)}</div><div class="cand">${esc(name)} · ${W.mode === 'exam' ? 'Modo examen' : 'Modo práctica'}</div></div>
        <div class="spacer"></div><span class="timer" id="timer">--:--</span>
        <button class="icon-btn" id="finishBtn">Entregar</button><button class="icon-btn" id="exitBtn">✕</button>
      </div>
      <div class="exam-sub"><b>${esc(task.label)}</b>
        ${reading ? '<span class="pill amber">Tiempo de lectura: no puedes escribir todavía</span>' : ''}
        <span class="mobile-switch seg" style="margin-left:auto"><button data-v="p">Tarea</button><button data-v="q">Respuesta</button></span></div>
      <div class="exam-body split show-q" id="examBody">
        <div class="pane passage"><div class="pane-inner">${promptHtml(task)}</div></div>
        <div class="pane questions"><div class="writing-area">
          <textarea id="essay" spellcheck="false" autocapitalize="sentences" placeholder="${reading ? 'Podrás escribir cuando termine el tiempo de lectura…' : 'Escribe tu respuesta aquí…'}" ${reading ? 'readonly' : ''}>${esc(W.texts[W.cur])}</textarea>
          <div class="wc"><span>Palabras: <b id="wcount">0</b> / mín. ${task.min}</span><span class="muted">Corrector ortográfico desactivado (como en el examen)</span></div>
        </div></div>
      </div>
      <div class="exam-nav"><div class="parts">${W.tasks.map((t, i) => `<div class="part-nav ${i === W.cur ? 'current' : ''}"><button class="plabel" data-t="${i}">${esc(t.label)} <span class="cnt" id="wc${i}"></span></button></div>`).join('')}</div></div>
    </div>`;
    const ta = $('#essay');
    const upd = () => {
      W.texts[W.cur] = ta.value;
      const n = ta.value.trim() ? ta.value.trim().split(/\s+/).length : 0;
      const b = $('#wcount'); b.textContent = n; b.className = n >= task.min ? 'ok' : 'under';
      W.tasks.forEach((t, i) => { const e = $('#wc' + i); if (e) { const c = W.texts[i].trim() ? W.texts[i].trim().split(/\s+/).length : 0; e.textContent = c + ' pal.'; } });
    };
    let st = null;
    ta.addEventListener('input', () => { upd(); clearTimeout(st); st = setTimeout(persist, 500); });
    upd();
    $$('.plabel').forEach(b => b.onclick = () => { W.cur = +b.dataset.t; persist(); render(); });
    $$('.mobile-switch button').forEach(b => b.onclick = () => {
      const body = $('#examBody'); body.classList.toggle('show-q', b.dataset.v === 'q'); body.classList.toggle('show-p', b.dataset.v === 'p');
      $$('.mobile-switch button').forEach(x => x.classList.toggle('active', x === b));
    });
    if (window.innerWidth <= 900) $('.mobile-switch button[data-v="p"]').click();
    $('#finishBtn').onclick = async () => {
      if (W.phase === 'reading') { const ok = await UI.confirm({ title: 'Empezar a escribir', html: 'Terminarás el tiempo de lectura y comenzarán los 40 minutos de escritura.' }, 'Empezar'); if (ok) toWriting(); return; }
      const counts = W.tasks.map((t, i) => `${t.label}: ${W.texts[i].trim() ? W.texts[i].trim().split(/\s+/).length : 0} palabras`).join(' · ');
      const ok = await UI.confirm({ title: '¿Entregar Writing?', html: counts }, 'Entregar', 'Volver'); if (ok) submit();
    };
    $('#exitBtn').onclick = async () => {
      const ok = await UI.confirm({ title: 'Salir', html: 'Tu texto queda guardado y podrás continuar más tarde.' }, 'Salir');
      if (ok) { stopTimer(); document.body.classList.remove('in-exam'); location.hash = '#/' + W.exam; }
    };
  }
  function stopTimer() { if (W.timer) W.timer.stop(); }
  function timer() {
    stopTimer();
    if (!W.endAt) {
      const iv = setInterval(() => { const t = $('#timer'); if (t) t.textContent = '⏱ ' + fmt((Date.now() - W.startedAt) / 1000); }, 1000);
      W.timer = { stop: () => clearInterval(iv) }; return;
    }
    W.timer = UI.countdown(W.endAt, left => { const t = $('#timer'); if (t) { t.textContent = (W.phase === 'reading' ? 'Lectura ' : '') + fmt(left); t.classList.toggle('low', W.phase !== 'reading' && left < 300); } },
      async () => {
        if (W.phase === 'reading') { UI.toast('Comienza el tiempo de escritura (40 min)'); toWriting(); }
        else { await UI.modal('<h3>Se acabó el tiempo</h3><p>Tu texto se ha entregado.</p>', [{ label: 'Evaluar' }]); submit(); }
      });
  }
  function toWriting() {
    W.phase = 'writing';
    W.endAt = W.mode === 'practice' ? null : Date.now() + W.duration * 1000;
    persist(); render(); timer();
    if (window.innerWidth <= 900) $('.mobile-switch button[data-v="q"]').click();
  }
  function submit() {
    if (W.done) return; W.done = true;
    stopTimer(); document.body.classList.remove('in-exam'); Store.clearActive();
    const tasks = W.tasks.map((t, i) => ({ id: t.id, label: t.label, kind: t.kind, min: t.min, text: W.texts[i], analysis: analyze(W.texts[i], t.kind), crit: null }));
    const id = Store.addAttempt({ exam: W.exam, skill: 'writing', variant: W.variant || null, title: W.title, mode: W.mode, tasks, score: null, elapsed: Math.round((Date.now() - W.startedAt) / 1000) });
    location.hash = '#/resultado/' + id;
  }

  function resumeIfAny() {
    const a = Store.state.active;
    if (!a || !a.writing) return false;
    if (a.exam === 'ielts') startIelts(a.variant, a.taskIds); else startOet(a.taskIds[0]);
    return true;
  }

  function findTask(id) {
    const D = DATA.writing;
    return [...D.ielts.academicTask1, ...D.ielts.gtTask1, ...D.ielts.task2, ...D.oet].find(x => x.id === id);
  }

  function cleanup() { if (W) stopTimer(); document.body.classList.remove('in-exam'); }

  return { CRITERIA, analyze, suggest, score, startIelts, startOet, resumeIfAny, findTask, promptHtml, chart, cleanup };
})();
