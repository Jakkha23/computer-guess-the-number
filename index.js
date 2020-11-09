const MAX_NUMBER = 100
const MIN_NUMBER = 0

let guess
let guessRange

document.getElementById('too-high-btn').addEventListener('click', function () {
    // Vad ska hända när man tryckt too high?
    // för "linjär sökning", skriv "guess--"
    guessRange /= 2 //delar guess på 2
    guess -= guessRange //subtraherar guessrange frå guess
    updateMessage()
})

document.getElementById('is-correct-btn').addEventListener('click', function () {
    // Vad ska hända när man tryckt correct?
    setMessage("wohoo! :)") // uppdaterar "message"
})

document.getElementById('too-low-btn').addEventListener('click', function () {
    // Vad ska hända när man tryckt too low?
    // för "linjär sökning", skriv "guess++"
    guessRange /=2
    guess += guessRange
    updateMessage()

})

function chanceGuess() {
    guess = Math.floor(Math.random() * MAX_NUMBER)

}
function updateMessage() {
    setMessage(`Is it ${Math.floor(guess)}?`)
}

function setMessage(msg) {
    document.getElementById('message').innerText = msg
}

function start() {
    document.getElementById('before-start').style.display = 'none'
    document.querySelector('main').style.display = 'block'

    guess = MAX_NUMBER / 2
    guessRange = guess
    updateMessage()
}

document
    .getElementById('start-btn')
    .addEventListener('click', start)

