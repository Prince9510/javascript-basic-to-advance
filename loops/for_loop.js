// => A loop that repeats a block of code a specific number of times.

// Question 1 : Write a program using a for loop to print all the even numbers from 1 to 100.

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Question 2: Write a program using a for loop to calculate the sum of the first 50 natural numbers (i.e., 1 + 2 + 3 + ... + 50).

let sum = 0;
for (let i = 1; i <= 50; i++) {
  sum += i;
}
console.log(sum);

// Question 3 : Write a program using a for loop to display the multiplication table of a number entered by the user (from 1 to 10).

let n = 10;
for (let i = 1; i <= n; i++) {
  console.log(`${n} X ${i} =`, n * i);
}

// Question 4 : Write a program using a for loop to reverse a given string.

let str = "hello";
let reverse = "";
for (let i = str.length - 1; i >= 0; i--) {
  reverse += str[i];
}

console.log(reverse);

// Question 5 : Write a program using a for loop to count how many vowels are in a given string.

let word = "programming";
let count = 0;

for (let i = 1; i < word.length; i++) {
  if (
    word[i] === "a" ||
    word[i] === "e" ||
    word[i] === "i" ||
    word[i] === "o" ||
    word[i] === "u"
  ) {
    count++;
    console.log(word[i]);
  }
}
console.log("total vowels are", count);

// Question 5 : print this pattern using for loop

// *
// **
// ***
// ****
// *****

for (let i = 1; i <= 5; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += "*";
  }
  console.log(line);
}

// Question 6 : Write a program using a for loop to find the factorial of a number entered by the user.

let fact_num = 5;
let final_fact = 1;
for (let i = fact_num; i > 0; i--) {
  final_fact *= i;
}

// console.log(final_fact);

// Question 7 :
// 1
// 12
// 123
// 1234
// 12345

for (let i = 1; i <= 5; i++) {
  let line = "";

  for (let j = 1; j <= i; j++) {
    line += j;
  }
  console.log(line);
}

// Question 8:

//     1
//    121
//   12321
//  1234321
// 123454321

let rows = 5;

for (let i = 1; i <= rows; i++) {
  let line = "";
  for (let k = 1; k <= rows - i; k++) {
    line += " ";
  }
  for (let add = 1; add <= i; add++) {
    line += add;
  }
  for (let j = i - 1; j >= 1; j--) {
    line += j;
  }

  console.log(line);
}

// Question 9 :

// 1        1
// 12      21
// 123    321
// 1234  4321
// 1234554321

for (let i = 1; i <= 5; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += j;
  }
  for (let k = 1; k <= 5 - i; k++) {
    line += " ";
  }
  for (let k2 = 1; k2 <= 5 - i; k2++) {
    line += " ";
  }
  for (let m = i; m >= 1; m--) {
    line += m;
  }
  console.log(line);
}

//     *
//    * *
//   *   *
//  *     *
// *********

for (let i = 1; i <= 5; i++) {
  let line = "";
  for (let k = 1; k <= 5 - i; k++) {
    line += " ";
  }

  for (let j = 1; j <= 2 * i - 1; j++) {
    if (i === 5 || j === 1 || j === 2 * i - 1) {
      line += "*";
    } else {
      line += " ";
    }
  }

  console.log(line);
}

// Question 10 :

//     1
//    232
//   34543
//  4567654
// 567898765

for (let i = 1; i <= 5; i++) {
  let line = "";

  for (let k = 1; k <= 5 - i; k++) {
    line += "  ";
  }

  for (let j = i; j <= 2 * i - 1; j++) {
    line += j + " ";
  }

  for (let j = 2 * i - 2; j >= i; j--) {
    line += j + " ";
  }

  console.log(line);
}