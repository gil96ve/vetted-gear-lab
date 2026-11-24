# Investigación estacional — Tecnología en Amazon US (24 nov 2026)

> Documento **interno**. No publicar tal cual en el sitio. Los precios son **observaciones de un snapshot de terceros**, no precios propios ni datos de ventas.

## Criterio definitivo

**Rango de precio objetivo: $80–$1,000 USD inclusive.** Este criterio reemplaza los filtros anteriores ($30–$120 y >$100) y deja dentro el SKU #001 (NOCO GB40, $99.95 observados).

Evidencia principal: posiciones en listas públicas de *Amazon Best Sellers* capturadas por **ParseShelf** el **2026-11-24 (UTC)** para el marketplace US, con precio, rating y número de reseñas del mismo snapshot. El contexto de demanda (Google Holiday 100 2026) se usa solo como señal de interés de búsqueda, nunca como prueba de unidades vendidas.

## 10 productos

| # | Producto (marca / modelo) | Categoría Amazon | URL directa real de Amazon | Precio observado* | Rating / reseñas | Señal de ranking/tendencia (fuente + fecha) | Comisión estimada** |
|---|---|---|---|---|---|---|---|
| 1 | **NOCO Boost GB40** 1000A UltraSafe Jump Starter | Automotive | https://www.amazon.com/dp/B015TKUPIC | $99.95 | 4.6 · 130,884 | #17 en Automotive; estable #15–#17 durante 7 snapshots (ParseShelf, 2026-11-24) | 4.5% |
| 2 | **WOLFBOX MV24A** 4000A Jump Starter + Compresor 160 PSI | Automotive | https://www.amazon.com/dp/B0DWRYJWKG | $123.49 | 4.5 · 2,504 | #81 en Automotive; #89 → #78 → #81 en 3 días (ParseShelf, 2026-11-24) | 4.5% |
| 3 | **Anker Laptop Power Bank** 25,000 mAh 165W | Cell Phones & Accessories | https://www.amazon.com/dp/B0DCBB2YTR | $91.19 | 4.4 · 13,565 | #66; #62 → #61 → #62 → #66 en 4 snapshots (ParseShelf, 2026-11-24) | 4% |
| 4 | **JBL PartyBox Wireless Mic** | Musical Instruments | https://www.amazon.com/dp/B0CTDJ45M4 | $99.95 | 4.7 · 3,357 | #31; ▲5 vs. día anterior (ParseShelf, 2026-11-24) | 3% |
| 5 | **RockJam RJ5061** 61-Key Keyboard Kit | Musical Instruments | https://www.amazon.com/dp/B083ZCWWWK | $99.98 | 4.5 · 10,879 | #12; mayor subida en 7 días (#94 → #12, +82) (ParseShelf, 2026-11-24) | 3% |
| 6 | **Amazon eero Pro 7** Wi-Fi 7 tribanda / mesh | Computers & Accessories | https://www.amazon.com/dp/B0C6RBS846 | $224.99 | 4.4 · 1,603 | #23; #74 → #23 en 30 días (+51) (ParseShelf, 2026-11-24) | 4% |
| 7 | **Amazon Echo Show 8** (modelo más reciente) | Home & Kitchen | https://www.amazon.com/dp/B0DC8ZMR1P | $99.99 | 4.2 · 9,509 | #12; etiquetado "New" el 2026-11-24 (ParseShelf, 2026-11-24) | 4% |
| 8 | **Apple Watch SE 3** GPS 40 mm | Electronics | https://www.amazon.com/dp/B0HJ9ZNRKT | $179.00 | 4.7 · 5,130 | #9 en Electronics; ▲20 vs. día anterior (ParseShelf, 2026-11-24) | 4% |
| 9 | **Apple AirPods 5** | Electronics / Headphones | https://www.amazon.com/dp/B0HJB69GJL | $129.00 | 4.4 · 752 | #17 en Electronics; 7 días consecutivos en top 20 (ParseShelf, 2026-11-24) | 3% |
| 10 | **Apple iPad 11-inch A16** 128 GB Wi-Fi | Electronics | https://www.amazon.com/dp/B0DZ75TN5F | $379.00 | 4.7 · 30,621 | #14 en Electronics; 7 días en ranking (ParseShelf, 2026-11-24) | 4% |

\* **Precio observado en el snapshot 2026-11-24**, no precio propio. No copiar al sitio: `npm run check` rechaza precios estáticos en archivos web.

\** **Comisión estimada por categoría, no confirmada por ASIN.** Automotive = 4.5%; Musical Instruments/Headphones = 3%; Cell Phones & Accessories, Computers & Accessories, Home & Kitchen y Electronics = 4% como "All Other". Para AirPods se aplicó 3% por tratarse de Headphones. Confirmar en Amazon Associates antes de publicar.

## Fuentes

- **ParseShelf — Amazon Best Sellers Tracker, snapshots 2026-11-24 (UTC), US marketplace** (evidencia principal de ranking, precio, rating, reseñas y URLs directas `amazon.com/dp/`):
  - Electronics: https://parseshelf.com/best-sellers/electronics/
  - Cell Phones & Accessories: https://parseshelf.com/best-sellers/wireless/
  - Automotive: https://parseshelf.com/best-sellers/automotive/
  - Musical Instruments: https://parseshelf.com/best-sellers/musical-instruments/
  - Computers & Accessories: https://parseshelf.com/best-sellers/computers/
  - Home & Garden: https://parseshelf.com/best-sellers/home-garden/
- **Google Holiday 100 Gift Guide 2026** — publicado 09 nov 2026, https://blog.google/products-and-platforms/products/shopping/holiday-100-gift-guide-2026. Dato tech verificado: búsquedas de *"podcast microphone"* **+115%**.
- **TODAY — Google Holiday 100 2026**, https://www.today.com/shop/google-holiday-100-gifts-2026-rcna607278. Revisado para contraste editorial; descartado como fuente de URLs porque sus enlaces Amazon llevaban parámetros de afiliado.
- **Crossendor — Trending US**, https://crossendor.com/trending/us (actualizado 21 nov 2026): contexto de demanda de búsqueda, sin ASINs.
- **Amazon Best Sellers directo**: intento fallido con `HTTP 503`; por eso se usó el snapshot público de ParseShelf.

## Incertidumbre y compliance

- **Un ranking no es una venta.** Las posiciones son lugares en una lista pública; no indican unidades vendidas ni ingresos. ParseShelf calcula señales a partir de posiciones y precios registrados, **no son estimaciones de ventas**.
- **Los snapshots cambian.** Precio, rating, número de reseñas y posición pueden variar horas después del 24 nov 2026. Revalidar antes de publicar cada review.
- **Movimiento dentro de la lista** (#74 → #23, etc.) no equivale a crecimiento medido de demanda. Un producto ausente en un snapshot no es necesariamente nuevo en Amazon.
- **Google Trends / Holiday 100 mide interés de búsqueda**, no conversión; el +115% de "podcast microphone" respalda la categoría, no un ASIN concreto.
- **Sin ASINs inventados.** Cada URL de la tabla aparece literalmente en una fuente. Descartados por quedar debajo del mínimo: Beats Solo 4 ($79.99), eero 6 extender ($79.99), BISSELL Little Green Mini ($79.99), Hollyland Lark M2 ($79.20).
- **Caso NOCO GBX155:** `B08WZFPXFM`, $369.95, 4.2 · 7,344 reseñas tenía URL verificada en resultados de búsqueda, pero su precio no proviene del snapshot 2026-11-24; por eso no entró en la tabla.
- **Monetización:** estas URLs son **directas, no afiliadas**. Para usarlas en contenido hay que generar el enlace con **SiteStripe** desde Associates Central con Store ID `vettedgearlab-20`. Nunca inventar `amzn.to`.
- **Contenido público:** no copiar precios de este documento al sitio; `npm run check` rechaza precios estáticos en archivos web.

## Impacto en el pipeline

- **SKU #001 sigue válido**: NOCO GB40 a $99.95 entra en el rango $80–$1,000 y mantiene su comisión estimada de 4.5% (Automotive).
- Candidatos naturales para SKU #002/#003: **WOLFBOX MV24A** (4.5%, complemento comparativo del arrancador) y **JBL PartyBox Wireless Mic** o **RockJam RJ5061** (3%, apalancando el +115% de búsquedas de micrófonos).
