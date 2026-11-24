# Decisión de nicho — Vetted Gear Lab (24 nov 2026)

## Nicho elegido

**Micro-nicho principal: energía y maintenance portátil para conductores US y usuarios DIY — arrancadores de batería, infladores de neumáticos, power banks y compresores/air tools.**

Categorías Amazon asociadas: **Automotive (4.5%)** como motor de comisión, **Cell Phones & Accessories / All Other (4%)** como segundo nivel, **Tools & Home Improvement (3%)** como tercero.

Rango de precio: **$80–$1,000**. Idioma público: **inglés US**. Formato: reviews analíticos de especificaciones publicadas, sin pruebas físicas inventadas.

## Positioning statement (uso interno)

> Vetted Gear Lab breaks down the published specs behind portable jump starters, tire inflators and power gear — peak amps, watt-hours, PSI, duty cycle and runtime — so US buyers can compare without hype or guessed prices.

**No decir** "we tested" / "we measured": no hacemos pruebas físicas. Decir "we break down published specs" / "we flag tradeoffs".

## Por qué este nicho

1. **Es la categoría de mayor comisión compatible con el proyecto**: Automotive 4.5%, por encima de tools/audio (3%) y sin salir del contenido técnico. El 10% de Luxury Beauty se descartó en `NICHE_EVALUATION.md`.
2. **Encaja con el formato analítico**: amps, Wh, PSI, duty cycle y ciclos son especificaciones comparables; no dependemos de fotografía de producto ni de claims regulatorios.
3. **Estacionalidad**: arrancadores e infladores tienen demanda de invierno y temporalidad navideña; ya hay snapshots de ParseShelf con posiciones #17 (NOCO) y #81 (WOLFBOX).
4. **Activo ya construido**: SKU #001 (NOCO GB40) está producido;dos documentos de research con 20 productos verificados; plantillas y auditoría de compliance funcionando.
5. **Supera el gate de aprobación**: el objetivo inmediato es 3 ventas orgánicas limpias en 180 días; la tasa importa menos que lograr esas ventas con tráfico propio.

## Qué NO hacemos

- No pivotar a Luxury Beauty / Luxury Stores Beauty en los próximos 6 meses.
- No invertir en Amazon Explore: cerrado desde octubre 2022 aunque aparezca en la tabla de comisiones.
- No perseguir micrófonos como nicho central: son 3% y solo una señal de búsqueda (+115% Holiday 100), útil como contenido ocasional, no como eje.
- No comprar nuestros propios productos ni inducir a familiares/amigos: no cuentan y pueden cerrar la cuenta.
- No pagar ads que enlacen a Amazon: desde abril 2026 no generan comisión.

## Pilares de contenido

| Pilar | Productos | Comisión | SKUs |
|---|---|---:|---|
| A. Arranque e inflado | NOCO GB40, WOLFBOX MV24A | 4.5% | 001, 002 |
| B. Air tools y compresores | DEWALT DCC020IB, Makita DMP180ZX, California Air Tools 8010A | 3% | 003, 004 |
| C. Energía portátil | Anker Laptop Power Bank, eero Pro 7 | 4% | 005, 006 |
| D. Ocasional / demanda | JBL PartyBox Wireless Mic, Ring Floodlight Cam | 3% / 4% | solo si hay datos propios |

## Regla de diversificación

Hasta lograr **3 ventas orgánicas** y medir **EPC propio por tracking ID**, el 100% del esfuerzo va a los pilares A–C. Después, si hace falta, probar un cluster único "beauty-tech" durante 90 días con $0 de inversión adicional y revisión de claims FDA/FTC antes de publicar.

## Estado actual

- SKU #001: guion auditado a 72 palabras, pendiente de enlace SiteStripe con Store ID `vettedgearlab-20`.
- `products.json`: `[]` hasta que entre el link real.
- Geminis CLI con 503; producción con modelos OpenCode gratuitos y auditoría local.

## Fuentes de la decisión

- `RESEARCH.md` — comisiones oficiales y elegibilidad.
- `SEASONAL_RESEARCH.md` — 10 productos tech en $80–$1,000.
- `TOOLS_RESEARCH.md` — 10 herramientas y comparación cruzada.
- `NICHE_EVALUATION.md` — por qué se descarta el pivote al 10%.
