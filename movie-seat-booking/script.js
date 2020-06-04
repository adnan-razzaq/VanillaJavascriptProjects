const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied");
const allseats = document.querySelectorAll(".row .seat");
const screen = document.querySelector(".screen");
const count = document.getElementById("count");
const total = document.querySelector(".total");
const movieSelect = document.getElementById("movie");
// converting to type int
let ticketPrice = +movieSelect.value;

/* Functions */
//update selected number of seats
const updateSelectedCount = () => {
  const selectedseats = document.querySelectorAll(".row .seat.selected");
  //getting index of selected seats
  const seatindex = [...selectedseats].map((seat) => {
    //console.log(allseats);
    const index = [...allseats].indexOf(seat);
    return index;
  });
  console.log(seatindex);

  const selectedLength = selectedseats.length;
  count.innerText = selectedLength;
  total.innerText = selectedLength * ticketPrice;
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
  //removing selected seat on changing movie
  seats.forEach((seat) => {
    seat.classList.remove("selected");
  });

  updateSelectedCount();
});
