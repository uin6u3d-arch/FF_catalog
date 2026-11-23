(()=>{'use strict';
const cfg=window.CATALOG||{};const pages=Array.isArray(cfg.pages)?cfg.pages:[];const $=id=>document.getElementById(id);const status=$('status');
$('title').textContent=cfg.title||'E-Catalog';document.title=(cfg.title||'E-Catalog')+' | Realistic Flipbook';
function error(message){status.hidden=false;status.textContent=message;}
if(!pages.length){error('No images configured. Add JPG/PNG paths in config.js.');return;}
if(!window.St?.PageFlip){error('Unable to load the page-flip library. Connect to the internet, then reload.');return;}
const pageFlip=new St.PageFlip($('book'),{
 width:480,height:640,size:'stretch',minWidth:230,maxWidth:480,minHeight:306,maxHeight:640,
 drawShadow:true,maxShadowOpacity:0.55,flippingTime:950,usePortrait:true,
 startPage:0,showCover:true,autoSize:true,mobileScrollSupport:false,
 swipeDistance:30,clickEventForward:true,showPageCorners:true,disableFlipByClick:false
});
pageFlip.loadFromImages(pages);
const select=$('page');pages.forEach((_,i)=>{const option=document.createElement('option');option.value=String(i);option.textContent=String(i+1);select.append(option)});
$('total').textContent='/ '+pages.length;
function update(page){const current=Math.max(0,Math.min(pages.length-1,Number(page)||0));select.value=String(current);$('prev').disabled=current===0;$('next').disabled=current>=pages.length-1;}
pageFlip.on('flip',e=>update(e.data));pageFlip.on('init',e=>update(e.data.page));
$('prev').addEventListener('click',()=>pageFlip.flipPrev('bottom'));
$('next').addEventListener('click',()=>pageFlip.flipNext('bottom'));
select.addEventListener('change',()=>pageFlip.flip(Number(select.value)));
$('full').addEventListener('click',()=>{if(!document.fullscreenElement)$('viewer').requestFullscreen?.();else document.exitFullscreen?.()});
document.addEventListener('keydown',e=>{if(e.target.closest('select,button,input,textarea'))return;if(e.key==='ArrowRight')pageFlip.flipNext('bottom');if(e.key==='ArrowLeft')pageFlip.flipPrev('bottom')});
update(0);
})();
