import express, { json } from 'express';
import fetch from "node-fetch";
import path from "path";
import cors from 'cors';

const __dirname = path.resolve();

const api_key = 'ee04596001b19a1964b017c76bc5d185'

const app = express();

app.use(cors());
app.use(express.static(__dirname + '/public'));

// Functions to Fetch Genre and its respective movie list

// Genre: Action id: 28
const actionMovie = [];
async function actionMovies(){
    var page = 0;
    for (var i = 0; i < 500; i++){
        page ++;
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=28&page=${page}`);
        const jsonResponse = await response.json();
        actionMovie.push(jsonResponse);
    }
}
actionMovies();

// Genre: Adventure id:12
const adventureMovie = [];
async function adventureMovies(){
    var page = 0;
    for (var i = 0; i < 500; i++){
        page ++;
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=12&page=${page}`);
        const jsonResponse = await response.json();
        adventureMovie.push(jsonResponse);
    }
}
adventureMovies();

// Genre: Animation id:16
const animationMovie = [];
async function animationMovies(){
    var page = 0;
    for (var i = 0; i < 500; i++){
        page ++;
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=16&page=${page}`);
        const jsonResponse = await response.json();
        animationMovie.push(jsonResponse);
    }
}
animationMovies();

// Genre: Comedy id: 35
const comedyMovie = [];
async function comedyMovies(){
    var page = 0;
    for (var i = 0; i < 500; i++){
        page ++;
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=35&page=${page}`);
        const jsonResponse = await response.json();
        comedyMovie.push(jsonResponse);
    }
}
comedyMovies();

// Genre: Crime id:80
const crimeMovie = [];
async function crimeMovies(){
    var page = 0;
    for (var i = 0; i < 500; i++){
        page ++;
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=80&page=${page}`);
        const jsonResponse = await response.json();
        crimeMovie.push(jsonResponse);
    }
}
crimeMovies();

// Genre: Documentary id: 99
const documentaryMovie = [];
async function documentaryMovies(){
    var page = 0;
    for (var i = 0; i < 500; i++){
        page ++;
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=99&page=${page}`);
        const jsonResponse = await response.json();
        documentaryMovie.push(jsonResponse);
    }
}
documentaryMovies();

// Genre: Drama id:18
const dramaMovie = [];
async function dramaMovies(){
    var page = 0;
    for (var i = 0; i < 500; i++){
        page ++;
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=18&page=${page}`);
        const jsonResponse = await response.json();
        dramaMovie.push(jsonResponse);
    }
}
dramaMovies();

// Genre: Family id: 10751
const familyMovie = [];
async function familyMovies(){
    var page = 0;
    for (var i = 0; i < 500; i++){
        page ++;
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=10751&page=${page}`);
        const jsonResponse = await response.json();
        familyMovie.push(jsonResponse);
    }
}
familyMovies();

// Genre: Fantasy id: 14
const fantasyMovie = [];
async function fantasyMovies(){
    var page = 0;
    for (var i = 0; i < 500; i++){
        page ++;
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=14&page=${page}`);
        const jsonResponse = await response.json();
        fantasyMovie.push(jsonResponse);
    }
}
fantasyMovies();

// Genre: History id:36
const historyMovie = [];
async function historyMovies(){
    var page = 0;
    for (var i = 0; i < 500; i++){
        page ++;
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=36&page=${page}`);
        const jsonResponse = await response.json();
        historyMovie.push(jsonResponse);
    }
}
historyMovies();

// Genre: Horror id:27
const horrorMovie = [];
async function horrorMovies(){
    var page = 0;
    for (var i = 0; i < 500; i++){
        page ++;
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=27&page=${page}`);
        const jsonResponse = await response.json();
        horrorMovie.push(jsonResponse);
    }
}
horrorMovies();

// Genre: Music id:10402
const musicMovie = [];
async function musicMovies(){
    var page = 0;
    for (var i = 0; i < 500; i++){
        page ++;
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=10402&page=${page}`);
        const jsonResponse = await response.json();
        musicMovie.push(jsonResponse);
    }
}
musicMovies();

// Genre: Mystery id: 9648
const mysteryMovie = [];
async function mysteryMovies(){
    var page = 0;
    for (var i = 0; i < 500; i++){
        page ++;
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=9648&page=${page}`);
        const jsonResponse = await response.json();
        mysteryMovie.push(jsonResponse);
    }
}
mysteryMovies();

// Genre: Romance id:10749
const romanceMovie = [];
async function romanceMovies(){
    var page = 0;
    for (var i = 0; i < 500; i++){
        page ++;
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=10749&page=${page}`);
        const jsonResponse = await response.json();
        romanceMovie.push(jsonResponse);
    }
}
romanceMovies();

// Genre: Science Fiction id: 878
const sciencefictionMovie =[];
async function sciencefictionMovies(){
    var page = 0;
    for (var i = 0; i < 500; i++){
        page ++;
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=878&page=${page}`);
        const jsonResponse = await response.json();
        sciencefictionMovie.push(jsonResponse);
    }
}
sciencefictionMovies();

// Genre: TV Movie id: 10770
const tvMovie = [];
async function tvMovies(){
    var page = 0;
    for (var i = 0; i < 500; i++){
        page ++;
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=10770&page=${page}`);
        const jsonResponse = await response.json();
        tvMovie.push(jsonResponse);
    }
}
tvMovies();

// Genre: Thriller id:53
const thrillerMovie = [];
async function thrillerMovies(){
    var page = 0;
    for (var i = 0; i < 500; i++){
        page ++;
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=53&page=${page}`);
        const jsonResponse = await response.json();
        thrillerMovie.push(jsonResponse);
    }
}
thrillerMovies();

// Genre: War id:10752
const warMovie = [];
async function warMovies(){
    var page = 0;
    for (var i = 0; i < 500; i++){
        page ++;
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=10752&page=${page}`);
        const jsonResponse = await response.json();
        warMovie.push(jsonResponse);
    }
}
warMovies();

// Genre: Western id:37
const westernMovie = [];
async function westernMovies(){
    var page = 0;
    for (var i = 0; i < 500; i++){
        page ++;
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=37&page=${page}`);
        const jsonResponse = await response.json();
        westernMovie.push(jsonResponse);
    }
}
westernMovies();

// GET REQUESTS 

// Get request for home 
app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');
})

// Get request for Genre Page
app.get('/genre', (req,res) => {
    res.sendFile(__dirname + '/searchGenre.html');
})

// Get request for search actors page 
app.get('/search/actor', (req,res) => {
    res.sendFile(__dirname + '/searchActors.html');
})

// Get request for search movies page
app.get('/search/movies', (req,res) => {
    res.sendFile(__dirname + '/searchMovie.html');
})


// Requests for Movie Genres

// get request to get action movies 
app.get('/genre/action',(req,res) => {
    res.json(actionMovie);
})

// get request to get adventure movies 
app.get('/genre/adventure',(req,res) => {
    res.json(adventureMovie);
})

// get request to get animation movies 
app.get('/genre/animation',(req,res) => {
    res.json(animationMovie);
})

// get request to get comedy movies 
app.get('/genre/comedy',(req,res) => {
    res.json(comedyMovie);
})

// get request to get crime movies 
app.get('/genre/crime',(req,res) => {
    res.json(crimeMovie);
})

// get request to get documentary movies 
app.get('/genre/documentary',(req,res) => {
    res.json(documentaryMovie);
})

// get request to get drama movies 
app.get('/genre/drama',(req,res) => {
    res.json(dramaMovie);
})

// get request to get family movies 
app.get('/genre/family',(req,res) => {
    res.json(familyMovie);
})

// get request to get fantasy movies 
app.get('/genre/fantasy',(req,res) => {
    res.json(fantasyMovie);
})

// get request to get history movies 
app.get('/genre/history',(req,res) => {
    res.json(historyMovie);
})

// get request to get horror movies 
app.get('/genre/horror',(req,res) => {
    res.json(horrorMovie);
})

// get request to get music movies 
app.get('/genre/music',(req,res) => {
    res.json(musicMovie);
})

// get request to get mystery movies 
app.get('/genre/mystery',(req,res) => {
    res.json(mysteryMovie);
})

// get request to get romance movies 
app.get('/genre/romance',(req,res) => {
    res.json(romanceMovie);
})

// get request to get sciencefiction movies 
app.get('/genre/sciencefiction',(req,res) => {
    res.json(sciencefictionMovie);
})

// get request to get tv movies 
app.get('/genre/tv',(req,res) => {
    res.json(tvMovie);
})

// get request to get thriller movies 
app.get('/genre/thriller',(req,res) => {
    res.json(thrillerMovie);
})

// get request to get war movies 
app.get('/genre/war',(req,res) => {
    res.json(warMovie);
})

// get request to get western movies 
app.get('/genre/western',(req,res) => {
    res.json(westernMovie);
})


// Function and Get Request to search actor and retrieve movies 

// Function to Get Actor ID
const actorContainer = [];
async function getActor(query){
    let page = 1;
    const response = await fetch(`https://api.themoviedb.org/3/search/person?api_key=${api_key}&query=${query}&page=${page}`);
    const jsonResponse = await response.json();
    actorContainer.push(jsonResponse.results[0].id);
    
}

// Search Actor and Actresses to view movie details Function
const searchActorContainer = [];
async function searchActor(){
    let page = 1;
    const response = await fetch(`https://api.themoviedb.org/3/person/${actorContainer}/movie_credits?api_key=${api_key}&page=${page}`);
    const jsonResponse = await response.json();
    searchActorContainer.push(jsonResponse);

}
// Get request to search actors/actresses Function
app.get('/search/actor/:name', async(req,res) => {
    actorContainer.length =0;
    searchActorContainer.length =0;
    await getActor(req.params.name);
    await searchActor();
    res.json(searchActorContainer);
})


// Search Movies by Title 

// Search Movies by Title Function
const movieContainer = [];
async function searchMovies(query) {
    var page = 0;
    for (var i=0; i < 50; i++){
        page++;
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}&page=${page}`);
        const jsonResponse= await response.json();
        movieContainer.push(jsonResponse.results);
    }
}

// Get request for searching movies by title Function
app.get('/search/movies/:title', async(req,res) => {
    movieContainer.length = 0;
    await searchMovies(req.params.title);
    res.json(movieContainer);

})

app.listen(4000, () => console.log(`Server running on port 4000`))