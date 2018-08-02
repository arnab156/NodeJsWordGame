var Letter = require("./letter.js");

var Word =  function(word){
    this.word =  word;
    this.wordArray = word.split("");
    this.letterArray = [];
    this.remainingGuesses = 7;

    this.createLetter = function(){
        for(let i = 0; i<this.wordArray.length;i++){
            this.letterArray.push(new Letter(this.wordArray[i]));
        }
    }
    this.displayWord = function(){
        let displayArray = [];
        for(let i = 0; i < this.letterArray.length; i++){
            displayArray.push(this.letterArray[i].display());
        }
        console.log(displayArray.join(" "));
    }
    this.checkUserGuess =  function (userGuess){
        if (this.wordArray.includes(userGuess)){
            for (let i=0;i<this.wordArray.length;i++){
                if (userGuess == this.wordArray[i]){
                    this.letterArray[i].shown = true;
                }
            }
        } else {
            this.remainingGuesses--;
        }
    }
    this.checkWin = function (){
        let correctLetterCount = 0;
        for (let i=0; i<this.wordArray.length;i++){
            if (this.letterArray[i].shown){
                correctLetterCount++;
            }
        }
        if (this.wordArray.length == correctLetterCount){
            console.log ("you won!")
            return true;
        }
        return false;
    }
    this.checkLoss = function(){
        if (this.remainingGuesses >0){
            return false;
        }
        console.log ("you lost!")
        return true;
    }
}

module.exports = Word;