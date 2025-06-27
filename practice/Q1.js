// Check if a number is an Armstrong number.

let num = 153;
let single = num.toString().split("");
// console.log(single);
let singleLength = single.length;
// console.log("length", singleLength);
let newArray = [];

for (let i = 0; i < singleLength; i++) {
  newArray.push(single[i] ** singleLength);
}
// console.log(newArray);
let sum = newArray.reduce((acc, sum) => acc + sum, 0);

if (sum == num) {
  console.log("yes");
} else {
  console.log("no");
}
