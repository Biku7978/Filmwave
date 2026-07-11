const API_KEY = "f121819f";

const search = document.getElementById("search");
const movies = document.getElementById("movies");

async function loadMovies(query = "Avengers") {
  const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
  const data = await response.json();

  movies.innerHTML = "";

  if (data.Response === "True") {
    data.Search.forEach(movie => {
      movies.innerHTML += `
        <div class="card">
          <img src="${movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Image"}">
          <h3>${movie.Title}</h3>
          <p>📅 ${movie.Year}</p>
          <a href="https://www.imdb.com/title/${movie.imdbID}" target="_blank">
            <button style="width:100%;padding:12px;background:#1565C0;color:#fff;border:none;cursor:pointer;">
              View Details
            </button>
          </a>
        </div>
      `;
    });
  } else {
    movies.innerHTML = "<h2>No Movies Found</h2>";
  }
}

search.addEventListener("keyup", () => {
  if (search.value.length > 2) {
    loadMovies(search.value);
  }
});

loadMovies();
