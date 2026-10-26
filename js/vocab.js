/* Vocabulario: tarjetas con repetición espaciada (Leitner), quiz, dictado y pronunciación. */
const Vocab = (() => {
  const { esc, $, $$ } = UI;
  const DAY = 86400000, INTERVAL = [0, 1, 2, 4, 8, 16].map(d => d * DAY);
  let deck = null, mode = 'flash';

  const wid = (d, w) => d.id + ':' + w.w;
  function due(d) { const now = Date.now(); return d.words.filter(w => { const s = Store.vocab(wid(d, w)); return !s.seen || now - s.last >= INTERVAL[Math.min(s.box, 5)]; }); }
  function mastered(d) { return d.words.filter(w => Store.vocab(wid(d, w)).box >= 4).length; }
  function stats() {
    let total = 0, m = 0, seen = 0;
    DATA.vocab.decks.forEach(d => { total += d.words.length; m += mastered(d); seen += d.words.filter(w => Store.vocab(wid(d, w)).seen).length; });
    return { total, mastered: m, seen };
  }
  function weakWords(n) {
    const out = [];
    DATA.vocab.decks.forEach(d => d.words.forEach(w => { const s = Store.vocab(wid(d, w)); if (s.wrong > 0) out.push({ w: w.w, deck: d.name, ratio: s.wrong / (s.right + s.wrong) }); }));
    return out.sort((a, b) => b.ratio - a.ratio).slice(0, n);
  }
  function mark(d, w, ok) {
    const s = Store.vocab(wid(d, w));
    s.seen++; s.last = Date.now();
    if (ok) { s.right++; s.box = Math.min(5, s.box + 1); } else { s.wrong++; s.box = 0; }
    Store.setVocab(wid(d, w), s);
  }
  function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  function sessionWords(d, n) {
    const du = shuffle(due(d));
    const rest = shuffle(d.words.filter(w => !du.includes(w))).sort((a, b) => Store.vocab(wid(d, a)).box - Store.vocab(wid(d, b)).box);
    return du.concat(rest).slice(0, n || 15);
  }

  function view(root) {
    const decks = DATA.vocab.decks;
    root.innerHTML = `
      <div class="grid grid-3" id="decks">${decks.map(d => {
        const m = mastered(d), dd = due(d).length;
        return `<button class="card test-card" data-deck="${d.id}" style="text-align:left;cursor:pointer">
          <div class="meta"><span class="pill ${d.exam === 'oet' ? 'teal' : 'blue'}">${d.exam.toUpperCase()}</span><span class="pill">${d.words.length} palabras</span></div>
          <b>${esc(d.name)}</b><span class="small muted">${esc(d.desc)}</span>
          <div class="bar ok"><i style="width:${Math.round(m / d.words.length * 100)}%"></i></div>
          <span class="small muted">${m} dominadas · ${dd} para repasar hoy</span></button>`;
      }).join('')}</div>
      <div id="deckArea" style="margin-top:16px"></div>`;
    $$('[data-deck]', root).forEach(b => b.onclick = () => { deck = decks.find(d => d.id === b.dataset.deck); openDeck(); $('#deckArea').scrollIntoView({ behavior: 'smooth' }); });
  }

  function openDeck() {
    const area = $('#deckArea');
    const boxes = [0, 1, 2, 3, 4, 5].map(b => deck.words.filter(w => Store.vocab(wid(deck, w)).box === b).length);
    area.innerHTML = `<div class="card">
      <div class="section-title" style="margin-top:0"><h3 style="margin:0">${esc(deck.name)}</h3><button class="btn sm ghost" id="listBtn">📖 Lista</button></div>
      <div class="leitner" title="Cajas de repetición espaciada">${boxes.map((n, i) => `<div><b>${n}</b>${i === 0 ? 'Nuevas/falladas' : 'Caja ' + i}</div>`).join('')}</div>
      <div class="tabs" style="margin-top:14px">
        <button data-m="flash" class="${mode === 'flash' ? 'active' : ''}">Tarjetas</button>
        <button data-m="quiz" class="${mode === 'quiz' ? 'active' : ''}">Quiz</button>
        <button data-m="dict" class="${mode === 'dict' ? 'active' : ''}">Dictado</button>
        <button data-m="pron" class="${mode === 'pron' ? 'active' : ''}">Pronunciación</button>
      </div><div id="modeBox"></div></div>`;
    $$('[data-m]', area).forEach(b => b.onclick = () => { mode = b.dataset.m; openDeck(); });
    $('#listBtn').onclick = () => {
      $('#modeBox').innerHTML = `<div class="table-wrap"><table class="tbl"><tr><th>Palabra</th><th>Significado</th><th>Español</th><th>Caja</th></tr>${deck.words.map(w => `<tr><td><b>${esc(w.w)}</b> <button class="btn sm ghost" data-say="${esc(w.w)}">🔊</button></td><td>${esc(w.d)}<div class="small muted"><i>${esc(w.ex)}</i></div></td><td>${esc(w.es)}</td><td>${Store.vocab(wid(deck, w)).box}</td></tr>`).join('')}</table></div>`;
      $$('#modeBox [data-say]').forEach(b => b.onclick = () => TTS.say(b.dataset.say, { g: 'f', speaker: 'V' }));
    };
    ({ flash, quiz, dict, pron })[mode]();
  }

  function finishBox(right, total) {
    $('#modeBox').innerHTML = `<div class="center" style="padding:20px"><h3>¡Sesión terminada!</h3><p class="stat"><span class="val">${right}/${total}</span><span class="lbl">aciertos</span></p><button class="btn" id="again">Otra ronda</button></div>`;
    $('#again').onclick = openDeck;
  }

  function flash() {
    const list = sessionWords(deck, 15); let i = 0, right = 0;
    const show = () => {
      if (i >= list.length) return finishBox(right, list.length);
      const w = list[i];
      $('#modeBox').innerHTML = `<p class="small muted center">${i + 1} / ${list.length} · Toca la tarjeta para girarla</p>
        <div class="flash" id="fc"><div class="flash-inner">
          <div class="flash-face"><div class="word">${esc(w.w)}</div><div class="muted small">${esc(w.pos || '')}</div><button class="btn sm ghost" id="say" style="margin-top:10px">🔊</button></div>
          <div class="flash-face back"><p><b>${esc(w.d)}</b></p><p class="muted">🇪🇸 ${esc(w.es)}</p><p class="small"><i>“${esc(w.ex)}”</i></p></div>
        </div></div>
        <div class="btn-row" style="justify-content:center;margin-top:16px"><button class="btn danger" id="no">✗ Repasar</button><button class="btn accent" id="yes">✓ La sabía</button></div>`;
      $('#fc').onclick = e => { if (e.target.id !== 'say') $('#fc').classList.toggle('flipped'); };
      $('#say').onclick = e => { e.stopPropagation(); TTS.say(w.w, { g: 'f', speaker: 'V' }); };
      $('#yes').onclick = () => { mark(deck, w, true); right++; i++; show(); };
      $('#no').onclick = () => { mark(deck, w, false); i++; show(); };
    };
    show();
  }

  function quiz() {
    const list = sessionWords(deck, 10); let i = 0, right = 0;
    const show = () => {
      if (i >= list.length) return finishBox(right, list.length);
      const w = list[i];
      const dir = Math.random() < 0.5;
      const others = shuffle(deck.words.filter(x => x !== w)).slice(0, 3);
      const opts = shuffle([w, ...others]);
      $('#modeBox').innerHTML = `<p class="small muted">${i + 1} / ${list.length}</p>
        <h3>${dir ? `¿Qué palabra significa: <i>“${esc(w.d)}”</i>?` : `¿Qué significa <b>${esc(w.w)}</b>?`}</h3>
        <div>${opts.map((o, k) => `<button class="quiz-opt" data-k="${k}">${esc(dir ? o.w : o.d)}</button>`).join('')}</div><div id="fb"></div>`;
      $$('.quiz-opt').forEach(b => b.onclick = () => {
        const o = opts[+b.dataset.k], ok = o === w;
        $$('.quiz-opt').forEach((x, k) => { x.disabled = true; if (opts[k] === w) x.classList.add('right'); });
        if (!ok) b.classList.add('wrong'); else right++;
        mark(deck, w, ok);
        $('#fb').innerHTML = `<p class="small"><i>“${esc(w.ex)}”</i> — 🇪🇸 ${esc(w.es)}</p><button class="btn" id="nx">Siguiente ›</button>`;
        $('#nx').onclick = () => { i++; show(); };
      });
    };
    show();
  }

  function dict() {
    if (!TTS.supported()) { $('#modeBox').innerHTML = '<div class="alert warn">Tu navegador no permite la síntesis de voz.</div>'; return; }
    const list = sessionWords(deck, 10); let i = 0, right = 0;
    const show = () => {
      if (i >= list.length) return finishBox(right, list.length);
      const w = list[i];
      $('#modeBox').innerHTML = `<p class="small muted">${i + 1} / ${list.length} · Escucha y escribe la palabra (la ortografía cuenta en IELTS y OET)</p>
        <div class="btn-row"><button class="btn" id="pl">🔊 Escuchar</button><button class="btn ghost" id="pl2">🔊 En una frase</button></div>
        <input type="text" id="ans" autocomplete="off" autocapitalize="off" spellcheck="false" style="margin-top:12px;font-size:1.2rem" placeholder="Escribe aquí">
        <div class="btn-row" style="margin-top:10px"><button class="btn accent" id="chk">Comprobar</button></div><div id="fb" style="margin-top:10px"></div>`;
      const say = () => TTS.say(w.w, { g: 'f', speaker: 'V', rate: 0.85 });
      $('#pl').onclick = say; $('#pl2').onclick = () => TTS.say(w.ex, { g: 'f', speaker: 'V' });
      setTimeout(say, 300);
      const check = () => {
        const ok = Scoring.norm($('#ans').value) === Scoring.norm(w.w);
        if (ok) right++;
        mark(deck, w, ok);
        $('#fb').innerHTML = `<p class="${ok ? 'ok-t' : 'bad-t'}">${ok ? '✓ Correcto' : '✗ Correcto: ' + esc(w.w)}</p><p class="small muted">${esc(w.d)}</p><button class="btn" id="nx">Siguiente ›</button>`;
        $('#chk').disabled = true; $('#nx').onclick = () => { i++; show(); };
      };
      $('#chk').onclick = check;
      $('#ans').onkeydown = e => { if (e.key === 'Enter' && !$('#chk').disabled) check(); };
      $('#ans').focus();
    };
    show();
  }

  function pron() {
    if (!STT.supported()) { $('#modeBox').innerHTML = '<div class="alert warn">El reconocimiento de voz necesita Chrome, Edge o Safari reciente. Puedes practicar escuchando con el modo Tarjetas.</div>'; return; }
    const list = sessionWords(deck, 10); let i = 0, right = 0;
    const show = () => {
      if (i >= list.length) return finishBox(right, list.length);
      const w = list[i];
      $('#modeBox').innerHTML = `<p class="small muted">${i + 1} / ${list.length}</p><div class="center"><div style="font-size:2rem;font-weight:800">${esc(w.w)}</div><p class="muted">${esc(w.d)}</p>
        <div class="btn-row" style="justify-content:center"><button class="btn ghost" id="pl">🔊 Modelo</button><button class="btn" id="rec">🎙️ Decir</button><button class="btn ghost" id="sk">Saltar</button></div><div id="fb" style="margin-top:12px"></div></div>`;
      $('#pl').onclick = () => TTS.say(w.w, { g: 'f', speaker: 'V' });
      $('#sk').onclick = () => { i++; show(); };
      $('#rec').onclick = () => {
        $('#fb').innerHTML = '<span class="rec-dot"></span>Escuchando…'; let heard = '';
        STT.start(t => heard = t);
        setTimeout(() => {
          const got = (STT.stop() || heard).toLowerCase();
          const ok = got.includes(w.w.toLowerCase());
          if (ok) right++;
          mark(deck, w, ok);
          $('#fb').innerHTML = `<p class="${ok ? 'ok-t' : 'bad-t'}">${ok ? '✓ ¡Bien pronunciada!' : '✗ El navegador oyó: “' + esc(got || '—') + '”'}</p><button class="btn" id="nx">Siguiente ›</button>`;
          $('#nx').onclick = () => { i++; show(); };
        }, 3500);
      };
    };
    show();
  }

  return { view, stats, weakWords, due };
})();
