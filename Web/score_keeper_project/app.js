const p1 = {
    score:0,
    button: document.querySelector('#p1b'),
    display: document.querySelector('#p1d')
}
const p2 = {
    score:0,
    button: document.querySelector('#p2b'),
    display: document.querySelector('#p2d')
}


let winningScore = 3
let won = false



const win = document.querySelector('#game-selector')
const reset = document.querySelector('#resb')

p1.button.addEventListener('click',()=>{
    console.log("sfvjb")
})


function addScore(player) {
    if (!won){
        player.score+=1;
        if (player.score===winningScore){
            won=true
        }
        player.display.textContent = player.score
    }
}


function reset() {
    won = false
    for (let p of [p1,p2]){
        p2.score = 0
        p1.display.textContent=0
        p1.button.disabled = false
    }
}

win.addEventListener('change',()=>{
    winningScore = parseInt(this.value);
})