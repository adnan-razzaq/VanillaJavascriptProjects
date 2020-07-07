const form = document.getElementById("itemForm");
const input = document.getElementById("itemInput");
const itemlist = document.querySelector(".item-list");
const feedback = document.querySelector(".feedback");
const clearbtn = document.getElementById("clear-list");
let datarray = JSON.parse(localStorage.getItem("list")) || [];
console.log(datarray);
document;
if (datarray.length > 0) {
  datarray.forEach((item) => {
    itemlist.insertAdjacentHTML(
      "beforeend",
      `  <div class="item my-3">
      <h5 class="item-name text-capitalize">${item}</h5>
      <div class="item-icons">
       <a href="#" class="complete-item mx-2 item-icon"><i class="far fa-check-circle"></i></a>
       <a href="#" class="edit-item mx-2 item-icon"><i class="far fa-edit"></i></a>
       <a href="#" class="delete-item item-icon"><i class="far fa-times-circle"></i></a>
      </div>
     </div>`
    );
    handleItem(item);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value;
  if (value === "") {
    showFeedback("Please enter values", "danger");
  } else {
    addItem(value);
    input.value = "";
    //add items to array
    datarray.push(value);

    //storing it to localstorage
    //also assigning it to event listeners
    localStorage.setItem("list", JSON.stringify(datarray));

    //handleitem function
    handleItem(value);
  }
});
// showing feedback
function showFeedback(text, action) {
  feedback.classList.add("showItem", `alert-${action}`);
  feedback.innerHTML = `<p>${text}</p> `;
  setTimeout(() => {
    feedback.classList.remove("showItem", `alert-${action}`);
  }, 2000);
}

// adding items
function addItem(value) {
  const div = document.createElement("div");
  div.classList.add("item", "my-3");
  div.innerHTML = `<h5 class="item-name text-capitalize">${value}</h5>
      <div class="item-icons">
       <a href="#" class="complete-item mx-2 item-icon"><i class="far fa-check-circle"></i></a>
       <a href="#" class="edit-item mx-2 item-icon"><i class="far fa-edit"></i></a>
       <a href="#" class="delete-item item-icon"><i class="far fa-times-circle"></i></a>
      </div>`;
  itemlist.appendChild(div);
}

//function handleitem
function handleItem(value) {
  const items = itemlist.querySelectorAll(".item");
  items.forEach((item) => {
    if (item.querySelector(".item-name").textContent === value) {
      //complete event listener
      const completebtn = item.querySelector(".complete-item");
      completebtn.addEventListener("click", () => {
        document.querySelector(".item-name").classList.toggle("completed");
        document
          .querySelector(".fa-check-circle")
          .classList.toggle("visibility");
      });

      const editbtn = item.querySelector(".edit-item");

      //editbtn event listener

      editbtn.addEventListener("click", () => {
        console.log(editbtn);

        input.value = value;
        itemlist.removeChild(item);
        //updating array

        datarray = datarray.filter((item) => {
          return item !== value;
        });
        localStorage.setItem("list", JSON.stringify(datarray));
      });

      //deletebtn event listener
      const deletebtn = item.querySelector(".delete-item");

      deletebtn.addEventListener("click", () => {
        itemlist.removeChild(item);
        //updating array

        datarray = datarray.filter((item) => {
          return item !== value;
        });
        localStorage.setItem("list", JSON.stringify(datarray));
      });
    }
  });
}

//clear all values
clearbtn.addEventListener("click", () => {
  itemData = [];
  localStorage.removeItem("list");
  const items = itemlist.querySelectorAll(".item");
  if (items.length > 0) {
    items.forEach((item) => {
      itemlist.removeChild(item);
    });
  }
});
