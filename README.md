# E-Catalog V9 — Fade + seamless spreads

Built from working V7, not V8. Fixes V8 blank viewer: V8 set `.stage` to `width:auto;height:auto` even though its children are absolutely positioned, collapsing the stage. V9 gives the stage a definite responsive aspect ratio and width.

## Upload
Upload all files and `assets/pages` folder to the root of the GitHub Pages repository. Hard-refresh with Cmd+Shift+R.

## Pages
Edit `config.js` with paths to JPG/PNG files. Ten pages display as 1 (right cover), 2-3, 4-5, 6-7, 8-9, 10 (left back cover) on desktop. Mobile shows one page at a time.

## Notes
The demo uses 800x1100 SVG images. For real catalog images, keep the same aspect ratio on every page. The viewer uses that ratio (8:11) to make paired edges touch exactly. If your images have another ratio, update `.stage` aspect-ratio in `style.css`.

No external libraries. Fade out and in duration is configured in `config.js`.
