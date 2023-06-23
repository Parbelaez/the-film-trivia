/**
 * Global definition of the movie objects
 */

let films = [
    {
        "name": "Star Wars: A New Hope",
        "movieImg": "000_movie.jpg",
        "director": "George Lucas",
        "directorImg": "000_director.jpg",
        "actor": "Mark Hamill",
        "actorImg": "000_actor.jpg",
        "releaseYear": 1977,
    },
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
            if (this.getAttribute("data-type") == "option") {
                optionChoice = this.firstChild.getAttribute("src");
                checkAnswer(filmNmbr, gameType,optionChoice);
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
    if(gameType === "director" || gameType === "actor" || gameType === "release") {
        displayImages(gameType, filmNmbr);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
    return(filmNmbr, gameType)

}

function displayImages(gameType, filmNmbr){
    let film = films[filmNmbr];
    let moviePoster = '"./assets/images/00'+filmNmbr+'_movie.jpg"';
    document.getElementsByClassName("film-poster")[0].src = "./assets/images/00"+filmNmbr+"_movie.jpg";
    if (gameType === "director"){
        //document.getElementById("alternative-1").src = "./assets/images/00"+filmNmbr+"_director.jpg";   
        let images = [filmNmbr];
        let positions = [];

        //This loop will choose the remaining 3 images from the films database
        for (i = 0; i < 3; i++) {
            let image = Math.floor(Math.random() * films.length);
            while(images.includes(image)){
                image = Math.floor(Math.random() * films.length);
            }
            images.push(image);
        }
        console.log(images);
        for (i = 0 ; i < 4 ; i++) {
            let position = Math.floor(Math.random() * 4)+1;
            while(positions.includes(position)){
                position = Math.floor(Math.random() * 4)+1;
            }
            positions.push(position);
            document.getElementById("alternative-"+position).src = "./assets/images/00"+images[i]+"_director.jpg";
            console.log(position, i, document.getElementById("alternative-"+position).src);
        }
    } else if (gameType === "actor"){
        //document.getElementById("alternative-1").src = "./assets/images/00"+filmNmbr+"_director.jpg";   
        let images = [filmNmbr];
        let positions = [];

        //This loop will choose the remaining 3 images from the films database
        for (i = 0; i < 3; i++) {
            let image = Math.floor(Math.random() * films.length);
            while(images.includes(image)){
                image = Math.floor(Math.random() * films.length);
            }
            images.push(image);
        }
        console.log(images);
        for (i = 0 ; i < 4 ; i++) {
            let position = Math.floor(Math.random() * 4)+1;
            while(positions.includes(position)){
                position = Math.floor(Math.random() * 4)+1;
            }
            positions.push(position);
            document.getElementById("alternative-"+position).src = "./assets/images/00"+images[i]+"_actor.jpg";
            console.log(position, i, document.getElementById("alternative-"+position).src);
        }
    }
}

function checkAnswer(optionChoice){


}

function incrementScore(){

}