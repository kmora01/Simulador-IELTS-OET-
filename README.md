# Simulador IELTS & OET

Simulador web (estático, sin servidor) para preparar **IELTS** (Academic y General Training) y **OET** (Occupational English Test), adaptado a móviles.

## Qué incluye
- **Listening** con audio generado por voz del navegador, reproducido una sola vez en modo examen, pausas para leer preguntas y tiempo de revisión.
- **Reading** con texto y preguntas en pantalla dividida, resaltado de texto, marcado de preguntas y temporizador (OET: Part A de 15 min que se cierra sola).
- **Writing** con temporizador, contador de palabras, análisis automático, autoevaluación con los criterios oficiales y respuestas modelo.
- **Speaking** con examinador/paciente por voz, tiempos de preparación, grabación, transcripción y métricas.
- **Puntuación estimada**: bandas IELTS (0–9) y escala OET (0–500, grados A–E).
- **Progreso** guardado en el navegador (localStorage), panel de áreas débiles, historial y exportación/importación.
- **Speaking y Vocabulario**: preguntas rápidas, shadowing, frases útiles y 6 mazos con repetición espaciada, quiz, dictado y pronunciación.

Todo el contenido de práctica es original. No está afiliado a IELTS ni a OET.

## Publicación
El workflow `.github/workflows/pages.yml` publica el sitio en GitHub Pages en cada push. En **Settings → Pages**, elige **Source: GitHub Actions**.

## Uso local
Abre `index.html` o ejecuta `python3 -m http.server` y visita `http://localhost:8000`. Para el micrófono y el reconocimiento de voz se recomienda Chrome o Edge.

## Añadir contenido
Los exámenes están en `data/`. Cada archivo registra un test en `DATA.tests` con partes, textos/audio y grupos de preguntas (`gap`, `mcq`, `multi`, `match`, `tfng`, `ynng`).
