const btn = document.querySelector(".btn");
const hexText = document.querySelector("#hex-value");
const body = document.querySelector("body");

function generateHex() {
  let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let hex = "#";
  let random;
  for (let i = 0; i < 6; i++) {
    random = Math.floor(Math.random() * array.length);
    console.log(hex);

    hex = hex + array[random];
  }
  document.body.style.backgroundColor = hex;
  hexText.textContent = hex;
}

btn.addEventListener("click", generateHex);
