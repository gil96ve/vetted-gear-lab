# SCRIPT_RULE.md — Regla permanente de generación de guiones

Todo guion de video de 30 segundos de Vetted Gear Lab **debe** seguir esta secuencia de 5 pasos, sin excepciones. Este archivo es la fuente de verdad; los agentes lo leen antes de escribir cualquier guion.

## Restricciones globales

- **Tono:** experto, analítico, objetivo, orientado a resolver problemas. Sin hype, sin exageraciones, sin fingir posesión física del producto si el análisis se hizo por especificaciones.
- **Idioma:** inglés estadounidense nativo, para audiencia de EE. UU.
- **Extensión:** entre **65 y 78 palabras habladas** (~140–150 WPM) para encajar en 30.0 segundos.
- **Cumplimiento:** en videos cortos usar `#ad` en el caption; en descripciones largas usar "As an Amazon Associate I earn from qualifying purchases." Nunca mencionar precios fijos.
- **Salida por SKU:** guardar en `scripts/<SKU>/script.md` y los prompts visuales en `assets/<SKU>/prompts.md`. Usar `npm run new-sku -- <SKU>` para crear la estructura.

## Paso 1 — 10 pain points

Identificar 10 problemas reales de consumidores estadounidenses que el producto resuelve o mitiga. Deben ser concretos y verificables (ruido, compatibilidad, duración de batería, espacio, mantenimiento, seguridad, etc.), no generalidades de marketing.

## Paso 2 — 10 hook questions

Escribir 10 preguntas de apertura agudas y analíticas, una por pain point. Cada pregunta debe plantearse en menos de 3 segundos de lectura y generar curiosidad técnica, no curiosidad vacía.

## Paso 3 — Combinación ganadora #1

Elegir el par (pain point + pregunta) con mayor retención y justificar por qué detiene el scroll en menos de 3 segundos. Documentar el criterio: specificity, relevance, tension and visualizability.

## Paso 4 — Guion de 30 segundos (tabla de 4 columnas)

| Time | Beat | Content | Visual / Audio cue |
|---|---|---|---|
| 0:00–0:04 | HOOK | Pattern-interrupt visual + winning hook question | Cut abrupto, texto en pantalla (máx. 3 palabras) |
| 0:04–0:10 | AGITATION | Coste técnico/financiero de no resolver el problema | Macro del punto de fricción |
| 0:10–0:15 | SOLUTION & SPECS | Presentación del producto + specs clave | Overlay de especificaciones |
| 0:15–0:16 | PATTERN INTERRUPT | Corte de cámara / macro + SFX | Cambio de ritmo para reiniciar atención |
| 0:16–0:24 | ANALYTICAL VERDICT | Fortaleza principal + 1 limitación honesta | Split-screen o comparativa |
| 0:24–0:30 | CTA + INFINITE LOOP | Directo a `Item #ID` en bio/link + media frase que se conecta con el hook de 0:00 | End card con SKU |

Regla del infinite loop: la última frase queda gramaticalmente incompleta de forma intencional y se resuelve al repetir el hook, de modo que el replay se sienta natural.

## Paso 5 — 5 engagement questions

Generar 5 preguntas para fijar en comentarios de TikTok/Reels, YouTube Shorts, Instagram y Facebook. Deben invitar a debate técnico, no a respuestas de sí/no, y adaptarse a cada plataforma.

## Entregables adicionales de la fase 2

- 3 conceptos de thumbnail con **máximo 3 palabras en pantalla** cada uno.
- Captions por plataforma: TikTok/Instagram (debate corto + 5 hashtags US + `#ad`), YouTube Shorts (título SEO <60 chars + deep link `/?p=ID`), Pinterest (título SEO <100 chars + descripción de comprador US + deep link), Facebook (mini-case-study + pregunta abierta + link en primer comentario).

## Checklist antes de publicar

- [ ] 65–78 palabras habladas
- [ ] 10 pain points y 10 hooks documentados
- [ ] Combinación #1 justificada
- [ ] Pattern interrupt en 0:15–0:16
- [ ] Una fortaleza y una limitación honesta
- [ ] CTA a `Item #ID` + infinite loop
- [ ] 5 preguntas de comentarios
- [ ] `#ad` o disclosure completo presente
- [ ] Sin precios fijos ni imágenes de Amazon
