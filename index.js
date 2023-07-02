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
});
})
.catch(error => {
    console.log('Error:', error);
  });
