# Evaluación de viabilidad — Nichos al 10% (Luxury Beauty / Luxury Stores Beauty / Amazon Explore)

Fecha: 24 nov 2026. Veredicto resumido: **NO como pivote principal a corto plazo; CONDICIONADO como vertical secundario a mediano plazo.**

## Hallazgos verificados

| Nicho | Estado real | Implicación |
|---|---|---|
| **Luxury Beauty** | Categoría activa y 10% en la tabla oficial de Associates US. **Beauty normal paga 3%.** Solo cuenta si el ASIN está realmente clasificado en Luxury Beauty. | Viable en teoría; exige verificación ASIN por ASIN. Sin PA-API ni SiteStripe operativo, hoy es una suposición. |
| **Luxury Stores Beauty** | Programa **invite-only** para **marcas**, no un inventario abierto al afiliado. Alexa: es acceso de marca, no de editor. | No cambia la viabilidad del afiliado salvo que los ASIN enlazados estén en esa clasificación. No es un canal que "podamos abrir". |
| **Amazon Explore** | Servicio **cerrado en octubre 2022** (Bloomberg/Yahoo; rip.so). La tabla de comisiones sigue mostrando la línea, pero no hay producto que enlazar. | **Descartado al 100%**. Cero inversión. |
| **Onsite / Influencer** | La tabla "Table A" de comisiones onsite marca **4%** para Luxury Beauty y Luxury Stores Beauty. | El 10% aplica a links **offsite** (nuestro site). Si más adelante se usa storefront de Influencer, baja a 4%. |

Fuentes: tabla oficial `affiliate-program.amazon.com/help/node/topic/GRXPHT8U84RAYDXZ`; polítias `affiliate-program.amazon.com/help/operating/policies` (actualizado 14 abr 2026); Bloomberg/Yahoo y rip.so para el cierre de Explore; FlairOx/Salesduo/Amorepacific para el carácter invite-only de Luxury Stores.

## Corto plazo (0–6 meses): NO como pivote

1. El cuello de botella no es la tasa, es **tráfico + autoridad + 3 ventas cualificadas limpias** en 180 días.
2. Cambiar de nicho **antes** de la primera venta cambia el problema, no lo resuelve: reinicia SEO, social y el pipeline ya construido.
3. Riesgos nuevos y costosos:
   - **FDA/FTC:** un cosmético con claims de "tratar acné", "reducir arrugas" o "curar eczema" puede considerarse un drug no aprobado. Solo lenguaje de apariencia ("smooths the look of", "brighter", "more even").
   - **Antes/después:** exige evidencia competente y resultados típicos; la política oficial hace responsable al afiliado.
   - **Devoluciones:** cualquier cancelación/devolución descalifica la venta; la categoría beauty tiene rotación alta.
   - **Cookie:** sesión de 24 h; otra visita/link afiliado puede llevarse el crédito. Beauty es comparación multi-tienda.
   - **Competencia:** Allure/Byrdie y grandes medios dominan términos amplios.
4. Desde abril 2026, las compras referidas por **anuncios pagados** no generan comisión; no hay atajo de pago.

## Mediano plazo (6–18 meses): CONDICIONADO, solo vertical secundario

Requisitos para siquiera probarlo:

- Ya haber logrado 3 ventas orgánicas y estar fuera de revisión.
- Verificar la categoría real de cada ASIN en SiteStripe / PA API antes de publicar.
- Crear un cluster pequeño "beauty-tech" (dispositivos con componente medible) con plantilla de claims revisada.
- Medir **EPC propio** (comisión ÷ clics) 90 días antes de ampliar.
- Prohibición estricta de autocompras o inducir a familiares/amigos: no cuentan y pueden cerrar la cuenta.

## Modelo hipotético (supuestos explícitos, no proyección)

Ticket $200 · ingreso cualificado 85% beauty / 95% auto · conversión 2% sobre CTR 2% = 0.04% de visitas.

| Escenario | Beauty 10% | Auto 4.5% | Beauty 3% (ASIN mal clasificado) |
|---|---:|---:|---:|
| 3 ventas para aprobación | $51.00 | $25.65 | $15.30 |
| 300 visitas/mes (0.12 ventas) | $2.04 | $1.03 | $0.61 |
| 20,000 visitas/mes (8 ventas) | $136.00 | $68.40 | $40.80 |

**Lectura:** la ventaja del 10% es de ~$25 en la aprobación, pero el gate es **número de ventas**, no dólares. Con 0 audiencia la diferencia es ~$1/mes, por debajo del mínimo de pago de $10. Si el ASIN cae a 3%, beauty **pierde** frente a automotive. La variable decisiva es **tráfico**, no comisión.

## Recomendación operativa

1. Cerrar SKU #001 con el enlace SiteStripe y publicar el review en `/?p=001`.
2. Producir 8–12 reviews analíticas tech/herramientas en $80–$1,000.
3. Lograr 3 ventas orgánicas limpias y medir CTR/EPC por tracking ID.
4. Solo después, probar un cluster "beauty-tech" con $0 extra y 90 días de datos.
5. No invertir un solo minuto en Amazon Explore.

## Certificación

**NEEDS WORK** para cualquier pivote inmediato. Re-evaluación requiere: capturas del sitio, links SiteStripe operativos, captura de la tabla de tarifas y verificación de categoría por ASIN.
