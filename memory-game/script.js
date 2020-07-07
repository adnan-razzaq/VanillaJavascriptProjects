const cards = document.querySelectorAll(".memory-card");

let hasflippedCard = false;
let firstCard, secondCard;

function flipcard() {
  this.classList.toggle("flip");
  if (!hasflippedCard) {
    hasflippedCard = true;
    firstCard = this;
    firstCard.classList.add("pointer");
  } else if (hasflippedCard) {
    hasflippedCard = false;

    secondCard = this;

    checkmatch();
  }
}

function checkmatch() {
  if (firstCard.dataset.image === secondCard.dataset.image) {
    //cards match
    secondCard.classList.add("pointer");
  } else {
    firstCard.classList.remove("pointer");
    secondCard.classList.remove("pointer");
    setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");
      firstCard = "";
      secondCard = "";
    }, 1000);
  }
}
(function shuffle() {
  cards.forEach((card) => {
    let random = Math.floor(Math.random() * 12);
    card.style.order = random;
  });
})();
cards.forEach((card) => {
  card.addEventListener("click", flipcard);
});
