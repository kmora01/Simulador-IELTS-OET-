/* Panel de progreso: puntuaciones por destreza, historial, áreas débiles y ajustes. */
const Dashboard = (() => {
  const { esc, $, $$, fmt } = UI;
  const SKILLS = ['listening', 'reading', 'writing', 'speaking'];
  const SK_ES = { listening: 'Listening', reading: 'Reading', writing: 'Writing', speaking: 'Speaking' };
  const COLORS = { listening: '#2f6fc0', reading: '#0f8b7d', writing: '#b7791f', speaking: '#8e44ad' };

  function latest(exam, skill) {
    const list = Store.attempts({ exam, skill }).filter(a => a.score != null);
    return list[list.length - 1] || null;
  }
  function summary(exam) {
    const out = {};
    SKILLS.forEach(s => {
      const list = Store.attempts({ exam, skill: s }).filter(a => a.score != null);
      out[s] = { last: list[list.length - 1] || null, best: list.reduce((m, a) => (!m || a.score > m.score ? a : m), null), n: list.length };
    });
    if (exam === 'ielts') {
      const v = SKILLS.map(s => out[s].last && out[s].last.score);
      out.overall = v.every(x => x != null) ? Scoring.roundIelts(v.reduce((a, b) => a + b, 0) / 4) : null;
      out.partial = v.filter(x => x != null);
    }
    return out;
  }

  function weakAreas(limit) {
    const items = [];
    // 1) Tipos de pregunta (últimos 12 intentos objetivos)
    const obj = Store.attempts().filter(a => a.details).slice(-12);
    const tags = {};
    obj.forEach(a => a.details.forEach(d => {
      const k = a.exam + '|' + a.skill + '|' + d.tag;
      (tags[k] = tags[k] || { ok: 0, n: 0, exam: a.exam, skill: a.skill, tag: d.tag }); tags[k].n++; if (d.ok) tags[k].ok++;
    }));
    Object.values(tags).filter(t => t.n >= 2).forEach(t => items.push({
      exam: t.exam, skill: t.skill, label: Scoring.tagLabel(t.tag), tip: Scoring.tagTip(t.tag), pct: Math.round(t.ok / t.n * 100), detail: `${t.ok}/${t.n} correctas`
    }));
    // 2) Criterios de Writing y Speaking
    const crits = {};
    Store.attempts().filter(a => (a.skill === 'writing' || a.skill === 'speaking') && a.score != null).slice(-8).forEach(a => {
      const defs = (a.skill === 'writing' ? Writing.CRITERIA : Speaking.CRITERIA)[a.exam];
      const sets = a.skill === 'writing' ? a.tasks.map(t => t.crit).filter(Boolean) : [a.criteria];
      sets.forEach(c => defs.forEach(d => {
        const k = a.exam + '|' + a.skill + '|' + d.key;
        (crits[k] = crits[k] || { sum: 0, n: 0, exam: a.exam, skill: a.skill, d }); crits[k].sum += c[d.key] / d.max; crits[k].n++;
      }));
    });
    const CTIPS = {
      ta: 'Responde a TODAS las partes de la consigna y desarrolla cada idea con explicación y ejemplo.', cc: 'Un párrafo = una idea central. Varía conectores y usa referencias (this, such, these).',
      lr: 'Aprende colocaciones por tema y practica parafrasear la consigna.', gra: 'Combina oraciones con cláusulas relativas, condicionales y pasivas; revisa concordancia.',
      fc: 'Extiende cada respuesta: respuesta + razón + ejemplo. Evita pausas largas con frases de relleno naturales.', p: 'Practica shadowing: acento de palabra, entonación y sonidos finales.',
      purpose: 'Indica el propósito en la primera frase: “I am writing to refer…”.', content: 'Selecciona solo los datos que el lector necesita para actuar.', concise: 'Agrupa información relacionada y elimina datos irrelevantes del caso.',
      genre: 'Registro profesional: sin contracciones, sin abreviaturas sin explicar.', org: 'Párrafos: propósito → antecedentes → situación actual → petición.', lang: 'Revisa tiempos verbales (pasado para la historia clínica) y artículos.',
      intel: 'Habla más despacio y marca el acento de las palabras clave.', flu: 'Practica frases de transición para no bloquearte.', appr: 'Evita jerga: explica términos médicos con palabras sencillas.',
      res: 'Amplía estructuras: “Would you mind if…”, “It might be worth…”.', rel: 'Saluda, preséntate, usa el nombre del paciente y muestra empatía.', persp: 'Pregunta por ideas, preocupaciones y expectativas (ICE) y respóndelas.',
      struct: 'Señaliza: “First I\'d like to ask…, then I\'ll explain…”.', gath: 'Empieza con preguntas abiertas y resume lo que entendiste.', give: 'Explica en bloques pequeños y comprueba comprensión (“Does that make sense?”).'
    };
    Object.values(crits).forEach(c => items.push({
      exam: c.exam, skill: c.skill, label: c.d.label, tip: CTIPS[c.d.key] || '', pct: Math.round(c.sum / c.n * 100), detail: 'criterio evaluado ' + c.n + '×'
    }));
    return items.sort((a, b) => a.pct - b.pct).slice(0, limit || 8);
  }

  function skillCard(exam, s, info) {
    const a = info.last, ico = { listening: '🎧', reading: '📖', writing: '✍️', speaking: '🗣️' }[s];
    const val = a ? (exam === 'ielts' ? a.score.toFixed(1) : a.score) : '—';
    const sub = a ? (exam === 'ielts' ? `Mejor: ${info.best.score.toFixed(1)} · ${info.n} intento(s)` : `Grado ${a.grade || Scoring.oetGrade(a.score)} · mejor ${info.best.score}`) : 'Sin intentos';
    return `<div class="card"><div class="stat"><span class="lbl">${ico} ${SK_ES[s]}</span><span class="val">${val}</span><span class="small muted">${sub}</span></div></div>`;
  }

  function history(exam) {
    const list = Store.attempts({ exam }).filter(a => a.score != null).slice(-14);
    if (list.length < 2) return '<p class="muted small">Completa al menos dos secciones para ver tu evolución.</p>';
    const cats = list.map(a => new Date(a.date).toLocaleDateString('es', { day: '2-digit', month: '2-digit' }));
    const series = SKILLS.filter(s => list.some(a => a.skill === s)).map(s => {
      let lastV = null;
      return { name: SK_ES[s], color: COLORS[s], values: list.map(a => a.skill === s ? (lastV = a.score) : null) };
    });
    const tgt = exam === 'ielts' ? Store.state.profile.ieltsTarget : Store.state.profile.oetTarget;
    series.push({ name: 'Objetivo', color: '#c0392b', dash: true, values: list.map(() => tgt) });
    return `<div class="chart">${UI.lineChart({ categories: cats, series, yMin: exam === 'ielts' ? 3 : 0, yMax: exam === 'ielts' ? 9 : 500, yLabel: exam === 'ielts' ? 'Banda' : 'Puntuación' })}</div>`;
  }

  function render(root) {
    const st = Store.state, P = st.profile, I = summary('ielts'), O = summary('oet');
    const weak = weakAreas(8), vs = Vocab.stats();
    const totalTime = st.attempts.reduce((a, x) => a + (x.elapsed || 0), 0);
    const oetMin = SKILLS.map(s => O[s].last && O[s].last.score).filter(x => x != null);
    root.innerHTML = `
      <h1>📊 Mi progreso</h1>
      <div class="grid grid-4">
        <div class="card stat"><span class="lbl">Banda IELTS estimada</span><span class="val">${I.overall != null ? I.overall.toFixed(1) : (I.partial.length ? '~' + Scoring.roundIelts(I.partial.reduce((a, b) => a + b, 0) / I.partial.length).toFixed(1) : '—')}</span><span class="small muted">${I.overall != null ? 'Media de las 4 destrezas' : `${I.partial.length}/4 destrezas evaluadas`} · objetivo ${P.ieltsTarget}</span></div>
        <div class="card stat"><span class="lbl">OET (subtest más bajo)</span><span class="val">${oetMin.length ? Math.min(...oetMin) : '—'}</span><span class="small muted">${oetMin.length ? 'Grado ' + Scoring.oetGrade(Math.min(...oetMin)) + ' · ' : ''}objetivo ${P.oetTarget} (B)</span></div>
        <div class="card stat"><span class="lbl">Racha de estudio</span><span class="val">🔥 ${Store.streak()}</span><span class="small muted">días seguidos · ${st.attempts.length} secciones · ${Math.round(totalTime / 60)} min de práctica</span></div>
        <div class="card stat"><span class="lbl">Vocabulario dominado</span><span class="val">${vs.mastered}</span><span class="small muted">de ${vs.total} · ${vs.seen} vistas</span></div>
      </div>

      <div class="section-title"><h2>🎯 Áreas que necesitas entrenar</h2><span class="small muted">Basado en tus últimos intentos</span></div>
      <div class="card">${weak.length ? weak.map(w => `<div class="weak-row"><div><span class="pill ${w.exam === 'oet' ? 'teal' : 'blue'}">${w.exam.toUpperCase()} ${SK_ES[w.skill]}</span> <b>${esc(w.label)}</b><div class="small muted">${esc(w.tip)}</div></div>
          <div class="bar ${w.pct >= 75 ? 'ok' : w.pct >= 50 ? 'warn' : 'bad'}"><i style="width:${w.pct}%"></i></div><b class="small">${w.pct}%</b></div>`).join('')
        : '<p class="muted">Aún no hay datos. Haz una sección de Listening o Reading para detectar tus puntos débiles automáticamente.</p>'}
        ${Vocab.weakWords(6).length ? `<p class="small" style="margin-top:10px"><b>Palabras que más fallas:</b> ${Vocab.weakWords(6).map(w => esc(w.w)).join(', ')}</p>` : ''}
      </div>

      <div class="section-title"><h2>🎓 IELTS por destreza</h2><span class="pill blue">${P.ieltsVariant === 'general' ? 'General Training' : 'Academic'}</span></div>
      <div class="grid grid-4">${SKILLS.map(s => skillCard('ielts', s, I[s])).join('')}</div>
      <div class="card" style="margin-top:14px"><h3>Evolución IELTS</h3>${history('ielts')}</div>

      <div class="section-title"><h2>🩺 OET por subtest</h2><span class="pill teal">${esc(professionLabel(P.profession))}</span></div>
      <div class="grid grid-4">${SKILLS.map(s => skillCard('oet', s, O[s])).join('')}</div>
      <div class="card" style="margin-top:14px"><h3>Evolución OET</h3>${history('oet')}</div>

      <div class="section-title"><h2>🕘 Historial</h2></div>
      <div class="card"><div class="table-wrap"><table class="tbl"><tr><th>Fecha</th><th>Sección</th><th>Resultado</th><th></th></tr>
        ${st.attempts.slice().reverse().slice(0, 40).map(a => `<tr><td class="small">${UI.fmtDate(a.date)}</td><td><span class="pill ${a.exam === 'oet' ? 'teal' : 'blue'}">${a.exam.toUpperCase()}</span> ${esc(a.title)}</td>
          <td><b>${a.score == null ? '<span class="pill amber">Evaluar</span>' : a.exam === 'ielts' ? a.score.toFixed(1) : a.score + ' (' + (a.grade || Scoring.oetGrade(a.score)) + ')'}</b>${a.raw != null ? ` <span class="small muted">${a.raw}/${a.max}</span>` : ''}</td>
          <td style="white-space:nowrap"><a class="btn sm ghost" href="#/resultado/${a.id}">Ver</a> <button class="btn sm ghost" data-del="${a.id}" title="Eliminar">🗑</button></td></tr>`).join('') || '<tr><td colspan="4" class="muted">Sin intentos todavía.</td></tr>'}
      </table></div></div>

      <div class="section-title"><h2>⚙️ Perfil y ajustes</h2></div>
      <div class="card"><div class="grid grid-3">
        <label class="field"><span>Tu nombre (aparece en la barra del examen)</span><input type="text" id="pName" value="${esc(P.name)}"></label>
        <label class="field"><span>Objetivo IELTS (banda)</span><select id="pIT">${[5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9].map(v => `<option ${v === P.ieltsTarget ? 'selected' : ''}>${v}</option>`).join('')}</select></label>
        <label class="field"><span>Objetivo OET</span><select id="pOT">${[300, 350, 400, 450].map(v => `<option value="${v}" ${v === P.oetTarget ? 'selected' : ''}>${v} (${Scoring.oetGrade(v)})</option>`).join('')}</select></label>
        <label class="field"><span>Módulo IELTS</span><select id="pIV"><option value="academic" ${P.ieltsVariant === 'academic' ? 'selected' : ''}>Academic</option><option value="general" ${P.ieltsVariant === 'general' ? 'selected' : ''}>General Training</option></select></label>
        <label class="field"><span>Profesión OET</span><select id="pPr">${PROFESSIONS.map(([k, l]) => `<option value="${k}" ${k === P.profession ? 'selected' : ''}>${l}</option>`).join('')}</select></label>
        <label class="field"><span>Modo por defecto</span><select id="pMode"><option value="exam" ${st.settings.mode === 'exam' ? 'selected' : ''}>Examen (tiempo real, audio una vez)</option><option value="practice" ${st.settings.mode === 'practice' ? 'selected' : ''}>Práctica (sin límite, repetir audio)</option></select></label>
        <label class="field"><span>Velocidad del audio: <b id="rateV">${st.settings.rate}</b></span><input type="range" id="pRate" min="0.7" max="1.2" step="0.05" value="${st.settings.rate}"></label>
        <label class="field"><span>Tema</span><select id="pTheme"><option value="auto">Automático</option><option value="light" ${st.settings.theme === 'light' ? 'selected' : ''}>Claro</option><option value="dark" ${st.settings.theme === 'dark' ? 'selected' : ''}>Oscuro</option></select></label>
      </div>
      <div class="btn-row"><button class="btn" id="saveP">Guardar</button><button class="btn ghost" id="testVoice">🔊 Probar voz</button></div></div>

      <div class="card"><h3>💾 Copia de seguridad</h3><p class="small muted">Tu progreso se guarda en este navegador. Exporta un archivo para pasarlo a otro dispositivo (por ejemplo, del ordenador al móvil).</p>
        <div class="btn-row"><button class="btn secondary" id="exp">⬇️ Exportar progreso</button><label class="btn secondary" style="cursor:pointer">⬆️ Importar<input type="file" id="imp" accept="application/json" hidden></label><button class="btn danger" id="rst">Borrar todo</button></div></div>`;

    $$('[data-del]', root).forEach(b => b.onclick = async () => { if (await UI.confirm({ title: 'Eliminar intento', text: 'Esta acción no se puede deshacer.' }, 'Eliminar')) { Store.deleteAttempt(b.dataset.del); render(root); } });
    $('#pRate').oninput = e => $('#rateV').textContent = e.target.value;
    $('#testVoice').onclick = () => TTS.say('Welcome to your practice test. Good luck!', { rate: +$('#pRate').value, g: 'f', speaker: 'T' });
    $('#saveP').onclick = () => {
      Object.assign(P, { name: $('#pName').value.trim(), ieltsTarget: +$('#pIT').value, oetTarget: +$('#pOT').value, ieltsVariant: $('#pIV').value, profession: $('#pPr').value });
      Object.assign(st.settings, { mode: $('#pMode').value, rate: +$('#pRate').value, theme: $('#pTheme').value });
      Store.save(); App.applyTheme(); UI.toast('Ajustes guardados'); render(root);
    };
    $('#pTheme').value = st.settings.theme || 'auto';
    $('#exp').onclick = () => {
      const blob = new Blob([Store.export()], { type: 'application/json' });
      const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'progreso-ielts-oet-' + new Date().toISOString().slice(0, 10) + '.json'; a.click();
    };
    $('#imp').onchange = e => {
      const f = e.target.files[0]; if (!f) return;
      const r = new FileReader();
      r.onload = () => { try { Store.import(r.result); UI.toast('Progreso importado'); render(root); } catch (err) { UI.toast('Archivo no válido'); } };
      r.readAsText(f);
    };
    $('#rst').onclick = async () => { if (await UI.confirm({ title: 'Borrar todo el progreso', text: 'Se eliminarán intentos, vocabulario y ajustes de este navegador.' }, 'Borrar todo')) { Store.reset(); render(root); } };
  }

  const PROFESSIONS = [['nursing', 'Nursing (Enfermería)'], ['medicine', 'Medicine (Medicina)'], ['pharmacy', 'Pharmacy'], ['physiotherapy', 'Physiotherapy'], ['dentistry', 'Dentistry'], ['other', 'Otra profesión sanitaria']];
  function professionLabel(k) { return (PROFESSIONS.find(p => p[0] === k) || ['', k])[1]; }

  return { render, summary, weakAreas, latest, PROFESSIONS, professionLabel };
})();
