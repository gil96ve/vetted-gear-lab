# Investigación estacional — Herramientas en Amazon US (24 nov 2026) y comparación con tecnología

> Documento **interno**. No publicar tal cual en el sitio. Los precios son **observaciones de un snapshot de terceros**, no precios propios ni datos de ventas.

## Criterio

**Rango de precio objetivo: $80–$1,000 USD inclusive**, el mismo que `SEASONAL_RESEARCH.md`. Evidencia principal: posiciones en listas públicas de *Amazon Best Sellers* capturadas por **ParseShelf** el **2026-11-24 (UTC)**, marketplace US.

**Comisión:** según `RESEARCH.md`, **Tools y Home Improvement = 3.00%** (línea 71), con excepción documentada de **Ring = 4.00%** (línea 70, junto a Echo y Fire TV). Es una estimación por categoría; confirmar por ASIN en Associates Central antes de proyectar ingresos.

## 10 herramientas

| # | Producto (marca / modelo) | Categoría Amazon exacta | URL directa real de Amazon | Precio observado* | Rating / reseñas | Señal de ranking/tendencia (fuente + fecha) | Comisión estimada** |
|---|---|---|---|---|---|---|---|
| 1 | **DEWALT DCC020IB** Inflador inalámbrico 20V MAX (Tool Only) | Air Tools *(Tools & Home Improvement)* | https://www.amazon.com/dp/B07H39S9JQ | $127.79 | 4.6 · 18,752 | **#3 en Air Tools**, sin cambio vs. 11-23; 7 días consecutivos en top 100. ParseShelf CSV Air Tools, 2026-11-24 | 3% |
| 2 | **Govee Permanent Outdoor Lights 2** RGBIC 100 ft | Tools & Home Improvement (raíz) y Lighting & Ceiling Fans | https://www.amazon.com/dp/B0D14WP9TB | $179.99 | 4.4 · 3,285 | **#48 en Tools & Home Improvement** y **#15 en Lighting & Ceiling Fans**; en Lighting #18 → #12 → #15. ParseShelf, 2026-11-24 | 3% |
| 3 | **TOPDON TC004 Mini** Cámara termográfica portátil | Measuring & Layout Tools | https://www.amazon.com/dp/B0F29969G1 | $149.99 | 4.4 · 1,140 | **#51 en Measuring & Layout Tools**, −3 vs. 11-23; 7 días en top 100. ParseShelf CSV, 2026-11-24 | 3% |
| 4 | **Makita DMP180ZX** Inflador inalámbrico 18V LXT (Tool Only) | Air Tools | https://www.amazon.com/dp/B085DV34VC | $95.00 | 4.7 · 3,304 | **#72 en Air Tools**, −9 vs. 11-23; 3 días observado. ParseShelf CSV, 2026-11-24 | 3% |
| 5 | **OLIGHT ArkPro Ultra** Linterna EDC plana recargable 1700 lm | Tools & Home Improvement (raíz) | https://www.amazon.com/dp/B0GHR5DXFC | $103.99 | 4.7 · 2,400 | **#78 en Tools & Home Improvement**, −13 vs. 11-23; 4 días en top 100. ParseShelf CSV raíz, 2026-11-24 | 3% |
| 6 | **Ring Floodlight Cam 2K** (modelo más reciente) | Tools & Home Improvement (raíz) y Lighting & Ceiling Fans | https://www.amazon.com/dp/B0FWFJ5Q2Z | $99.99 | 4.6 · 647 | **#85 en Tools & Home Improvement** (−2) y **#25 en Lighting** (+2); 7 días en ambas. ParseShelf, 2026-11-24 | **4%** (Ring) |
| 7 | **Ring Floodlight Cam Wired Plus (2nd Gen)** | Lighting & Ceiling Fans | https://www.amazon.com/dp/B08F6GPQQ7 | $89.99 | 4.7 · 44,713 | **#58 en Lighting & Ceiling Fans**, −3 vs. 11-23; estable 7 días. ParseShelf CSV, 2026-11-24 | **4%** (Ring) |
| 8 | **Klutch Compresor de aire 20 gal / 2 HP / 120V / 175 PSI** | Air Tools | https://www.amazon.com/dp/B0D95VWQB7 | $279.99 | 4.5 · 798 | **#24 en Air Tools**, estable vs. 11-23; 7 días en top 100. ParseShelf CSV, 2026-11-24 | 3% |
| 9 | **Govee Permanent Outdoor Lights Pro** 200 ft / 120 LEDs | Tools & Home Improvement (raíz) y Lighting & Ceiling Fans | https://www.amazon.com/dp/B0DX1WPB9J | $399.99 | 4.3 · 2,504 | **#71 en Tools & Home Improvement** (−12) y **#20 en Lighting** (−1); bajada observada $449.99 → $399.99 (−11%) el 2026-11-24. ParseShelf, 2026-11-24 | 3% |
| 10 | **California Air Tools 8010A** Compresor ultra silencioso 8 gal | Air Tools | https://www.amazon.com/dp/B07N528213 | $259.99 | 4.7 · 1,121 | **#92 en Air Tools**, −3 vs. 11-23; 7 días en top 100. ParseShelf CSV, 2026-11-24 | 3% |

\* **Precio observado en el snapshot 2026-11-24**, no precio propio. No copiar al sitio: `npm run check` rechaza precios estáticos en archivos web.

\** 3% según `RESEARCH.md`. Confirmar por ASIN.

> Nota de categoría: varias entradas son dispositivos *smart home/security* que Amazon clasifica dentro de Tools & Home Improvement o Lighting & Ceiling Fans. Se incluyen porque la **categoría Amazon exacta** es la requerida, no porque sean herramientas manuales estrictas.

## Comparación cruzada: tecnología vs. herramientas

### ¿Qué lista tiene los productos con mejor posición en su categoría?

- **Incluyendo subcategorías:** gana **herramientas**. Mejor producto: **DEWALT DCC020IB, #3 en Air Tools**, frente al mejor de tecnología, **Apple Watch SE 3, #9 en Electronics**.
- **Comparando solo categorías raíz y excluyendo duplicados:** gana **tecnología**. El mejor producto tecnológico es **#9 (Apple Watch SE 3, Electronics)**, mientras que el mejor producto de herramientas no duplicado/no smart-display es **Govee Permanent Outdoor Lights 2, #48 en Tools & Home Improvement**.
- **Duplicado a descontar:** **Amazon Echo Show 8** aparece en tecnología (#12, Home & Kitchen, $99.99) y en herramientas (#4, Tools & Home Improvement, $99.99, ASIN B0DC8ZMR1P). No es una herramienta; contarlo inflaría artificialmente el resultado de herramientas.

**Matiz importante:** comparar #3 de una subcategoría con #9 de Electronics **no es estrictamente comparable**: cada lista tiene riveras distintas y distinta profundidad de catálogo.

### Productos en ambas listas o sustitutos directos

- **Duplicado literal:** Amazon Echo Show 8 (ver arriba).
- **Infladores como puente entre listas:** **DEWALT DCC020IB** y **Makita DMP180ZX** compiten directamente con el **WOLFBOX MV24A 4000A + Inflador** (#81 Automotive, $123.49) en la función de inflado de neumáticos. Diferencia clave: DEWALT/Makita son **Tool Only** (batería no incluida) frente al WOLFBOX multifunción con compresor integrado.
- **Sustitución parcial frente al SKU #001:** el **NOCO Boost GB40** (#17 Automotive, $99.95) es arrancador con algo de inflado; los DEWALT/Makita son solo inflador. No son equivalentes 1:1.
- **Señal de demanda real:** **OlarHike Tire Inflator** está **#1 en Air Tools y #50 en Tools & Home Improvement**, pero su precio observado es $26.58, fuera del rango $80–$1,000, por lo que no entra en la tabla.
- **Smart home:** Ring Floodlight Cam 2K y Ring Wired Plus compiten por la misma mesa que Echo Show 8/15 en automatización del hogar, pero no son sustitutos directos (cámara/security vs. display). Echo Show 15 ($229.99, #53 en Tools) es un "hermano" del Echo Show 8, no el mismo producto.

### Tres productos a priorizar para el canal

1. **DEWALT DCC020IB** — $127.79 — #3 Air Tools — 4.6 · 18,752 reseñas. Mejor combinación de ranking, volumen y encaje analítico. Ángulo diferencial: *"¿arrancador tipo NOCO/WOLFBOX o inflador de plataforma tipo DEWALT?"* (batería separada, presión máxima, ruido, tiempo de inflado).
2. **Govee Permanent Outdoor Lights 2** — $179.99 — #48 raíz / #15 Lighting — 4.4 · 3,285 reseñas. Mejor encaje estacional navideño (fachada/patio), doble posicionamiento y ticket medio alto; su versión Pro bajó de precio el mismo día, lo que da material de comparación "cuándo comprar".
3. **Ring Floodlight Cam Wired Plus** — $89.99 — #58 Lighting — 4.7 · 44,713 reseñas — **4% por marca Ring**. Mayor corpus de reseñas de la lista herramientas, rating alto y estabilidad de 7 días. Ideal para reviews analíticos sobre falsos positivos de movimiento, instalación cableada y convivencia con Alexa/Echo.

**Suplente:** **TOPDON TC004 Mini** (#51 Measuring & Layout Tools, $149.99, 4.4 · 1,140) si se quiere contenido más técnico/diagnóstico.

**Matiz de revenue:** la lista de tecnología tiene comisiones más altas en varios productos (4%–4.5%: NOCO, WOLFBOX, Anker, eero, iPad, Watch, Echo Show) frente al 3% de herramientas generales, **salvo Ring (4%)**. Si el criterio fuera **solo revenue por venta**, tecnología lleva ventaja; herramientas gana por **frescura estacional, ángulo de reviews y menor saturación de contenido**.

## Fuentes

- **ParseShelf — Tools & Home Improvement (raíz), snapshot 2026-11-24:** https://parseshelf.com/best-sellers/tools-home-improvement/
- CSV raíz: https://parseshelf.com/best-sellers/hi/top-100.csv
- CSV Air Tools: https://parseshelf.com/best-sellers/hi/120225786011-air-tools/top-100.csv
- CSV Lighting & Ceiling Fans: https://parseshelf.com/best-sellers/hi/495224-lighting-and-ceiling-fans/top-100.csv
- CSV Measuring & Layout Tools: https://parseshelf.com/best-sellers/hi/553244-measuring-and-layout-tools/top-100.csv
- Detalle de cambios diarios y 7 días en Lighting: https://parseshelf.com/best-sellers/hi/495224-lighting-and-ceiling-fans/
- **Google Holiday 100 2026:** https://blog.google/products-and-platforms/products/shopping/holiday-100-gift-guide-2026 (interés de búsqueda, no ventas).
- **Mashable / Holiday 100 2026:** mencionó un combo Milwaukee M18 como tendencia de herramientas, pero sin ASIN/precio verificado; no entró en la tabla.
- **RESEARCH.md** local: confirmó la tasa de 3.00% para Tools/Home Improvement (línea 71) y el 4.00% para Ring (línea 70).

## Incertidumbre y compliance

- **Ranking ≠ ventas.** Las posiciones son puestos públicos en una lista de Amazon observados en un momento dado (ZIP 90210, UTC). No son unidades vendidas, conversión ni ingresos. ParseShelf lo advierte textualmente: *"a rank is a position on Amazon's list, not a sales figure."*
- **Snapshot puntual.** Precio, stock y ranking pueden cambiar horas después del 24 nov 2026. Govee Pro cambió −11% en un día: alta volatilidad.
- **Sin ASINs inventados.** Cada URL de la tabla aparece literalmente en un CSV/página de ParseShelf. En Klutch no se inventó código de modelo; en Govee no se usaron códigos internos no visibles en la fuente.
- **Tool Only.** DEWALT DCC020IB y Makita DMP180ZX no incluyen batería/cargador según su propio título. Cualquier review debe advertirlo para evitar comparaciones engañosas con WOLFBOX/NOCO.
- **Clasificación Amazon.** Ring/Govee son electrónica de hogar, pero Amazon los lista bajo Tools & Home Improvement o Lighting & Ceiling Fans. La categoría indicada es la exacta de la fuente, no una reclasificación editorial.
- **Holiday 100 mide búsquedas**, no ventas ni ranking Amazon.
- **Cobertura parcial.** Otras subcategorías (Hardware, Electrical, Building Supplies, Paint) tenían su último snapshot en 2026-11-21 y no se usaron para precios.
- **Monetización.** Estas URLs son **directas, no afiliadas**. Generar el `amzn.to` con **SiteStripe** y Store ID `vettedgearlab-20`. Nunca inventar acortadores.
- **Contenido público.** No copiar precios al sitio; `npm run check` rechaza precios estáticos en archivos web.
