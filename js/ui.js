/* Utilidades de interfaz. */
const UI = (() => {
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  function fmt(sec) {
    sec = Math.max(0, Math.round(sec));
    const h = Math.floor(sec / 3600), m = Math.floor(sec % 3600 / 60), s = sec % 60;
    return (h ? h + ':' + String(m).padStart(2, '0') : String(m).padStart(2, '0')) + ':' + String(s).padStart(2, '0');
  }
  function fmtDate(iso) {
    const d = new Date(iso);
    return d.toLocaleDateString('es', { day: '2-digit', month: 'short' }) + ' ' + d.toLocaleTimeString('es', { hour: '2-digit', minute: '2-digit' });
  }

  function modal(html, buttons) {
    return new Promise(resolve => {
      const back = document.createElement('div');
      back.className = 'modal-back';
      back.innerHTML = `<div class="modal" role="dialog" aria-modal="true">${html}<div class="btn-row" style="margin-top:16px;justify-content:flex-end"></div></div>`;
      const row = back.querySelector('.btn-row');
      (buttons || [{ label: 'Aceptar', value: true }]).forEach(b => {
        const btn = document.createElement('button');
        btn.className = 'btn ' + (b.cls || '');
        btn.textContent = b.label;
        btn.onclick = () => { back.remove(); resolve(b.value); };
        row.appendChild(btn);
      });
      document.body.appendChild(back);
      row.lastChild && row.lastChild.focus();
    });
  }
  function confirm(msg, ok, cancel) {
    return modal(`<h3>${esc(msg.title || 'Confirmar')}</h3><p>${msg.html || esc(msg.text || '')}</p>`,
      [{ label: cancel || 'Cancelar', value: false, cls: 'ghost' }, { label: ok || 'Aceptar', value: true }]);
  }
  let toastT = null;
  function toast(msg) {
    let t = $('.toast');
    if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); }
    t.textContent = msg; t.classList.remove('hidden');
    clearTimeout(toastT); toastT = setTimeout(() => t.classList.add('hidden'), 2600);
  }

  // Cuenta regresiva basada en hora de fin (sigue siendo precisa si el móvil suspende la pestaña).
  function countdown(endAt, onTick, onDone) {
    let done = false;
    const tick = () => {
      const left = (endAt - Date.now()) / 1000;
      onTick(Math.max(0, left));
      if (left <= 0 && !done) { done = true; clearInterval(iv); onDone && onDone(); }
    };
    const iv = setInterval(tick, 500); tick();
    return { stop() { done = true; clearInterval(iv); } };
  }

  // Gráficos SVG simples
  function barChart(cfg) {
    // cfg: {title, categories, series:[{name, values, color}], yMax, yLabel, unit}
    const W = 640, H = 360, L = 56, R = 16, T = 40, B = 70;
    const cw = (W - L - R) / cfg.categories.length;
    const n = cfg.series.length, bw = Math.min(26, (cw - 14) / n);
    const yMax = cfg.yMax, ticks = 5;
    const y = v => T + (H - T - B) * (1 - v / yMax);
    let s = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(cfg.title)}" font-family="Arial" font-size="12">`;
    s += `<text x="${W / 2}" y="20" text-anchor="middle" font-weight="700" font-size="14" fill="currentColor">${esc(cfg.title)}</text>`;
    for (let i = 0; i <= ticks; i++) {
      const v = yMax / ticks * i, yy = y(v);
      s += `<line x1="${L}" x2="${W - R}" y1="${yy}" y2="${yy}" stroke="currentColor" stroke-opacity=".15"/>`;
      s += `<text x="${L - 6}" y="${yy + 4}" text-anchor="end" fill="currentColor">${+v.toFixed(1)}</text>`;
    }
    if (cfg.yLabel) s += `<text transform="translate(14 ${(T + H - B) / 2}) rotate(-90)" text-anchor="middle" fill="currentColor">${esc(cfg.yLabel)}</text>`;
    cfg.categories.forEach((c, i) => {
      const x0 = L + cw * i + (cw - bw * n) / 2;
      cfg.series.forEach((se, j) => {
        const v = se.values[i];
        s += `<rect x="${x0 + j * bw}" y="${y(v)}" width="${bw - 2}" height="${y(0) - y(v)}" fill="${se.color}"><title>${esc(se.name)}: ${v}</title></rect>`;
      });
      s += `<text x="${L + cw * i + cw / 2}" y="${H - B + 18}" text-anchor="middle" fill="currentColor">${esc(c)}</text>`;
    });
    let lx = L;
    cfg.series.forEach(se => {
      s += `<rect x="${lx}" y="${H - 26}" width="12" height="12" fill="${se.color}"/><text x="${lx + 16}" y="${H - 16}" fill="currentColor">${esc(se.name)}</text>`;
      lx += 26 + se.name.length * 7;
    });
    return s + '</svg>';
  }
  function lineChart(cfg) {
    // cfg: {title, categories, series:[{name, values, color, dash}], yMin, yMax, yLabel}
    const W = 640, H = 360, L = 56, R = 20, T = 40, B = 70;
    const yMin = cfg.yMin || 0, yMax = cfg.yMax, ticks = 5;
    const x = i => L + (W - L - R) * (cfg.categories.length === 1 ? 0.5 : i / (cfg.categories.length - 1));
    const y = v => T + (H - T - B) * (1 - (v - yMin) / (yMax - yMin));
    let s = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(cfg.title || 'Gráfico')}" font-family="Arial" font-size="12">`;
    if (cfg.title) s += `<text x="${W / 2}" y="20" text-anchor="middle" font-weight="700" font-size="14" fill="currentColor">${esc(cfg.title)}</text>`;
    for (let i = 0; i <= ticks; i++) {
      const v = yMin + (yMax - yMin) / ticks * i, yy = y(v);
      s += `<line x1="${L}" x2="${W - R}" y1="${yy}" y2="${yy}" stroke="currentColor" stroke-opacity=".15"/>`;
      s += `<text x="${L - 6}" y="${yy + 4}" text-anchor="end" fill="currentColor">${+v.toFixed(1)}</text>`;
    }
    if (cfg.yLabel) s += `<text transform="translate(14 ${(T + H - B) / 2}) rotate(-90)" text-anchor="middle" fill="currentColor">${esc(cfg.yLabel)}</text>`;
    const every = Math.ceil(cfg.categories.length / 8);
    cfg.categories.forEach((c, i) => { if (i % every === 0 || i === cfg.categories.length - 1) s += `<text x="${x(i)}" y="${H - B + 18}" text-anchor="middle" fill="currentColor">${esc(c)}</text>`; });
    cfg.series.forEach(se => {
      const pts = se.values.map((v, i) => v == null ? null : [x(i), y(v)]).filter(Boolean);
      if (!pts.length) return;
      s += `<polyline fill="none" stroke="${se.color}" stroke-width="2.5" ${se.dash ? 'stroke-dasharray="6 4"' : ''} points="${pts.map(p => p.join(',')).join(' ')}"/>`;
      pts.forEach(p => { s += `<circle cx="${p[0]}" cy="${p[1]}" r="3.5" fill="${se.color}"/>`; });
    });
    let lx = L;
    cfg.series.forEach(se => {
      s += `<line x1="${lx}" x2="${lx + 16}" y1="${H - 20}" y2="${H - 20}" stroke="${se.color}" stroke-width="3" ${se.dash ? 'stroke-dasharray="4 3"' : ''}/><text x="${lx + 20}" y="${H - 16}" fill="currentColor">${esc(se.name)}</text>`;
      lx += 32 + se.name.length * 7;
    });
    return s + '</svg>';
  }
  function pieChart(cfg) {
    // cfg: {title, slices:[{name, value, color}]}
    const W = 320, H = 300, cx = 160, cy = 150, r = 100;
    let s = `<svg viewBox="0 0 ${W} ${H}" font-family="Arial" font-size="12"><text x="${cx}" y="22" text-anchor="middle" font-weight="700" font-size="13" fill="currentColor">${esc(cfg.title)}</text>`;
    const total = cfg.slices.reduce((a, b) => a + b.value, 0);
    let a0 = -Math.PI / 2;
    cfg.slices.forEach(sl => {
      const a1 = a0 + sl.value / total * Math.PI * 2;
      const large = a1 - a0 > Math.PI ? 1 : 0;
      s += `<path d="M${cx},${cy} L${cx + r * Math.cos(a0)},${cy + r * Math.sin(a0)} A${r},${r} 0 ${large} 1 ${cx + r * Math.cos(a1)},${cy + r * Math.sin(a1)} Z" fill="${sl.color}" stroke="#fff" stroke-width="1.5"/>`;
      const am = (a0 + a1) / 2;
      s += `<text x="${cx + (r * .62) * Math.cos(am)}" y="${cy + (r * .62) * Math.sin(am) + 4}" text-anchor="middle" fill="#fff" font-weight="700">${sl.value}%</text>`;
      a0 = a1;
    });
    let ly = 270;
    s += cfg.slices.map((sl, i) => `<rect x="${12 + (i % 3) * 102}" y="${ly + Math.floor(i / 3) * 16 - 10}" width="10" height="10" fill="${sl.color}"/><text x="${26 + (i % 3) * 102}" y="${ly + Math.floor(i / 3) * 16}" fill="currentColor" font-size="11">${esc(sl.name)}</text>`).join('');
    return s + '</svg>';
  }

  return { esc, $, $$, fmt, fmtDate, modal, confirm, toast, countdown, barChart, lineChart, pieChart };
})();
