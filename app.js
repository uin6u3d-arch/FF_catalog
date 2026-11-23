(()=>{'use strict';
const cfg=window.CATALOG||{},pages=Array.isArray(cfg.pages)?cfg.pages:[], $=id=>document.getElementById(id);
const book=$('book'),status=$('status'),select=$('page'),viewer=$('viewer');
$('title').textContent=cfg.title||'E-Catalog';document.title=(cfg.title||'E-Catalog')+' | Flipbook';
let current=0,flip=null,enhanced=false;
function notice(s){status.hidden=false;status.textContent=s;}
function update(i){current=Math.max(0,Math.min(pages.length-1,Number(i)||0));select.value=String(current);$('prev').disabled=current===0;$('next').disabled=current===pages.length-1;}
function fallback(){enhanced=false;book.className='book fallback-book';book.innerHTML='';const img=document.createElement('img');img.alt='Catalog page '+(current+1);img.src=pages[current];img.onerror=()=>notice('Image missing: '+pages[current]+' — check file paths and letter case.');book.append(img);update(current);}
function go(i){i=Math.max(0,Math.min(pages.length-1,i));if(enhanced&&flip){try{flip.flip(i);update(i);}catch(e){console.error(e);current=i;fallback();}}else{current=i;fallback();}}
if(!pages.length){notice('No pages configured. Add image paths in config.js.');return;}
pages.forEach((_,i)=>{const o=document.createElement('option');o.value=i;o.textContent=i+1;select.append(o)});$('total').textContent='/ '+pages.length;
$('prev').onclick=()=>go(current-1);$('next').onclick=()=>go(current+1);select.onchange=()=>go(Number(select.value));
$('full').onclick=()=>{if(!document.fullscreenElement)viewer.requestFullscreen?.();else document.exitFullscreen?.()};
document.addEventListener('keydown',e=>{if(e.target.closest('select,button,input,textarea'))return;if(e.key==='ArrowRight')go(current+1);if(e.key==='ArrowLeft')go(current-1)});
let x=0;viewer.addEventListener('touchstart',e=>{x=e.changedTouches[0].clientX},{passive:true});viewer.addEventListener('touchend',e=>{if(enhanced)return;const dx=e.changedTouches[0].clientX-x;if(Math.abs(dx)>45)go(current+(dx<0?1:-1))},{passive:true});
// Always render a visible page first. Enhance to curl animation only when the library is ready.
fallback();
function enhance(){if(!window.St||typeof window.St.PageFlip!=='function'){notice('Page-flip animation library unavailable. Basic page viewer is active.');return;}
try{
 book.innerHTML='';book.className='book';
 flip=new window.St.PageFlip(book,{width:480,height:640,size:'stretch',minWidth:200,maxWidth:480,minHeight:267,maxHeight:640,drawShadow:true,maxShadowOpacity:0.55,flippingTime:950,usePortrait:true,showCover:true,autoSize:true,mobileScrollSupport:false,swipeDistance:30,showPageCorners:true});
 flip.on('flip',e=>update(e.data));flip.on('init',e=>update(e.data.page));
 flip.loadFromImages(pages);enhanced=true;status.hidden=true;update(0);
 // If the engine fails to paint, recover rather than leaving an empty gray panel.
 setTimeout(()=>{if(enhanced&&!book.querySelector('canvas, .stf__block, .stf__item, img')){notice('Page flip could not render; showing basic viewer.');flip=null;fallback();}},1400);
}catch(e){console.error('Flipbook initialization failed:',e);flip=null;notice('Page-flip initialization failed; basic viewer is active.');fallback();}
}
const script=document.createElement('script');script.src='https://cdn.jsdelivr.net/npm/page-flip@2.0.7/dist/js/page-flip.browser.js';script.onload=enhance;script.onerror=()=>{const alt=document.createElement('script');alt.src='https://unpkg.com/page-flip@2.0.7/dist/js/page-flip.browser.js';alt.onload=enhance;alt.onerror=()=>notice('Animation library could not load from either CDN. Basic page viewer is active.');document.head.append(alt)};document.head.append(script);
})();
