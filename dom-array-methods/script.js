const main = document.getElementById("main");
const addUserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const showMillionairesBtn = document.getElementById("show-millionaires");
const sortBtn = document.getElementById("sort");
const calculateWealthBtn = document.getElementById("calculate-wealth");
let data = [];

getrandomuser();
getrandomuser();
getrandomuser();

// Format number as money - https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
function formatMoney(number) {
  return "$" + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}
/* get random user */
async function getrandomuser() {
  const res = await fetch("https://randomuser.me/api/");
  const data = await res.json();
  const {
    name: { first, last },
  } = data.results[0];

  const newuser = {
    name: `${first} ${last}`,
    money: Math.floor(Math.random() * 100000),
  };

  addData(newuser);
  updateDom();
}

/* Add data */
function addData(obj) {
  data.push(obj);
}

/* Foreach */
function updateDom() {
  main.innerHTML = "<h2><strong>Person</strong> Wealth</h2>";
  data.forEach((item) => {
    const element = document.createElement("div");
    element.classList.add("person");
    element.innerHTML = `<h3>${item.name}<strong>${formatMoney(
      item.money
    )}</strong></h3>`;
    main.appendChild(element);
  });
}

/* Eventlisteners */

// adding users
addUserBtn.addEventListener("click", () => {
  getrandomuser();
  updateDom();
});

// Double eveyones money
doubleBtn.addEventListener("click", () => {
  const a = data.map((item) => {
    return { ...item, money: item.money * 2 };
  });
  data = a;

  updateDom();
});

// showing only millinoraies
showMillionairesBtn.addEventListener("click", () => {
  let a = data.filter((item) => item.money > 100000);
  data = a;

  updateDom();
});

//sorting
sortBtn.addEventListener("click", () => {
  data.sort((a, b) => b.money - a.money);
  updateDom();
});

//showing total wealth
calculateWealthBtn.addEventListener("click", () => {
  const wealth = data.reduce((acc, curr) => {
    return acc + curr.money;
  }, 0);
  const wealthEl = document.createElement("div");
  wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(
    wealth
  )}</strong></h3>`;
  main.appendChild(wealthEl);
});
