var Letter = function (letter){
    this.letter = letter;
    this.shown = false;
    this.display =  function(){
        if (this.shown){
            return this.letter;
        }
        return "_";
    }
}

module.exports = Letter;