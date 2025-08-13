const form = document.querySelector("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const registerBTN = document.getElementById("registerBTN");
const name_error = document.getElementById("name_error");
const email_error = document.getElementById("email_error");
const phone_error = document.getElementById("phone_error");
const password_error = document.getElementById("password_error");
const confirmPassword_error = document.getElementById("confirmPassword_error");

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^\+91\s\d{10}$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;

name.addEventListener("input", () => {
  if (!name.value.trim()) {
    name_error.innerText = "Name is required";
    name_error.style.display = "block";
    return;
  } else if (!/^[A-Za-z\s]+$/.test(name.value)) {
    name_error.innerText = "Only letters and spaces are allowed";
    name_error.style.display = "block";
    return;
  } else {
    if (!(name.value.length >= 3)) {
      name_error.innerText = "Name length must be more than 3 characters";
      name_error.style.display = "block";
      return;
    } else {
      name_error.style.display = "none";
    }
  }
});
email.addEventListener("input", () => {
  if (!email.value.trim()) {
    email_error.innerText = "Email is required";
    email_error.style.display = "block";
    return;
  }
  if (!emailRegex.test(email.value)) {
    email_error.innerText = "Enter a valid email";
    email_error.style.display = "block";
    return;
  }
  email_error.style.display = "none";
});

phone.addEventListener("input", function () {
  let value = this.value.replace(/^\+91\s?/, "").replace(/\D/g, "");

  console.log("this is value ", value);

  if (value.length > 10) {
    value = value.slice(0, 10);
  }
  if (value.trim() !== "") {
    this.value = `+91 ${value}`;
  } else {
    this.value = "";
  }

  if (value.length !== 10) {
    phone_error.innerText = "Phone Number must be 10 digits";
    phone_error.style.display = "block";
    return;
  }
  if (!phoneRegex.test(phone.value)) {
    phone_error.innerText = "Enter a valid phone number";
    phone_error.style.display = "block";
    return;
  }
  phone_error.style.display = "none";
});

password.addEventListener("input", () => {
  if (!password.value.trim()) {
    password_error.innerText = "Password is required";
    password_error.style.display = "block";
    return;
  }
  if (!passwordRegex.test(password.value)) {
    password_error.innerText =
      "Password must contain uppercase, lowercase, digit, and special symbol";
    password_error.style.display = "block";
  } else {
    password_error.style.display = "none";
  }
  if (
    confirmPassword.value.trim() &&
    password.value !== confirmPassword.value
  ) {
    confirmPassword_error.innerText = "Passwords do not match!";
    confirmPassword_error.style.display = "block";
  } else {
    confirmPassword_error.style.display = "none";
  }
});

confirmPassword.addEventListener("input", () => {
  if (!confirmPassword.value.trim()) {
    confirmPassword_error.innerText = "Confirm Password is required";
    confirmPassword_error.style.display = "block";
    return;
  }
  if (password.value !== confirmPassword.value) {
    confirmPassword_error.innerText = "Passwords do not match!";
    confirmPassword_error.style.display = "block";
  } else {
    confirmPassword_error.style.display = "none";
  }
});

function validateForm() {
  let valid = true;

  if (!name.value.trim()) {
    name_error.innerText = "Name is required";
    name_error.style.display = "block";
    valid = false;
  }

  if (!email.value.trim() || !emailRegex.test(email.value)) {
    email_error.innerText = "Enter a valid email";
    email_error.style.display = "block";
    valid = false;
  }
  let phoneValue = phone.value.replace(/^\+91\s?/, "").replace(/\D/g, "");
  if (phoneValue.length !== 10 || !phoneRegex.test(phone.value)) {
    phone_error.innerText = "Enter a valid phone number";
    phone_error.style.display = "block";
    valid = false;
  }
  if (!password.value.trim() || !passwordRegex.test(password.value)) {
    password_error.innerText =
      "Password must contain uppercase, lowercase, digit, and special symbol";
    password_error.style.display = "block";
    valid = false;
  }
  if (
    !confirmPassword.value.trim() ||
    password.value !== confirmPassword.value
  ) {
    confirmPassword_error.innerText = "Passwords do not match!";
    confirmPassword_error.style.display = "block";
    valid = false;
  }
  return valid;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const isValid = validateForm();
  if (!isValid) {
    return;
  }
  register();
});

function register() {
  console.log(name.value, email.value, phone.value, password.value);
  name.value = "";
  email.value = "";
  phone.value = "";
  password.value = "";
  confirmPassword.value = "";
  alert("Form Submit Successfully!");
}
