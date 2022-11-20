import { filterDirectors, sortYears } from './data.js';
import data from './data/ghibli/ghibli.js';

const safeData = data.films;
//console.log(safeData)

const allFilms = document.getElementById("showFilms");

const showData = (films) => {
    films.forEach(film => {
        allFilms.innerHTML += `<div class="film-card">
        <img src=${film.poster}>
        <div class="texts-card">
        <h1>${film.title}</h1>
        <p>Director: ${film.director}</p>
        <p>Year: ${film.release_date}</p>
        </div>
        <div class="icon-card">
        <p><i class='bx bxs-star'></i> ${film.rt_score}</p></div></div>`
    });
};

showData(safeData);

const showDirectors = document.querySelector("#filterByDirectors");
//console.log(showDirectors)
showDirectors.addEventListener("change", (e) => {
    //console.log(e.target.value)
    let choiceDirector = e.target.value;
    const byDirector = filterDirectors(safeData, choiceDirector);
    allFilms.innerHTML = "";
    document.getElementById("sortByYears").selectedIndex = 0;
    showData(byDirector);
});

const showYears = document.querySelector("#sortByYears")
showYears.addEventListener("change", (e) => {
    //console.log(e.target.value)
    let choiceYear = e.target.value;
    const byYear = sortYears(safeData, choiceYear);
    allFilms.innerHTML = "";
    document.getElementById("filterByDirectors").selectedIndex = 0;
    showData(byYear);
});

const home = document.querySelector(".logo-ghibli");
home.addEventListener("click", () => {
    allFilms.innerHTML = "";
    document.getElementById("filterByDirectors").selectedIndex = 0;
    document.getElementById("sortByYears").selectedIndex = 0;
    showData(safeData);
});
