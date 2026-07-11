const API_KEY = "f121819f";

const searchInput = document.getElementById("search");

searchInput.addEventListener("keyup", async () => {
  const query = searchInput.value.trim();

  if (query.length < 2) return;

  const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
  const data = await res.json();

  const movies = document.getElementById("movies");
  movies.innerHTML = "";

  if (data.Search) {
    data.Search.forEach(movie => {
      movies.innerHTML += `
        <div class="card">
          <img src="${movie.Poster}" alt="${movie.Title}">
          <h3>${movie.Title}</h3>
          <p>${movie.Year}</p>
        </div>
      `;
    });
  } else {
    movies.innerHTML = "<h2>No movies found</h2>";
  }
});
