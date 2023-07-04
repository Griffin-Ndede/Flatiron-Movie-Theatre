// fetch data for item 1 in the array
fetch("http://localhost:3000/films/1")
.then(response => response.json())
.then( data => {
       console.log (data);
    //    display the data for only movie 1 setting it as the default movie for display
const displayFilms = document.getElementById("display")
   const display1 = document.createElement("Div")
       display1.innerHTML =`
       <div id = "title">
               <h1>
                   ${data.title}
               </h1>
           </div>
           <p id = "description">
           ${data.description}
           </p>
           <img src = "${data.poster}" alt = "poster" id= "poster">
           <div id= "buttons">
               <div id= "runtime">
                   Runtime: ${data.runtime}
               </div>
               <div id = "showtime">
                  Showtime: ${data.showtime}
               </div>
               <div id = "capacity">
                   Capacity: ${data.capacity}
               </div>
               <div id = "tickets_sold">
                  Tickets sold: ${data.tickets_sold}
               </div>
           </div>
           <button id = "buy"> 
               Buy Ticket 
           </button>
           `
        //    ensure that the default movie is always displayed
        displayFilms.innerHTML = display1.innerHTML

        // event listener for booking movie tickets and displays sold out when capacity === tickets sold
//         const buyTicket = document.getElementById("buy")
// buyTicket.addEventListener('click', ticketSales) 
// function ticketSales(id){
//     const ticketSold = document.getElementById("tickets_sold")
//     const availableTickets = data.capacity - data.tickets_sold
//     data.tickets_sold += 1
    
//     if (availableTickets >= 1 && availableTickets <= data.capacity){
//         ticketSold.textContent = `Tickets sold: ${data.tickets_sold}`
//     } else {
//         ticketSold.textContent = "Sold Out!"
//     };
//     }
    })
// fetch data from the db.json local server
fetch("http://localhost:3000/films")
.then(response => response.json())
.then( data => {

// display the list of movies on the console
const movies = document.getElementById("movies")
data.map((films) => {
    const movieList = document.createElement("li")
    movieList.textContent = films.title
    // creates a visible list of movies
    movies.appendChild(movieList)

    // displaying details of the movies
movieList.addEventListener('click', () => {
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
     displayFilms.innerHTML = display1.innerHTML
    
    const buyTicket = document.getElementById("buy")
    buyTicket.addEventListener('click', ticketSales) 
    function ticketSales(id){
        const ticketSold = document.getElementById("tickets_sold")
    
        const availableTickets = films.capacity - films.tickets_sold
        films.tickets_sold += 1
    
        if (availableTickets >= 1 && availableTickets <= films.capacity){
            ticketSold.textContent = `Tickets sold: ${films.tickets_sold}`
        } else {
            ticketSold.textContent = "Sold Out!"
        };
    }
    })
})

})
 .catch(error => {
    console.log('Error:', error);
});
