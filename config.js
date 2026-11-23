// Replace image paths with your own JPG/PNG files. Keep pages in reading order.
window.CATALOG_PAGES = Array.from({length:10},(_,i)=>`assets/pages/${String(i+1).padStart(2,'0')}.svg`);
window.FADE_DURATION = 340; // milliseconds for each half of the transition
