# Punto de inicio — próxima sesión de trabajo

**Fecha del handoff:** 24 nov 2026 · **Último commit:** `29d116c` · **Rama:** `main`

---

## 1. Objetivo y decisión de nicho

Construir **Vetted Gear Lab**, sitio de affiliate de Amazon US en inglés US, $0, con reviews analíticos.

**Nicho cerrado** (ver `NICHE_DECISION.md`): energía y mantenimiento portátil para conductores US y usuarios DIY — arrancadores, infladores, power banks y compresores/air tools. Categorías: Automotive **4.5%**, All Other **4%**, Tools **3%**. Rango de precio **$80–$1,000**.

**No reabrir** el debate de Nichos al 10%: `NICHE_EVALUATION.md` concluyó NO a corto plazo y CONDICIONADO a mediano. Amazon Explore está cerrado desde 2022.

---

## 2. Datos de cuenta y cumplimiento

- **Store ID:** `vettedgearlab-20` (NO usar `audifonosgrif-20` ni `vettedgearlab20`).
- **Disclosure exacto:** `As an Amazon Associate I earn from qualifying purchases.` (debe estar en todas las páginas públicas).
- **Links aceptados por el auditor:** `https://amzn.to/...` **y** `https://link.amazon/...` (formato nuevo verificado el 24 nov 2026, con `linkCode=sl2` y tag correcto).
- **Prohibido:** precios estáticos en archivos web, imágenes de `media-amazon.com`, acortadores externos, inventar `amzn.to`, afirmar pruebas físicas ("we tested").
- **Regla de guion:** `SCRIPT_RULE.md` — 10 pain points → 10 hook questions → #1 combo → tabla de 4 columnas con **65–78 palabras habladas**, pattern interrupt en 0:15, infinite loop, 5 engagement questions.
- **3 ventas cualificadas en 180 días** para salir de revisión. No autocompras ni inducir a familiares/amigos. No ads pagados que enlacen a Amazon.

---

## 3. Estado actual del repo

Ubicación: `C:\Users\Gfive\orca\workspaces\Agency Agents\vetted-gear-lab`

| Archivo | Estado |
|---|---|
| `products.json` | **1 producto publicado** (SKU 001) |
| `scripts/001/script.md` | Guion auditado, **72 palabras** |
| `scripts/001/product-draft.json` | Link real aplicado |
| `affiliate-links.json` | **20 links verificados** por ASIN + tag |
| `SITESTRIPE_TODO.md` | Los 20 marcados ✅ |
| `SEASONAL_RESEARCH.md` | 10 productos tech $80–$1,000 |
| `TOOLS_RESEARCH.md` | 10 herramientas + comparación |
| `RESEARCH.md` | Comisiones oficiales reconfirmadas 24 nov 2026 |
| `NICHE_DECISION.md` / `NICHE_EVALUATION.md` | Decisión y descartes |
| `OPERACION.md` | Checklist fiscal, pago y contenido |

**Auditoría:** `npm run check` → `OK: 11 archivos obligatorios, 5 disclosures, 1 producto(s) validados.`

**Sitio en vivo:** https://gil96ve.github.io/vetted-gear-lab/
- `products.json` ya sirve el SKU 001 (verificado con cache-busting).
- Review: https://gil96ve.github.io/vetted-gear-lab/?p=001

---

## 4. Links SiteStripe ya disponibles (no pedirlos de nuevo)

Inventario completo en `affiliate-links.json`. Claves para los próximos SKUs:

| SKU | ASIN | Link SiteStripe |
|---|---|---|
| 001 | B015TKUPIC | https://link.amazon/B05Zm4YLR (ya publicado) |
| 002 | B0DWRYJWKG | https://link.amazon/B0d7IryDK |
| 003 | B07H39S9JQ | https://link.amazon/B03CRxMWT |
| 004 | B085DV34VC | https://link.amazon/B0iwbT7Ne |
| 005 | B0DCBB2YTR | https://link.amazon/B0cJovQtn |
| 006 | B0C6RBS846 | https://link.amazon/B0j6MSbhu |

---

## 5. Bloqueos / condiciones externas

1. **Gemini CLI:** API key válida pero modelos con `503` por alta demanda (`gemini-2.5-flash` → 404 obsoleto; `gemini-3.8-flash` → 503). Usar modelos OpenCode gratuitos o el modelo local para redacción/auditoría. No reintentar Gemini en bucle.
2. **Herramientas de publicación social:** los tools `social-publish` volvieron al catálogo al cerrar esta sesión. Aun así, **no publicar nada aún**: primero verificar cuentas con `check_accounts` y esperar a que el usuario esté presente, porque publicar implica usar su Chrome logueado. Mientras tanto solo preparar captions y thumbnails en disco.
3. **CI de GitHub Actions:** `.github/workflows/compliance.yml` sigue sin trackear porque el token `gh` carece de scope `workflow`. Mientras tanto, `npm run check` local. Para reactivar: `gh auth refresh -s workflow` y luego `git add -f .github/workflows/compliance.yml && git commit && git push`.
4. **Fiscal/pago pendiente (usuario):** completar **W-8BEN** y método de pago en Associates Central según `OPERACION.md`. No se dio asesoría fiscal; confirmar tratado/retención profesionalmente.
5. **Comisiones a confirmar por ASIN** en Associates Central antes de proyectar ingresos (Automotive 4.5%, Tools 3%, All Other 4%, Ring/Echo/Watches 4%).

---

## 6. Acción inmediata al volver

**Producir SKU #002 — WOLFBOX MV24A 4000A + Air Compressor 160 PSI.**

Datos disponibles del snapshot 24 nov 2026 (no copiar precios al sitio):
- ASIN `B0DWRYJWKG`, categoría Automotive, comisión estimada 4.5%.
- Posición #16 en Automotive; #97 → #16 entre el 18 y 24 nov; rising star 30 días #100 → #16.
- 4.4★ / 5,562 reseñas; precio observado $123.49 (solo referencia interna).

Pasos:

```powershell
cd "C:\Users\Gfive\orca\workspaces\Agency Agents\vetted-gear-lab"
npm run new-sku -- 002
npm run check
```

Luego, siguiendo `SCRIPT_RULE.md`, generar en `scripts/002/`:
- `script.md` con los 5 pasos, 65–78 palabras habladas y 5 engagement questions.
- `product-draft.json` con `"affiliate_url": "https://link.amazon/B0d7IryDK"` y `"image": "assets/002/hero.svg"`.
- Captions por plataforma con `#ad` y deep link `/?p=002`.

En `assets/002/`: `prompts.md` (6 image + 6 motion prompts) y un `hero.svg` placeholder propio. Después:

```powershell
npm run check
git add -A
git commit -m "feat: add SKU 002 Wolfbox MV24A review"
git push
```

Verificar `https://gil96ve.github.io/vetted-gear-lab/products.json` con cache-busting (GitHub Pages tarda ~20 s en propagar).

**Después:** SKU #003 DEWALT DCC020IB (`https://link.amazon/B03CRxMWT`), #004 Makita (`https://link.amazon/B0iwbT7Ne`), #005 Anker (`https://link.amazon/B0cJovQtn`), #006 eero (`https://link.amazon/B0j6MSbhu`).

---

## 7. Regla de prioridad

Hasta lograr **3 ventas orgánicas limpias** y medir **EPC propio**, el 100% del contenido va a los pilares A–C del nicho. No diversificar a beauty ni a micrófonos como eje principal. No publicar/video hasta que vuelvan las herramientas de publicación o se haga manualmente con el usuario.

---

## 8. Check rápido de arranque

```powershell
git status
git log -1 --oneline
npm run check
Get-Content affiliate-links.json
Get-Content SCRIPT_RULE.md
```

Si `git log -1` muestra `29d116c` y `npm run check` dice `1 producto(s) validados`, el estado es el esperado.
