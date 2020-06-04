const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied");
const allseats = document.querySelectorAll(".row .seat");
const screen = document.querySelector(".screen");
let count = document.getElementById("count");
let total = document.querySelector(".total");
let movieSelect = document.getElementById("movie");
// converting to type int
let ticketPrice = +movieSelect.value;

window.addEventListener("DOMContentLoaded", () => {
  const selectedseats = JSON.parse(localStorage.getItem("selectedseats"));
  console.log(selectedseats);

  const Price = localStorage.getItem("Price");
  const MovieIndex = localStorage.getItem("selectedMovieindex");
  if (selectedseats !== null) {
    seats.forEach((seat, index) => {
      if (selectedseats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
    count.innerText = selectedseats.length;
  }
  if (MovieIndex !== null) {
    movieSelect.selectedIndex = MovieIndex;
  }
  if (Price !== null) {
    total.innerText = Price * selectedseats.length;
  }
});
/* Functions */
//update selected number of seats
const updateSelectedCount = () => {
  const selectedseats = document.querySelectorAll(".row .seat.selected");
  //getting index of selected seats
  const seatindex = [...selectedseats].map((seat) => {
    const index = [...allseats].indexOf(seat);
    return index;
  });
  // seeting up localstorage
  localStorage.setItem("selectedseats", JSON.stringify(seatindex));
  const selectedLength = selectedseats.length;
  count.innerText = selectedLength;
  total.innerText = selectedLength * ticketPrice;
};

//function foer localStorage
const setMoviedata = (movieIndex, moviePrice) => {
  localStorage.setItem("selectedMovieindex", movieIndex);
  localStorage.setItem("Price", moviePrice);
};

//eventlistener for selecting seats
// 1 method use foreach or any other higher order function
// 2 method select parent and then its childs

container.addEventListener("click", (e) => {
  if (
    e.target.parentElement.classList.contains("seat") &&
    !e.target.parentElement.classList.contains("occupied")
  ) {
    //toggling selected class
    e.target.parentElement.classList.toggle("selected");

    // update the total and count
    updateSelectedCount();
  }
});

//eventListener for select element
movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;

  //adding data to localStorage
  setMoviedata(e.target.selectedIndex, e.target.value);

  //removing selected seat on changing movie
  seats.forEach((seat) => {
    seat.classList.remove("selected");
  });

  updateSelectedCount();
});
