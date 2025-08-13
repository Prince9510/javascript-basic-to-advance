window.addEventListener("load", function () {
  userLoginOrNot();
});
const URL = "http://localhost:3000/users";
const referralCheckBox = document.getElementById("referralCheckBox");
const referralInputBox = document.getElementById("referralInputBox");
const form = document.querySelector("form");
let name = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let referral = document.getElementById("referral");
const error_container = document.querySelector(".error_container");
const error_text = document.getElementById("error_text");
const close_error_container = document.querySelector("close_error_container");
let referralBy = document.getElementById("referralBy");
let loader = document.getElementById("loader");
let registerBTN = document.getElementById("registerBTN");
let loaderPerentDiv = document.getElementById("loaderPerentDiv");

// error messages
let name_error = document.getElementById("name_error");
let email_error = document.getElementById("email_error");
let phone_error = document.getElementById("phone_error");
let password_error = document.getElementById("password_error");
let confirmPassword_error = document.getElementById("confirmPassword_error");
let referral_error = document.getElementById("referral_error");

let UserData;

function showLoader() {
  // debugger;
  loaderPerentDiv.style.display = "flex";
}
function stopLoader() {
  loaderPerentDiv.style.display = "none";
}

phone.addEventListener("input", function () {
  let value = this.value.replace(/^\+91\s?/, "");
  value = value.replace(/\D/g, "");
  if (value.length > 10) {
    value = value.slice(0, 10);
  }
  if (value.trim() !== "") {
    this.value = `+91 ${value}`;
  } else {
    this.value = "";
  }
});

referralCheckBox.addEventListener("input", function () {
  if (this.checked) {
    referralInputBox.style.display = "block";
    referral.addEventListener("input", async function (e) {
      // debugger;
      checkReferralCode(e.target.value);
    });
  } else {
    referralInputBox.style.display = "none";
  }
});
// error handling

function handleError(err) {
  error_text.innerText = err;
  error_container.style.width = "fit-content";
}

function closeErrorContainer() {
  error_container.style.width = "0px";
}

async function checkReferralCode(referralCode) {
  console.log(referralCode);
  let res = await fetch(URL);
  if (!res.ok) {
    handleError("Server Error Please try again!");
    return undefined;
  }
  let data = await res.json();
  let id = data.find((e) => e.id == referralCode);
  // console.log("id", id);

  if (!id) {
    referral_error.style.display = "block";
    referral_error.style.color = "red";
    referral_error.innerText = "Invalid Referral Id";
    return undefined;
  } else {
    referral_error.style.color = "green";
    referral_error.innerHTML = id.name + "✅";
    return id;
  }

  // return id;
}

async function inputFieldErrorMessages() {
  showLoader();
  try {
    let isValid = true;
    let isEmail,
      isPhone,
      isPassword,
      isConfirmPassword,
      isreferralCode,
      handleInputErrorVariable = true;
    const fields = [
      { input: name, error: name_error, message: "Name is required" },
      { input: email, error: email_error, message: "Email is required" },
      {
        input: phone,
        error: phone_error,
        message: "Mobile number is required",
      },
      {
        input: password,
        error: password_error,
        message: "Password is required",
      },
      {
        input: confirmPassword,
        error: confirmPassword_error,
        message: "Confirm Password is required",
      },
    ];

    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let phoneRegex = /^\+91\s\d{10}$/;
    let passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;

    fields.forEach(({ input, error, message }) => {
      if (!input.value.trim()) {
        error.innerText = message;
        error.style.display = "block";
        isValid = false;
      } else {
        error.style.display = "none";
        isValid = true;
      }
    });

    // all input validation error start heree

    if (!emailRegex.test(email.value)) {
      email_error.innerText = "Enter Valid Email";
      email_error.style.display = "block";
      console.log("emaillllllllllllllllll");
      isEmail = false;
      // return;
    } else {
      email_error.style.display = "none";
      isEmail = true;
    }

    if (!phoneRegex.test(phone.value)) {
      phone_error.innerText = "Enter Valid Phone Number";
      phone_error.style.display = "block";
      console.log("phoneeee");
      // debugger;
      isPhone = false;

      // return;
    } else {
      phone_error.style.display = "none";
      isPhone = true;
    }

    if (!passwordRegex.test(password.value)) {
      password_error.innerText =
        "password must be contain uppercase, lowercase, digit and special symbol";
      password_error.style.display = "block";
      // isValid = false;
      isPassword = false;
    } else {
      if (!(password.value === confirmPassword.value)) {
        confirmPassword_error.style.display = "block";
        confirmPassword_error.innerText =
          "password and confirmPassword must be same!";
        isConfirmPassword = false;
      } else {
        confirmPassword_error.style.display = "none";
        password_error.style.display = "none";
        isConfirmPassword = true;
      }
      isPassword = true;
    }

    // Await the referral code check and log the result
    if (referralCheckBox.checked) {
      const referralResult = await checkReferralCode(referral.value);
      console.log(referral);
      // debugger;
      if (!referralResult) {
        isreferralCode = false;
        console.log("sdfghjdfghdfghnj");
      } else {
        isreferralCode = true;
      }
    } else {
      isreferralCode = true;
    }

    console.log(
      isEmail,
      isPhone,
      isPassword,
      isConfirmPassword,
      isreferralCode
    );
    // debugger;

    await handleInputError().then((data) => {
      if (!data) {
        handleInputErrorVariable = false;
      } else {
        handleInputErrorVariable = true;
      }
    });
    // debugger;
    // debugger;

    if (
      isEmail &&
      isPhone &&
      isPassword &&
      isConfirmPassword &&
      isreferralCode &&
      handleInputErrorVariable
    ) {
      // debugger;
      isValid = true;
      console.log("true block run");
    } else {
      // debugger;
      console.log("false block run");
      isValid = false;
    }

    return isValid;
  } catch (err) {
    console.log(err);
  } finally {
    stopLoader();
  }
}

async function handleInputError() {
  let isValid = true;
  let isEmail = true;
  let isphoneValueSlice = true;
  let isPhone = true;
  let response = await fetch(URL);
  if (!response.ok) {
    handleError("Server error please try again!");
    isValid = false;
    return;
  }

  UserData = await response.json();
  let emailFind = UserData.find((e) => e.email == email.value);
  let phoneFind = UserData.find((e) => e.phone == phone.value);

  // alert(emailFind);
  console.log(emailFind);

  if (!emailFind) {
    email_error.style.display = "none";
    isEmail = true;
  } else {
    // debugger;
    email_error.style.display = "block";
    email_error.innerText = "Email already exist!";
    isEmail = false;
  }
  let phoneValueSlice = phone.value.slice(4);

  if (!(phoneValueSlice.length == 10)) {
    // debugger;
    isphoneValueSlice = false;
    return;
  } else {
    isphoneValueSlice = true;
  }
  if (!phoneFind) {
    phone_error.style.display = "none";
    isPhone = true;
  } else {
    if (phone.value == "") {
      phone_error.style.display = "block";
      phone_error.innerText = "Phone number are required!";
    } else {
      phone_error.style.display = "block";
      phone_error.innerText = "Phone number already exist!";
    }
    isPhone = false;
  }

  console.log(emailFind);

  if (isEmail && isPhone && isphoneValueSlice) {
    isValid = true;
  } else {
    isValid = false;
  }

  console.log("handleInputError", UserData);
  return isValid;
}

// handleInputError();
// all event listener

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  await inputFieldErrorMessages().then((data) => {
    console.log(data);

    // console.log("validateeeeeeeeeeeeeeeeee", validate);

    // debugger;
    if (!data) {
      // alert("false");
      return;
    } else {
      // alert("form submit ");
      console.log(
        name.value,
        phone.value,
        email.value,
        password.value,
        confirmPassword.value,
        referral.value
      );
      register();
    }
  });
});

// functions

async function register() {
  showLoader();
  try {
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id: Date.now().toString(),
        name: name.value,
        email: email.value,
        phone: phone.value,
        password: confirmPassword.value,
        referralById: referral.value || null,
        timestamp: Date.now().toString(),
        balance: "1000",
        totalEarning: "0",
        usersCountReferralByYou: "0",
        purchasedProduct: "0",
        active: false,
        activeUsersReferralByYou: "0",
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        let obj = {
          previousUserID: data.id,
          timestamp: data.timestamp,
        };

        localStorage.setItem("token", JSON.stringify(obj));
      })
      .then(async () => {
        await fetch(`${URL}/${referral.value.toString()}`)
          .then((data) => data.json())
          .then(async (data) => {
            const referralCount = Number(data.usersCountReferralByYou) + 1;

            console.log(referralCount);

            await fetch(`${URL}/${referral.value.toString()}`, {
              method: "PATCH",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify({
                usersCountReferralByYou: referralCount.toString(),
              }),
            });
            // debugger;
          });
      })
      .then(() => (window.location.href = "../dashboard/dashboard.html"));
  } catch (err) {
    console.log(err);
  }
}



async function userLoginOrNot() {
  showLoader();
  let token = await JSON.parse(localStorage.getItem("token"));

  await fetch(URL)
    .then((data) => data.json())
    .then((data) => {
      if (token) {
        let userObject = data.find((e) => e.id == token.previousUserID);
        if (!userObject) {
          return;
        }

        // console.log(userObject);

        let currentLoginTimeStamp = Date.now();
        let previousLoginTimeStamp = userObject.timestamp;

        let calculateTime = currentLoginTimeStamp - previousLoginTimeStamp;
        let getTime = calculateTime / 1000;

        console.log(getTime);

        if (getTime < 250) {
          window.location.href = "../dashboard/dashboard.html";
        }
      }
    })
    .catch((err) => {
      console.log(err);
      localStorage.removeItem("token");
    })
    .finally(() => stopLoader());
}