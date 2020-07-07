//
const mainBtn = document.getElementById("mainBtn");
const result = document.getElementById("result");
const imgContainer = document.getElementById("img");

mainBtn.addEventListener("click", () => {
  const ajax = new XMLHttpRequest();
  const url = "https://api.chucknorris.io/jokes/random";
  ajax.open("GET", url, true);
  ajax.onload = function () {
    if (this.status === 200) {
      const data = JSON.parse(this.responseText);
      const { value, icon_url } = data;
      result.textContent = value;

      imgContainer.src = icon_url;
    }
  };

  ajax.onerror = function () {
    console.log("THere was an error");
  };

  ajax.send();
});
