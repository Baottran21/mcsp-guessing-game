//////////////FEATURE 4////////////////////////////

/*
let secret = Math.floor(Math.random() * 100);
let counter = [];

// let myName = prompt("Enter your name");

function guessMe(num) {
  let attempt = Number(prompt("Guess a number between 1-100!"));
  if (num === attempt) {
    alert(`Correct! Your previous guesses were ${[...counter]}!`);
  } else if (num < attempt) {
    alert(`Sorry. Try a lower number.`);
    counter.push(attempt);
    guessMe(num);
  } else if (num > attempt) {
    alert(`Sorry. Try a higher number.`);
    counter.push(attempt);
    guessMe(num);
  }
}

guessMe(secret);
*/

//////////////FEATURE 5////////////////////////////

/*
let secret = Math.floor(Math.random() * 100);
let counter = [];

let myName = prompt("Enter your name");

function guessMe(num) {
  let attempt = Number(prompt("What is your number?"));
  if (num === attempt) {
    alert(`That's Correct ${myName}! Your previous guesses were ${[...counter]} \nYou got it in ${counter.length} tries!`);
  } else if (num < attempt) {
    alert(`Sorry, ${myName}. Try a lower number.`);
    counter++;
    guessMe(num);
  } else if (num > attempt) {
    alert(`Sorry, ${myName}. Try a higher number.`);
    counter++;
    guessMe(num);
  }
}

guessMe(secret);
*/

/////////////FEATURE 6///////////////
//Generate a random number 1-10
let secret = Math.floor(Math.random() * 10);
//invoke guessMe with "secret" as argument
let thisCounter = [];
let myName = prompt("Enter your name");

//This is the toggle to play again//

let playAgain = function () {
  // if (thisCounter < lastCounter)
  alert(`That's Correct ${myName}! Your previous guesses were ${[...counter]}!
        \nYou got it in ${counter.length + 1} tries!)`);
  if (window.confirm("Would you like to play again?")) {
  } else {
    alert("Thank you for playing!");
  }
};

function guessMe(num) {
  let attempt = Number(prompt("What is your number?"));
  if (num === attempt) {
    thisAttempt = thisCounter.length + 1;
    playAgain();
  } else if (num < attempt) {
    alert(`Sorry, ${myName}. Try a lower number.`);
    thisCounter.push(attempt);
    guessMe(num);
  } else if (num > attempt) {
    alert(`Sorry, ${myName}. Try a higher number.`);
    thisCounter.push(attempt);
    guessMe(num);
  }
}

guessMe(secret);
//Terrible outcome haha
