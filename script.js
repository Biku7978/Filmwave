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

movies.forEach(movie=>{
box.innerHTML += `
<div class="movie">
<img src="${movie.image}">
<h3>${movie.title}</h3>
<p>${movie.year}</p>
</div>
`;
});
