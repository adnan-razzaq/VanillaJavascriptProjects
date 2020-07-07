const services = [
  {
    value: 1,
    title: "great - 20%",
  },
  {
    value: 2,
    title: "ok - 10%",
  },
  {
    value: 3,
    title: "bad - 2%",
  },
];

// create options
services.forEach((item) => {
  const options = document.createElement("option");
  options.textContent = item.title;
  options.value = item.value;
  document.getElementById("input-service").appendChild(options);
});

const form = document.getElementById("tip-form");
const amount = document.getElementById("input-bill");
const users = document.getElementById("input-users");
const service = document.getElementById("input-service");

// customer feedback
const feedback = document.querySelector(".feedback");
const loader = document.querySelector(".loader");
const results = document.querySelector(".results");
// submit form

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let bill = amount.value;
  let people = users.value;
  let quality = service.value;

  console.log(typeof bill, typeof people, typeof quality);

  if (
    bill === "" ||
    bill <= "0" ||
    people === "" ||
    people <= "0" ||
    quality === 0
  ) {
    feedback.classList.add("showItem", "alert-danger");
    feedback.innerHTML = "<p>Please check your values</p>";
    setTimeout(() => {
      feedback.classList.remove("showItem", "alert-danger");
    }, 1500);
  } else {
    feedback.classList.add("showItem", "alert-success");
    feedback.innerHTML = "<p>Calculating...</p>";
    loader.classList.add("showItem");
    clearform();

    setTimeout(() => {
      loader.classList.remove("showItem");
      feedback.classList.remove("showItem", "alert-danger");
    }, 5000);
    calculatetip(bill, people, quality);
  }
});

function calculatetip(bill, people, quality) {
  let percent = 0;

  if (quality === "1") {
    percent = 0.2;
  } else if (quality === "2") {
    percent = 0.1;
  } else if (quality === "3") {
    percent = 0.02;
  }
  let tip = parseInt(bill) * percent;
  let total = parseInt(bill) + tip;
  let perperson = total / parseInt(people);
  results.classList.add("showItem");
  document.getElementById("tip-amount").textContent = tip;
  document.getElementById("total-amount").textContent = total;
  document.getElementById("person-amount").textContent = perperson;
}

function clearform() {
  amount.value = "";
  users.value = "";
  service.value = "0";
}
