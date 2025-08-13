async function quote() {
  loader();
  try {
    await fetch("https://api.api-ninjas.com/v1/quotes", {
      method: "GET",
      headers: {
        "X-Api-Key": "3tBnTwAGU8C2kDCCkIXbgw==tTXK59yY5LLZQksT",
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => showData(data));
  } catch (err) {
    console.log(err);

    const h1 = document.querySelector("h1");
    const h2 = document.querySelector("h2");
    let h3 = document.querySelector("h3");
    let h4 = document.querySelector("h4");
    let h5 = document.querySelector("h5");
    h5.style.display = "block";
    h5.innerText = "Failed to fetch";
    h1.style.display = "none";
    h2.style.display = "none";
    h3.style.display = "none";
    h4.style.display = "none";
  }
}

function showData(data) {
  const h1 = document.querySelector("h1");
  const h2 = document.querySelector("h2");
  let h3 = document.querySelector("h3");
  let h4 = document.querySelector("h4");

  h1.style.display = "block";
  h2.style.display = "block";
  h3.style.display = "none";
  h4.style.display = "none";

  h1.innerText = data[0].author;
  h2.innerText = data[0].quote;
}
function loader() {
  let h3 = document.querySelector("h3");
  let h4 = document.querySelector("h4");
  let h5 = document.querySelector("h5");

  h3.style.display = "block";
  h4.style.display = "block";
  h5.style.display = "none";

  const h1 = document.querySelector("h1");
  const h2 = document.querySelector("h2");
  h1.style.display = "none";
  h2.style.display = "none";
}

quote();
