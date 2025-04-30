// OTP generator
function generateOTP(length) {
  const digits = "0123456789";
  let otp = "";
  for (let i = 0; i < length; i++) {
    otp += digits[Math.floor(Math.random() * digits.length)];
  }
  return otp;
}

console.log(generateOTP(6));


// Question 2: How can I generate a random floating-point number between two values in JavaScript?

function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

console.log(getRandomFloat(1, 5));


// Question 3: How can I calculate the power of a number in JavaScript?

function calculatePower(base, exponent) {
    return Math.pow(base, exponent);
}

console.log(calculatePower(2, 3)); // Output: 8


// Question 4: How can I shuffle an array in JavaScript?

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log(shuffleArray([1, 2, 3, 4, 5]));
