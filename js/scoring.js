/* Conversión de puntuaciones y corrección de respuestas. */
const Scoring = (() => {
  // Tablas aproximadas de conversión (respuestas correctas sobre 40 -> banda).
  const IELTS_TABLES = {
    listening: [[39, 9], [37, 8.5], [35, 8], [32, 7.5], [30, 7], [26, 6.5], [23, 6], [18, 5.5], [16, 5], [13, 4.5], [10, 4], [8, 3.5], [6, 3], [4, 2.5], [2, 2], [1, 1], [0, 0]],
    'reading-academic': [[39, 9], [37, 8.5], [35, 8], [33, 7.5], [30, 7], [27, 6.5], [23, 6], [19, 5.5], [15, 5], [13, 4.5], [10, 4], [8, 3.5], [6, 3], [4, 2.5], [2, 2], [1, 1], [0, 0]],
    'reading-general': [[40, 9], [39, 8.5], [37, 8], [36, 7.5], [34, 7], [32, 6.5], [30, 6], [27, 5.5], [23, 5], [19, 4.5], [15, 4], [12, 3.5], [9, 3], [6, 2.5], [3, 2], [1, 1], [0, 0]]
  };

  function ieltsBand(raw, key, max) {
    const scaled = max && max !== 40 ? Math.round(raw * 40 / max) : raw;
    const t = IELTS_TABLES[key] || IELTS_TABLES.listening;
    for (const [min, band] of t) if (scaled >= min) return band;
    return 0;
  }
  // Regla IELTS: media de las 4 destrezas; .25 sube a .5 y .75 sube al entero siguiente.
  function roundIelts(x) { return Math.floor(x * 2 + 0.5) / 2; }

  // OET: 0–500 en pasos de 10. 30/42 respuestas ≈ 350 (grado B). Aproximación lineal por tramos.
  function oetFromRaw(raw, max) {
    const pivot = max * 30 / 42;
    let s = raw <= pivot ? raw / pivot * 350 : 350 + (raw - pivot) / (max - pivot) * 150;
    return Math.max(0, Math.min(500, Math.round(s / 10) * 10));
  }
  function oetGrade(s) {
    if (s >= 450) return 'A'; if (s >= 350) return 'B'; if (s >= 300) return 'C+';
    if (s >= 200) return 'C'; if (s >= 100) return 'D'; return 'E';
  }

  function norm(s) {
    return String(s == null ? '' : s).toLowerCase()
      .replace(/[’‘`]/g, "'").replace(/[£$€]/g, '')
      .replace(/[.,;:!?]+$/g, '').replace(/\s+/g, ' ').trim();
  }
  function words(s) { return norm(s).split(' ').filter(Boolean).length; }

  function checkGap(given, accepted, limit) {
    const g = norm(given);
    if (!g) return false;
    if (limit && words(given) > limit) return false;
    const list = Array.isArray(accepted) ? accepted : [accepted];
    return list.some(a => {
      const n = norm(a);
      return g === n || g.replace(/[\s-]/g, '') === n.replace(/[\s-]/g, '');
    });
  }

  // Etiquetas de tipo de pregunta para el análisis de áreas débiles.
  const TAGS = {
    'form-completion': ['Completar formularios', 'Escucha números, deletreos y fechas. Revisa la ortografía y el límite de palabras.'],
    'note-completion': ['Completar notas', 'Anticipa el tipo de palabra (sustantivo, número, adjetivo) antes de escuchar o leer.'],
    'sentence-completion': ['Completar oraciones', 'La oración debe quedar gramaticalmente correcta; copia la palabra exacta del texto.'],
    'summary-completion': ['Completar resúmenes', 'Lee el resumen completo primero y localiza la sección del texto que resume.'],
    'mcq': ['Opción múltiple', 'Descarta distractores: las opciones incorrectas suelen mencionarse pero se rechazan o matizan.'],
    'multi-select': ['Elegir dos opciones', 'Cada opción correcta vale un punto. Marca exactamente el número pedido.'],
    'map': ['Mapas y planos', 'Ubícate desde el punto de partida y sigue las direcciones (left, opposite, beyond...).'],
    'matching': ['Emparejar información', 'Busca sinónimos y paráfrasis, no las mismas palabras.'],
    'matching-headings': ['Emparejar títulos', 'Identifica la idea principal de cada párrafo, no los detalles.'],
    'matching-endings': ['Emparejar finales de oración', 'Comprueba gramática y significado del inicio con cada final.'],
    'tfng': ['True / False / Not Given', 'FALSE contradice el texto; NOT GIVEN significa que el texto no dice nada al respecto.'],
    'ynng': ['Yes / No / Not Given', 'Se trata de la opinión del autor, no de hechos generales.'],
    'short-answer': ['Respuestas cortas', 'Respeta el límite de palabras y usa palabras del texto.'],
    'oet-a-notes': ['OET Listening A: notas de consulta', 'Escucha síntomas, medicación y antecedentes; escribe términos tal como los oyes.'],
    'oet-b-gist': ['OET Listening B: idea principal', 'Identifica el propósito del hablante (informar, pedir, advertir) en el contexto laboral.'],
    'oet-c-detail': ['OET Listening C: opinión y detalle', 'Atiende a la actitud del hablante y a contrastes (however, actually, but).'],
    'oet-ra-match': ['OET Reading A: localizar texto', 'Lectura rápida (skimming): identifica la función de cada texto en segundos.'],
    'oet-ra-short': ['OET Reading A: respuestas cortas', 'Escaneo de datos: dosis, cifras y nombres de fármacos.'],
    'oet-ra-sentence': ['OET Reading A: completar oraciones', 'Copia la forma exacta del texto (singular/plural, ortografía).'],
    'oet-rb': ['OET Reading B: textos del lugar de trabajo', 'Pregúntate cuál es el propósito o la instrucción principal del documento.'],
    'oet-rc': ['OET Reading C: textos largos', 'Preguntas de inferencia, vocabulario en contexto y actitud del autor.']
  };
  function tagLabel(t) { return (TAGS[t] || [t])[0]; }
  function tagTip(t) { return (TAGS[t] || [, ''])[1]; }

  return { ieltsBand, roundIelts, oetFromRaw, oetGrade, norm, words, checkGap, TAGS, tagLabel, tagTip };
})();
