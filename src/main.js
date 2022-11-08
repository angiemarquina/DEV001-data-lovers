import { filterDirectors } from './data.js';
import data from './data/ghibli/ghibli.js';

const safeData = data.films;
//console.log(safeData)

const allFilms = document.getElementById("showFilms"); 

const showData = (films) => {
    films.forEach(film => {
        let filmPoster = film.poster;
        let filmTitle = film.title;
        let filmYear = film.release_date;
        let filmScore = film.rt_score;
        allFilms.innerHTML += `<div class="film-card">
        <img src=${filmPoster}>
        <h1 class="text-card">${filmTitle}</h1>
        <p class="text-card">Year: ${filmYear}</p>
        <p class="text-card"><i class='bx bxs-star'></i> ${filmScore}</p></div>`
    });
}

showData(safeData);

const showDirectors = document.querySelector(".list-directors")
showDirectors.addEventListener("click",(e) => {
    e.preventDefault();
    let choiceDirector = e.target.id;
    const peliKondo = filterDirectors(safeData,choiceDirector)
    allFilms.innerHTML = "";
    //console.log(e);
    showData(peliKondo);
});