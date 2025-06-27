let root = document.documentElement;
let shadow_div = document.querySelector(".shadow-div");
let myForm = document.getElementById("myForm");
let fullName = document.getElementById("fullName");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let password = document.getElementById("password");
let pincode = document.getElementById("pincode");
let cityLocation = document.getElementById("cityLocation");
let district = document.getElementById("district");
let state = document.getElementById("state");
let country = document.getElementById("country");
let formSubmit_btn = document.getElementById("formSubmit_btn");
let input_div = document.querySelector(".inputs-div");
let table_div = document.querySelector(".table-div");
let close = document.querySelector(".close");
let full = document.getElementById("full");
let closeI = document.getElementById("closeI");
let tbody = document.querySelector("tbody");
let edit_btn = document.querySelector("edit-btn");
let locationsDiv = document.querySelector(".locations");
let fetchPincode = document.getElementById("fetchPincode");
let validation_error = document.querySelector(".validation_error");
let searchBy = document.getElementById("searchBy");
let searchInput = document.getElementById("searchInput");
let tableRow = document.querySelector("tbody");
let theadtr = document.querySelector("thead tr");
let emailtd = document.querySelectorAll(".emailtd");
let filter = document.querySelector(".filter");
let mainLocationSelectTag = document.getElementById("mainLocationSelectTag");
let citySelectTag = document.getElementById("citySelectTag");
let filterLocationData = [];
console.log("objectobjectobjectobject", emailtd);
let child = tableRow.children;
let expands = null;
let pincodeValid = false;
let mainData = [];
let editIndex = null;

// error message
let name_error = document.getElementById("name_error");
let email_error = document.getElementById("email_error");
let phone_error = document.getElementById("phone_error");
let password_error = document.getElementById("password_error");
let pincode_error = document.getElementById("pincode_error");
citySelectTag.style.width = "0";
citySelectTag.style.border = "0";
citySelectTag.style.outline = "0";
filter.style.gap = "0";
mainLocationSelectTag.style.width = "100%";
// addEventListener
fetchPincode.addEventListener("click", getAddressFromPincode);
close.addEventListener("click", extendsDiv);
myForm.addEventListener("submit", formSubmit);
citySelectTag.addEventListener("change", mainFilterLocationData);

// error functions

function showError() {
  let isValid = true;
  const fields = [
    { input: fullName, error: name_error, message: "Full Name is required" },
    { input: email, error: email_error, message: "Email is required" },
    { input: phone, error: phone_error, message: "Mobile number is required" },
    { input: password, error: password_error, message: "Password is required" },
    { input: pincode, error: pincode_error, message: "Pincode is required" },
  ];

  fields.forEach(({ input, error, message }) => {
    if (!input.value.trim()) {
      error.innerText = message;
      error.style.display = "block";
      isValid = false;
    } else {
      error.style.display = "none";
    }
  });

  return isValid;
}

async function getAddressFromPincode() {
  try {
    let locationJSON = {};
    let response = await fetch(
      `https://api.postalpincode.in/pincode/${pincode.value}`
    );
    let finalData = await response.json();
    if (finalData && finalData[0].PostOffice && finalData[0].PostOffice[0]) {
      locationJSON = finalData[0].PostOffice[0];
      pincode_error.style.display = "none";
    } else {
      pincode_error.style.display = "block";
      pincode_error.innerText = "Invalid pincode.";
      return false;
    }

    locationsDiv.style.display = "grid";
    cityLocation.value = locationJSON.Name;
    district.value = locationJSON.District;
    state.value = locationJSON.State;
    country.value = locationJSON.Country;

    console.log(locationJSON);
    pincodeValid = true;
    formSubmit_btn.style.display = "block";
    return true;
  } catch (err) {
    pincode_error.style.display = "block";
    pincode_error.innerText = "Invalid pincode.";
    return false;
    // console.log(err.message);
  }
}

async function formSubmit(e) {
  e.preventDefault();
  if (editIndex) {
    if (!showError()) {
      return;
    }
    let s = await getAddressFromPincode();
    if (!s) {
      return;
    }
    await fetch(`http://localhost:3000/data/${editIndex}`, {
      method: "PUT",
      "Content-type": "application/json",
      body: JSON.stringify({
        fullName: fullName.value,
        fullName: fullName.value,
        email: email.value,
        phone: phone.value,
        password: password.value,
        pincode: pincode.value,
        location: `${cityLocation.value}, ${district.value}, ${state.value}, ${country.value}`,
      }),
    });

    showData();
    editIndex = null;
    formSubmit_btn.innerText = "SUBMIT";
  } else {
    let newID = Date.now();
    // Always validate fields on submit
    if (!showError()) {
      return;
    }

    let s = await getAddressFromPincode();
    if (!s) {
      return;
    }
    console.log("object");
    // debugger;
    console.log("formSubmit called");
    await fetch("http://localhost:3000/data", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id: newID.toString(),
        fullName: fullName.value,
        email: email.value,
        phone: phone.value,
        password: password.value,
        pincode: pincode.value,
        location: `${cityLocation.value}, ${district.value}, ${state.value}, ${country.value}`,
      }),
    });
    showData();

    editIndex = null;
  }
  myForm.reset();
  locationsDiv.style.display = "none";
  formSubmit_btn.style.display = "none";
}

function extendsDiv() {
  if (expands) {
    console.log("objectssssssssssssssssssss");
    table_div.style.width = "950px";
    table_div.backgroundColor = "red";
    table_div.style.height = "520px";
    tbody.style.maxHeight = "420px";
    table_div.style.height = "520px";
    input_div.style.display = "block";
    closeI.style.display = "none";
    full.style.display = "block";
    root.style.setProperty("--wrap", "nowrap");
    root.style.setProperty("--trthWidth", "");
    expands = false;
  } else {
    input_div.style.display = "none";
    console.log("ccccccccccccccccccccc");
    table_div.style.width = "1500px";
    // table_div.style.height = "";
    shadow_div.style.height = "520px";
    tbody.style.maxHeight = "550px";
    table_div.style.height = "fit-content";
    root.style.setProperty("--trthWidth", "250px");
    root.style.setProperty("--wrap", "wrap");
    full.style.display = "none";
    closeI.style.display = "block";
    expands = true;
  }
}
async function showData() {
  try {
    const response = await fetch("http://localhost:3000/data");
    const finalData = await response.json();
    mainData = finalData;
    // console.log(mainData);
  } catch (error) {
    console.log(error);
  }

  let tr = "";
  mainData.forEach((e, i) => {
    tr += `
      <tr class="dataRow" key=${i}>
              <td>${e.id}</td>
              <td>${e.fullName}</td>
              <td class="emailtd">${e.email}</td>
              <td>${e.phone}</td>
              <td>${e.password}</td>
              <td>${e.pincode}</td>
              <td>${e.location}</td>
              <td>
                <button class="edit-btn" onclick="fillDataInFormViaEdit(${e.id})">edit</button>
                <button class="delete-btn" onclick="deleteData(${e.id})">delete</button>
              </td>
              </tr>
    `;
  });
  tbody.innerHTML = tr;
}
showData();

async function deleteData(deleteID) {
  // let stringID = deleteID.toString();
  try {
    console.log("type", typeof stringID);
    await fetch(`http://localhost:3000/data/${deleteID}`, {
      method: "DELETE",
    });

    showData();
  } catch (err) {
    console.log(err);
  }
}

function findAndFilterData(inputValue) {
  console.log(searchBy.value);
  let indexofTd;
  if (searchBy.value == "id") {
    indexofTd = 0;
    searchInput.placeholder = "search by id";
  } else if (searchBy.value == "name") {
    indexofTd = 1;
    searchInput.placeholder = "search by name";
  } else if (searchBy.value == "email") {
    indexofTd = 2;
    searchInput.placeholder = "search by email";
  }
  // console.log("call ");
  let filter = (inputValue || "").toLowerCase();
  // console.log("filter1750828523767", filter);
  // console.log(inputValue);
  // console.log(tableRow);
  let td, tdValue;

  for (let i = 0; i < child.length; i++) {
    // const d = child[i];
    td = child[i].getElementsByTagName("td")[indexofTd];

    // console.log(td);

    if (td) {
      tdValue = td.textContent || td.innerText;
      if (tdValue.toLowerCase().indexOf(filter) > -1) {
        child[i].style.display = "";
      } else {
        child[i].style.display = "none";
      }
    }
  }
}

searchInput.addEventListener("input", (e) => {
  return findAndFilterData(e.target.value);
});

async function fillDataInFormViaEdit(ID) {
  expands = true;
  extendsDiv();
  try {
    let DATA = [];
    await fetch("http://localhost:3000/data")
      .then((data) => data.json())
      .then((finalData) => (DATA = finalData));

    console.log(DATA);

    let index = DATA.findIndex((e) => e.id == ID);

    fullName.value = DATA[index].fullName;
    email.value = DATA[index].email;
    phone.value = DATA[index].phone;
    password.value = DATA[index].password;
    pincode.value = DATA[index].pincode;
    getAddressFromPincode();
    formSubmit_btn.innerText = "UPDATE";
    editIndex = ID;
  } catch (err) {
    console.log(err);
  }
}

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key === "Enter") {
    extendsDiv();
    event.preventDefault();
  }
});

async function filterData() {
  try {
    await fetch("http://localhost:3000/data")
      .then((data) => data.json())
      .then((data) => (mainData = data));
    // console.log("mainData", mainData);

    let filterLocation = mainData.map((e) => e.location);

    // console.log("filterLocation", filterLocation);

    let removeDuplicates = [...new Set(filterLocation)];

    // console.log("removeDuplicates", removeDuplicates);

    // let splitLocation = removeDuplicates.map((e, i) => {

    // });
    let area = [];
    let city = [];
    let state = [];

    for (let key of removeDuplicates) {
      let a = key.split(",");
      area.push(a[0]);
      city.push(a[1]);
      state.push(a[2]);
    }

    let removeDuplicatesArea = [...new Set(area)];
    let removeDuplicatesCity = [...new Set(city)];
    let removeDuplicatesState = [...new Set(state)];

    // console.log(
    //   removeDuplicatesArea,
    //   removeDuplicatesCity,
    //   removeDuplicatesState
    // );

    let obj = {
      area: removeDuplicatesArea,
      city: removeDuplicatesCity,
      state: removeDuplicatesState,
    };

    return obj;
  } catch (err) {
    console.log(err);
  }
}

async function attchFilter() {
  const obj = await filterData();
  // console.log("obj", obj);

  if (obj) {
    let options = Object.keys(obj)
      .map((key) => `<option value="${key}">${key}</option>`)
      .join("");

    mainLocationSelectTag.innerHTML = `
        <option value="select">select</option>
        ${options}
    `;

    mainLocationSelectTag.addEventListener(
      "change",
      function liveChangeLocationData() {
        let val = this.value;
        if (val == "select") {
          showData();
          // citySelectTag.classList.add = "noneCitySelectTag";
          citySelectTag.style.width = "0";
          citySelectTag.style.border = "0";
          citySelectTag.style.outline = "0";
          filter.style.gap = "0";
          mainLocationSelectTag.style.width = "100%";
        } else {
          citySelectTag.style.width = "50%";
          citySelectTag.style.border = "1px solid black";
          citySelectTag.style.outline = "0";
          filter.style.gap = "10px";
          mainLocationSelectTag.style.width = "50%";
        }
        // citySelectTag.style.width = "150px";
        if (val == "area") {
          let options = obj.area
            .map((key) => `<option value="${key}">${key}</option>`)
            .join("");

          citySelectTag.innerHTML = `
        <option value="select">Select</option>
        ${options}
    `;

          // console.log(options);
        } else if (val == "city") {
          let options = obj.city
            .map((key) => `<option value="${key}">${key}</option>`)
            .join("");

          citySelectTag.innerHTML = `
        <option value="select">Select</option>
        ${options}
    `;
        } else if (val == "state") {
          let options = obj.state
            .map((key) => `<option value="${key}">${key}</option>`)
            .join("");

          citySelectTag.innerHTML = `
        <option value="select">Select</option>
        ${options}
    `;
        }
      }
    );
  }
}
// console.log(mainLocationSelectTag);

attchFilter();
function mainFilterLocationData() {
  let val = this.value;
  if (val == "select") {
    showData();
  }
  console.log(val);

  let filter = (val || "").toLowerCase();
  // console.log("filter1750828523767", filter);
  // console.log(inputValue);
  // console.log(tableRow);
  let td, tdValue;
  for (let i = 0; i < child.length; i++) {
    // const d = child[i];
    td = child[i].getElementsByTagName("td")[6];

    // console.log("tdsssssssssss", td);
    if (td) {
      tdValue = td.textContent || td.innerText;
      if (tdValue.toLowerCase().indexOf(filter) > -1) {
        child[i].style.display = "";
      } else {
        child[i].style.display = "none";
      }
    }
  }
}
