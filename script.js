const API_KEY = "http://www.omdbapi.com/?i=tt3896198&apikey=68a6d6";

const movies = document.getElementById("movies");

async function loadMovies(query = "Avengers") {

  const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
  const data = await response.json();

  movies.innerHTML = "";

  if (data.Response === "True") {
    data.Search.forEach(movie => {
      movies.innerHTML += `
        <div class="movie">
          <img src="${movie.Poster}" alt="${movie.Title}">
          <h3>${movie.Title}</h3>
          <p>${movie.Year}</p>
        </div>
      `;
    });
  } else {
    movies.innerHTML = "<h2>No Movies Found</h2>";
  }
}

function searchMovie() {
  const query = document.getElementById("search").value;
  loadMovies(query);
}

loadMovies();
