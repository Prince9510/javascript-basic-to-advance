window.addEventListener("load", function () {
  userLoginOrNot();
});
const URL = "http://localhost:3000/users";
let email = document.getElementById("email");
let loginBTN = document.getElementById("loginBTN");
let password = document.getElementById("password");
let form = document.querySelector("form");
const error_container = document.querySelector(".error_container");
const error_text = document.getElementById("error_text");
const close_error_container = document.querySelector("close_error_container");
let email_error = document.getElementById("email_error");
let password_error = document.getElementById("password_error");
let loaderPerentDiv = document.getElementById("loaderPerentDiv");
let UsersData;

function showLoader() {
  // debugger;
  loaderPerentDiv.style.display = "flex";
}
function stopLoader() {
  loaderPerentDiv.style.display = "none";
}

function handleError(err) {
  let isValid = true;
  // error_text.innerText = err;
  // error_container.style.width = "fit-content";

  if (email.value.trim() == "") {
    email_error.style.display = "block";
    email_error.innerText = "Enter Valid Email!";
    console.log("emaoldmskfm");
    isValid = false;
    // return;
  } else {
    email_error.style.display = "none";
    isValid = true;
  }

  if (password.value.trim() == "") {
    password_error.style.display = "block";
    password_error.innerText = "Enter Valid Email!";
    isValid = false;
    return;
  } else {
    password_error.style.display = "none";
    isValid = true;
  }

  if (err) {
    error_text.innerText = err;
    error_container.style.width = "fit-content";
    isValid = false;
  } else {
    isValid = true;
  }

  return isValid;
}
function closeErrorContainer() {
  error_container.style.width = "0px";
}

async function login() {
  showLoader();
  await fetch(URL)
    .then((data) => data.json())
    .then((data) => (UsersData = data));

  console.log(UsersData);

  let userObject = UsersData.find((e) => e.email == email.value);
  // console.log(emailFind)
  if (!userObject) {
    handleError("User Not found!");
    stopLoader();
    return;
  }

  if (!(userObject.password === password.value)) {
    handleError("incorrect password");
    stopLoader();
    return;
  }

  await fetch(`http://localhost:3000/users/${userObject.id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      ...userObject,
      timestamp: Date.now().toString(),
    }),
  })
    .then((data) => data.json())
    .then((data) => {
      let obj = {
        previousUserID: data.id,
        timestamp: data.timestamp,
      };

      localStorage.setItem("token", JSON.stringify(obj));
    })
    .then(() => (window.location.href = "../dashboard/dashboard.html"));
  // .finally(() => stopLoader());
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  login();
});
// loginBTN.addEventListener("click",login)

async function userLoginOrNot() {
  let token = await JSON.parse(localStorage.getItem("token"));

  await fetch(URL)
    .then((data) => data.json())
    .then((data) => {
      UsersData = data;

      if (token) {
        let userObject = UsersData.find((e) => e.id == token.previousUserID);

        //   console.log(token);

        console.log(userObject);

        let currentLoginTimeStamp = Date.now();
        let previousLoginTimeStamp = userObject.timestamp;

        let calculateTime = currentLoginTimeStamp - previousLoginTimeStamp;
        let getTime = calculateTime / 1000;

        console.log(getTime);

        if (getTime < 250) {
          window.location.href = "../dashboard/dashboard.html";
        }
      }
    });
}

email.value = "satasiyaprince9510@gmail.com";
password.value = "Prince@123";

