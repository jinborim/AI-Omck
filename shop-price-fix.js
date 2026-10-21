(function(){
  function sync(){document.querySelectorAll('.theme-card').forEach(card=>{const small=card.querySelector('small');if(small)small.dataset.price=card.dataset.price||'0'})}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',sync);else sync();
  setInterval(sync,500);
})();
