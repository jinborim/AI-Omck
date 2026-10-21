(function(){
  function id(){try{const g=JSON.parse(localStorage.getItem('villageOmokGoogleUser')||'null');if(g?.sub)return 'google:'+g.sub;const f=JSON.parse(localStorage.getItem('villageOmokFirebaseUser')||'null');if(f?.sub)return 'guest:'+f.sub}catch{}return 'local'}
  window.villageOmokAccountStageKey=function(){return 'villageOmokStage:'+id()};
  window.villageOmokLoadAccountStage=function(){const key=window.villageOmokAccountStageKey();const value=Number(localStorage.getItem(key)||0);if(value>0)localStorage.setItem('villageOmokStage',String(value));return value||Number(localStorage.getItem('villageOmokStage')||1)};
  window.villageOmokSaveAccountStage=function(value){localStorage.setItem(window.villageOmokAccountStageKey(),String(value));localStorage.setItem('villageOmokStage',String(value))};
  window.addEventListener('village-omok-account-ready',()=>{
    window.villageOmokLoadAccountStage();
    const key='villageOmokShop:'+id(),saved=localStorage.getItem(key),current=localStorage.getItem('villageOmokShop');
    if(saved)localStorage.setItem('villageOmokShop',saved);else localStorage.setItem('villageOmokShop',current||'{"coins":300,"theme":"wood","owned":["wood"]}');
    setTimeout(()=>location.reload(),0);
  });
})();
