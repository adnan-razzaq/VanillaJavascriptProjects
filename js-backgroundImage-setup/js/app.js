// immediate invoked function expression

(function () {
  const pictures = [
    "contBcg-0",
    "contBcg-1",
    "contBcg-2",
    "contBcg-3",
    "contBcg-4",
  ];

  let counter = 0;

  document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const value = e.currentTarget;
      if (value.classList.contains("btn-right")) {
        counter++;
        if (counter > pictures.length - 1) {
          counter = 0;
        }

        document.querySelector(
          ".img-container"
        ).style.backgroundImage = `url('img/${pictures[counter]}.jpeg')`;
      } else {
        if (value.classList.contains("btn-left")) {
          counter--;
          if (counter < 0) {
            counter = pictures.length - 1;
          }

          document.querySelector(
            ".img-container"
          ).style.backgroundImage = `url('img/${pictures[counter]}.jpeg')`;
        }
      }
    });
  });
})();
