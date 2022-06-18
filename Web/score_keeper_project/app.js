const p1= {
    score : 0,
    display : document.querySelector('#p1d')
}
const p2= {
    score : 0,
    display : document.querySelector('#p2d')
}



const pclick = document.querySelectorAll('button');
const win = document.querySelector('#game-selector')

let winningScore = 5
let won = false



pclick.forEach(click =>{
    click.addEventListener('click',(e)=>{
        const clicked = e.target.id;
        console.log(clicked)
        if (clicked==='p1b'){
            addScore(p1,p2)
        }
        else if (clicked==='p2b'){
            addScore(p2,p1)
        }
        else if (clicked==='resb'){
            reset()
        }
        console.log(winningScore)
        
    })
})

function addScore(player,opponent){
    if (!won){
        player.score+=1
        if (player.score === winningScore){
            player.display.style.color = 'Green'
            opponent.display.style.color = 'red'
            won=true;
        }
        player.display.textContent = player.score
    }
}

win.addEventListener('change',()=>{
    winningScore = parseInt(win.value);
    reset();
})


function reset(){
    for (let p of [p1,p2]){
        won = false
        p.score = 0
        p.display.textContent = 0
        p.display.style.color = 'black'
    }
}