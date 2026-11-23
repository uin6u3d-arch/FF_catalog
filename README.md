# E-Catalog V8 — Fade + seamless double-page spread

Upload all files inside this folder to the **root** of your GitHub Pages repository.

- Cover (1): right-hand page only, no white placeholder on the left.
- Inner pages (2–3, 4–5, 6–7, 8–9): touching edge-to-edge with a subtle center spine shadow.
- Back cover (10): left-hand page only, no white placeholder on the right.
- Fade-out/fade-in transitions; mobile displays one page at a time.
- No external JS libraries or CDN.

## Replace pages
Put your images in `assets/pages/` and edit `config.js` to list them in reading order. JPG/PNG are supported. For best seamless spreads, export **all pages with the same aspect ratio** (the demo is 800 x 1100, ratio 8:11). If your catalog uses a different ratio, change `const ratio=800/1100` in `app.js` to your page width divided by page height. The images fill the paper frame; mismatched ratios may stretch.

## Update
Commit the files to the repository, wait for GitHub Pages to deploy, and hard-refresh with Cmd+Shift+R.
