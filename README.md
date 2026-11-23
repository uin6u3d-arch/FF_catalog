# E-Catalog: Realistic Page Flip (10 numbered JPG pages)

This version replaces the sliding transition with a realistic 3D page turn: curved page, dynamic shadows, drag-to-flip, desktop double-page spread, and responsive single-page mobile mode.

## Upload to GitHub Pages

1. Extract this ZIP. Upload its contents (not the enclosing folder) to the root of a public GitHub repository.
2. Go to **Settings > Pages > Build and deployment** and select **Deploy from a branch**, `main`, `/ (root)`.
3. Open `https://YOUR-USERNAME.github.io/YOUR-REPO/` after deployment.

## Replace the 10 sample images

Place your own JPG/PNG files in `assets/pages/`, then edit the `pages` array in `config.js` in reading order. Page 1 is treated as the front cover (`showCover: true`).

## Notes

- The animation uses StPageFlip v2.0.7 via jsDelivr CDN. An internet connection is required for the library to load. For offline/self-contained deployment, download `page-flip.browser.js` from the package and reference a local copy instead.
- Images are served as static files; no server or database is needed.
- Page turn duration and shadow intensity can be adjusted in `app.js` using `flippingTime` and `maxShadowOpacity`.
- For the best results, use consistent page aspect ratios, approximately 3:4.
