const API_KEY = "wm_zOtt5ZItPRmx7G1EcoMd9tNIkq4HOC-6OPNwgbJ7sfc"

async function loadMovies(){

    const url = `https://api.watchmode.com/v1/list-titles/?apiKey=${API_KEY}&types=movie&limit=10`;

    const response = await fetch(url);
    const data = await response.json();

    let box = document.getElementById("movies");
    box.innerHTML = "";

    data.titles.forEach(movie => {

        box.innerHTML += `
        <div class="movie">
            <img src="${movie.poster_url}">
            <h3>${movie.title}</h3>
            <p>${movie.year}</p>
        </div>
        `;

    });

}

loadMovies();
