# Original image prompts — Vetted Gear Lab

All visuals on this site must be **original AI-generated images** or images with an explicit license. Do **not** download, hotlink, re-upload, or retouch photos from Amazon product pages. Amazon may be used only to identify the exact model/brand; contact the manufacturer for press assets if you want real product photography.

Generation route that works in this environment: **Google Flow → Nano Banana 2.1**, logged into the user's Google account. Gemini web image generation was unreliable (quota / "hard time fulfilling") and the standalone image API endpoints were blocked.

## Global negative prompt

`text, letters, numbers, watermark, logo, brand name, Amazon branding, packaging, price tag, ECG heart-line, sci-fi neon, plastic toy look, distorted cables, extra fingers, blurry product, low resolution`

## SKU #001 — 1000A portable lithium jump starter

### Hero 16:9 (generated, `assets/001/hero.jpg`)
> Create a photorealistic 16:9 commercial product photo of an unbranded matte-black portable 12V jump starter with red and black clamps, on a dark slate surface, dramatic cool rim light, soft warm key light, shallow depth of field, premium automotive editorial style, clean empty left third, no text, no logos, no watermark.

### Social 9:16 (prompt)
> Create a vertical 9:16 social media product photo of an unbranded matte-black portable 12V jump starter with red and black clamps, on a dark slate surface, dramatic cool rim light, soft warm key light, premium automotive editorial style, product centered in lower half, clean empty top third for text, no text, no logos, no watermark.

### Detail macro
> Extreme close-up, 16:9, of an unbranded matte-black 12V jump starter's clamps and USB ports, red and black rubber grips, subtle dust on dark slate, raking warm light, macro lens, crisp focus, premium automotive editorial, no text, no logos, no watermark.

### Trunk / roadside context
> Photorealistic 16:9 editorial photo of an unbranded compact jump starter resting on a clean car trunk liner next to a tire, muted dawn light, open hood in soft background blur, no people, no license plates, no text, no logos, no watermark.

### Spec-callout composition
> Photorealistic 16:9 product still life, unbranded matte-black 12V jump starter on dark slate with red and black clamps, dramatic side light, large uncluttered negative space on the left for editorial copy, no text, no logos, no watermark.

### Flat-lay alternative
> Top-down flat lay, 16:9, unbranded portable jump starter with clamps and short USB cable arranged on dark textured slate, even soft studio light, minimal premium composition, no text, no logos, no watermark.

## SKU #002 — 4000A jump starter with 160 PSI compressor

### Hero 16:9 (generated, `assets/002/hero.jpg`)
> Create a photorealistic 16:9 commercial product photo of an unbranded matte-black 12V jump starter with an integrated air compressor hose and metal chuck, plus red and black jump-start clamps, on a dark slate surface, dramatic cool rim light, soft warm key light, shallow depth of field, premium automotive editorial style, clean empty left third, no text, no logos, no watermark.

### Social 9:16 (prompt)
> Create a vertical 9:16 social media product photo of an unbranded matte-black 12V jump starter with an integrated air compressor hose and metal chuck, red and black clamps, on dark slate, dramatic cool rim light, product centered in lower half, clean empty top third for text, premium automotive editorial, no text, no logos, no watermark.

### Compressor detail
> Macro 16:9 photo of an unbranded matte-black jump starter's air hose and metal tire chuck, red and black clamps visible out of focus behind, dark slate surface, cool rim light, shallow depth of field, no text, no logos, no watermark.

### Tire-inflation context
> Photorealistic 16:9 editorial scene, unbranded matte-black jump starter with air hose connected to a car tire valve, clean driveway at blue hour, no people, no license plates, no brand markings, no text, no logos, no watermark.

### Two-problem composition
> Photorealistic 16:9 product still life showing an unbranded jump starter, its air hose, and its battery clamps arranged as three clean elements on dark slate, dramatic studio lighting, empty left third for editorial copy, no text, no logos, no watermark.

### Comparison silhouette
> Photorealistic 16:9 side-by-side silhouette composition of a compact unbranded jump starter and a generic handheld inflator on dark slate, unified cool rim light, premium automotive editorial style, no text, no logos, no watermark.

## Download workflow used

1. Generate in Flow with the prompt above.
2. Open the generated image in the editor.
3. `Descargar contenido multimedia` → **2K Reescalado**.
4. Optimize locally with Pillow (contrast 1.04, sharpness 1.06, JPEG quality 88 progressive).

Never bake headlines, prices, or affiliate URLs into the image art. Text and CTA stay in HTML.
