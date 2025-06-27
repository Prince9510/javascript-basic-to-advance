// Q.2 Write a Program to input electricity unit charges and calculate the total electricity bill according to the given condition:
// For the first 50 units Rs. 0.50/unit
// For the next 100 units Rs. 0.75/unit
// For the next 100 units Rs. 1.20/unit
// For units above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill.
// For example,
// Input:
// Enter electricity units: 435

// Output:
// Electricity Bill = Rs. 597.00

function bill(unit) {
  let price;

  if (unit <= 50) {
    price = unit * 0.5;
  } else if (unit <= 150) {
    price = 25 + (unit - 50) * 0.75;
  } else if (unit <= 250) {
    price = 100 + (unit - 150) * 1.2;
  } else {
    price = 220 + (unit - 250) * 1.5;
  }

  let charges = price * 0.2;
  return price + charges;
}

console.log(bill(435));

// min Number

let arr = [50, 7, 13, 78, 5, 20, 1];
let min = arr[0];

for (let i = 0; i <= arr.length; i++) {
  if (min > arr[i]) {
    min = arr[i];
  }
}

console.log(min);

// average arr

function average(array) {
  let average = array.reduce(
    (acc, sum) => console.log("acc", acc, "sum", sum),
    0
  );
  let ans = average / array.length;
  return ans;
}

console.log(average([10, 20, 30, 40, 50]));

const rev = (a, b) => {
  let s1 = "";
  let s2 = "";
  let s1Reverse = "";
  let s2Reverse = "";

  for (let value in a) {
    s1 = s1.concat(a[value]);
  }
  for (let value in b) {
    s2 = s2.concat(b[value]);
  }

  for (let i = s1.length - 1; i >= 0; i--) {
    s1Reverse += s1[i];
  }
  for (let i = s2.length - 1; i >= 0; i--) {
    s2Reverse += s2[i];
  }

  let s1Number = Number.parseInt(s1Reverse);
  let s2Number = Number.parseInt(s2Reverse);
  console.log(s1Number);
  console.log(s2Number);

  let sum = s1Number + s2Number;

  console.log(sum);
};

rev([7, 8, 5], [1, 6, 9]);

// find the biggest number from tow array

function big(arr1, arr2) {
  let firstArray = arr1[0];
  let secondArray = arr2[0];

  for (let i = 0; i < arr1.length; i++) {
    if (firstArray < arr1[i]) {
      firstArray = arr1[i];
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (secondArray < arr2[i]) {
      secondArray = arr2[i];
    }
  }

  if (firstArray > secondArray) {
    console.log(`in firstArray biggest number is ${firstArray}`);
  } else {
    console.log(`in secondArray biggest number is ${secondArray}`);
  }
}

big([484, 51, 548, 5154, 84, 8], [54, 78, 3, 64, 6750, 5]);

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

function printPrimeNumbers(n) {
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

printPrimeNumbers(100);

function removeDuplicate(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

console.log(removeDuplicate([10, 20, 30, 10, 10, 10, 20]));

let normal = "a string with an title case";
let splitCase = normal.split(" ");
let titleString = "";

for (let i = 0; i < splitCase.length; i++) {
  titleString +=
    splitCase[i].charAt(0).toUpperCase() + splitCase[i].substring(1) + " ";
}

console.log(titleString);

const fruits = ["banana", "apple", "orange", "grape", "kiwi"];
console.log(fruits.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)));

let normalStr = "string";
let reverseStr = "";

for (let i = normalStr.length - 1; i >= 0; i--) {
  reverseStr += normalStr[i];
}
console.log(reverseStr);

let num = 5;
let ans = 1;
for (let i = num; i >= 1; i--) {
  ans *= i;
}
console.log(ans);

let str1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let str2 = "";

for (let i = 0; i <= str1.length; i++) {
  str2 += str1[Math.floor(Math.random() * str1.length)];
}
console.log(str2);

let a = 100000;
let b = 20000;
let c = 3000;
let d = 400;
let e = 50;

if (a > b) {
  if (a > c) {
    if (a > d) {
      if (a > e) {
        console.log(a);
      } else {
        console.log(e);
      }
    } else {
      if (d > e) {
        console.log(d);
      } else {
        console.log(e);
      }
    }
  } else {
    if (c > d) {
      if (d > e) {
        console.log(d);
      } else {
        console.log(e);
      }
    } else {
      if (d > e) {
        console.log(d);
      } else {
        console.log(e);
      }
    }
  }
} else {
  if (b > c) {
    if (b > d) {
      if (b > e) {
        console.log(b);
      } else {
        console.log(e);
      }
    } else {
      if (d > e) {
        console.log(d);
      } else {
        console.log(e);
      }
    }
  } else {
    if (c > d) {
      if (c > e) {
        console.log(c);
      } else {
        console.log(e);
      }
    } else {
      if (d > e) {
        console.log(d);
      } else {
        console.log(e);
      }
    }
  }
}



const passwordGenrator = (n) =>{
  let hash = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+{}[]:'';<>\,.?/|"
  let password = "";

  for(let i = 1; i <= n; i++){
    let index = Math.floor(Math.random() * (hash.length + 1))
    password += hash[index]
  }

  console.log(password);
}

passwordGenrator(8)

