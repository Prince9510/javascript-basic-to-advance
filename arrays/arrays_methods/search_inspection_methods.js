// find 
// Question 1 : Given the array below, use .find() to get the first student who has a grade above 85 and is older than 18.

const students = [
    { name: "John", grade: 82, age: 17 },
    { name: "Jane", grade: 91, age: 19 },
    { name: "Jim", grade: 88, age: 18 }
];

const result = students.find(student => student.grade > 85 && student.age > 18);
console.log(result);


// Question 2 : How can you use .find() to locate the first element in an array that is greater than its index?

const numbers = [0, 2, 1, 4, 2];

const result2 = numbers.find((num, index) => num > index);
console.log(result2); // 2

// Question 3 : Use .find() to get the product with a price over 100 from the array below.

const products = [
    { id: 1, info: { price: 90 } },
    { id: 2, info: { price: 110 } },
    { id: 3, info: { price: 95 } }
];

const result3 = products.find(product => product.info.price > 100);
console.log(result3); // { id: 2, info: { price: 110 } }



// Question 4 : Given the following array, use .findIndex() to find the index of the first number greater than 15:

const number = [5, 10, 20, 25];

const index = number.findIndex(num => num > 15);
console.log(index); 

// Question 5 : Find the index of the user with id equal to 3

const users = [
    { id: 1, name: 'Tom' },
    { id: 2, name: 'Jerry' },
    { id: 3, name: 'Spike' }
  ];
  
  const index2 = users.findIndex(user => user.id === 3);
console.log(index2); // 2


// findLast


// Question 6: Use .findLast() to get the last student with a grade above 85.

const lastStudent = students.findLast(student => student.grade > 85);
console.log(lastStudent); // { name: "Jim", grade: 88, age: 18 }

// Question 7: Find the last number in the array that is less than its index.

const lastNumber = numbers.findLast((num, index) => num < index);
console.log(lastNumber); // 1

// Question 8: Use .findLast() to get the last product with a price below 100.

const lastProduct = products.findLast(product => product.info.price < 100);
console.log(lastProduct); // { id: 3, info: { price: 95 } }


// findLastIndex


// Question 9: Find the index of the last number greater than 10 in the array.

const lastIndex = number.findLastIndex(num => num > 10);
console.log(lastIndex); // 3

// Question 10: Find the index of the last user with a name starting with 'J'.

const lastUserIndex = users.findLastIndex(user => user.name.startsWith('J'));
console.log(lastUserIndex); // 1

// Question 11: Use .findLastIndex() to find the index of the last product with a price over 90.

const lastProductIndex = products.findLastIndex(product => product.info.price > 90);
console.log(lastProductIndex); // 2


// includes


// Question 12: Check if the array includes the number 20.

const includesTwenty = number.includes(20);
console.log(includesTwenty); // true

// Question 13: Check if the array includes the name 'Spike'.

const includesSpike = users.some(user => user.name === 'Spike');
console.log(includesSpike); // true

// Question 14: Check if the array includes the product with id 2.

const includesProduct = products.some(product => product.id === 2);
console.log(includesProduct); // true


// indexOf


// Question 15: Find the index of the number 10 in the array.

const indexOfTen = number.indexOf(10);
console.log(indexOfTen); // 1

// Question 16: Find the index of the first occurrence of the number 2 in the array.

const indexOfTwo = numbers.indexOf(2);
console.log(indexOfTwo); // 1

// Question 17: Check the index of the name 'Jerry' in the users array.

const indexOfJerry = users.findIndex(user => user.name === 'Jerry');
console.log(indexOfJerry); // 1