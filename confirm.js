// Console log practice

let firstName = "Michael"
let lastName = "Bardalez"
let fullName = firstName + " " + lastName
console.log(fullName)

let name = "Linda"
let greeting = "Hi there"

function Hello() {
  let mesSage = greeting + ", " + name 
  console.log(mesSage)
}

Hello()

let myPoints = 0

function add3Points() {
  myPoints += 3
  console.log(myPoints)
}

function removePoints() {
  myPoints -= 1 
  console.log(myPoints)
}

add3Points()
removePoints()

// creating a purchase button, that shows and error
let errMsg = document.getElementById("error")
  
function purchase() {
  errMsg.textContent = "Purchase was successful!"
}