// fetch data from the db.json local server
fetch("db.json")
.then(response => response.json())
.then( data => {
    console.log (data);
} )
.catch(error => {
    console.log('Error:', error);
  });
// display the data on the console
const movies = document.getElementById("movies")
movies.innerHTML = "";

for( let films = 1; films <= 15; films++){
    const movieList = document.createElement("div")
    // films.appendChild(movieList)
}

