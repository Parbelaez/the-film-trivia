/**
 * The event listeners for the buttons to choose the game category.
 * Director will be the default game.
 */

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") == "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }

    runGame("director");
}

/**
 * Main game loop
 */

function runGame(gameType){

}

function checkAnswer(){

}

function incrementScore(){
    
}