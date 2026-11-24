# Vetted Gear Lab

Sitio estático de reviews analíticas para Amazon Associates US (Store ID `audifonosgrif-20`). Todo el contenido público está en inglés estadounidense; la documentación interna está en español. Coste: **$0**, sin dependencias npm.

## Estado actual

- ✅ Estructura web y páginas de cumplimiento
- ✅ Auditor automático de cumplimiento (`npm run check`)
- ✅ Plantillas de guion y prompts por SKU (`npm run new-sku -- 001`)
- ⬜ Productos publicados (0 de 5 mínimos recomendados antes de pedir revisión manual a Amazon)
- ✅ `gil96ve` configurado en `robots.txt`, `sitemap.xml`, `contact.html` e `index.html`
- ⬜ Repositorio remoto y GitHub Pages activados

## Puesta en marcha

```bash
# 1. Crear el repo remoto con GitHub CLI (autenticado)
gh repo create vetted-gear-lab --public --source=. --remote=origin --push

# 2. El usuario de GitHub (gil96ve) ya está configurado en robots.txt, sitemap.xml, contact.html e index.html

# 3. Activar GitHub Pages: Settings > Pages > Source: Deploy from a branch > main / root

# 4. Verificación local
npm run check
npm run serve          # http://localhost:8000
```

## Comandos

| Comando | Qué hace |
|---|---|
| `npm run check` | Audita disclosure, precios estáticos, imágenes de Amazon, acortadores, esquema de productos y links |
| `npm run new-sku -- 001` | Crea `scripts/001/script.md` y `assets/001/prompts.md` desde las plantillas |
| `npm run new-sku` | Calcula automáticamente el siguiente SKU según `products.json` |

El workflow `.github/workflows/compliance.yml` ejecuta la misma auditoría en cada push/PR.

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

Reglas: SKU de 3 dígitos único; `score` numérico 0–5; `image` ruta local (IA original); `affiliate_url` exclusivamente SiteStripe `https://amzn.to/...`. **Nunca** añadir un campo `price`.

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
