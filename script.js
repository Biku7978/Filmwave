const API_KEY = "=68a6d6";

const movies = document.getElementById("movies");

async function loadMovies(query = "Avengers") {
  try {
    const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
    const data = await res.json();

    movies.innerHTML = "";

    if (data.Response === "True") {
      data.Search.forEach(movie => {
        movies.innerHTML += `
          <div class="movie">
            <img src="${movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Poster"}">
            <h3>${movie.Title}</h3>
            <p>${movie.Year}</p>
          </div>
        `;
      });
    } else {
      movies.innerHTML = `<h2>${data.Error}</h2>`;
    }
  } catch (e) {
    movies.innerHTML = "<h2>Failed to load movies.</h2>";
    console.error(e);
  }
}

function searchMovie() {
  const q = document.getElementById("search").value.trim();
  if (q) {
    loadMovies(q);
  }
}

loadMovies();
