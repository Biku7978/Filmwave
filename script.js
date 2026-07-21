const API_KEY = "YOUR_API_KEY";

async function searchMovie(){

    let name = document.getElementById("search").value;

    let url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${name}`;

    let response = await fetch(url);
    let data = await response.json();

    let movies = document.getElementById("movies");

    movies.innerHTML = "";

    if(data.Search){

        data.Search.forEach(movie => {

            movies.innerHTML += `
            <div class="movie">
                <img src="${movie.Poster}">
                <h3>${movie.Title}</h3>
                <p>${movie.Year}</p>
            </div>
            `;

        });

    }else{
        movies.innerHTML = "<h2>Movie Not Found</h2>";
    }
}
