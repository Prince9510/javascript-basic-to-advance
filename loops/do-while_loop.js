// Question 1: Write a do-while loop that prints numbers from 1 to 5.
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);

// Question 2: Write a do-while loop that calculates the sum of numbers from 1 to 10.
let sum = 0;
let j = 1;
do {
  sum += j;
  j++;
} while (j <= 10);
console.log("Sum:", sum);

// Question 3: Write a do-while loop that prints the elements of an array.
let arr = [10, 20, 30, 40, 50];
let k = 0;
do {
  console.log(arr[k]);
  k++;
} while (k < arr.length);

// Question 4: Write a do-while loop that reverses a string.
let str = "hello";
let reversed = "";
let l = str.length - 1;
do {
  reversed += str[l];
  l--;
} while (l >= 0);
console.log("Reversed string:", reversed);
