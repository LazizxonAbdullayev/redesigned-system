const API_KEY = 'd8724ddf4015a78c623695f1a0c8c8f8';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/original';

let elMoviesList = document.querySelector('.movie-list');
let elMovieTemplate = document.querySelector('.movie-card').Content;

async function request(url, options) {
    let request = await fetch(url, options);

    let data = await request.json();

    return data
}

async function getMoviesList(params) {
    let url = BASE_URL + '/list/1?api_key=' + API_KEY;
    let movies = await request(url, {
        method: 'GET'
    });

    renderMovie(movies.items)
}

function renderMovie(movies) {
    movies.forEach((movie)=>{
        let elMovie = elMovieTemplate.cloneNode(true);

        let title = elMovie.querySelector('.card-title');
        let poster = elMovie.querySelector('.card-img-top');

        title.textContent = movie.original_title;
        poster.scr = IMG_URL + movie.poster_path;
        console.log(movie)

        elMoviesList.append(elMovie)
    })
}

getMoviesList();
