const btns = document.querySelectorAll(".btn");
const screen = document.querySelector(".screen");
const equalBtn = document.querySelector(".btn-equal");
const clearBtn = document.querySelector(".btn-clear");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let data = btn.getAttribute("data-num");
    screen.value = screen.value + data;
  });
});

equalBtn.addEventListener("click", () => {
  let cal = eval(screen.value);
  screen.value = cal;
});

clearBtn.addEventListener("click", () => {
  screen.value = "";
});
