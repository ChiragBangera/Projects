// const target = require('./target_words')
// const dictionary = require('./dictionary')

function startInterction() {
    document.addEventListener('click',handleMouseClick)
    document.addEventListener('keydown',handleKeyPress)
}

const guessGrid = document.querySelector("[data-guess-grid]")


function stopInterction() {
    document.removeEventListener('click',handleMouseClick)
    document.removeEventListener('keydown',handleKeyPress)
}

startInterction()

function handleMouseClick(e) {
    if (e.target.matches("[data-key]")){
        pressKey(e.target.dataset.key)
        return
    }
    if (e.target.matches("[data-enter]")){
        submitGuess()
        return
    }
    if (e.target.matches("[data-delete]")){
        deleteKey()
        return
    }
}

function handleKeyPress(e) {
    if (e.key === 'Enter'){
        submitGuess()
        return
    }
    if (e.key === 'Backspace' || e.key === 'Delete'){
        deleteKey()
        return
    }
    if (e.key.match(/^[a-z]$/)){
        pressKey(e.key)
        return
    }
}

function pressKey(key) {
    const nextTile = guessGrid.querySelector(":not([data-letter])")
    nextTile.dataset.letter = key.toLowerCase()
    nextTile.textContent = key
    nextTile.dataset.state = 'active'
}