/* Estudio: vocabulario y expresiones cotidianas.
   Temas con lista, tarjetas (repetición espaciada), quiz, completar la frase y comprensión auditiva.
   El progreso usa Store.vocab con el prefijo "d:" y los favoritos se guardan en Store.state.favs. */
const Study = (() => {
  const { esc, $, $$ } = UI;
  const DAY = 86400000, INTERVAL = [0, 1, 2, 4, 8, 16].map(d => d * DAY), LEARNED = 3;
  const MODES = [['learn', '📖 Aprender'], ['cards', '🃏 Tarjetas'], ['quiz', '✅ Quiz'], ['gap', '✏️ Completa'], ['listen', '🎧 Escucha']];
  let pool = null;  // { key, title, ico, items }
  let round = null; // cancela temporizadores de la ronda anterior

  /* ---------- Datos y progreso ---------- */
  const topics = () => (DATA.daily && DATA.daily.topics) || [];
  const all = () => topics().flatMap(t => t.items.map(i => Object.assign(i, { topic: t })));
  const id = i => 'd:' + i.topic.id + ':' + i.en;
  const st = i => Store.vocab(id(i));
  const isDue = i => { const s = st(i); return !s.seen || Date.now() - s.last >= INTERVAL[Math.min(s.box, 5)]; };
  const learned = items => items.filter(i => st(i).box >= LEARNED).length;
  const reviewDue = () => all().filter(i => { const s = st(i); return s.seen && s.box < 5 && isDue(i); });
  function favs() { const f = Store.state.favs || (Store.state.favs = {}); return f; }
  const isFav = i => !!favs()[id(i)];
  function toggleFav(i) { const f = favs(); if (f[id(i)]) delete f[id(i)]; else f[id(i)] = 1; Store.save(); return !!f[id(i)]; }
  function mark(i, ok) {
    const s = st(i);
    s.seen++; s.last = Date.now();
    if (ok) { s.right++; s.box = Math.min(5, s.box + 1); } else { s.wrong++; s.box = 0; }
    Store.setVocab(id(i), s);
  }
  const gapText = i => (i.gap || i.en).replace(/\s*\.\.\.\s*$/, '').replace(/[?!.]+$/, '').trim();
  function shuffle(a) { a = a.slice(); for (let k = a.length - 1; k > 0; k--) { const j = Math.floor(Math.random() * (k + 1)); [a[k], a[j]] = [a[j], a[k]]; } return a; }
  function pick(items, n) {
    const d = shuffle(items.filter(isDue)).sort((a, b) => st(a).box - st(b).box);
    const rest = shuffle(items.filter(i => !d.includes(i))).sort((a, b) => st(a).box - st(b).box);
    return d.concat(rest).slice(0, n);
  }
  function distractors(i, n, key) {
    const val = x => key(x).toLowerCase();
    const same = shuffle(i.topic.items.filter(x => x !== i && val(x) !== val(i)));
    const other = shuffle(all().filter(x => x.topic !== i.topic && val(x) !== val(i)));
    const out = [];
    for (const x of same.concat(other)) { if (out.length >= n) break; if (!out.some(o => val(o) === val(x))) out.push(x); }
    return out;
  }
  function stats() { const a = all(); return { total: a.length, learned: learned(a), due: reviewDue().length, favs: Object.keys(favs()).length }; }
  function daily() { const a = all(); if (!a.length) return null; const d = new Date(); const n = d.getFullYear() * 400 + d.getMonth() * 31 + d.getDate(); return a[(n * 7919) % a.length]; }
  const say = (t, rate) => TTS.say(t, { g: 'f', speaker: 'V', rate });
  const ttsOk = () => typeof TTS !== 'undefined' && TTS.supported();

  /* ---------- Piezas de interfaz ---------- */
  const tagPill = i => i.tag ? `<span class="pill ${i.tag === 'formal' ? 'blue' : 'amber'}">${i.tag}</span>` : '';
  function itemRow(i, showTopic) {
    return `<div class="ex-item" data-id="${esc(id(i))}">
      <div class="ex-head"><b class="ex-en">${esc(i.en)}</b>${tagPill(i)}
        <span class="ex-actions"><button class="icon-round" data-say="${esc(i.en)}" aria-label="Escuchar">🔊</button><button class="icon-round fav ${isFav(i) ? 'on' : ''}" data-fav aria-label="Favorita">${isFav(i) ? '★' : '☆'}</button></span></div>
      <div class="ex-es">🇪🇸 ${esc(i.es)}</div>
      <div class="ex-ex"><button class="link-say" data-say="${esc(i.ex)}" aria-label="Escuchar ejemplo">🔊</button><i>${esc(i.ex)}</i></div>
      ${i.note ? `<div class="ex-note">💡 ${esc(i.note)}</div>` : ''}
      ${showTopic ? `<div class="small muted" style="margin-top:4px">${i.topic.ico} ${esc(i.topic.name)}</div>` : ''}
    </div>`;
  }
  function bindRows(box, items) {
    $$('[data-say]', box).forEach(b => b.onclick = e => { e.stopPropagation(); say(b.dataset.say); });
    $$('[data-fav]', box).forEach(b => b.onclick = () => {
      const i = items.find(x => id(x) === b.closest('.ex-item').dataset.id);
      const on = toggleFav(i);
      b.classList.toggle('on', on); b.textContent = on ? '★' : '☆';
      UI.toast(on ? 'Añadida a favoritas' : 'Quitada de favoritas');
    });
  }
  function progressBar(items) {
    const l = learned(items), p = items.length ? Math.round(l / items.length * 100) : 0;
    return `<div class="bar ok"><i style="width:${p}%"></i></div><span class="small muted">${l}/${items.length} aprendidas</span>`;
  }

  /* ---------- Portada de la sección ---------- */
  function home(root) {
    const s = stats(), d = daily();
    root.innerHTML = `
      <h1 style="margin-bottom:4px">📘 Estudio diario</h1>
      <p class="muted" style="margin-top:0">Vocabulario y expresiones cotidianas en inglés, con traducción, ejemplos y audio. Repasa unos minutos cada día.</p>
      ${d ? `<div class="card day-card"><div class="small" style="opacity:.85;font-weight:700;letter-spacing:.4px">⭐ EXPRESIÓN DEL DÍA</div>
        <div class="day-en">${esc(d.en)}</div><div class="day-es">${esc(d.es)}</div><div class="day-ex"><i>“${esc(d.ex)}”</i></div>
        ${d.note ? `<div class="small" style="opacity:.9;margin-top:6px">💡 ${esc(d.note)}</div>` : ''}
        <div class="btn-row" style="margin-top:12px"><button class="btn sm" id="dSay">🔊 Escuchar</button><button class="btn sm" id="dFav">${isFav(d) ? '★ En favoritas' : '☆ Guardar'}</button><a class="btn sm" href="#/estudio/${d.topic.id}">${d.topic.ico} Ver tema</a></div></div>` : ''}
      <div class="study-stats">
        <div class="card stat"><span class="lbl">Aprendidas</span><span class="val">${s.learned}<small>/${s.total}</small></span></div>
        <a class="card stat" href="#/estudio/repaso"><span class="lbl">Para repasar</span><span class="val">${s.due}</span><span class="small muted">Repaso ›</span></a>
        <a class="card stat" href="#/estudio/favoritas"><span class="lbl">Favoritas</span><span class="val">${s.favs}</span><span class="small muted">Practicar ›</span></a>
      </div>
      <div class="search-box"><input type="search" id="q" placeholder="🔎 Buscar en inglés o español (p. ej. «cuenta», «catch up»)" autocomplete="off"></div>
      <div id="results"></div>
      <div id="topicsWrap">
        <div class="section-title"><h2>Temas</h2><span class="small muted">${topics().length} temas · ${s.total} expresiones</span></div>
        <div class="topic-grid">${topics().map(t => `<a class="card topic-card" href="#/estudio/${t.id}">
          <div class="t-ico">${t.ico}</div><b>${esc(t.name)}</b><span class="small muted t-desc">${esc(t.desc)}</span>${progressBar(t.items)}</a>`).join('')}</div>
      </div>
      <div class="card" style="margin-top:16px"><h3 style="margin-top:0">¿Cómo estudiar aquí?</h3>
        <ol class="small" style="padding-left:18px;margin:0">
          <li><b>Aprender:</b> lee la lista de un tema, escucha el audio y marca con ☆ las que quieras recordar.</li>
          <li><b>Tarjetas:</b> intenta recordar el significado antes de girarla. Lo que fallas vuelve antes (repetición espaciada).</li>
          <li><b>Quiz, Completa y Escucha:</b> comprueba si reconoces y usas cada expresión en contexto.</li>
          <li>Vuelve cada día a <b>Para repasar</b>: aparecen las expresiones que toca recordar hoy.</li>
        </ol></div>`;
    if (d) {
      $('#dSay').onclick = () => say(d.en + '. ' + d.ex);
      $('#dFav').onclick = e => { const on = toggleFav(d); e.target.textContent = on ? '★ En favoritas' : '☆ Guardar'; };
    }
    const q = $('#q');
    q.oninput = () => search(q.value);
    try { const last = sessionStorage.getItem('studyQ'); if (last) { q.value = last; search(last); } } catch (e) { }
  }
  function search(raw) {
    try { sessionStorage.setItem('studyQ', raw); } catch (e) { }
    const norm = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[’']/g, "'");
    const q = norm(raw.trim()), box = $('#results'), wrap = $('#topicsWrap');
    if (q.length < 2) { box.innerHTML = ''; wrap.style.display = ''; return; }
    const hits = all().filter(i => norm(i.en + ' ' + i.es + ' ' + i.ex).includes(q)).slice(0, 40);
    wrap.style.display = 'none';
    box.innerHTML = `<div class="section-title"><h2>Resultados</h2><span class="small muted">${hits.length}${hits.length === 40 ? '+' : ''}</span></div>
      ${hits.length ? `<div class="ex-list">${hits.map(i => itemRow(i, true)).join('')}</div>` : '<p class="muted">No hay coincidencias. Prueba con otra palabra.</p>'}`;
    bindRows(box, hits);
  }

  /* ---------- Página de un tema / repaso / favoritas ---------- */
  function open(root, key) {
    if (key === 'repaso') pool = { key, ico: '🔁', title: 'Repaso del día', desc: 'Expresiones que ya has visto y toca recordar hoy.', items: reviewDue() };
    else if (key === 'favoritas') pool = { key, ico: '★', title: 'Mis favoritas', desc: 'Las expresiones que has guardado.', items: all().filter(isFav) };
    else {
      const t = topics().find(x => x.id === key);
      if (!t) { location.hash = '#/estudio'; return; }
      all(); // asegura i.topic
      pool = { key, ico: t.ico, title: t.name, desc: t.desc, items: t.items };
    }
    let mode = 'learn';
    try { mode = sessionStorage.getItem('studyMode') || 'learn'; } catch (e) { }
    if (key === 'repaso' && mode === 'learn') mode = 'cards';
    root.innerHTML = `
      <a href="#/estudio" class="back-link">‹ Estudio</a>
      <div class="section-title" style="margin-top:6px"><div><h1 style="margin:0">${pool.ico} ${esc(pool.title)}</h1><p class="muted" style="margin:0">${esc(pool.desc)}</p></div></div>
      ${pool.items.length ? `<div class="topic-progress">${progressBar(pool.items)}</div>
      <div class="mode-tabs" id="modeTabs">${MODES.map(([m, l]) => `<button data-m="${m}">${l}</button>`).join('')}</div>
      <div id="studyBox"></div>`
      : `<div class="card center" style="padding:28px"><p>${key === 'repaso' ? '🎉 No tienes nada pendiente de repaso hoy. Estudia un tema nuevo y vuelve mañana.' : 'Aún no tienes favoritas. Toca ☆ en cualquier expresión para guardarla aquí.'}</p><a class="btn" href="#/estudio">Ver temas</a></div>`}`;
    if (!pool.items.length) return;
    const show = m => {
      stopRound();
      try { sessionStorage.setItem('studyMode', m); } catch (e) { }
      $$('#modeTabs button').forEach(b => b.classList.toggle('active', b.dataset.m === m));
      ({ learn, cards, quiz, gap, listen })[m]($('#studyBox'));
    };
    $$('#modeTabs button').forEach(b => b.onclick = () => show(b.dataset.m));
    show(MODES.some(([m]) => m === mode) ? mode : 'learn');
  }
  function stopRound() { if (round) { round.cancelled = true; round = null; } if (typeof TTS !== 'undefined') TTS.stop(false); }

  function learn(box) {
    box.innerHTML = `<div class="ex-list">${pool.items.map(i => itemRow(i, pool.key === 'favoritas' || pool.key === 'repaso')).join('')}</div>
      <div class="btn-row" style="margin-top:16px;justify-content:center"><button class="btn" id="goCards">🃏 Practicar con tarjetas</button></div>`;
    bindRows(box, pool.items);
    $('#goCards').onclick = () => { $('#modeTabs [data-m="cards"]').click(); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  }

  function finish(box, right, total, missed, again) {
    const pct = total ? Math.round(right / total * 100) : 0;
    box.innerHTML = `<div class="card center" style="padding:22px">
      <div style="font-size:2.4rem">${pct >= 80 ? '🎉' : pct >= 50 ? '👍' : '💪'}</div>
      <h3 style="margin:6px 0">Ronda terminada</h3>
      <p class="stat" style="margin:0"><span class="val">${right}/${total}</span><span class="lbl">aciertos</span></p>
      <div class="btn-row" style="justify-content:center;margin-top:14px"><button class="btn" id="again">Otra ronda</button><a class="btn ghost" href="#/estudio">Volver a temas</a></div></div>
      ${missed.length ? `<h3>Para repasar</h3><div class="ex-list">${missed.map(i => itemRow(i, false)).join('')}</div>` : ''}`;
    bindRows(box, missed);
    $('#again').onclick = again;
  }
  function counter(k, n) { return `<div class="round-top"><span class="small muted">${k + 1} / ${n}</span><div class="bar"><i style="width:${Math.round(k / n * 100)}%"></i></div></div>`; }

  /* Tarjetas: el usuario elige la dirección y se autoevalúa. */
  function cards(box) {
    let dir = 'en';
    try { dir = sessionStorage.getItem('studyDir') || 'en'; } catch (e) { }
    const list = pick(pool.items, 12), missed = []; let k = 0, right = 0;
    const r = round = {};
    const show = () => {
      if (r.cancelled) return;
      if (k >= list.length) return finish(box, right, list.length, missed, () => cards(box));
      const i = list[k], front = dir === 'en' ? i.en : i.es;
      box.innerHTML = `${counter(k, list.length)}
        <div class="seg seg-sm" id="dirSeg"><button data-d="en" class="${dir === 'en' ? 'active' : ''}">Inglés → Español</button><button data-d="es" class="${dir === 'es' ? 'active' : ''}">Español → Inglés</button></div>
        <div class="study-card" id="sc" role="button" tabindex="0" aria-label="Mostrar respuesta">
          <div class="sc-front">${esc(front)}</div>
          ${dir === 'en' ? `<button class="btn sm ghost" id="scSay" style="margin-top:10px">🔊 Escuchar</button>` : ''}
          <div class="sc-back hidden" id="scBack">
            <div class="sc-answer">${esc(dir === 'en' ? i.es : i.en)}</div>
            <div class="ex-ex"><button class="link-say" id="exSay" aria-label="Escuchar ejemplo">🔊</button><i>${esc(i.ex)}</i></div>
            ${i.note ? `<div class="ex-note">💡 ${esc(i.note)}</div>` : ''}
          </div>
          <div class="small muted" id="scHint" style="margin-top:12px">Piensa la respuesta y toca la tarjeta</div>
        </div>
        <div class="btn-row grade-row hidden" id="grade"><button class="btn danger" id="no">✗ No la sabía</button><button class="btn accent" id="yes">✓ La sabía</button></div>
        <div class="btn-row grade-row" id="reveal"><button class="btn block" id="showBtn">Mostrar respuesta</button></div>`;
      const reveal = () => {
        if (!$('#scBack').classList.contains('hidden')) return;
        $('#scBack').classList.remove('hidden'); $('#scHint').classList.add('hidden');
        $('#grade').classList.remove('hidden'); $('#reveal').classList.add('hidden');
        if (dir === 'es') say(i.en);
      };
      $('#sc').onclick = e => { if (!e.target.closest('button')) reveal(); };
      $('#sc').onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); reveal(); } };
      $('#showBtn').onclick = reveal;
      if ($('#scSay')) $('#scSay').onclick = () => say(i.en);
      $('#exSay').onclick = () => say(i.ex);
      $('#yes').onclick = () => { mark(i, true); right++; k++; show(); };
      $('#no').onclick = () => { mark(i, false); missed.push(i); k++; show(); };
      $$('#dirSeg button').forEach(b => b.onclick = () => { dir = b.dataset.d; try { sessionStorage.setItem('studyDir', dir); } catch (e) { } show(); });
    };
    show();
  }

  /* Opción múltiple genérica. */
  function choiceRound(box, n, build) {
    const list = pick(pool.items, n), missed = []; let k = 0, right = 0;
    const r = round = {};
    const again = () => choiceRound(box, n, build);
    const show = () => {
      if (r.cancelled) return;
      if (k >= list.length) return finish(box, right, list.length, missed, again);
      const i = list[k], q = build(i);
      const opts = shuffle([i, ...distractors(i, 3, q.key)]);
      box.innerHTML = `${counter(k, list.length)}<div class="card q-card">${q.html}</div>
        <div class="opts-list">${opts.map((o, j) => `<button class="quiz-opt" data-j="${j}">${esc(q.key(o))}</button>`).join('')}</div><div id="fb"></div>`;
      if (q.bind) q.bind(r);
      $$('.quiz-opt', box).forEach(b => b.onclick = () => {
        const ok = opts[+b.dataset.j] === i;
        $$('.quiz-opt', box).forEach((x, j) => { x.disabled = true; if (opts[j] === i) x.classList.add('right'); });
        if (ok) right++; else { b.classList.add('wrong'); missed.push(i); }
        mark(i, ok);
        $('#fb').innerHTML = `<div class="feedback ${ok ? 'ok' : 'bad'}"><b>${ok ? '✓ ¡Correcto!' : '✗ Respuesta correcta: ' + esc(q.key(i))}</b>
          <div style="margin-top:6px"><b>${esc(i.en)}</b> — ${esc(i.es)}</div><div class="small"><i>${esc(i.ex)}</i></div>${i.note ? `<div class="small muted">💡 ${esc(i.note)}</div>` : ''}</div>
          <button class="btn block" id="nx" style="margin-top:10px">Siguiente ›</button>`;
        $('#nx').onclick = () => { k++; show(); window.scrollTo({ top: 0, behavior: 'smooth' }); };
        if (ok) say(i.en);
      });
    };
    show();
  }

  function quiz(box) {
    choiceRound(box, 10, i => Math.random() < 0.5
      ? { key: o => o.es, html: `<div class="small muted">¿Qué significa?</div><div class="q-big">${esc(i.en)} <button class="icon-round" id="qSay" aria-label="Escuchar">🔊</button></div>`, bind: () => { $('#qSay').onclick = () => say(i.en); } }
      : { key: o => o.en, html: `<div class="small muted">¿Cómo se dice en inglés?</div><div class="q-big">${esc(i.es)}</div>` });
  }

  function gap(box) {
    choiceRound(box, 10, i => {
      const g = gapText(i), at = i.ex.toLowerCase().indexOf(g.toLowerCase());
      const sentence = at < 0 ? esc(i.ex) : esc(i.ex.slice(0, at)) + '<span class="gap-blank">&nbsp;</span>' + esc(i.ex.slice(at + g.length));
      return { key: gapText, html: `<div class="small muted">Completa la frase</div><div class="q-sent">${sentence}</div>
        <details class="small" style="margin-top:8px"><summary>Ver pista en español</summary>${esc(i.es)}</details>` };
    });
  }

  function listen(box) {
    if (!ttsOk()) { box.innerHTML = '<div class="alert warn">Tu navegador no permite la síntesis de voz. Prueba con Chrome, Edge o Safari.</div>'; return; }
    choiceRound(box, 8, i => ({
      key: o => o.es,
      html: `<div class="small muted">Escucha la frase y elige el significado de la expresión que contiene</div>
        <div class="btn-row" style="margin-top:10px"><button class="btn" id="lPlay">🔊 Escuchar</button><button class="btn ghost" id="lSlow">🐢 Más lento</button></div>`,
      bind: r => {
        $('#lPlay').onclick = () => say(i.ex);
        $('#lSlow').onclick = () => say(i.ex, 0.7);
        setTimeout(() => { if (!r.cancelled) say(i.ex); }, 350);
      }
    }));
  }

  function render(root, key) { stopRound(); if (key) open(root, key); else home(root); }
  return { render, stats, cleanup: stopRound };
})();
