// find a squre of each arr values

function square(arr) {
  let newarr = [];

  for (let i = 0; i < arr.length; i++) {
    newarr.push(arr[i] * arr[i]);
  }
  return newarr;
}

console.log(square([22, 4, 5, 8, 7, 8, 9, 10]));