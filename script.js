fetch('movies.json')
    .then(response => response.json())
    .then(data => {
        const grid = document.getElementById('movieGrid');
        data.forEach(movie => {
            grid.innerHTML += `
                <div class="movie-card">
                    <img src="${movie.poster}" width="100">
                    <h3>${movie.title}</h3>
                    <a href="details.html?id=${movie.id}">Watch Now</a>
                </div>
            `;
        });
    });
