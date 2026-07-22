const OMDB_API = "APNI_OMDB_API_KEY";
const YOUTUBE_API = "AIzaSyAMwarFCu8EnDSlIdqKVAPDnNnFvP2CMg4";

const movieBox = document.getElementById("movies");

async function loadMovies(search = "Avengers") {

    movieBox.innerHTML = "<h2>Loading...</h2>";

    const response = await fetch(`/api/movie?s=${encodeURIComponent(search)}`);

    const data = await response.json();

    movieBox.innerHTML += `
<div class="movie" onclick="openMovie('${movie.imdbID}')">

<img src="${movie.Poster}" alt="${movie.Title}">

<h3>${movie.Title}</h3>

<p>📅 ${movie.Year}</p>

</div>
`;
`;
<img src="${movie.Poster}" alt="${movie.Title}">

<h3>${movie.Title}</h3>

<p>${movie.Year}</p>

<button onclick="watchTrailer('${movie.Title}')">
▶ Watch Trailer
</button>

</div>
`;
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
function watchTrailer(title) {
    const query = encodeURIComponent(title + " official trailer");
    window.open(
        `https://www.youtube.com/results?search_query=${query}`,
        "_blank"
    );
}

function openMovie(id){
    window.location.href = "movie.html?id=" + id;
}
