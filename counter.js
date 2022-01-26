// document.getElementById("count-el").innerText = 5
// This js code, changes the element id count-el which has the value of 0 to 5

// you can also arithmetic operations when declaring variables

let firstBatch = 5;
let secondBatch = 10;
let countBatch = firstBatch + secondBatch;

console.log(countBatch);

//-----------------------------------------------------

// Converting your age to dog years
let myAge = 25;
let dogYears = 7;
let newAge = myAge * dogYears;

console.log(newAge);

//---------------------------------------------------

let bonusPoints = 50;
bonusPoints += 50;
console.log(bonusPoints);
bonusPoints -= 75;
console.log(bonusPoints);
bonusPoints += 45;
console.log(bonusPoints);

//---------------------------------------------------

// Declaring the function
function countdown() {
  console.log(5);
  console.log(4);
  console.log(3);
  console.log(2);
  console.log(1);
}
// Calling the function
countdown();

//-------------------------------------------------

function display() {
  console.log(42);
}

display();

//---------------------------------------------------

let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

function sumALL() {
  total = lap1 + lap2 + lap3;
  console.log(total);
  // or
  console.log(lap1 + lap2 + lap3);
}

sumALL();

//---------------------------------------------------
let lapsCompleted = 0;

function lapsIncrement() {
  lapsCompleted += 1;
  console.log(lapsCompleted);
}

lapsIncrement();

//---------------------------------------------------

// Actual JS code for the counter

// assigning the element to a variable to be used
let countEl = document.getElementById("count-el");
console.log(countEl);

count1 = 0;

function increment() {
  count1 += 1;
  // Lets countEL use the code from count1 since it already does counting
  countEl.textContent = count1;
  console.log(count1);
  console.log("The button is clicked");
}

// string

let username = "admin";
console.log(username);

let message = "You have three new notifications";
console.log(message);
console.log(username + ", " + message + "!");

let messageToUser = username + ", " + message;
console.log(messageToUser);

let name1 = "Michael";
let greeting = "Hi, My name is ";
myGreeting = greeting + name1 + "!";
console.log(myGreeting);

// string vs numbers

let points = 4;
let bonusPoints1 = "10";
let totalPoints = points + bonusPoints1;
// will show 410 not, 14 because strings is greater and add both variables as strings
console.log(totalPoints);
// another example
console.log(100 + "100");

// Render a welcome message

let welcomeEl = document.getElementById("welcome-el");
let name2 = "Michael";
let greeting2 = "Welcome back, ";

welcomeEl.innerText = greeting2 + name2;

welcomeEl.innerText += "🍻";

// Create the save feature
let saveEl = document.getElementById("save-el");
console.log(saveEl);

// Save button code

function save() {
  let countString = count1 + " | ";
  saveEl.textContent += countString;
  countEl.textContent = 0;
  count1 = 0;
  console.log(count1);
}
