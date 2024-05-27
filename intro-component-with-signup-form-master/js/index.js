// const emailInput = document.getElementById("email");
// const errorMsg = document.getElementsByClassName("errorMsg");
// const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
// const icon = document.getElementById("error-icon");

// function emailValidation() {
//   if (emailInput.value === "") {
//     emailInput.style.border = "";
//     errorMsg.style.display = "";
//     icon.style.display = "";
//     return true;
//   } else if (emailInput.value.match(emailRegex)) {
//     emailInput.style.border = "";
//     errorMsg.style.display = "";
//     icon.style.display = "";
//     return true;
//   } else {
//     emailInput.style.border = "2px solid hsl(0, 93%, 68%)";
//     errorMsg.style.display = "block";
//     icon.style.display = "block";
//     return false;
//   }
// }

// emailInput.addEventListener("keyup", emailValidation);

// const form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//   if (!emailValidation()) {
//     event.preventDefault();
//   }
// });

const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const passwod = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInput();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  const errorIcon = inputControl.querySelector(".error-icon");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
  errorIcon.style.display = "block";
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  const errorIcon = inputControl.querySelector(".error-icon");

  errorDisplay.innerText = "";
  inputControl.classList.add("succes");
  inputControl.classList.remove("error");
  errorIcon.style.display = "none";
};

const isValidEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(String(email).toLowerCase());
};

const validateInput = () => {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwodValue = passwod.value.trim();

  if (firstNameValue === "") {
    setError(firstName, "First Name cannot be empty");
  } else {
    setSuccess(firstName);
  }

  if (lastNameValue === "") {
    setError(lastName, "Last Name cannot be empty");
  } else {
    setSuccess(lastName);
  }

  if (emailValue === "") {
    setError(email, "Looks like this not an email");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Looks like this not an email");
  } else {
    setSuccess(email);
  }

  if (passwodValue === "") {
    setError(passwod, "Password cannot be empty");
  } else {
    setSuccess(passwod);
  }
};
