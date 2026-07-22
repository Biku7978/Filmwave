const API_KEY = "68a6d6";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

async function loadMovie() {

    const response = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
    );

    const movie = await response.json();

    document.getElementById("movieDetail").innerHTML = `

    <div class="movie-detail">

        <img src="${movie.Poster}" alt="${movie.Title}">

        <div class="info">

            <h1>${movie.Title}</h1>

            <p>${movie.Plot}</p>

            <h3>⭐ IMDb : ${movie.imdbRating}</h3>

            <p><b>Year:</b> ${movie.Year}</p>

            <p><b>Genre:</b> ${movie.Genre}</p>

            <p><b>Actors:</b> ${movie.Actors}</p>

            <p><b>Director:</b> ${movie.Director}</p>

            <a href="index.html">
                <button>⬅ Back</button>
            </a>

        </div>

    </div>

    `;

}

loadMovie();
