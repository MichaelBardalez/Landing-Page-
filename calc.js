let num1 = 10
let num2 = 5

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let displayMsg = document.getElementById("display-msg")
let answer1 = document.getElementById("sum-el")

function add() {
  console.log("clicked")
  displayMsg.textContent = "Addition"
  let result = num1 + num2
  answer1.textContent = "answer: " + result
}

function subtract() {
  console.log("clicked")
  displayMsg.textContent = "Subtraction"
  let result = num1 - num2
  answer1.textContent = "answer: " + result}

function multiply() {
  console.log("clicked")
  displayMsg.textContent = "Multiplication"
  let result = num1 * num2
  answer1.textContent = "answer: " + result}

function divide() {
  console.log("clicked")
  displayMsg.textContent = "Division"
  let result = num1 / num2
  answer1.textContent = "answer: " + result  
}