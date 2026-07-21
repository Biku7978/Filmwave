const API_KEY = "68a6d6";

const movieBox = document.getElementById("movies");

async function loadMovies(search = "Avengers") {

    movieBox.innerHTML = "<h2>Loading...</h2>";

    const response = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
    );

    const data = await response.json();

    movieBox.innerHTML = "";

    if (data.Response === "True") {

        data.Search.forEach(movie => {

            movieBox.innerHTML += `
            <div class="movie">

            <img src="${movie.Poster}" alt="${movie.Title}">

            <h3>${movie.Title}</h3>

            <p>${movie.Year}</p>

            </div>
            `;

        });

    } else {

        movieBox.innerHTML = `
        <h2>No Movies Found</h2>
        `;

    }

}

function searchMovie(){

    const value = document.getElementById("search").value;

    if(value.trim()==""){

        loadMovies();

    }else{

        loadMovies(value);

    }

}

loadMovies();
