function animatedForm() {
  const arrows = document.querySelectorAll(".fa-arrow-down");

  arrows.forEach((arrow) => {
    arrow.addEventListener("click", () => {
      const input = arrow.previousElementSibling;
      const parent = arrow.parentElement;
      const nextForm = parent.nextElementSibling;

      // validate user
      if (input.type === "text" && validateuser(input)) {
        //go to nextform
        nextSlide(parent, nextForm);
      }
      //validate email
      else if (input.type === "email" && validateEmail(input)) {
        //go to next from
        nextSlide(parent, nextForm);
      } else if (input.type === "password" && validatePassword(input)) {
        nextSlide(parent, nextForm);
      } else {
        parent.style.animation = "shake 0.5s ease";
      }
      //remove animation
      parent.addEventListener("animationend", () => {
        parent.style.animation = "";
      });
    });
  });
}

function validateuser(user) {
  if (user.value.length > 6) {
    const value = user.value;
    user.value = "";
    user.placeholder = `hello ${value}`;
    showsucess();
    return true;
  } else {
    showerror();
    user.value = "";
    user.placeholder = "This is not a valid name";
  }
}
function validateEmail(email) {
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (emailPattern.test(email.value)) {
    email.value = "";
    email.placeholder = "Way to go";
    showsucess();
    return true;
  } else {
    showerror();
    email.value = "";
    email.placeholder = " not a valid email address";
  }
}

function validatePassword(password) {
  var mediumRegex = new RegExp(
    "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
  );
  if (mediumRegex.test(password.value)) {
    password.value = "";
    password.placeholder = "Password strength is good";
    showsucess();
    return true;
  } else {
    password.value = "";
    password.placeholder = "password is weak";
    showerror();
  }
}

function nextSlide(parent, nextform) {
  parent.classList.add("inactive");
  nextform.classList.remove("inactive");
  nextform.classList.add("active");
}

function showerror() {
  document.body.style.backgroundColor = "#F56565";
}
function showsucess() {
  document.body.style.backgroundColor = "#38A169";
}
animatedForm();
