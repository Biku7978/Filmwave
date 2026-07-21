const movies = [
{
title:"Avengers Endgame",
year:"2019",
image:"https://m.media-amazon.com/images/I/81ExhpBEbHL.jpg"
},
{
title:"KGF Chapter 2",
year:"2022",
image:"https://m.media-amazon.com/images/I/71QZ8z9wKRL.jpg"
},
{
title:"RRR",
year:"2022",
image:"https://m.media-amazon.com/images/I/81lE8J5YQ-L.jpg"
}
];

let box = document.getElementById("movies");

function showMovies(list){

box.innerHTML="";

list.forEach(movie=>{

box.innerHTML += `
<div class="movie" onclick="openMovie()">
<img src="${movie.image}">
<h3>${movie.title}</h3>
<p>${movie.year}</p>
</div>
`;

});

}

showMovies(movies);


function searchMovie(){

let text = document.getElementById("search").value.toLowerCase();

let result = movies.filter(movie =>
movie.title.toLowerCase().includes(text)
);

showMovies(result);

}


function openMovie(){
window.location.href="movie.html";
}
