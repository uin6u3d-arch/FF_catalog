# E-Catalog V6 — Smooth Slide

Static GitHub Pages website. No external libraries. 10 numbered demo pages.

## Display
Desktop: page 1 alone on right; 2–3, 4–5, 6–7, 8–9 as spreads; page 10 alone on left. Empty opposite sides are transparent (background shows through). Mobile: one page at a time.

## Publish
Upload the CONTENTS of this directory (not the directory itself) to the root of your GitHub repository. Settings > Pages > Deploy from a branch > main / (root). Reload after deployment.

## Replace images
Place your JPG/PNG in `assets/pages/`, and edit `config.js` with paths in page order, e.g. `window.CATALOG_PAGES = ['assets/pages/01.jpg','assets/pages/02.png'];`.

Controls: Next, Previous, spread selector, arrow keys, swipe, fullscreen. No CDN dependencies.
