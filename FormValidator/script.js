const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//show input error message
function showerror(input, message) {
  const formcontrol = input.parentElement;
  formcontrol.classList.add("error");
  setTimeout(() => {
    formcontrol.classList.remove("error");
  }, 8000);
  const small = formcontrol.querySelector("small");
  small.innerText = message;
}

// show success
function showsuccess(input) {
  const formcontrol = input.parentElement;
  formcontrol.classList.add("success");
  setTimeout(() => {
    formcontrol.classList.remove("success");
  }, 8000);
}

// check required function

function checkRequired(inputArray) {
  inputArray.forEach((input) => {
    if (input.value === "") {
      showerror(input, `${input.id} is required`);
    } else {
      showsuccess(input);
    }
  });
}

//check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showerror(input, `${input.id} must be greater than ${min} characters`);
  } else if (input.value.length > max) {
    showerror(input, `${input.id} cannot be greater than ${max} characters`);
  } else {
    showsuccess(input);
  }
}

//valid email function
function checkemail(einput) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(einput.value)) {
    showsuccess(einput);
  } else {
    showerror(einput, "Email is not valid");
  }
}

// valid password
function checkPassword(password, password2) {
  if (password2.value === password.value) {
    showsuccess(password2);
  } else {
    showerror(password2, "Passwords do not match");
  }
}
//eventlisteners
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkRequired([username, email, password2, password]);
  checkLength(username, 5, 15);
  checkLength(password, 8, 15);
  checkemail(email);
  checkPassword(password, password2);
});

/* if (username.value === "") {
   showerror(username, "username is required");
 } else {
   showsuccess(username);
 }
 if (email.value === "") {
   showerror(email, "email is required");
 } else if (!validEmail(email.value)) {
   showerror(email, "Email is not valid");
 } else {
   showsuccess(email);
 }
 if (password.value === "") {
   showerror(password, "Please enter your password");
 } else {
   showsuccess(password);
 }
 if (password2.value === "") {
   showerror(password2, "Please again enter your password to confirm");
 } else {
   showsuccess(password2classList.add);
 } */
