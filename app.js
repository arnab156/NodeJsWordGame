var Letter = require("./letter.js");
var Word = require("./word.js");
var inquirer =  require("inquirer");

function startGame (word){
    let gameWord = new Word (word);
    gameWord.createLetter();
    askForLetter(gameWord);

}

function askForLetter (wordObj) {
    wordObj.displayWord();
    inquirer.prompt([{
        type: "input",
        message: "Enter a letter",
        name: "guessLetter"
    }]).then(
        function (answers){
            wordObj.checkUserGuess(answers.guessLetter);
            if (wordObj.checkWin()== false && (wordObj.checkLoss()==false)) {
                askForLetter(wordObj);
            } //play again 
        }
    )
}



// var a  = new Letter("a");
// var b = new Letter("b");

// a.shown = true;

// console.log(a.display());
// console.log(b.display());

// var wolf = new Word("wolf");
// console.log(wolf.letterArray);
// wolf.createLetter();
// console.log(wolf.letterArray);

// wolf.displayWord();

startGame("wolf");