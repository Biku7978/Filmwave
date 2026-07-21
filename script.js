async function loadShows(){

const response = await fetch("https://api.tvmaze.com/shows");
const shows = await response.json();

let box = document.getElementById("movies");

box.innerHTML = "";

shows.slice(0,20).forEach(show=>{

box.innerHTML += `
<div class="movie">

<img src="${show.image ? show.image.medium : 'https://via.placeholder.com/300x450'}">

<h3>${show.name}</h3>

<p>⭐ ${show.rating.average || "N/A"}</p>

</div>
`;

});

}

loadShows();
