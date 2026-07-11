const API_KEY = "f121819f";

const search = document.getElementById("search");
const movies = document.getElementById("movies");

async function loadMovies(query = "Avengers") {
  try {
    movies.innerHTML = "<h2>Loading...</h2>";

    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
    );

    const data = await response.json();

    movies.innerHTML = "";

    if (data.Response === "True") {

      data.Search.forEach(movie => {

        let poster = movie.Poster !== "N/A"
          ? movie.Poster
          : "https://via.placeholder.com/300x450?text=No+Image";

        movies.innerHTML += `
        <div class="card">
          <img src="${poster}" loading="lazy">

          <h3>${movie.Title}</h3>

          <p>📅 ${movie.Year}</p>

          <a href="https://www.imdb.com/title/${movie.imdbID}" target="_blank">
            <button>
              View Details
            </button>
          </a>

        </div>
        `;

      });

    } else {
      movies.innerHTML = "<h2>No Movies Found</h2>";
    }

  } catch(error) {
    movies.innerHTML = "<h2>Something went wrong</h2>";
    console.log(error);
  }
}


search.addEventListener("keyup", () => {

  let value = search.value.trim();

  if(value.length > 2){
    loadMovies(value);
  }

});


loadMovies();
