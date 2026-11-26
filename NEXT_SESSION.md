# Punto de inicio — próxima sesión de trabajo

**Fecha del handoff:** 25 nov 2026 · **Rama:** `main` · **Remoto:** `https://github.com/gil96ve/vetted-gear-lab`

---

## 1. Objetivo y decisión de nicho

Construir **Vetted Gear Lab**, sitio de affiliate de Amazon US en inglés US, $0, con reviews analíticos.

**Nicho cerrado** (`NICHE_DECISION.md`): energía y mantenimiento portátil para conductores US y usuarios DIY — arrancadores, infladores, power banks y compresores/air tools. Categorías: Automotive **4.5%**, All Other **4%**, Tools **3%**. Rango de precio **$80–$1,000**.

**No reabrir** el debate de Nichos al 10% (`NICHE_EVALUATION.md`). Amazon Explore cerró en 2022. No pivotar a beauty/luxury.

---

## 2. Datos de cuenta y cumplimiento

- **Store ID:** `vettedgearlab-20` (nunca `audifonosgrif-20` ni `vettedgearlab20`).
- **Disclosure exacto:** `As an Amazon Associate I earn from qualifying purchases.` en todas las páginas públicas.
- **Links aceptados:** `https://amzn.to/...` y `https://link.amazon/...`.
- **Prohibido:** precios estáticos en archivos web, imágenes de `media-amazon.com`, acortadores externos, inventar `amzn.to`, afirmar pruebas físicas (“we tested”). Usar siempre *“break down published specs”*.
- **Imágenes:** nunca scrapear fotos de Amazon. Usar originales generados por IA o con licencia explícita del fabricante. Amazon sirve solo para identificar ASIN/modelo.
- **Regla de guion:** `SCRIPT_RULE.md` — 10 pain points → 10 hooks → #1 combo → tabla de 4 columnas, **65–78 palabras habladas**, pattern interrupt en 0:15, infinite loop, 5 engagement questions.
- **3 ventas cualificadas en 180 días** para salir de revisión. No autocompras. No ads pagados que enlacen a Amazon.

---

## 3. Estado actual del repo

Ubicación: `C:\Users\Gfive\orca\workspaces\Agency Agents\vetted-gear-lab`

| Archivo | Estado |
|---|---|
| `products.json` | **2 productos publicados**: SKU 001 y 002 |
| `scripts/001/script.md` | Guion auditado, 72 palabras |
| `scripts/002/script.md` | Guion auditado, 66 palabras |
| `scripts/002/product-draft.json` | Link real + imagen original aplicada |
| `scripts/003/script.md` | **Preparado**, 72 palabras habladas, 10 pain points, 10 hooks, 5 preguntas, captions |
| `scripts/003/product-draft.json` | **Preparado**, link real + rutas de imagen original |
| `assets/003/hero.jpg`, `assets/003/social.jpg` | **Generadas** 16:9 y 9:16 (Google Flow / Nano Banana 2.1, 2K) |
| `assets/001/hero.jpg`, `assets/001/social.jpg` | Imágenes originales 16:9 y 9:16 (Google Flow / Nano Banana 2.1) |
| `assets/002/hero.jpg`, `assets/002/social.jpg` | Imágenes originales 16:9 y 9:16 (Google Flow / Nano Banana 2.1) |
| `IMAGE_PROMPTS.md` | 18 prompts + negative prompt + workflow de descarga 2K |
| `affiliate-links.json` | 20 links verificados por ASIN + tag |
| `SITESTRIPE_TODO.md` | Los 20 marcados ✅ |
| `RESEARCH.md`, `SEASONAL_RESEARCH.md`, `TOOLS_RESEARCH.md` | Investigación completada |
| `NICHE_DECISION.md`, `NICHE_EVALUATION.md`, `OPERACION.md` | Decisión, descartes y checklist fiscal/pago |

**Auditoría:** `npm run check` → `OK: 11 archivos obligatorios, 5 disclosures, 2 producto(s) validados.`

**Sitio en vivo:** https://gil96ve.github.io/vetted-gear-lab/
- `products.json`: https://gil96ve.github.io/vetted-gear-lab/products.json?cb=...
- SKU 001: https://gil96ve.github.io/vetted-gear-lab/?p=001
- SKU 002: https://gil96ve.github.io/vetted-gear-lab/?p=002

**Nota técnica:** `app.js` fue corregido para renderizar rutas locales de imagen (antes mostraba “AI visual pending” con rutas relativas).

---

## 4. Links SiteStripe disponibles

Inventario completo en `affiliate-links.json`. Próximos SKUs:

| SKU | ASIN | Link SiteStripe |
|---|---|---|
| 001 | B015TKUPIC | https://link.amazon/B05Zm4YLR (publicado) |
| 002 | B0DWRYJWKG | https://link.amazon/B0d7IryDK (publicado) |
| 003 | B07H39S9JQ | https://link.amazon/B03CRxMWT (preparado, sin publicar) |
| 004 | B085DV34VC | https://link.amazon/B0iwbT7Ne |
| 005 | B0DCBB2YTR | https://link.amazon/B0cJovQtn |
| 006 | B0C6RBS846 | https://link.amazon/B0j6MSbhu |

---

## 5. Estado de herramientas y bloqueos

1. **Generación de imágenes resuelta:** Gemini web/API falló por cuota y bloqueo (“hard time fulfilling”, `429 limit: 0`). La ruta que funciona es **Google Flow → Nano Banana 2.1** con la cuenta `gil96ve@gmail.com`, ya logueada en el Chrome de Orca. Descargar siempre **2K Reescalado** desde el editor y optimizar con Pillow.
2. **No publicar en redes todavía:** verificar primero con `social-publish.check_accounts` y esperar a que el usuario esté presente. Preparar solo captions/thumbnails en disco.
3. **CI de GitHub Actions:** `.github/workflows/compliance.yml` sigue sin trackear por falta de scope `workflow`. Mientras tanto, `npm run check` local. Para reactivar: `gh auth refresh -s workflow` y luego `git add -f .github/workflows/compliance.yml && git commit && git push`.
4. **Fiscal/pago pendiente (usuario):** completar **W-8BEN** y método de pago en Associates Central (`OPERACION.md`). No se dio asesoría fiscal.
5. **Comisiones a confirmar por ASIN** en Associates Central antes de proyectar ingresos.

---

## 6. Acción inmediata al volver

**Publicar SKU #003 — DEWALT DCC020IB** (`https://link.amazon/B03CRxMWT`). Ya está TODO preparado en disco:

- `scripts/003/script.md`: 72 palabras habladas, 10 pain points, 10 hooks, combinación #1, pattern interrupt 0:15, 5 engagement questions y captions con `#ad`.
- `scripts/003/product-draft.json`: link SiteStripe real, imágenes locales y veredicto sin pruebas físicas.
- `assets/003/hero.jpg` (2752×1536) y `assets/003/social.jpg` (1536×2752): originales de Flow, sin texto/logos.
- `assets/003/prompts.md` y `IMAGE_PROMPTS.md`: prompts y workflow documentados.

Solo falta añadir el objeto de `scripts/003/product-draft.json` como tercer elemento de `products.json` (no hay que regenerar nada) y verificar:

```powershell
cd "C:\Users\Gfive\orca\workspaces\Agency Agents\vetted-gear-lab"
npm run check
git add -A
git commit -m "feat: publish SKU 003 DeWalt inflator review"
git push
```

Tras la propagación de GitHub Pages (~45 s), verificar con cache-busting:

- `https://gil96ve.github.io/vetted-gear-lab/products.json?cb=...`
- `https://gil96ve.github.io/vetted-gear-lab/?p=003`
- `https://gil96ve.github.io/vetted-gear-lab/assets/003/hero.jpg?cb=...`

**Después:** SKU #004 Makita (`https://link.amazon/B0iwbT7Ne`), #005 Anker (`https://link.amazon/B0cJovQtn`), #006 eero (`https://link.amazon/B0j6MSbhu`). El pipeline ya está validado: `npm run new-sku -- <sku>` → guion → Flow 16:9/x2 y 9:16/x1 → 2K + Pillow → `npm run check` → commit/push.

---

## 7. Regla de prioridad

Hasta lograr **3 ventas orgánicas limpias** y medir **EPC propio**, el 100% del contenido va a los pilares A–C del nicho. No diversificar a beauty ni micrófonos como eje principal. No publicar/video sin que el usuario esté presente y verifique cuentas.
