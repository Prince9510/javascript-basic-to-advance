// find factorial number

function fact(num) {
  let result;
  for (let i = num - 1; i > 0; i--) {
    result = num *= i;
  }

  return result;
}

console.log(fact(5));
