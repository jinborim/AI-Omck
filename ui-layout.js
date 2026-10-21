(function(){
  function setup(){
    const panel=document.querySelector('.panel'); if(!panel||document.getElementById('settingsModal'))return;
    const b=document.createElement('button'); b.id='settingsOpen'; b.className='hud-icon'; b.textContent='⚙'; b.title='Settings'; document.querySelector('header')?.append(b);
    const modal=document.createElement('div'); modal.id='settingsModal'; modal.className='modal hidden'; modal.innerHTML='<div class="settings-window"><button class="settings-close">×</button><h2>Settings</h2><p>Game options and account</p><div class="settings-actions"></div></div>'; document.body.append(modal);
    b.onclick=()=>modal.classList.remove('hidden'); modal.querySelector('.settings-close').onclick=()=>modal.classList.add('hidden');
    const actions=modal.querySelector('.settings-actions'); ['shopOpen','rankingOpen','.privacy-open','.account-delete-open','.logout-button'].forEach(sel=>{const el=sel[0]==='.'?panel.querySelector(sel):document.getElementById(sel);if(el)actions.append(el)});
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(setup,0));else setTimeout(setup,0);
})();
