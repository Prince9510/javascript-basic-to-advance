// 8. Write a function to calculate the greatest common divisor (GCD) of two numbers recursively.

function gcd(a, b) {
  let max = Math.max(a, b);
  while (max > 0) {
    if (a % max == 0 && b % max == 0) {
      break;
    }
    max--;
  }
  return max;
}

console.log(gcd(48, 36));
