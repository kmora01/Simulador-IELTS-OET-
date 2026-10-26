/* Pantalla de resultados y autoevaluación (Writing / Speaking). */
const Results = (() => {
  const { esc, $, $$, fmt } = UI;

  function scoreRing(a) {
    if (a.score == null) return `<div class="score-ring" style="--p:0"><div><div><div class="big">—</div><div class="sub">sin evaluar</div></div></div></div>`;
    const ielts = a.exam === 'ielts';
    const p = ielts ? a.score / 9 * 100 : a.score / 500 * 100;
    return `<div class="score-ring" style="--p:${p}"><div><div><div class="big">${ielts ? a.score.toFixed(1) : a.score}</div><div class="sub">${ielts ? 'Banda IELTS' : 'Grado ' + (a.grade || Scoring.oetGrade(a.score))}</div></div></div></div>`;
  }
  function targetMsg(a) {
    if (a.score == null) return '';
    const P = Store.state.profile;
    if (a.exam === 'ielts') {
      const d = a.score - P.ieltsTarget;
      return d >= 0 ? `<span class="pill green">✓ Alcanza tu objetivo (${P.ieltsTarget})</span>` : `<span class="pill amber">A ${(-d).toFixed(1)} bandas de tu objetivo (${P.ieltsTarget})</span>`;
    }
    const d = a.score - P.oetTarget;
    return d >= 0 ? `<span class="pill green">✓ Alcanza tu objetivo (${P.oetTarget})</span>` : `<span class="pill amber">A ${-d} puntos de tu objetivo (${P.oetTarget})</span>`;
  }

  function render(root, id) {
    const a = Store.getAttempt(id);
    if (!a) { root.innerHTML = '<div class="card">Resultado no encontrado. <a href="#/progreso">Ver progreso</a></div>'; return; }
    if (a.skill === 'listening' || a.skill === 'reading') return objective(root, a);
    return productive(root, a);
  }

  function header(a, extra) {
    return `<div class="card"><div class="score-hero">${scoreRing(a)}
      <div style="flex:1;min-width:220px"><span class="pill ${a.exam === 'oet' ? 'teal' : 'blue'}">${a.exam.toUpperCase()} · ${a.skill}</span>
      <h1 style="margin-top:6px">${esc(a.title)}</h1>
      <p class="muted small">${UI.fmtDate(a.date)} · ${a.mode === 'practice' ? 'Modo práctica' : 'Modo examen'}${a.elapsed ? ' · Tiempo: ' + fmt(a.elapsed) : ''}</p>
      ${extra || ''}<div style="margin-top:6px">${targetMsg(a)}</div></div></div></div>`;
  }

  function objective(root, a) {
    const test = DATA.tests[a.testId];
    const byPart = {}, byTag = {};
    a.details.forEach(d => {
      (byPart[d.part] = byPart[d.part] || { ok: 0, n: 0 }); byPart[d.part].n++; if (d.ok) byPart[d.part].ok++;
      (byTag[d.tag] = byTag[d.tag] || { ok: 0, n: 0 }); byTag[d.tag].n++; if (d.ok) byTag[d.tag].ok++;
    });
    const tagRows = Object.entries(byTag).sort((x, y) => x[1].ok / x[1].n - y[1].ok / y[1].n);
    const weakest = tagRows.filter(([, v]) => v.ok / v.n < 0.7).slice(0, 3);
    root.innerHTML = header(a, `<p style="font-size:1.1rem"><b>${a.raw} / ${a.max}</b> respuestas correctas${a.exam === 'oet' ? ` · ${a.score}/500` : ''}</p>`) + `
      <div class="grid grid-2" style="margin-top:14px">
        <div class="card"><h3>Por partes</h3>${Object.entries(byPart).map(([pi, v]) => bar(test ? test.parts[pi].title : 'Part ' + (+pi + 1), v)).join('')}</div>
        <div class="card"><h3>Por tipo de pregunta</h3>${tagRows.map(([t, v]) => bar(Scoring.tagLabel(t), v)).join('')}</div>
      </div>
      ${weakest.length ? `<div class="card"><h3>💡 Qué entrenar a partir de este intento</h3><ul>${weakest.map(([t]) => `<li><b>${esc(Scoring.tagLabel(t))}:</b> ${esc(Scoring.tagTip(t))}</li>`).join('')}</ul></div>` : `<div class="alert ok">¡Excelente! Ningún tipo de pregunta por debajo del 70%.</div>`}
      <div class="card"><div class="section-title" style="margin-top:0"><h3 style="margin:0">Revisión de respuestas</h3><div class="seg" id="filt"><button class="active" data-f="all">Todas</button><button data-f="bad">Solo errores</button></div></div>
        <div class="table-wrap"><table class="tbl" id="revT"><tr><th>#</th><th>Tu respuesta</th><th>Correcta</th><th></th></tr>
        ${a.details.map(d => `<tr data-ok="${d.ok}"><td><b>${d.n}</b></td><td>${esc(d.given || '—')}</td><td>${esc(d.answer)}${d.alts && d.alts.length ? `<div class="small muted">También: ${esc(d.alts.join(' / '))}</div>` : ''}</td><td>${d.ok ? '<span class="ok-t">✓</span>' : '<span class="bad-t">✗</span>'}</td></tr>`).join('')}
        </table></div></div>
      ${test && test.skill === 'listening' ? `<div class="card"><h3>Transcripción</h3><div class="tabs" id="trT">${test.parts.map((p, i) => `<button data-i="${i}" class="${i === 0 ? 'active' : ''}">${esc(p.label)}</button>`).join('')}</div><div id="trBox">${Runner.transcriptHtml(test.parts[0])}</div></div>` : ''}
      ${test && test.skill === 'reading' ? `<div class="card"><h3>Textos</h3><div class="tabs" id="psT">${test.parts.map((p, i) => `<button data-i="${i}" class="${i === 0 ? 'active' : ''}">${esc(p.label)}</button>`).join('')}</div><div id="psBox" class="passage">${test.parts[0].passage}</div></div>` : ''}
      <div class="btn-row" style="margin-top:16px"><a class="btn" href="#/test/${a.testId}">↻ Repetir</a><a class="btn secondary" href="#/progreso">📊 Ver progreso</a><a class="btn ghost" href="#/${a.exam}">Volver a ${a.exam.toUpperCase()}</a></div>`;
    $$('#filt button').forEach(b => b.onclick = () => {
      $$('#filt button').forEach(x => x.classList.toggle('active', x === b));
      $$('#revT tr[data-ok]').forEach(tr => tr.classList.toggle('hidden', b.dataset.f === 'bad' && tr.dataset.ok === 'true'));
    });
    $$('#trT button').forEach(b => b.onclick = () => { $$('#trT button').forEach(x => x.classList.toggle('active', x === b)); $('#trBox').innerHTML = Runner.transcriptHtml(test.parts[+b.dataset.i]); });
    $$('#psT button').forEach(b => b.onclick = () => { $$('#psT button').forEach(x => x.classList.toggle('active', x === b)); $('#psBox').innerHTML = test.parts[+b.dataset.i].passage; });
  }
  function bar(label, v) {
    const p = Math.round(v.ok / v.n * 100), cls = p >= 75 ? 'ok' : p >= 50 ? 'warn' : 'bad';
    return `<div style="margin-bottom:10px"><div style="display:flex;justify-content:space-between;font-size:.9rem"><span>${esc(label)}</span><b>${v.ok}/${v.n}</b></div><div class="bar ${cls}"><i style="width:${p}%"></i></div></div>`;
  }

  function sliders(prefix, crit, values) {
    return crit.map(c => {
      const v = values[c.key] != null ? values[c.key] : Math.round(c.max * 0.6);
      return `<div class="crit">${c.group ? `<div class="small muted">${esc(c.group)}</div>` : ''}<div class="row"><b>${esc(c.label)}</b><span class="pill blue"><span id="${prefix}-${c.key}-v">${v}</span> / ${c.max}</span></div>
        <input type="range" min="0" max="${c.max}" step="${c.step}" value="${v}" data-p="${prefix}" data-k="${c.key}">
        <div class="desc" id="${prefix}-${c.key}-d">${esc(descFor(c, v))}</div></div>`;
    }).join('');
  }
  function descFor(c, v) {
    const keys = Object.keys(c.desc).map(Number).sort((a, b) => a - b);
    let best = keys[0]; keys.forEach(k => { if (v >= k) best = k; });
    return c.desc[best];
  }
  function bindSliders(root, crit) {
    $$('input[type=range]', root).forEach(r => r.oninput = () => {
      const c = crit.find(x => x.key === r.dataset.k);
      $(`#${r.dataset.p}-${r.dataset.k}-v`).textContent = r.value;
      $(`#${r.dataset.p}-${r.dataset.k}-d`).textContent = descFor(c, +r.value);
    });
  }
  function readSliders(root, prefix) {
    const o = {}; $$(`input[type=range][data-p="${prefix}"]`, root).forEach(r => o[r.dataset.k] = +r.value); return o;
  }

  function productive(root, a) {
    if (a.skill === 'writing') return writingResult(root, a);
    return speakingResult(root, a);
  }

  function writingResult(root, a) {
    const crit = Writing.CRITERIA[a.exam];
    const scored = a.score != null;
    const extra = scored ? (a.exam === 'ielts' ? `<p>Banda por tarea: ${a.tasks.map(t => `${t.label}: <b>${t.band != null ? t.band.toFixed(1) : '—'}</b>`).join(' · ')} <span class="small muted">(Task 2 vale el doble)</span></p>` : `<p>Total criterios: <b>${a.total}/38</b></p>`)
      : `<div class="alert warn" style="margin:6px 0 0">Evalúa tu texto con los criterios oficiales (más abajo) para obtener la banda estimada. Hemos precargado una sugerencia automática.</div>`;
    root.innerHTML = header(a, extra) + a.tasks.map((t, i) => {
      const src = Writing.findTask(t.id), an = t.analysis;
      const values = t.crit || Writing.suggest(a.exam, an);
      return `<div class="card">
        <div class="section-title" style="margin-top:0"><h2 style="margin:0">${esc(t.label)}</h2><span class="pill">${an.words} palabras</span></div>
        <details><summary><b>Ver la tarea</b></summary><div style="margin-top:10px">${src ? Writing.promptHtml({ kind: t.kind, src }) : ''}</div></details>
        <h3 style="margin-top:14px">Tu respuesta</h3><div class="model-answer">${esc(t.text || '(sin texto)')}</div>
        <h3 style="margin-top:14px">Análisis automático</h3>
        <div class="metric-grid"><div class="metric"><div class="v">${an.words}</div><div class="l">Palabras</div></div><div class="metric"><div class="v">${an.paras}</div><div class="l">Párrafos</div></div><div class="metric"><div class="v">${an.avgSentence}</div><div class="l">Palabras/oración</div></div><div class="metric"><div class="v">${an.unique}%</div><div class="l">Variedad léxica</div></div><div class="metric"><div class="v">${an.linkers.length}</div><div class="l">Conectores</div></div></div>
        <ul style="list-style:none;padding:0;margin-top:12px">${an.checks.map(c => `<li style="padding:4px 0">${c.ok ? '✅' : '⚠️'} ${esc(c.msg)}</li>`).join('')}</ul>
        ${src && src.model ? `<details style="margin-top:10px"><summary><b>📝 Ver respuesta modelo (banda alta)</b></summary><div class="model-answer" style="margin-top:8px">${esc(src.model)}</div></details>` : ''}
        <h3 style="margin-top:16px">Autoevaluación con criterios ${a.exam === 'ielts' ? 'IELTS' : 'OET'}</h3>
        <p class="small muted">Compara tu texto con la respuesta modelo y los descriptores. Sé estricto: el examinador lo será.</p>
        ${sliders('t' + i, crit, values)}
      </div>`;
    }).join('') + `<div class="btn-row" style="margin-top:16px"><button class="btn" id="saveEval">💾 Guardar evaluación</button><a class="btn secondary" href="#/${a.exam}">Volver</a></div>`;
    bindSliders(root, crit);
    $('#saveEval').onclick = () => {
      a.tasks.forEach((t, i) => {
        t.crit = readSliders(root, 't' + i);
        if (a.exam === 'ielts') t.band = Scoring.roundIelts((t.crit.ta + t.crit.cc + t.crit.lr + t.crit.gra) / 4);
      });
      const r = Writing.score(a.exam, null, a);
      Store.updateAttempt(a.id, { tasks: a.tasks, score: r.score, grade: r.grade || null, total: r.total || null });
      UI.toast('Evaluación guardada'); render(root, a.id); window.scrollTo(0, 0);
    };
  }

  function speakingResult(root, a) {
    const crit = Speaking.CRITERIA[a.exam];
    const url = Speaking.audioUrls[a.id];
    const values = a.criteria || {};
    const extra = a.score == null ? `<div class="alert warn" style="margin:6px 0 0">Escucha tu grabación y evalúate con los criterios para obtener la puntuación estimada.</div>` : (a.exam === 'oet' ? `<p>Total criterios: <b>${a.total}/39</b></p>` : '');
    root.innerHTML = header(a, extra) + `
      <div class="card"><h3>🎧 Tu grabación</h3>${url ? `<audio controls src="${url}" style="width:100%"></audio><p class="small muted">La grabación solo está disponible durante esta sesión; descárgala si quieres conservarla: <a href="${url}" download="speaking-${a.id}.webm">descargar</a>.</p>` : '<p class="muted">No hay grabación disponible (se eliminan al cerrar o recargar la página).</p>'}
        <h3 style="margin-top:14px">Métricas</h3>${Speaking.metricsHtml(a.metrics, a.seconds)}</div>
      <div class="card"><h3>Transcripción por pregunta</h3>${a.hasTranscript ? '' : '<p class="small muted">Sin transcripción (tu navegador no tiene reconocimiento de voz).</p>'}
        ${a.items.map(it => `<div style="padding:8px 0;border-bottom:1px solid var(--border)"><div class="small muted">${it.part === 0 ? (a.exam === 'ielts' ? 'Intro' : 'Calentamiento') : (a.exam === 'ielts' ? 'Part ' + it.part : 'Role-play ' + it.part)} · ${fmt(it.seconds)}</div><b>${esc(it.q)}</b><div>${esc(it.transcript || '—')}</div></div>`).join('')}</div>
      <div class="card"><h3>Autoevaluación con criterios ${a.exam === 'ielts' ? 'IELTS' : 'OET'}</h3>
        ${a.exam === 'oet' ? '<p class="small muted">OET evalúa 4 criterios lingüísticos (0–6) y 5 de comunicación clínica (0–3).</p>' : '<p class="small muted">La banda de Speaking es la media de los 4 criterios.</p>'}
        ${sliders('s', crit, values)}
        <div class="btn-row" style="margin-top:12px"><button class="btn" id="saveEval">💾 Guardar evaluación</button><a class="btn secondary" href="#/${a.exam}">Volver</a></div></div>`;
    bindSliders(root, crit);
    $('#saveEval').onclick = () => {
      const c = readSliders(root, 's'), r = Speaking.score(a.exam, c);
      Store.updateAttempt(a.id, { criteria: c, score: r.score, grade: r.grade || null, total: r.total || null });
      UI.toast('Evaluación guardada'); render(root, a.id); window.scrollTo(0, 0);
    };
  }

  return { render };
})();
