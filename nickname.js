(function(){
  const api='AIzaSyDR8TDJ5oQYHxFHgtwUsfquWlkkMpv2mMA';
  const project='ai-omck';
  const base='https://firestore.googleapis.com/v1/projects/'+project+'/databases/(default)/documents';
  function key(name){return encodeURIComponent(name.trim().toLocaleLowerCase().replace(/\s+/g,' '))}
  async function googleToken(){
    const idToken=localStorage.getItem('villageOmokGoogleIdToken');
    if(!idToken)throw Error('Google login token is missing.');
    const res=await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key='+api,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({postBody:'id_token='+encodeURIComponent(idToken)+'&providerId=google.com',requestUri:'https://ai-omck.firebaseapp.com',returnIdpCredential:true,returnSecureToken:true})});
    if(!res.ok)throw Error('Firebase sign-in failed.');
    const d=await res.json();localStorage.setItem('villageOmokFirebaseToken',d.idToken);localStorage.setItem('villageOmokFirebaseUser',JSON.stringify({sub:d.localId,name:JSON.parse(localStorage.getItem('villageOmokGoogleUser')||'{}').name||'',email:d.email||''}));return d.idToken;
  }
  async function reserve(name,token,uid){
    name=(name||'').trim().replace(/\s+/g,' ');if(name.length<2||name.length>12)throw Error('닉네임은 2~12자로 입력해주세요.');
    const existing=await fetch(base+'/nicknames/'+key(name),{headers:{Authorization:'Bearer '+token}});
    if(existing.ok){const doc=await existing.json();if(doc.fields?.uid?.stringValue===uid){localStorage.setItem('villageOmokNickname',name);return name}throw Error('이미 사용 중인 닉네임입니다.');}
    if(existing.status!==404)throw Error('닉네임 확인에 실패했습니다. (HTTP '+existing.status+')');
    const res=await fetch(base+'/nicknames?documentId='+key(name),{method:'POST',headers:{Authorization:'Bearer '+token,'Content-Type':'application/json'},body:JSON.stringify({fields:{nickname:{stringValue:name},uid:{stringValue:uid},createdAt:{timestampValue:new Date().toISOString()}}})});
    if(res.status===409||res.status===403)throw Error('이미 사용 중인 닉네임입니다.');
    if(!res.ok){let detail='닉네임 확인에 실패했습니다.';try{const body=await res.json();detail=body.error?.message||detail}catch{}throw Error(detail+' (HTTP '+res.status+')')}
    return name;
  }
  window.villageOmokReserveNickname=async function(name){
    let token=localStorage.getItem('villageOmokFirebaseToken'),user=JSON.parse(localStorage.getItem('villageOmokFirebaseUser')||'null');
    if(!token||!user?.sub)token=await googleToken(),user=JSON.parse(localStorage.getItem('villageOmokFirebaseUser')||'null');
    const saved=await reserve(name,token,user.sub);localStorage.setItem('villageOmokNickname',saved);localStorage.setItem('villageOmokNickname:'+user.sub,saved);return saved;
  };
})();
