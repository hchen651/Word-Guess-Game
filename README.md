# Word Guess Game - Classic Video Games
### A simple hangman-esque game done in javascript.

Test it in your browser!: (https://hchen651.github.io/wordguess/index.html)

##How to play:
* Simply press a letter on the keyboard to make a guess.
* If your guess matches a letter in the word, the appropriate space will be filled. 
* If it does not match, you lose a chance. Guess wisely, you only have 5 chances!
* The game automatically resets upon victory or defeat. A reset button is also available.

## How does it work?
The HTML file only contains basic elements assigned to classes. These classes are edited via various innerHTML calls in the javascript file. The javascript file takes key presses and compares them to characters in a word selected at random and split into an array. Each time a correct or incorrect keypress is made, innerHTML for the appropriate element is edited. Various conditional statements are used in order to prevent duplicate keypresses from being recorded.