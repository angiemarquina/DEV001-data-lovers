import { filterDirectors, sortYears } from './data.js';
import data from './data/ghibli/ghibli.js';

const safeData = data.films;
//console.log(safeData)

const allFilms = document.getElementById("showFilms");

const showData = (films) => {
    films.forEach(film => {
        let filmPoster = film.poster;
        let filmTitle = film.title;
        let filmDirector = film.director;
        let filmYear = film.release_date;
        let filmScore = film.rt_score;
        allFilms.innerHTML += `<div class="film-card">
        <img src=${filmPoster}>
        <h1 class="text-card">${filmTitle}</h1>
        <p class="text-card">Director: ${filmDirector}</p>
        <p class="text-card">Year: ${filmYear}</p>
        <p class="text-card"><i class='bx bxs-star'></i> ${filmScore}</p></div>`
    });
};

showData(safeData);

const showDirectors = document.querySelector(".select-directors");
//console.log(showDirectors)
showDirectors.addEventListener("change", (e) => {
    //console.log(e.target.value)
    let choiceDirector = e.target.value;
    const byDirector = filterDirectors(safeData, choiceDirector);
    allFilms.innerHTML = "";
    document.getElementById("selectByYears").selectedIndex = 0;
    showData(byDirector);
});

const showYears = document.querySelector(".select-years")
showYears.addEventListener("change", (e) => {
    //console.log(e.target.value)
    let choiceYear = e.target.value;
    const byYear = sortYears(safeData, choiceYear);
    allFilms.innerHTML = "";
    document.getElementById("selectByDirectors").selectedIndex = 0;
    showData(byYear);
});

const home = document.querySelector(".logo-ghibli");
home.addEventListener("click", () => {
    allFilms.innerHTML = "";
    showData(safeData);
});
