// Replace filenames with your own JPG/PNG images. Keep the array in page order.
window.CATALOG_PAGES = Array.from({length:10},(_,i)=>`assets/pages/page-${String(i+1).padStart(2,'0')}.svg`);
