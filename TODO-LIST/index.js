//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".form");
const todoList = document.querySelector(".todo-list");
const filterbox = document.querySelector(".filter-box");

const allTasks = [];

//eventlisteners
todoButton.addEventListener("submit", addTodo);
todoList.addEventListener("click", deleteCheck);
filterbox.addEventListener("change", filterItems);

//Functions
//for adding todo
function addTodo(event) {
  event.preventDefault();
  const input = todoInput.value;
  //create new div
  const Tododiv = document.createElement("div");
  Tododiv.classList.add("todo");
  Tododiv.innerHTML = `<li>${input}</li>
          <button class="check"><i class="fas fa-check"></i></button>
          <button class="delete"><i class="fas fa-trash"></i></button>`;
  todoList.appendChild(Tododiv);
  todoInput.value = "";
}

//for deleting todo
function deleteCheck(event) {
  const item = event.target.parentElement;
  if (item.classList.contains("delete")) {
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", () => todo.remove());
  } else if (item.classList.contains("check")) {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterItems(e) {
  const selected = event.target.value;
  const allItems = todoList.querySelectorAll(".todo");
  allItems.forEach((item) => {
    if (item.classList.contains("completed") && selected === "completed") {
      item.style.display = "flex";
    } else if (
      !item.classList.contains("completed") &&
      selected === "uncompleted"
    ) {
      item.style.display = "flex";
    } else if (selected === "all") {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

function saveLocaltodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}
