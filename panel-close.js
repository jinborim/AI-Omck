(function(){
  function setup(){
    const panel=document.querySelector('.panel');
    if(!panel||document.getElementById('panelCloseExternal'))return;
    const staticClose=document.getElementById('panelCloseStatic');
    if(staticClose)staticClose.onclick=()=>panel.classList.add('collapsed');
    document.getElementById('panelToggle')?.remove();
    const b=document.createElement('button');
    b.id='panelCloseExternal';b.className='panel-close-external';b.type='button';b.textContent='×';b.setAttribute('aria-label','Close menu');
    document.body.append(b);
    function place(){const r=panel.getBoundingClientRect();b.style.left=(r.right+8)+'px';b.style.top=(r.top+12)+'px';b.style.right='auto'}
    place();window.addEventListener('resize',place);
    if(panel.classList.contains('collapsed'))b.classList.add('hidden');
    b.onclick=()=>{panel.classList.add('collapsed');b.classList.add('hidden');const open=document.getElementById('panelOpen');if(open)open.style.display='flex'};
    const open=document.getElementById('panelOpen');
    if(open)open.addEventListener('click',()=>{panel.classList.remove('collapsed');b.classList.remove('hidden')});
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',setup);else setup();
})();
