let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
console.log(sum)

let wonJackBlack = false
let isAlive = true
let message = ""


// counts if the user won blackjack
console.log(wonJackBlack)
console.log(message)

let clickstart = document.getElementById("startButton")
let newMsg = document.getElementById("message1")
// let sumMsg = document.getElementById("displaySum")
let sumMsg = document.querySelector("#displaySum")
// document.querySelector, can select different elements, not only IDs 
let cardMsg = document.querySelector("#displayCards")

function getRandomCard() {
  let newRand = Math.floor(Math.random() * 11) + 1
  return newRand
}


function startGame() {
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
  let newCardNum = getRandomCard()
  sum += newCardNum
  cards.push(newCardNum)
  console.log(cards)
  renderGame()
}