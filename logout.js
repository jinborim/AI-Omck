(function(){
  function setup(){
    const panel=document.querySelector('.panel');
    if(!panel)return;
    const b=document.createElement('button');
    b.className='secondary logout-button';
    b.textContent='Log out';
    b.onclick=()=>document.getElementById('logoutModal').classList.remove('hidden');
    panel.append(b);
    const m=document.createElement('div');
    m.id='logoutModal';
    m.className='modal hidden';
    m.innerHTML='<div class="privacy-window account-window"><h2>Log out?</h2><p>Do you want to log out of Google?</p><div class="confirm-row"><button class="primary" id="confirmLogout">Confirm</button><button class="secondary" id="cancelLogout">Cancel</button></div></div>';
    document.body.append(m);
    m.querySelector('#cancelLogout').onclick=()=>m.classList.add('hidden');
    m.querySelector('#confirmLogout').onclick=async()=>{
      const confirmButton=m.querySelector('#confirmLogout');
      confirmButton.disabled=true;
      try{await chrome.identity?.clearAllCachedAuthTokens?.()}catch{}
      ['villageOmokGoogleUser','villageOmokGoogleIdToken','villageOmokGoogleToken','villageOmokFirebaseUser','villageOmokFirebaseToken','villageOmokFirebaseRefreshToken','villageOmokGuest','villageOmokNickname','villageOmokReturnToLogin'].forEach(k=>{localStorage.removeItem(k);sessionStorage.removeItem(k)});
      Object.keys(localStorage).filter(k=>k.startsWith('villageOmokNickname:')).forEach(k=>localStorage.removeItem(k));
      localStorage.setItem('villageOmokReturnToLogin','1');
      location.reload();
    };
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',setup);else setup();
})();
