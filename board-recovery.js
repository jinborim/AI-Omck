(function(){
  function recover(){
    const board=document.getElementById('board');
    if(!board)return;
    board.style.display='grid';
    board.style.visibility='visible';
    board.style.opacity='1';
    if(board.children.length)return;
    for(let r=0;r<15;r++)for(let c=0;c<15;c++){
      const cell=document.createElement('button');
      cell.className='cell'+((r===3||r===7||r===11)&&(c===3||c===7||c===11)?' star':'');
      cell.type='button';
      board.appendChild(cell);
    }
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(recover,0));else setTimeout(recover,0);
})();
