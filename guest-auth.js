(function(){
  const api='AIzaSyDR8TDJ5oQYHxFHgtwUsfquWlkkMpv2mMA';
  window.villageOmokGuestAuth=async function(){
    if(localStorage.getItem('villageOmokGoogleIdToken'))return;
    if(localStorage.getItem('villageOmokFirebaseToken')&&localStorage.getItem('villageOmokFirebaseUser'))return;
    const res=await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+api,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({returnSecureToken:true})});
    if(!res.ok)throw Error('Guest sign-in failed.');
    const data=await res.json();
    localStorage.setItem('villageOmokFirebaseUser',JSON.stringify({sub:data.localId,email:''}));
    localStorage.setItem('villageOmokFirebaseToken',data.idToken);
    localStorage.setItem('villageOmokFirebaseRefreshToken',data.refreshToken||'');
  };
})();
