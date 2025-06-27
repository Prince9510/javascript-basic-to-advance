// Given a number, return the sum of its digits until it becomes a single digit.

// let num = (123448215484).toFixed();
// let arr = [];

// for (let i = 0; i < num.length; i++) {
//   let divide = (num / 10).toFixed(1);
//   console.log("divide", divide);
//   num = divide;
//   let single = divide.toString().split(".");
//   console.log("single", single);

//   arr.push(single[1]);
// }
// let ans = arr.reduce((acc, sum) => acc + Number(sum), 0);

// console.log("ans", ans);

// let num = (123).toFixed();
// let arr = [];

// for (let i = 0; i < num.length; i++) {
//   let divide = num / 10;
//   console.log("divide", divide);
//   num = divide.toFixed(1);
//   let single = divide.toString().split(".");
//   console.log("single", single);

//   arr.push(single[1]);
// }
// let ans = arr.reduce((acc, sum) => acc + sum, 0);

// console.log(ans);

// let num = (123).toFixed();
// let arr = [];

// for (let i = 0; i < num.length; i++) {
//   let divide = (num / 10).toFixed(1);
//   console.log("divide", divide);
//   num = divide;
//   let single = divide.toString().split(".");
//   console.log("single", single);

//   arr.push(single[1]);
// }
// let ans = arr.reduce((acc, sum) => acc + sum, 0);

// console.log(ans);

// let num = (123).toFixed();
// let arr = [];

// for (let i = 0; i < num.length; i++) {
//   let divide = (num / 10).toFixed(1);
//   console.log("divide", divide);
//   num = divide;
//   let single = divide.toString().split(".");
//   console.log("single", single);

//   arr.push(single[1]);
// }
// let ans = arr.reduce((acc, sum) => Number.parseInt(acc + sum), 0);

// console.log(ans);

// let num = (123).toFixed();
// let arr = [];

// for (let i = 0; i < num.length; i++) {
//   let divide = (num / 10).toFixed(1);
//   console.log("divide", divide);
//   num = divide;
//   let single = divide.toString().split(".");
//   console.log("single", single);

//   arr.push(single[1]);
// }
// let ans = Number.parseInt(arr.reduce((acc, sum) => acc + sum, 0));

// console.log(ans);

let num = 123448215484;
let arr = [];

let arrr = num.toString().split("");
let sum = arrr.reduce((acc, sum) => acc + Number(sum), 0);

console.log(sum);
