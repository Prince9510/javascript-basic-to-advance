(async function () {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  console.log(data);
  console.log("IIFE called!");
})(); // "IIFE called!"
