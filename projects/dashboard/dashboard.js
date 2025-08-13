window.addEventListener("load", async function () {
  await userLoginOrNot();
  // await showDashboardDataLoader();
});

showData();

const URL = "http://localhost:3000/users";
const coursesURL = "http://localhost:3000/courses";
let logout = document.getElementById("logoutContainer");
let loaderPerentDiv = document.getElementById("loaderPerentDiv");
let circle = document.querySelector(".circle");
let corusesBTNContainer = document.querySelector(".corusesBTNContainer");
let homeBTNContainer = document.querySelector(".homeBTNContainer");
let userInfo = document.querySelector(".userInfo");
let noBTN = document.querySelector(".noBTN");
let close_error_container = document.querySelector(".close_error_container");
let UserData;

close_error_container.addEventListener("click", removeMessage);

noBTN.addEventListener("click", function () {
  let buyConditionContainer = document.querySelector(".buyConditionContainer");
  buyConditionContainer.style.display = "none";
  let body = document.querySelector("body");
  body.style.overflow = "auto";
});

homeBTNContainer.addEventListener("click", async function () {
  // await showProductData();
  corusesBTNContainer.style.display = "flex";
  this.style.display = "none";
  window.location.href = "./dashboard.html";
});

corusesBTNContainer.addEventListener("click", async function () {
  await showProductData();
  homeBTNContainer.style.display = "flex";
  this.style.display = "none";
});

circle.addEventListener("click", function () {
  userInfo.classList.toggle("block");
});
logout.addEventListener("click", function () {
  showLoader();
  localStorage.removeItem("token");
  window.location.href = "../login/login.html";
});

// loaders

function showMessage(message, color) {
  let error_container = document.querySelector(".error_container");
  let error_text = document.getElementById("error_text");
  error_container.style.width = "fit-content";
  error_container.style.display = "flex";
  error_container.style.backgroundColor = color;
  console.log(error_text);
  error_text.innerText = message;

  setTimeout(() => {
    removeMessage();
  }, 3000);
}

function removeMessage() {
  let error_container = document.querySelector(".error_container");
  let error_text = document.getElementById("error_text");
  error_container.style.display = "none";
  error_container.style.width = "0";
  error_container.style.backgroundColor = "none";
  console.log(error_text);
  error_text.innerText = null;
}

function showDashboardDataLoader() {
  const showDataContainers = document.querySelector(".showDataContainers");
  const dashboardDataSkeletonLoader = document.querySelector(
    ".dashboardDataSkeletonLoader"
  );
  const myBalance = document.querySelector("#myBalance");
  const balanceLoader = document.querySelector("#balanceLoader");

  // const product_container = document.querySelector(".product_container");
  // const wallet_container = document.querySelector(".wallet_container");
  // wallet_container.classList.add("none");
  // wallet_container.style.display = "none";
  showDataContainers.style.display = "none";
  dashboardDataSkeletonLoader.style.display = "grid";
  // debugger
}
function stopDashboardDataLoader() {
  const wallet_container = document.querySelector(".wallet_container");
  // wallet_container.classList.add("none");
  const balanceLoader = document.querySelector("#balanceLoader");
  const showDataContainers = document.querySelector(".showDataContainers");
  const dashboardDataSkeletonLoader = document.querySelector(
    ".dashboardDataSkeletonLoader"
  );
  balanceLoader.style.display = "none";
  wallet_container.style.display = "flex";
  showDataContainers.style.display = "grid";
  dashboardDataSkeletonLoader.style.display = "none";
  // debugger
}

function showLoader() {
  // debugger;
  loaderPerentDiv.style.display = "flex";
}

function stopLoader() {
  loaderPerentDiv.style.display = "none";
}

function showSkeletonLoader() {
  let productsDiv = document.querySelector(".products");
  let skeletonLoader = document.querySelector(".skeletonLoader");
  let product_container = document.querySelector(".product_container");
  let dashboardDataContainerPerent = document.querySelector(
    ".dashboardDataContainerPerent"
  );

  dashboardDataContainerPerent.style.display = "none";

  product_container && (product_container.style.display = "flex");
  if (productsDiv) {
    productsDiv.style.display = "none";
    // productsDiv.classList.remove("productsDiv");
  }
  skeletonLoader && (skeletonLoader.style.display = "grid");
}

function stopSkeletonLoader() {
  let productsDiv = document.querySelector(".products");
  let skeletonLoader = document.querySelector(".skeletonLoader");
  let product_container = document.querySelector(".product_container");

  if (product_container) {
    // product_container.style.display = "none";
  }
  if (productsDiv) {
    productsDiv.style.display = "grid";
  }
  if (skeletonLoader) {
    skeletonLoader.style.display = "none";
    // skeletonLoader.classList.remove("skeletonLoader");
  }
}

async function userLoginOrNot() {
  console.log("loading......");
  // showLoader();
  // showDashboardDataLoader();
  // debugger
  let token = await JSON.parse(localStorage.getItem("token"));

  await fetch(URL)
    .then((data) => data.json())
    .then((data) => {
      UserData = data;
      console.log(data);

      if (token) {
        let userObject = UserData.find((e) => e.id == token.previousUserID);

        // console.log(token);
        console.log("this is a userObject by login or not ", userObject);

        let currentLoginTimeStamp = Date.now();
        let previousLoginTimeStamp = userObject.timestamp;

        let calculateTime = currentLoginTimeStamp - previousLoginTimeStamp;
        let getTime = calculateTime / 1000;

        console.log(getTime);

        if (getTime > 250) {
          window.location.href = "../login/login.html";
        }
        localStorage.setItem("user", JSON.stringify(userObject));
        showData(userObject).then(() => stopDashboardDataLoader());
      } else {
        window.location.href = "../login/login.html";
      }
    })
    .catch((err) => {
      console.log(err);
      window.location.href = "../login/login.html";
    })
    .finally(() => {
      // stopLoader();
      // stopDashboardDataLoader();
      console.log("successfully!");
    });
}

async function showData(e) {
  // showLoader();
  showDashboardDataLoader();
  try {
    // If 'e' is undefined, get user object from localStorage
    // if (!e) {
    //   const userString = localStorage.getItem("user");
    //   if (userString) {
    //     e = JSON.parse(userString);
    //   } else {
    //     throw new Error("User data not found.");
    //   }
    // }

    const balance = document.getElementById("myBalance");
    const totalEarning = document.getElementById("totalEarning");
    const usersCountReferralByYou = document.getElementById(
      "usersCountReferralByYou"
    );
    const purchasedProduct = document.getElementById("purchasedProduct");
    const activeUsersReferralByYou = document.getElementById(
      "activeUsersReferralByYou"
    );

    await fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => {
        let dataFilter = data.filter((item) => item.referralById == e.id);
        let activeOrNot = dataFilter.filter((e) => e.active === true);
        return activeOrNot.length;
      })
      .then(async (count) => {
        await fetch(`http://localhost:3000/users/${e.id}`, {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            activeUsersReferralByYou: count.toString(),
          }),
        });
      });
    let newBalance = Number(e.balance).toFixed(2);

    console.log("userObject", e);
    balance.innerText = "$" + newBalance;
    totalEarning.innerText = "$" + e.totalEarning;
    usersCountReferralByYou.innerText = e.usersCountReferralByYou;
    purchasedProduct.innerText = e.purchasedProduct;
    activeUsersReferralByYou.innerText = e.activeUsersReferralByYou;
  } catch (err) {
    // console.ERR(err);
    console.error(err);
  }
}
// showData();

async function showProductData() {
  showSkeletonLoader();
  try {
    let tokenString = localStorage.getItem("token");
    let token = JSON.parse(tokenString);
    let products = document.querySelector(".products");
    let response = await fetch(coursesURL);
    let rowData = "";
    if (!response.ok) {
      console.log("server error!");
      return;
    }
    let data = await response.json();
    // Filter out courses where the current user has already bought them
    let filterDataByCoursesId = data.filter(
      (course) => !course.buyersId.includes(token.previousUserID)
    );
    console.log(token);
    console.log("filterDataByCoursesId", filterDataByCoursesId);
    // debugger;
    console.log("datassssssssssssssssssssssssssssss", data);

    filterDataByCoursesId.forEach((element) => {
      rowData += `
        <div class="card">
      <div class="inner-card">
        <div class="img">
          <img src="${element.courseImage}" alt="Premium Laptop" />
        </div>
      </div>
      <div class="info">
        <h2 class="title">${element.courseName}</h2>
        <p class="desc">${element.description}</p>
        <div class="bottom">
          <div class="price">
            <span class="new">$${element.price}</span>
          </div>
          <button class="btn" id="productBuyBtn" onclick="Buy(${element.id})">
            <span>See More...</span>
          </button>
        </div>
      </div>
    </div>
      `;
    });
    products.innerHTML = rowData;

  } catch (err) {
    console.log(err);
  } finally {
    setTimeout(() => {
      stopSkeletonLoader();
    }, 1000);
  }
}

// console.log(typeof n)

async function Buy(e) {
  let body = document.querySelector("body");
  // $("body").css("overflow", "hidden");
  body.style.overflow = "hidden";
  try {
    window.scrollTo(0, 0);
    let buyConditionContainer = document.querySelector(
      ".buyConditionContainer"
    );
    let buyCondition = document.querySelector(".buyCondition");
    buyConditionContainer.style.display = "flex";
    buyCondition.style.transform = "scale(1)";
    let buyBTN = document.querySelector(".yesBTN");

    let rowData = localStorage.getItem("token");
    let loginedUser = JSON.parse(rowData);

    buyBTN.onclick = async function () {
      // event.preventDefault();

      showLoader();

      let data;
      let loginUser = localStorage.getItem("token");
      let user = await JSON.parse(loginUser);

      console.log("userrrrrrrrrrrrrrrrrrrrrreeeeeeeeeeeee", user);

      await fetch(`${coursesURL}/${e}`)
        .then((data) => data.json())
        .then(async (finalData) => {
          await fetch(`${URL}/${loginedUser.previousUserID}`)
            .then((userBalanceData) => userBalanceData.json())
            .then((userBalanceData) => {
              if (!(userBalanceData.balance >= finalData.price)) {
                buyConditionContainer.style.display = "none";
                showMessage("Insufficient balance", "red");
                stopLoader();
                return;
              } else {
                data = finalData;
              }
            });
        });

      await fetch(`${coursesURL}/${e}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          buyersId: [...data.buyersId, user.previousUserID],
        }),
      })
        .then((data) => data.json())
        .then(async (data) => {
          await fetch(`${URL}/${user.previousUserID}`)
            .then((data) => data.json())
            .then(async (data) => {
              const purchasedProduct = Number(data.purchasedProduct) + 1;
              await fetch(`${URL}/${user.previousUserID}`, {
                method: "PATCH",
                headers: {
                  "Content-type": "application/json",
                },
                body: JSON.stringify({
                  purchasedProduct: purchasedProduct.toString(),
                  active: true,
                }),
              });
            });
          console.log("this is data after buy a product", data);
          getCommission(user.previousUserID, data.id);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          stopLoader();
          showMessage("Successfully Buy!", "green");
          buyConditionContainer.style.display = "none";
          buyCondition.style.transform = "scale(0)";
          showProductData();
        });
    };
  } catch (err) {
    console.error(err);
  }
}

async function getCommission(currentUserId, courseId) {
  // console.log("currentUserId, productId", currentUserId, productId);
  // let rowData = localStorage.getItem("user");
  // let user = await JSON.parse(rowData);

  let courseReferralBonus, coursePrice, commission;

  const userData = await fetch(`${URL}/${currentUserId}`).then((data) =>
    data.json()
  );
  const courseData = await fetch(`${coursesURL}/${courseId}`).then((data) =>
    data.json()
  );
  courseReferralBonus = courseData.courseReferralBonus;
  coursePrice = courseData.price;

  await fetch(`${URL}/${currentUserId}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      balance: Number(userData.balance - coursePrice).toString(),
    }),
  })
    .then((data) => data.json())
    .then((data) => {
      let myBalance = document.getElementById("myBalance");
      myBalance.innerText = data.balance;
      localStorage.setItem("user", JSON.stringify(data));
    });

  commission = (coursePrice * courseReferralBonus) / 100;

  // alert(commission);

  if (!(userData.referralById == null)) {
    await fetch(`${URL}/${userData.referralById}`)
      .then((res) => res.json())
      .then(async (referralUser) => {
        const updatedBalance = Number(referralUser.balance) + commission;
        const total = Number(referralUser.totalEarning) + commission;
        await fetch(`${URL}/${userData.referralById}`, {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            balance: updatedBalance.toString(),
            totalEarning: total.toString(),
          }),
        });
      })
      .catch((err) => console.error(err));
  }
}

let newBTN = document.querySelector(".new");

console.log(newBTN);

// newBTN.addEventListener("click", function () {
//   console.log(this);
//   debugger;
// });0