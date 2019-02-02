var wordList = ["blah","wqerty","asdfg"];
var listSelect = Math.floor(Math.random() * wordList.length);
var word = wordList[listSelect];
var underscore = [];
var rightGuess = [];
var wrongGuess = [];

var underscoreText = document.getElementsByClassName("underscore");
var rightGuessText = document.getElementsByClassName("right-guess");
var wrongGuessText = document.getElementsByClassName("wrong-guess");
var guessesLeft = document.getElementsByClassName("wrong-guess");
guessesLeft = 9;

//generate underscores
function generateUnderscores() {
    for (let i = 0; i < word.length; i++) {
        underscore.push("_");
    }
    return underscore;
}

//https://stackoverflow.com/questions/1966476/how-can-i-process-each-letter-of-text-using-javascript

document.addEventListener("keypress", function (event) {
    var keyGuess = String.fromCharCode(event.keyCode);
    if (word.indexOf(keyGuess) > -1) {
        rightGuess.push(keyGuess);
        underscore[word.indexOf(keyGuess)] = keyGuess;
        underscoreText[0].innerHTML = underscore.join(" ");
        rightGuessText[0].innerHTML = rightGuess;
        if (underscore.join("") == word) {
            alert("You Win!")
        }
    }
    else {
        wrongGuess.push(keyGuess);
        wrongGuessText[0].innerHTML = wrongGuess;
        if (wrongGuess.length > 9) {
            alert("You Lose");
        }
    }
});
underscoreText.innerHTML = generateUnderscores().join(" ");