# OPERACION.md — Checklist posterior al alta

Fecha de alta: **24 nov 2026**. Store ID asignado: **`vettedgearlab-20`**.
Ventana de verificación: 180 días (≈ **23 may 2027**). Objetivo: ventas cualificadas; pedidos propios/de familiares no cuentan.

> Este archivo NO debe contener datos personales, fiscales ni bancarios. Solo pasos y estado.

## Tarea 1 — Entrevista fiscal (W-8BEN)

- [ ] Entrar a Associates Central → *Account Settings* → *Tax Interview*.
- [ ] Seleccionar persona **no residente en EE. UU.** (sin presencia física en EE. UU.).
- [ ] Completar W-8BEN con nombre legal, dirección en Venezuela y **Foreign TIN** válido.
- [ ] **No** marcar servicios realizados "dentro de EE. UU." solo por usar el programa US.
- [ ] Revisar si se reclama beneficio de tratado: el tratado EE. UU.–Venezuela existe, pero la tasa aplicable a comisiones de afiliado **no está verificada**. No reclamar 0% sin confirmación profesional.
- [ ] Guardar el 1042-S cuando llegue (generalmente antes del 15 mar del año siguiente).
- [ ] Si Amazon valida la información fiscal, continuar; si pide correcciones, ajustar con criterio profesional.

**Estado:** pendiente.

## Tarea 2 — Método de pago

- [ ] En Associates Central → *Account Settings* → *Payment Information*.
- [ ] Amazon documenta: **bank transfer** (IBAN/BIC si no hay banco en EE. UU.), **Amazon.com Gift Card** (mín. $10, tope $2.000 por tarjeta) y cheque (mín. $100, fee $15).
- [ ] **Payoneer no aparece como método oficial de Amazon Associates US**. Si se usa una cuenta receptora de tercero, confirmar primero con Amazon que acepta esos datos; el titular debe coincidir con el perfil fiscal.
- [ ] No depender de Fx4Cash: Venezuela no aparecía en la lista de países consultada.
- [ ] Pago estimado ~60 días después del cierre del mes.

**Estado:** pendiente.

## Tarea 3 — Contenido y ventas cualificadas

- [x] Web pública y disclosure verificado: https://gil96ve.github.io/vetted-gear-lab/
- [x] SKU #001 generado: `scripts/001/script.md` (71 palabras), `assets/001/prompts.md`, `assets/001/hero.svg`.
- [ ] Obtener enlace **SiteStripe** real con Store ID `vettedgearlab-20` y rellenar `scripts/001/product-draft.json`.
- [ ] Añadir la entrada a `products.json` y ejecutar `npm run check`.
- [ ] Generar las 6 imágenes IA (Bing/Leonardo) y reemplazar el placeholder SVG.
- [ ] Animar 6 clips 9:16 (Kling/Hailuo) y ensamblar en CapCut con voz Clipchamp.
- [ ] Publicar en 5 plataformas con `#ad` y deep link `/?p=001`.
- [ ] Repetir hasta 3–5 reviews antes de la primera visita de verificación.
- [ ] **Nunca** comprar a través de tus propios enlaces ni pedir a familiares que compren para alcanzar las 3 ventas.

**Estado:** en curso.

## Hitos

| Hito | Fecha objetivo |
|---|---|
| Alta en Associates | 24 nov 2026 ✅ |
| Publicar review #001 | cuanto antes |
| Publicar 3–5 reviews | antes de la primera visita de Amazon |
| Cerrar ventas cualificadas | antes de ≈ 23 may 2027 |
