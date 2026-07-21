const movies = [
{
title:"Jawan",
year:"2023",
category:"Bollywood",
image:"https://via.placeholder.com/300x450?text=Jawan"
},
{
title:"Pathaan",
year:"2023",
category:"Bollywood",
image:"https://via.placeholder.com/300x450?text=Pathaan"
},
{
title:"Avengers Endgame",
year:"2019",
category:"Hollywood",
image:"https://via.placeholder.com/300x450?text=Avengers"
},
{
title:"Spider Man",
year:"2021",
category:"Hollywood",
image:"https://via.placeholder.com/300x450?text=Spider+Man"
},
{
title:"Indian TV Serial",
year:"2026",
category:"TV Shows",
image:"https://via.placeholder.com/300x450?text=TV+Show"
}
];


let box = document.getElementById("movies");


function showMovies(list){

box.innerHTML="";

list.forEach(movie=>{

box.innerHTML += `
<div class="movie">

<img src="${movie.image}">

<h3>${movie.title}</h3>

<p>${movie.year}</p>

<p>${movie.category}</p>

</div>
`;

});

}


showMovies(movies);


function searchMovie(){

let text=document.getElementById("search").value.toLowerCase();

let result=movies.filter(movie =>
movie.title.toLowerCase().includes(text)
);

showMovies(result);

}
