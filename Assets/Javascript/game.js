// this is the array of companies
var Company = [
  "netflix",
  "facebook",
  "twitter",
  "instagram",
  "linkedin",
  "ibm",
  "google",
  "amazon",
  "snapchat",
  "apple",
  "uber",
  "spotify",
  "airbnb",
  "microsoft",
  "Tesla"
];

////this is an empty array for the guesses to go into
var empty = [];
/// this is for the underscores to go into
var blanks = [];

//Randomization of companies

var computerGuess = Company[Math.floor(Math.random() * Company.length)];

//we can generate the correct amount of blanks for each word
function createBlanks(String) {
  for (var i = 0; i < String.length; i++) {
    blanks.push("_ ");
    document.getElementById("company").textContent += "_ ";
  }
}

createBlanks(computerGuess);

// onkeyup so that it can go into the empty array

document.onkeyup = function(event) {
  var playerGuess = event.key;

  if (event.key != computerGuess && !empty.includes(event.key)) {
    empty.push(event.key);
  }

  document.getElementById("lettersGuessed").textContent = empty.toString();

  //this takes the first index of the word being guessed
  //index is the position of that letter, while loop interrates through the word ensuring there is no dupplicate letter.

  if (computerGuess.includes(event.key)) {
    var index = computerGuess.indexOf(event.key);

    //this is the while statment - splice says ok you have a blank character at this position with the letter that belongs there
    while (index !== -1) {
      blanks.splice(index, 1, event.key);
      index = computerGuess.indexOf(event.key, index + 1);
    }
    document.getElementById("company").textContent = blanks.join(" ");
  }
  //this win statement is saying if you win then there wont be any blanks yet. if the blanks dont include any of the underscores youve won
  if (!blanks.includes("_ ")) {
    blanks = [];
    computerGuess = Company[Math.floor(Math.random() * Company.length)];
    document.getElementById("company").textContent = " ";
    alert("You Win!!");
    createBlanks(computerGuess);
  }
};
