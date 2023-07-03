// fetch data from the db.json local server
fetch("http://localhost:3000/films")
.then(response => response.json())
.then( data => {
    console.log (data);

// display the data on the console
const movies = document.getElementById("movies")
data.forEach((films) => {
    const movieList = document.createElement("li")
    movieList.textContent = films.title
    movies.appendChild(movieList)

    // displaying details of the movies
const displayFilms = document.getElementById("display")
const display1 = document.createElement("Div")
display1.innerHTML =`
<div id = "title">
    <h1>
        ${films.title}
    </h1>
</div>
<p id = "description">
${films.description}
</p>
<img src = "${films.poster}" alt = "poster" id= "poster">
<div id= "buttons">
    <div id= "runtime">
        Runtime: ${films.runtime}
    </div>
    <div id = "showtime">
       Showtime: ${films.showtime}
    </div>
    <div id = "capacity">
        Capacity: ${films.capacity}
    </div>
    <div id = "tickets_sold">
       Tickets sold: ${films.tickets_sold}
    </div>
</div>
<button id = "buy"> 
    Buy Ticket 
</button>
`
displayFilms.appendChild(display1)
})
})
 .catch(error => {
    console.log('Error:', error);
});
