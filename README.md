# E-Catalog V7 — Fade In / Fade Out

A static, dependency-free catalog for GitHub Pages. Pages 1 and 10 display singly on desktop; pages 2–9 display as spreads (2–3, 4–5, 6–7, 8–9). Mobile displays one page at a time.

## Upload to GitHub Pages
Upload **the contents of this folder** to the repository root (not the containing folder). Enable Settings > Pages > Deploy from a branch > main / root.

## Replace test images
Put JPG or PNG images into `assets/pages/`, then update the ordered list in `config.js`. The starter uses numbered SVG images so it works immediately. Keep an even number of pages for the expected cover / spread / back cover arrangement.

## Adjust transition
Change `window.FADE_DURATION` in `config.js` (milliseconds per fade phase). Fade out and fade in happen sequentially.

No external libraries or CDNs required. Use left/right keys, controls, touch swipe, and fullscreen. Responsive mobile view is one page per step.
