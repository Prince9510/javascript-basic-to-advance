function prime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function printPrime(n) {
  for (let i = 2; i <= n; i++) {
    if (prime(i)) {
      console.log(i);
    }
  }
}

printPrime(100);
