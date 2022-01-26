let cards = []
let sum = 0
console.log(sum)

let wonJackBlack = false
let isAlive = false
let message = ""

// This is an object 
let player = {
  name: "Michael",  // name is the key and michael is the value
  chips: 100       // chips is the key and 199 is the value 
}
// to use it as a variable: player.name and player.chips


// let firstCard = getRandomCard()
//let secondCard = getRandomCard()

// counts if the user won blackjack
console.log(wonJackBlack)
console.log(message)

let clickstart = document.getElementById("startButton")
let newMsg = document.getElementById("message1")
// let sumMsg = document.getElementById("displaySum")
let sumMsg = document.querySelector("#displaySum")
// document.querySelector, can select different elements, not only IDs 
let cardMsg = document.querySelector("#displayCards")

let playerID = document.getElementById("player-id")
playerID.textContent  = player.name + ": $" + player.chips

function getRandomCard() {
  let newRand = Math.floor(Math.random() * 12) + 1
  if (newRand > 10) {
    return 10
  }
  else if (newRand === 1) {
    return 11
  }
  else {
    return newRand
  
  }
}

function startGame() {
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  renderGame()
}

function renderGame() {
  console.log("clicked")
  cardMsg.textContent = "Cards: "

  for (let i = 0; i < cards.length; i++) {
    cardMsg.textContent += cards[i] + " "
  }

  let totalDisp = "Total: "
  
  sumMsg.textContent = totalDisp + sum

  if (sum <= 20) {
    message = "Do you want to draw a new card?"
  }
  else if (sum === 21) {
    message = "You won the game!"
    wonJackBlack = true
  }
  else {
    message = "you lost, still in the game?"
    isAlive = false
  }
  newMsg.textContent = message
  
  console.log(message)
}

function newCard() {
  console.log("clicked")
  if ( isAlive === true && wonJackBlack === false) {
    let newCardNum = getRandomCard()
    sum += newCardNum
    cards.push(newCardNum)
    renderGame()
  }
  console.log(cards)
  
}