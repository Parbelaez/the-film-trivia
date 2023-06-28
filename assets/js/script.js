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
    },
    {
        "name": "The Royal Tenenbaums",
        "movieImg": "005_movie.jpg",
        "director": "Wes Anderson",
        "directorImg": "005_director.jpg",
        "actor": "Gene Hackman",
        "actorImg": "005_actor.jpg",
        "releaseYear": 1976,
    },
    {
        "name": "Forrest Gump",
        "movieImg": "006_movie.jpg",
        "director": "Robert Zemeckis",
        "directorImg": "006_director.jpg",
        "actor": "Robin Wright",
        "actorImg": "006_actor.jpg",
        "releaseYear": 1976,
    },
    {
        "name": "Die Hard",
        "movieImg": "007_movie.jpg",
        "director": "John McTiernan",
        "directorImg": "007_director.jpg",
        "actor": "Bonnie Bedelia",
        "actorImg": "007_actor.jpg",
        "releaseYear": 1976,
    },
    {
        "name": "Matrix: Resurrections",
        "movieImg": "008_movie.jpg",
        "director": "Lana Wachowski",
        "directorImg": "008_director.jpg",
        "actor": "Neil Patrick Harris",
        "actorImg": "008_actor.jpg",
        "releaseYear": 1976,
    },
    {
        "name": "Scarface",
        "movieImg": "009_movie.jpg",
        "director": "Brian De Palma",
        "directorImg": "009_director.jpg",
        "actor": "Michelle Pfeifer",
        "actorImg": "009_actor.jpg",
        "releaseYear": 1976,
    }
];

/**
 * The event listeners for the buttons to choose the game category.
 * Director will be the default game.
 */
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") == "option") {
                fullImagerObject = this;
                optionChoice = this.firstChild.getAttribute("src");
                checkAnswer(optionChoice, fullImagerObject);
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
    //Creates one random number between 0 and the number of films in the db
    let filmNmbr = Math.floor(Math.random() * films.length);
    //Program control... the else should never run
    if(gameType === "director" || gameType === "actor" || gameType === "release") {
        displayImages(gameType, filmNmbr);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
    return(filmNmbr, gameType)

}


/**
 * 
 * @param {string} gameType what game is being played: director, actor/actress, or release date
 * @param {int} filmNmbr the index of the film object, so the algorithm finds the correspondent images
 */
function displayImages(gameType, filmNmbr){
    let film = films[filmNmbr];
    let moviePoster = '"./assets/images/00'+filmNmbr+'_movie.jpg"';
    document.getElementsByClassName("film-poster")[0].src = "./assets/images/00"+filmNmbr+"_movie.jpg";
    if (gameType === "director"){
        //document.getElementById("alternative-1").src = "./assets/images/00"+filmNmbr+"_director.jpg";   
        let images = [filmNmbr];
        let positions = [];

        //This loop will choose the remaining 3 images from the films database
        for (let i = 0; i < 3; i++) {
            let image = Math.floor(Math.random() * films.length);
            while(images.includes(image)){
                image = Math.floor(Math.random() * films.length);
            }
            images.push(image);
        }
        //This loop will place the images in random order
        for (let i = 0 ; i < 4 ; i++) {
            let position = Math.floor(Math.random() * 4)+1;
            while(positions.includes(position)){
                position = Math.floor(Math.random() * 4)+1;
            }
            positions.push(position);
            document.getElementById("alternative-"+position).src = "./assets/images/00"+images[i]+"_director.jpg";
        }
    } else if (gameType === "actor"){
        let images = [filmNmbr];
        let positions = [];

        //This loop will choose the remaining 3 images from the films database
        for (let i = 0; i < 3; i++) {
            let image = Math.floor(Math.random() * films.length);
            while(images.includes(image)){
                image = Math.floor(Math.random() * films.length);
            }
            images.push(image);
        }
        //This loop will place the images in random order
        for (let i = 0 ; i < 4 ; i++) {
            let position = Math.floor(Math.random() * 4)+1;
            while(positions.includes(position)){
                position = Math.floor(Math.random() * 4)+1;
            }
            positions.push(position);
            document.getElementById("alternative-"+position).src = "./assets/images/00"+images[i]+"_actor.jpg";
        }
    }
}

/**
 * 
 * Checks if the chosen picture is part of the object of the poster
 * @param {string} optionChoice the src attribute of the chosen picture
 */

function checkAnswer(optionChoice, fullImagerObject){
    let poster = document.getElementsByClassName("film-poster")[0].src;
    let movieIndex = parseInt(poster.split("_")[0].slice(-3));
    let gameCategory = optionChoice.split("_")[1]; //wipe the .jpg off!!!!!!!!!!!!!!!!!!!!!!!
    let imgFile = optionChoice.split("/")[3];
    if (gameCategory === "director.jpg"){
        if (films[movieIndex].directorImg === imgFile){
            incrementDirector();
            incrementScoreDir();
            //Using custom alerts from sweet alert
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Correct!',
                html: `The name of the movie is ${films[movieIndex].name} and the director was ${films[movieIndex].director}.`,
                showConfirmButton: true,
              });
            runGame("director");
        } else {
            Swal.fire({
                title: 'Sorry!',
                text: `The name of the movie is ${films[movieIndex].name} and the director was ${films[movieIndex].director}.`,
                imageUrl: `./assets/images/${films[movieIndex].directorImg}`,
                imageWidth: 150,
                imageHeight: 200,
                imageAlt: `${films[movieIndex].director}`,
              });
            incrementDirector();
            runGame("director");
        }
    } else
        if (gameCategory === "actor.jpg"){
            if (films[movieIndex].actorImg === imgFile){
                incrementActor();
                incrementScoreAct();
                //Using custom alerts from sweet alert
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Correct!',
                    html: `The name of the movie is ${films[movieIndex].name} and the actor/actress was ${films[movieIndex].actor}.`,
                    showConfirmButton: true,
                  });
                runGame("actor");
            } else {
                Swal.fire({
                    title: 'Sorry!',
                    text: `The name of the movie is ${films[movieIndex].name} and the actor/actress was ${films[movieIndex].actor}.`,
                    imageUrl: `./assets/images/${films[movieIndex].actorImg}`,
                    imageWidth: 150,
                    imageHeight: 200,
                    imageAlt: `${films[movieIndex].actor}`,
                  });
                incrementActor();
                runGame("actor");
            }
        }
}

function incrementScoreDir(){
    let oldDirScore = parseInt(document.getElementById("dir-correct").innerText);
    document.getElementById("dir-correct").innerText = oldDirScore + 1;
}

function incrementDirector() {
    let oldDir = parseInt(document.getElementById("dir-total").innerText);
    document.getElementById("dir-total").innerText = oldDir+1;
}

function incrementScoreAct(){
    let oldActScore = parseInt(document.getElementById("act-correct").innerText);
    document.getElementById("act-correct").innerText = oldActScore + 1;
}

function incrementActor() {
    let oldAct = parseInt(document.getElementById("act-total").innerText);
    document.getElementById("act-total").innerText = oldAct+1;
}