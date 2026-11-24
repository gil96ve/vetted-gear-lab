# Vetted Gear Lab

Sitio estático de reviews analíticas para Amazon Associates US (**Store ID asignado por Amazon: `vettedgearlab-20`**, 24 nov 2026; el blueprint original indicaba `audifonosgrif-20`). Todo el contenido público está en inglés estadounidense; la documentación interna está en español. Coste: **$0**, sin dependencias npm.

## Estado actual

- ✅ Estructura web y páginas de cumplimiento
- ✅ Auditor automático de cumplimiento (`npm run check`)
- ✅ Plantillas de guion y prompts por SKU (`npm run new-sku -- 001`)
- ⬜ Productos publicados (0 de ~10 posts originales y recientes que Amazon sugiere antes de solicitar revisión)
- ✅ `gil96ve` configurado en `robots.txt`, `sitemap.xml`, `contact.html` e `index.html`
- ✅ Repositorio remoto `https://github.com/gil96ve/vetted-gear-lab` y GitHub Pages activos: **https://gil96ve.github.io/vetted-gear-lab/**
- ⚠️ CI desactivado temporalmente: el token `gh` carece del scope `workflow`. Para reactivar: `gh auth refresh -s workflow` y luego `git add -f .github/workflows/compliance.yml && git commit && git push`
- ⚠️ Gemini CLI: key de Google AI Studio configurada; `gemini-2.5-flash` dio 404 (obsoleto) y `gemini-3.8-flash` devolvió 503 por alta demanda. Rotación activa: guiones/SEO con **modelos OpenCode gratuitos** (`deepseek-v4.1-flash-free` / `beam-free`) o el director Big Pickle; Cloud con `nemotron-3.5-super-vl-free`. Reintentar Gemini más tarde o cambiar a login OAuth.

## Pendiente de verificación por el usuario

- ✅ Store ID asignado: `vettedgearlab-20`. Generar siempre los enlaces con SiteStripe usando ese ID.
- ⬜ Enviar la entrevista fiscal (W-8BEN) y configurar método de pago antes de recibir ingresos.
- ⬜ Completar la entrevista de verificación: Amazon exige ventas cualificadas dentro de los 180 días posteriores al alta (≈ 23 may 2027). No cuentan pedidos propios ni de familiares.
- Confirmar método de cobro real desde Venezuela: Amazon documenta transferencia IBAN/BIC y Gift Card; **Payoneer no está confirmado** como método de pago de Associates US.
- No afirmar 0% de retención: sin W-8BEN válido puede haber hasta 30%; la tasa aplicable del tratado EE.UU.–Venezuela a comisiones está sin verificar.

## Puesta en marcha

```bash
# 1. El repo remoto y GitHub Pages YA están activos:
#    https://github.com/gil96ve/vetted-gear-lab
#    https://gil96ve.github.io/vetted-gear-lab/

# 2. URL para declarar en el formulario de Amazon Associates US:
#    https://gil96ve.github.io/vetted-gear-lab/

# 3. Verificación local
npm run check
npm run serve          # http://localhost:8000
```

## Comandos

| Comando | Qué hace |
|---|---|
| `npm run check` | Audita disclosure, precios estáticos, imágenes de Amazon, acortadores, esquema de productos y links |
| `npm run new-sku -- 001` | Crea `scripts/001/script.md` y `assets/001/prompts.md` desde las plantillas |
| `npm run new-sku` | Calcula automáticamente el siguiente SKU según `products.json` |

El workflow `.github/workflows/compliance.yml` ejecutará la misma auditoría en cada push/PR en cuanto se reactive (ver aviso sobre el scope `workflow` más arriba). Mientras tanto, ejecuta `npm run check` antes de cada push.

## Estructura

```
index.html          Catálogo + búsqueda + filtros + deep link ?p=ID
styles.css          Diseño "tech lab", mobile-first
app.js              Render desde products.json + SEO/OpenGraph + resaltado de deep link
products.json       Base de datos (array vacío hasta el primer review)
about.html          Metodología
contact.html        Correcciones
disclosure.html     Affiliate disclosure completo
privacy.html        Privacidad
robots.txt          Indexación (usuario gil96ve)
sitemap.xml         Sitemap (usuario gil96ve)
SCRIPT_RULE.md      Regla permanente de guiones (5 pasos)
RESEARCH.md         Tendencias 24 nov 2026 + comisiones/elegibilidad (fuentes oficiales)
SEASONAL_RESEARCH.md 10 productos tech en rango $80–$1,000 (snapshot 24 nov 2026)
TOOLS_RESEARCH.md    10 herramientas en rango $80–$1,000 + comparación con tecnología
NICHE_EVALUATION.md  Evaluación de viabilidad de los nichos al 10% (veredicto: condicionado)
NICHE_DECISION.md   Nicho elegido: energía y mantenimiento portátil (Automotive 4.5%)
SITESTRIPE_TODO.md  Links directos + plantilla para pegar los links por SKU
affiliate-links.json  Inventario de 20 links SiteStripe verificados por ASIN
OPERACION.md        Checklist fiscal, pago y contenido tras el alta
templates/          Plantillas de guion y prompts visuales
scripts/            Auditor, generador de SKU y entregables por producto
assets/             Visuales IA por SKU
```

## Esquema de `products.json`

Cada entrada es un objeto con exactamente estos campos:

```json
{
  "id": "001",
  "title": "Generic product category name",
  "category": "Audio",
  "score": 4.3,
  "pros": ["Spec-based strength one", "Spec-based strength two"],
  "cons": ["Honest limitation one"],
  "verdict": "Objective two-sentence analytical verdict.",
  "image": "assets/001/hero.png",
  "affiliate_url": "https://amzn.to/XXXXXXXX"
}
```

Reglas: SKU de 3 dígitos único; `score` numérico 0–5 es una **puntuación editorial de cobertura de specs, no estrellas de Amazon**; `image` ruta local (IA original); `affiliate_url` exclusivamente SiteStripe `https://amzn.to/...` con Store ID `vettedgearlab-20`. **Nunca** añadir un campo `price`.

## Flujo de trabajo (fases del blueprint)

1. **Viabilidad y SKU:** producto $30–$120, 4.4+ estrellas verificables, ángulo US, asignar SKU.
2. **Guion y SEO:** ejecutar los 5 pasos de `SCRIPT_RULE.md`, captions para 5 plataformas y 3 thumbnails (≤3 palabras).
3. **Visuales:** 6 prompts de imagen + 6 prompts de movimiento en `assets/<SKU>/prompts.md`.
4. **Web:** añadir entrada a `products.json`, `npm run check`, push a GitHub Pages.
5. **Auditoría:** sección "SYSTEM AUDIT & OPTIMIZATION" al final de cada respuesta del director.

## Cumplimiento no negociable

- Disclosure exacto en toda página pública, video y pin; `#ad` en captions cortos.
- Sin precios fijos en HTML/CSS/JS/JSON: CTA dinámico "Check Current Price on Amazon".
- Sin imágenes de Amazon: solo ilustraciones originales generadas por IA.
- Sin acortadores externos: solo `amzn.to` o deep links propios `/?p=ID`.
- Sin afirmaciones de uso físico salvo que se indique explícitamente.
