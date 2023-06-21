/**
 * Global definition of the movie objects
 */

let films = [
    {
        "name": "E.T.",
        "movieImg": "001_movie.jpg",
        "director": "Steven Spielberg",
        "directorImg": "001_director.jpg",
        "actor": "Henry Thomas",
        "actorImg": "001_actor.jpg",
        "releaseYear": 1982,
    },
    {
        "name": "Se7en",
        "movieImg": "002_movie.jpg",
        "director": "David Fincher",
        "directorImg": "002_director.jpg",
        "actor": "Kevin Spacey",
        "actorImg": "002_actor.jpg",
        "releaseYear": 1995,
    },
    {
        "name": "Alien",
        "movieImg": "003_movie.jpg",
        "director": "Ridley Scott",
        "directorImg": "003_director.jpg",
        "actor": "Sigourney Weaver",
        "actorImg": "003_actor.jpg",
        "releaseYear": 1979,
    },
    {
        "name": "Taxi Driver",
        "movieImg": "004_movie.jpg",
        "director": "Martin Scorsese",
        "directorImg": "004_director.jpg",
        "actor": "Cybill Shepherd",
        "actorImg": "004_actor.jpg",
        "releaseYear": 1976,
    }
];

/**
 * The event listeners for the buttons to choose the game category.
 * Director will be the default game.
 */
console.log("Entering program");
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
});

/**
 * Main game loop
 */

function runGame(gameType){
    //Creates one random number between 0 and films.length, so the film is chosen
    let filmNmbr = Math.floor(Math.random() * films.length);
    console.log(filmNmbr, gameType);
    if(gameType === "director" || gameType === "actor" || gameType === "release") {
        displayImages(gameType, filmNmbr);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }

}

function displayImages(gameType, filmNmbr){
    if (gameType === "director"){
            let film = films[filmNmbr];
            console.log(film);
            document.getElementsByClassName("film-poster").src = "./assets/images/00"+filmNmbr+"_director.jpg";
            console.log("./assets/images/00"+filmNmbr+"_director.jpg");
    }
}

function checkAnswer(){

}

function incrementScore(){

}