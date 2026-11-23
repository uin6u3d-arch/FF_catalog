# E-Catalog 1-10 - repaired viewer

Upload the CONTENTS of this folder to the root of your GitHub repository. Settings > Pages > Deploy from branch > main > /(root).

This version always displays a JPG page immediately, even if the external page-flip animation script fails. It attempts jsDelivr first, then unpkg. When available, StPageFlip adds page curling and shadows. Otherwise Previous/Next, page selection, arrow keys and mobile swipes remain usable.

Edit config.js to change image paths. Paths and capitalization must match assets/pages exactly. Hard refresh after GitHub Pages deployment (Cmd+Shift+R).

If animation does not work, open Chrome DevTools > Console and Network to see any CDN or script errors. This version has not been browser-tested in this environment.
