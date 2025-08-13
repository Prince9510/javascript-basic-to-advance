let my;
let input = document.querySelector("input");
input.addEventListener("input", searchData);

(async function getData(callback) {
  showSkeletonLoader();

  await fetch("https://jsonplaceholder.typicode.com/users")
    .then((data) => data.json())
    .then((data) => (my = data))
    .then(() => {
      setTimeout(() => {
        callback(my);
      }, 2500);
    });
})(showDataInDOM);

function showDataInDOM(myData) {
  let tbody = document.querySelector("tbody");
  let tr = "";
  myData.forEach((e) => {
    tr += `
            <tr>
                <td>${e.id}</td>
                <td>${e.name}</td>
                <td>${e.email}</td>
                <td>${e.phone}</td> 
                <td>${e.address.street},${e.address.suite},${e.address.city}</td>
            </tr>
    `;
  });

  tbody.innerHTML = tr;
}

function searchData() {
  let tbody = document.querySelector("tbody");
  let tr = tbody.children;
  let td;

  let filter = (input.value || "").toLowerCase();
  for (let i = 0; i < tr.length; i++) {
    // console.log(tr[i]);
    td = tr[i].getElementsByTagName("td")[1];

    if (td) {
      tdValue = td.textContent || td.innerText;
      if (tdValue.toLowerCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function showSkeletonLoader() {
  let tbody = document.querySelector("tbody");
  let tr = "";

  for (let i = 0; i < 10; i++) {
    tr += `
    
            <tr class="loaderTR">
                <td><p class="loader"></p></td>
                <td><p class="loader"></p></td>
                <td><p class="loader"></p></td>
                <td><p class="loader"></p></td>
                <td><p class="loader"></p></td>
            </tr>
    `;
  }

  tbody.innerHTML = tr;

  // removeSkeletonLoader();
}

function removeSkeletonLoader() {
  setTimeout(() => {
    let tr = document.querySelectorAll(".loaderTR");
    tr.forEach((tr) => {
      tr.style.display = "none";
    });
  }, 3000);
}
