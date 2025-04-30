// 1. Math.abs(x)
// Definition: Returns the absolute value of x (removes negative sign)
const diff = Math.abs(-42); // 42

// 2. Math.ceil(x)
// Definition: Rounds x UP to the nearest integer
const ceilVal = Math.ceil(4.2); // 5

// 3. Math.floor(x)
// Definition: Rounds x DOWN to the nearest integer
const floorVal = Math.floor(4.8); // 4

// 4. Math.round(x)
// Definition: Rounds x to the nearest integer (0.5 and above goes up)
const rounded = Math.round(4.5); // 5

// 5. Math.max(...values)
// Definition: Returns the largest of the given numbers
const highest = Math.max(10, 20, 5); // 20` 

// 6. Math.min(...values)
// Definition: Returns the smallest of the given numbers
const lowest = Math.min(10, 20, 5); // 5

// 7. Math.random()
// Definition: Returns a random decimal between 0 (inclusive) and 1 (exclusive)
const randomDecimal = Math.random(); // e.g. 0.6728

// 7.1 Math.floor(Math.random() * N)
// Common usage: Get random integer from 0 to N-1
const randomIndex = Math.floor(Math.random() * 5); // e.g. 2

// 8. Math.pow(base, exponent)
// Definition: Returns base raised to the power of exponent
const power = Math.pow(3, 2); // 9

// 9. Math.sqrt(x)
// Definition: Returns the square root of x
const squareRoot = Math.sqrt(49); // 7

// 10. Math.trunc(x)
// Definition: Removes the decimal part of x (keeps integer part only)
const truncated = Math.trunc(4.999); // 4

// 11. Math.sign(x)
// Definition: Returns -1 if negative, 0 if zero, 1 if positive
const sign1 = Math.sign(-5); // -1
const sign2 = Math.sign(0); // 0
const sign3 = Math.sign(7); // 1
