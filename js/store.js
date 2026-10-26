/* Persistencia en localStorage: intentos, vocabulario, borradores y ajustes. */
window.DATA = window.DATA || { tests: {}, writing: {}, speaking: {}, vocab: {} };

const Store = (() => {
  const KEY = 'simulador-ielts-oet.v1';

  function defaults() {
    return {
      profile: { name: '', ieltsTarget: 7, oetTarget: 350, ieltsVariant: 'academic', profession: 'nursing' },
      settings: { mode: 'exam', rate: 0.95, fontSize: 16, theme: 'auto' },
      attempts: [],
      vocab: {},          // id -> { box, seen, right, wrong, last }
      active: null,       // intento en curso (reading/writing) para poder continuar
      drafts: {},
      activity: {}        // 'YYYY-MM-DD' -> minutos aproximados / sesiones
    };
  }

  let memory = null;
  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const d = defaults(), s = JSON.parse(raw);
        return Object.assign(d, s, {
          profile: Object.assign(d.profile, s.profile || {}),
          settings: Object.assign(d.settings, s.settings || {})
        });
      }
    } catch (e) { /* almacenamiento bloqueado o dañado */ }
    return defaults();
  }
  let state = load();

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); }
    catch (e) { memory = state; UI && UI.toast && UI.toast('No se pudo guardar en este navegador (modo privado o sin espacio).'); }
  }

  function today() { const d = new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
  function logActivity() { const t = today(); state.activity[t] = (state.activity[t] || 0) + 1; }

  function streak() {
    let n = 0; const d = new Date();
    for (;;) {
      const k = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
      if (state.activity[k]) { n++; d.setDate(d.getDate() - 1); }
      else if (n === 0 && k === today()) { d.setDate(d.getDate() - 1); }
      else break;
    }
    return n;
  }

  return {
    get state() { return state; },
    save,
    addAttempt(a) {
      a.id = Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
      a.date = a.date || new Date().toISOString();
      state.attempts.push(a); logActivity(); save();
      return a.id;
    },
    updateAttempt(id, patch) {
      const a = state.attempts.find(x => x.id === id);
      if (a) { Object.assign(a, patch); save(); }
      return a;
    },
    deleteAttempt(id) { state.attempts = state.attempts.filter(a => a.id !== id); save(); },
    getAttempt(id) { return state.attempts.find(a => a.id === id); },
    attempts(filter) { return state.attempts.filter(a => !filter || Object.keys(filter).every(k => a[k] === filter[k])); },
    setActive(a) { state.active = a; save(); },
    clearActive() { state.active = null; save(); },
    vocab(id) { return state.vocab[id] || { box: 0, seen: 0, right: 0, wrong: 0, last: 0 }; },
    setVocab(id, v) { state.vocab[id] = v; logActivity(); save(); },
    logActivity() { logActivity(); save(); },
    streak,
    export() { return JSON.stringify(state, null, 2); },
    import(json) {
      const s = JSON.parse(json);
      if (!s || !Array.isArray(s.attempts)) throw new Error('Archivo no válido');
      state = Object.assign(defaults(), s); save();
    },
    reset() { state = defaults(); save(); }
  };
})();
