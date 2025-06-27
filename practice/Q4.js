// sum of number digit and check it a perfect squre or not

function squre(n) {
  let number = n.toString().split("");
  let sum = number.reduce((acc, sum) => acc + Number(sum), 0);

  for (let i = 1; i <= sum; i++) {
    if (sum / i == i) {
      return true;
    }
  }
  return false;
}

console.log(squre(123));
console.log(squre(81));
