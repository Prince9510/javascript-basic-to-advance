// findDuplicates([1, 2, 3, 3, 4, 5, 5, 6]) // should return [3, 5]
// findDuplicates([1, 2, 3, 4, 5]) // should return []
// findDuplicates([1, 1, 1, 2, 2]) // should return [1, 2]

// let arr = [1, 2, 3, 3, 4, 5, 5, 6];
// // Step 1: Make a place to count how many times I see each number
// let counts = {}; // Like a little notebook
// let duplicates = []; // Where I’ll keep the repeats

// // Step 2: Go through each number in the list
// for (let number of arr) {
//   // If I haven’t seen this number before, start counting at 1
//   if (!counts[number]) {
//     counts[number] = 1;
//   }
//   // If I’ve seen it before, add 1 to its count
//   else {
//     counts[number] = counts[number] + 1;
//     // Step 3: If this is the second time I’ve seen it, it’s a duplicate!
//     if (counts[number] === 2) {
//       duplicates.push(number); // Add it to my list of repeats
//     }
//   }
// }

// console.log(duplicates);
// console.log(counts);

// function findMissingNumber(arr) {
//     let max = arr[0];
//     let min = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         } else if (arr[i] < min) {
//             min = arr[i];
//         }
//     }

//     for (let i = min; i <= max; i++) {
//         if (!arr.includes(i)) {
//             console.log(i);
//         }
//     }
// }

// findMissingNumber([1, 2, 3, 4, 6, 10]);

///////////////

// // second large in arr

///////////

////////////

/////////////////////

let arr = [1, 2, 3, 3, 4, 5, 5, 6, 9, 9, 9, 9, 9, 9, 5, 5, 5, 5];
// Step 1: Make a place to count how many times I see each number
let counts = {}; // Like a little notebook

// Step 2: Go through each number in the list
for (let i = 0; i < arr.length; i++) {
  let number = arr[i];
  // If I haven’t seen this number before, start counting at 1
  if (!counts[number]) {
    counts[number] = 1;
  }
  // If I’ve seen it before, add 1 to its count 
  else {
    counts[number] = counts[number] + 1;
    // Step 3: If this is the second time I’ve seen it, remove it from the array
    if (counts[number] === 2) {
      arr.splice(i, 1);
      i--; // Adjust index after removal
    }
  }
}

console.log(counts);

////////////////////////



/////////////////////



///////////////////////


/////////////

// function mergeAndRemoveDuplicates(arr1, arr2) {
//     let mergedArray = [...arr1, ...arr2];
//     let uniqueArray = [...new Set(mergedArray)];
//     return uniqueArray;
// }

// console.log(mergeAndRemoveDuplicates([1, 2, 3], [3, 4, 5])); // [1, 2, 3, 4, 5]

///////////////

// function fibonacci(num) {
//     let a = 0, b = 1, temp;
//     let result = [];

//     for (let i = 0; i < num; i++) {
//         result.push(a);
//         temp = a;
//         a = b;
//         b = temp + b;
//     }

//     return result;
// }

// console.log(fibonacci(10));

let url = 'https://fakestoreapi.com/products'

async function api(){
    let res = await fetch(url)
    let finalData = res.json()
    console.log(finalData);
}

api()


//         *
//        * *
//       *   *
//      *     *
//     *       *
//    *         *
//   *           *
//    *         *
//     *       *
//      *     *
//       *   *
//        * *
//         *
 
// for(let i = 1; i<=7; i++){
//     let line = ''

//     for(let k = 6; k > i -1; k--){
//         line += ' '
//     }

//     for(let j = 1; j<=i; j++){
//         if(j === 1 || j === i){
//             line += '* '
//         }else{
//             line += '  '

//         }
//     }
//     console.log(line);
// }

// for(let i = 6; i>=1; i--){
//     let line = ''

//     for(let k = 6; k > i -1; k--){
//         line += ' '
//     }

//     for(let j = i; j>=1; j--){
//         if(j === 1 || j === i){
//             line += '* '
//         }else{
//             line += '  '

//         }
//     }
//     console.log(line);
// }

// let arr = [1,2,3,4,5,6,7]
// console.log('arr length' + arr.length);

// for(let i = arr.length; i>=0; i--)
// {
//     console.log(i);
// }

// console.log([1, 2, 3, 4].reduce((acc, val) =>
//     console.log(val)
// console.log(acc)
// )); // Output: 10

//* * * * * *
// * * * * *
//  * * * *
//   * * *
//    * *
//     *
//     *
//    * *
//   * * *
//  * * * *
// * * * * *
//* * * * * *

// for(let i = 6; i >= 1; i--){
//     let line = ""
//     for(let space = 1; space <= 6 - i; space++){
//         line += " "
//     }
//     for(let j = 1; j <= i; j++){
//         line += "*" + " "
//     }
//     console.log(line);
// }

// // part 2

// for(let i = 1; i <= 6; i++){
//     let line = ""
//     for(let space = 1; space <= 6 - i; space++){
//         line += " "
//     }
//     for(let j = 1; j <= i; j++){
//         line += "*" + " "
//     }
//     console.log(line);
// }

// *
// **
// * *
// *  *
// *   *
// ******

// for(let i = 1; i <= 6; i++){
//     let line = ""
//     for(let j = 1; j <= i; j++){
//         if(j === 1 || j === i || i === 6){
//             line += "*"
//         }else{
//             line += " "
//         }
//     }
//     console.log(line);
// }

// *        *
// **      **
// ***    ***
// ****  ****
// **********
// ****  ****
// ***    ***
// **      **
// *        *

// for (let i = 1; i <= 5; i++) {
//   let line = "";

//   for (let j = 1; j <= i; j++) {
//     line += "*";
//   }
//   ``;
//   for (let space = 1; space <= 5 - i; space++) {
//     line += " ";
//   }
//   for (let space = 1; space <= 5 - i; space++) {
//     line += " ";
//   }

//   for (let secondPart = 1; secondPart <= i; secondPart++) {
//     line += "*";
//   }
//   console.log(line);
// }

// // bottom

// for (let i = 4; i >= 1; i--) {
//   let line = "";

//   for (let j = 1; j <= i; j++) {
//     line += "*";
//   }

//   for (let space = 1; space <= 5 - i; space++) {
//     line += " ";
//   }
//   for (let space = 1; space <= 5 - i; space++) {
//     line += " ";
//   }

//   for (let secondPart = 1; secondPart <= i; secondPart++) {
//     line += "*";
//   }
//   console.log(line);
// }

// *        *
// **      **
// * *    * *
// *  *  *  *
// *   **   *
// *  *  *  *
// * *    * *
// **      **
// *        *

// for (let i = 1; i <= 5; i++) {
//   let line = "";

//   for (let j = 1; j <= i; j++) {
//     if (j === 1 || j === i) {
//       line += "*";
//     } else {
//       line += " ";
//     }
//   }

//   for (let space = 1; space <= 5 - i; space++) {
//     line += " ";
//   }
//   for (let space = 1; space <= 5 - i; space++) {
//     line += " ";
//   }

//   for (let secondPart = 1; secondPart <= i; secondPart++) {
//     if (secondPart === 1 || secondPart === i) {
//       line += "*";
//     } else {
//       line += " ";
//     }
//   }
//   console.log(line);
// }

// bottom

// for (let i = 4; i >= 1; i--) {
//   let line = "";

//   for (let j = 1; j <= i; j++) {
//     if (j === 1 || j === i) {
//       line += "*";
//     } else {
//       line += " ";
//     }
//   }

//   for (let space = 1; space <= 5 - i; space++) {
//     line += " ";
//   }
//   for (let space = 1; space <= 5 - i; space++) {
//     line += " ";
//   }

//   for (let secondPart = 1; secondPart <= i; secondPart++) {
//     if (secondPart === 1 || secondPart === i) {
//       line += "*";
//     } else {
//       line += " ";
//     }
//   }
//   console.log(line);
// }

//* * * * *
//  * * * *
//    * * *
//      * *
//        *

// for (let i = 5; i >= 1; i--) {
//   let line = "";
//   for (let space = 1; space <= (5 - i) * 2; space++) {
//     line += " ";
//   }
//   for (let j = 1; j <= i; j++) {
//     line += "* ";
//   }
//   console.log(line.trim());
// }

//        *
//      *   *
//    *       *
//  *           *
//* * * * * * * * *

// for (let i = 1; i <= 5; i++) {
//   let line = "";
//   for (let space = 1; space <= (5 - i) * 2; space++) {
//     line += " ";
//   }
//   for (let j = 1; j <= i * 2 - 1; j++) {
//     if (j === 1 || j === i * 2 - 1 || i === 5) {
//       line += "* ";
//     } else {
//       line += "  ";
//     }
//   }
//   console.log(line);
// }

// * * * * *
// * *   * *
// *   *   *
// * *   * *
// * * * * *

// for (let i = 1; i <= 5; i++) {
//   let line = "";
//   for (let j = 1; j <= 5; j++) {
//     if (i == 1 || i == 5 || j == 1 || j == 5 || i == j || j == 5 - i + 1) {
//       line += "* ";
//     } else {
//       line += "  ";
//     }
//   }
//   console.log(line);
// }

// AAAAAAAAAA
// AAAA  AAAA
// AAA    AAA
// AA      AA
// A        A
// B        B
// BB      BB
// BBB    BBB
// BBBB  BBBB
// BBBBBBBBBB

// for (let i = 5; i >= 1; i--) {
//   let line = "";
//   for (let j = 1; j <= i; j++) {
//     line += "A";
//   }
//   for (let space = 1; space <= 5 - i; space++) {
//     line += " ";
//   }
//   for (let space = 1; space <= 5 - i; space++) {
//     line += " ";
//   }
//   for (let j = 1; j <= i; j++) {
//     line += "A";
//   }
//   console.log(line);
// }

// for (let i = 1; i <= 5; i++) {
//   let line = "";
//   for (let j = 1; j <= i; j++) {
//     line += "B";
//   }
//   for (let space = 5 - i; space >= 1; space--) {
//     line += " ";
//   }
//   for (let space = 5 - i; space >= 1; space--) {
//     line += " ";
//   }
//   for (let j = 1; j <= i; j++) {
//     line += "B";
//   }
//   console.log(line);
// }

// function fibo(n){
//     let a = 0, b = 1;
//     for(let i = 0; i <= n; i++){
//         console.log(a);
//         let temp = a + b;
//         a = b;
//         b = temp;
//     }
// }

// fibo(7);

// let a = 10; //10
// console.log(10);
// a++ //11
// console.log("a++",a);
// let b = a++; //11
// console.log("b",b);
// console.log(b); //11

// for (let i = 1; i <= 5; i++) {
//   let line = "";
//   for (let j = 1; j <= i; j++) {
//     line += "*";
//   }
//   for (let space = 1; space <= 5 - i; space++) {
//     line += " ";
//   }
//   for (let space = 1; space <= 5 - i; space++) {
//     line += " ";
//   }
//   for (let j = 1; j <= i; j++) {
//     line += "*";
//   }
//   console.log(line);
// }

// for (let i = 4; i >= 1; i--) {
//   let line = "";
//   for (let j = 1; j <= i; j++) {
//     line += "*";
//   }
//   for (let space = 1; space <= 5 - i; space++) {
//     line += " ";
//   }
//   for (let space = 1; space <= 5 - i; space++) {
//     line += " ";
//   }
//   for (let j = 1; j <= i; j++) {
//     line += "*";
//   }
//   console.log(line);
// }

// 0                 0
// 0 1             0 1
// 0 1 0         0 1 0
// 0 1 0 1     0 1 0 1
// 0 1 0 1 0 0 1 0 1 0
// 0 1 0 1     0 1 0 1
// 0 1 0         0 1 0
// 0 1             0 1
// 0                 0

// for (let i = 1; i <= 5; i++) {
//   let line = "";
//   for (let j = 1; j <= i; j++) {
//     if (j % 2 === 0) {
//       line += "1 ";
//     } else {
//       line += "0 ";
//     }
//   }
//   for (let space = 1; space <= 5 - i; space++) {
//     line += "    ";
//   }

//   for (let j = 1; j <= i; j++) {
//     if (j % 2 === 0) {
//       line += "1 ";
//     } else {
//       line += "0 ";
//     }
//   }
//   console.log(line);
// }

// for (let i = 4; i >= 1; i--) {
//   let line = "";
//   for (let j = 1; j <= i; j++) {
//     if (j % 2 === 0) {
//       line += "1 ";
//     } else {
//       line += "0 ";
//     }
//   }
//   for (let space = 1; space <= 5 - i; space++) {
//     line += "    ";
//   }

//   for (let j = 1; j <= i; j++) {
//     if (j % 2 === 0) {
//       line += "1 ";
//     } else {
//       line += "0 ";
//     }
//   }
//   console.log(line);
// }

// 0101010101
// 0101  0101
// 010    101
// 01      01
// 0        1
// 01      01
// 010    101
// 0101  0101
// 0101010101

// for (let i = 5; i >= 1; i--) {
//   let line = "";
//   for (let j = 1; j <= i; j++) {
//     if (j % 2 === 0) {
//       line += "1";
//     } else {
//       line += "0";
//     }
//   }
//   for (let space = 1; space <= 5 - i; space++) {
//     line += "  ";
//   }
//   for (let j = 1; j <= i; j++) {
//     if (j % 2 === 0) {
//       line += "1";
//     } else {
//       line += "0";
//     }
//   }
//   console.log(line);
// }

// for (let i = 2; i <= 5; i++) {
//   let line = "";
//   for (let j = 1; j <= i; j++) {
//     if (j % 2 === 0) {
//       line += "1";
//     } else {
//       line += "0";
//     }
//   }

//   for (let space = 1; space <= 5 - i; space++) {
//     line += "  ";
//   }

//   for (let j = 1; j <= i; j++) {
//     if (j % 2 === 0) {
//       line += "1";
//     } else {
//       line += "0";
//     }
//   }

//   console.log(line);
// }

function fibo(n) {
  let a = 0,
    b = 1;
  for (let i = 0; i <= n; i++) {
    console.log(a);
    let temp = a + b;
    a = b;
    b = temp;
  }
}
fibo(10);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showDetail() {
    return this.name + " " + this.age;
  }
}

let p1 = new Person("alice", "45");
console.log(p1 instanceof Person);
console.log(p1.showDetail());

function swipe(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;

  console.log(a, b);
}

swipe(10, 20);

let a = 10;
let b = 100;
let c = 1000;
let d = 10000;
let e = 100000;

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

function fibo(n) {
  let a = 0,
    b = 1;
  for (let i = 0; i <= n; i++) {
    console.log(a);
    let temp = a + b;
    a = b;
    b = temp;
  }
}

fibo(10);

let sum = 0;
for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
  }
}

console.log(sum);
