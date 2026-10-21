(function(){
  const d={en:{turn:'Black turn',start:'Black goes first.',think:'AI is thinking...',undo:'Move undone.',tip:'In AI match, you play black. Tap an intersection to place a stone.',shop:'Spend coins to customize your board.',short:'Not enough coins'},ja:{turn:'黒の番',start:'黒から開始します。',think:'AIが考えています…',undo:'一手戻しました。',tip:'AI対戦では黒がプレイヤーです。交点をタップして石を置いてください。',shop:'コインで盤面をカスタマイズできます。',short:'コインが足りません'},zh:{turn:'黑棋回合',start:'黑棋先行。',think:'AI正在思考…',undo:'已悔棋。',tip:'AI 对战中你使用黑棋。点击交叉点落子。',shop:'使用金币装饰棋盘。',short:'金币不足'},es:{turn:'Turno de negras',start:'Las negras empiezan.',think:'La IA está pensando…',undo:'Movimiento deshecho.',tip:'En la partida contra IA juegas con negras.',shop:'Personaliza tu tablero con monedas.',short:'No tienes suficientes monedas'}};
  const base=window.applyLanguage||function(){};
  window.localizedMessage=function(t){const x=d[localStorage.getItem('villageOmokLanguage')||'en'];if(!x)return t;return t==='흑돌부터 시작합니다.'?x.start:t==='AI가 생각 중입니다...'?x.think:t==='한 수를 무르고 다시 시작합니다.'?x.undo:t};
  window.applyLanguage=function(){base();const x=d[localStorage.getItem('villageOmokLanguage')||'en'];if(!x)return;const set=(s,v)=>{const e=document.querySelector(s);if(e)e.textContent=v};set('#turn',x.turn);set('#message',x.start);set('.tip',x.tip);set('.shop-note',x.shop);set('#noticeTitle',x.short)};
  window.applyLanguage();
})();
window.applyLanguage=window.applyLanguage||function(){};
