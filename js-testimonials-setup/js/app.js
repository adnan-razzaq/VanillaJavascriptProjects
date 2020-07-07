let index = 0;
const customer = [
  {
    name: "adnan",
    image: "customer-0",
    comments: " nice food",
  },
  {
    name: "ALI",
    image: "customer-1",
    comments: " good",
  },
  {
    name: "ahmad",
    image: "customer-2",
    comments: " ambition",
  },
  {
    name: "arslan",
    image: "customer-3",
    comments: " alligiant",
  },
  {
    name: "basit",
    image: "customer-4",
    comments:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, modi?",
  },
];

const btn = document.querySelectorAll(".btn");
const customerimg = document.getElementById("customer-img");
const customertext = document.getElementById("customer-text");
const customername = document.getElementById("customer-name");

btn.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    if (element.classList.contains("nextBtn")) {
      index++;
      if (index > customer.length - 1) {
        index = 0;
      }
      customername.textContent = customer[index].name;
      customertext.textContent = customer[index].comments;
      customerimg.src = `img/${customer[index].image}.jpg`;
    } else if (element.classList.contains("prevBtn")) {
      index--;
      if (index < 0) {
        index = customer.length - 1;
      }
      customername.textContent = customer[index].name;
      customertext.textContent = customer[index].comments;
      customerimg.src = `img/${customer[index].image}.jpg`;
    }
  });
});
