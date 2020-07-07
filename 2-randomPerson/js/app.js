const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  fetch("https://randomuser.me/api/").then((data) =>
    data.json().then((data) => {
      const {
        name: { first, last },
        location: {
          street: { number, name },
        },
        phone,
        email,
        picture: { large },
      } = data.results[0];
      document.getElementById("first").textContent = first;
      document.getElementById("last").textContent = last;
      document.getElementById("street").textContent = `${number} ${name}`;
      document.getElementById("phone").textContent = phone;
      document.getElementById("email").textContent = email;
      document.getElementById("photo").src = large;
    })
  );
});

/* btn.addEventListener("click", () => {
  const ajax = new XMLHttpRequest();
  const url = "https://randomuser.me/api/";
  ajax.open("GET", url, true);

  ajax.onload = function () {
    if (this.status === 200) {
      const data = JSON.parse(this.responseText);
      const {
        name: { first, last },
        location: {
          street: { number, name },
        },
        phone,
        email,
        picture: { large },
      } = data.results[0];
      document.getElementById("first").textContent = first;
      document.getElementById("last").textContent = last;
      document.getElementById("street").textContent = `${number} ${name}`;
      document.getElementById("phone").textContent = phone;
      document.getElementById("email").textContent = email;
      document.getElementById("photo").src = large;
    }
  };

  ajax.onerror = function () {
    console.log("there was an error");
  };

  ajax.send();
});
 */
