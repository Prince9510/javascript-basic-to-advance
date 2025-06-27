// 5. Write a function to check whether a given number is a perfect square without using Math.sqrt.

function squre(n) {
  for (let i = 1; i <= n; i++) {
    if (n / i == i) {
      return true;
    }
  }
  return false;
}

console.log(squre(121));

// function squre(n) {
//   for (let i = 1; i <= n; i++) {
//     if (n % i == i) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(squre(13));
