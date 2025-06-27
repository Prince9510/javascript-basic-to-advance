// sum of an array

function sum(arr) {
  return arr.reduce((acc, num) => acc + num, 0);
}

console.log(sum([10, 20, 30, 40, 50]));
