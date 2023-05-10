

//Creating an object of players
const players = {};


//Creating a player
function createPlayer() {
  //Prompting user to create a player
  let player = prompt(`What is your name?`);
  //Creating a key for players
  if (players[player] === undefined) {
    players[player] = {"guesses": []};
  } else {
    alert(`Welcome Back ${players[player]}!`);
  }
}
// console.log(players)
createPlayer();

// Creating a New User fx
function newUser() {
  createPlayer();

}

//Play again fx
function playAgain() {
  if (window.confirm(`Do you really want to leave ${players[selected]}`)) {

  }
}


//Randomly generate a number between 0-5
const secret = Math.ceil(Math.random() * 5);

function guessMe(num) {
  //Selecting a player
  const selected = prompt("Who is playing?");
  if (players[selected] === undefined) {
    alert("That is not a player, please retype.")
    prompt("Who is playing?")
  } else {
    //Creating the guessing
    let attempt = parseInt(prompt("Guess between 1-5"))
    while (attempt !== num) {
      if (num < attempt) {
        attempt = prompt(`Sorry, ${selected}.Try a lower number.`);
      } else if (num > attempt) {
        attempt = prompt(`Sorry, ${selected}.Try a higher number.`);
      } else {
        break;
      }
    //Push the number in the array
    players[selected]["guesses"].push(attempt)
    }
    //create a high score
    if (!players[selected]["hiScore"]) {
      players[selected]["hiScore"] = players[selected]["guesses"].length
    }
    //find difference of highscore and current guesses
    if (players[selected]["guesses"].length > players[selected]["hiScore"]) players[selected]["hiScore"] = players[selected]["guesses"].length;
    //Alert that it is correct
    alert(`That's Correct ${selected}! Your previous guesses were ${players[selected]["guesses"]} 
    \nYou got it in ${(players[selected]["guesses"].length === 1) ? 
    `${players[selected]["guesses"].length} try` : `${players[selected]["guesses"].length} tries`}, 
    ${players[selected]["hiScore"] - players[selected]["guesses"].length} 
    better than your previous score!`);
    //Restart the attempt
    console.log(players[selected])
  }


  //     if (window.confirm("Play again?")) {
  //       playAgain();
  //     }
  //   } else if (counter.length <= hiScore.myName) {
  //     alert(`That's Correct ${myName}! Your previous guesses were ${[...counter]} \nYou got it in ${counter.length + 1} tries. \nhigh score: ${hiScore.myName}`);
  //     if (window.confirm("Play again?")) {
  //       playAgain();
  //     }
  //   } else {
  //     alert("Thank you for playing!");
  //     newUser();
  //   }Bao
  // } else if () {
  //   

}

guessMe(secret);
