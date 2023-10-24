const state = {
  view: {
    square: document.querySelectorAll(".square"),
    enemy: document.querySelectorAll(".enemy"),
    timeLeft: document.querySelector("#time-left"),
    score: document.querySelector("#score"),
  },
  values: {},
};

function addListenerHitBox(){
    state.view.square.forEach((square) => {
        if(square.id === 1){
            
        }
    });
}
function init() {}

init();