// forEach()

// Question 1 : Use forEach() to print all the items of an array in uppercase.

let arrLowercase = ["a", "b", "c", "d"];

arrLowercase.forEach((elements) => {
  console.log(elements.toUpperCase());
});

// Question 2 : Given an array of numbers, use forEach() to calculate the square of each number and store them in a new array.

let arrayOfNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayOfNumberTemp = [];
arrayOfNumber.forEach((elements) => {
  arrayOfNumberTemp.push(elements);
});
console.log(arrayOfNumberTemp);

// Question 3 : Write a forEach() loop to iterate over an array and print the index and the value of each element.

let arr = ["a", "b", "c", "d"];
let i = 0;
arr.forEach((elements) => {
  console.log(`key ${i} value ${elements}`);
  i++;
});

// map()

// Question 4 : How do you double every number in an array using map()?

const doubled = (arr) => {
  return arr.map((element) => {
    return element * 2;
  });
};
console.log(doubled([1, 2, 3, 4, 5]));

// Question 5 : Use map() to create an array of objects from an array of names, where each object has a name property and a length property showing the length of the name.

const names = ["a", "b", "c", "d"];

const result = names.map((name) => {
  return { name: name, length: name.length };
});
console.log(result);

// Question 6 : Write a map() method to take an array of strings and return an array of their lengths.

let strArray = ["sdfg", "ertyuj", "sghj", "vbnm"];

const strArrayResylt = strArray.map((element) => {
  return `value ${element} length ${element.length}`;
});
console.log(strArrayResylt);

// filter()

// Question 7 : Given an array of numbers, use filter() to get all numbers greater than 10.

let filterArray = [1, 20, 30, 4, 50, 6, 70, 8, 9, 10];

const filterGreter10 = filterArray.filter((element) => {
  return element > 10;
});

console.log(filterGreter10);

// Question 8 :Use filter() to remove all false, null, and undefined values from an array.

let typeArray = [
  null,
  false,
  undefined,
  1,
  2,
  false,
  3,
  undefined,
  null,
  7,
  true,
];

const typeArrayResult = typeArray.filter((element) => {
  if (typeof element === "number") {
    return element;
  }
});

console.log(typeArrayResult);

// Question 9 : Given an array of objects with a status key, use filter() to return all objects with the status set to "active".

let arrayOfObj = [
  {
    name: "abc",
    status: "active",
    role: "admin",
  },
  {
    name: "xyz",
    status: "not active",
    role: "admin",
  },
  {
    name: "asas",
    status: "not active",
    role: "admin",
  },
  {
    name: "alice",
    status: "active",
    role: "admin",
  },
  {
    name: "zzz",
    status: "active",
    role: "admin",
  },
  {
    name: "qqq",
    status: "not active",
    role: "admin",
  },
  {
    name: "hhh",
    status: "active",
    role: "admin",
  },
];

let arrayOfObjResult = arrayOfObj.filter((element) => {
  return element.status === "active";
});

console.log(arrayOfObjResult);

// reduce()

// Question 10 : Use reduce() to find the sum of all elements in an array.

let reduceArray = [1, 2, 3, 4, 5, 6];

let reduceArrayResult = reduceArray.reduce((acc, val) => {
  return acc + val;
});
console.log(reduceArrayResult);

// Question 11 : Given an array of numbers, use reduce() to find the maximum number in the array.

let reduceMax = [1, 2, 30, 4, 5, 6];

let reduceMaxResult = reduceMax.reduce((acc, val) => {
  return acc > val ? acc : val;
});
console.log(reduceMaxResult);

// reduceRight()

// Question 12 : Use reduceRight() to concatenate an array of strings in reverse order.

let stringArray = ["one", "two", "three", "four"];

let concatenatedString = stringArray.reduceRight((acc, val) => {
  return acc + " " + val;
}, "");

console.log(concatenatedString.trim());

// Question 13 : Use reduceRight() to calculate the sum of all elements in an array, starting from the last element.

let reduceRightArray = [1, 2, 3, 4, 5, 6];

let reduceRightSum = reduceRightArray.reduceRight((acc, val) => {
  return acc + val;
});

console.log(reduceRightSum);

// Question 14 : Given a nested array of numbers, use reduceRight() to compute the cumulative product of all numbers.

let nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];

let cumulativeProduct = nestedArray.reduceRight((acc, val) => {
  return acc * val.reduce((innerAcc, innerVal) => innerAcc * innerVal, 1);
}, 1);

console.log(cumulativeProduct);

// find()

// Question 15 : Use find() to get the first even number from an array of integers.

let findEven = [10, 2, 3, 4, 5, 6];

let findEvenResult = findEven.find((element) => {
  return element % 2 === 0;
});

console.log(findEvenResult);

// Question 16 : Given an array of objects with a name key, use find() to return the first object whose name is "John".

let findName = [
  {
    name: "abc",
    status: "active",
    role: "admin",
  },
  {
    name: "xyz",
    status: "not active",
    role: "admin",
  },
  {
    name: "john",
    status: "not active",
    role: "admin",
  },
  {
    name: "alice",
    status: "active",
    role: "admin",
  },
  {
    name: "zzz",
    status: "active",
    role: "admin",
  },
  {
    name: "qqq",
    status: "not active",
    role: "admin",
  },
  {
    name: "hhh",
    status: "active",
    role: "admin",
  },
];

let findNameResult = findName.find((element) => {
  return element.name === "john";
});

console.log(findNameResult);

// Question 17 : Use find() to get the first string with more than 5 characters from an array of strings.

let findStr = ["abc", "defghij", "cvb", "wer", "string"];

let findStrResult = findStr.find((element) => {
  return element.length > 5;
});

console.log(findStrResult);

// findIndex()

// Question 18 : Use findIndex() to return the index of the first element greater than 50 in an array.

let findIndexArray = [10, 200, 50, 70, 10, 20, 90, 101, 102];

let findIndexArrayResult = findIndexArray.findIndex((element) => {
  return element > 50;
});

console.log(findIndexArrayResult);

// Question 19 : Given an array of objects, use findIndex() to find the index of the first object with a status of "completed".

let tasks = [
    { id: 1, status: "pending" },
    { id: 2, status: "in progress" },
    { id: 3, status: "completed" },
    { id: 4, status: "completed" },
];

let completedTaskIndex = tasks.findIndex((task) => task.status === "completed");

console.log(completedTaskIndex);


// Question 20 : Use findIndex() to find the position of the first negative number in an array of integers.

let numbers = [10, 20, -5, 30, -10, 40];

let firstNegativeIndex = numbers.findIndex((number) => number < 0);

console.log(firstNegativeIndex);


// some()

// Question 21 : Use some() to check if any number in an array is divisible by 3.

let numbersArray = [1, 2, 4, 5, 6, 7, 8, 9];

let isDivisibleBy3 = numbersArray.some((number) => {
    return number % 3 === 0;
});

console.log(isDivisibleBy3);

// Question 22 : Use some() to check if there’s any string with more than 10 characters in an array of strings.

let stringArrayCheck = ["short", "thisisaverylongstring", "medium", "tiny"];

let hasLongString = stringArrayCheck.some((str) => {
    return str.length > 10;
});

console.log(hasLongString);

// Question 23 : Use some() to check if there is at least one even number in an array.

let evenNumbersArray = [1, 3, 5, 7, 8, 9];

let hasEvenNumber = evenNumbersArray.some((number) => {
    return number % 2 === 0;
});

console.log(hasEvenNumber);

// every()

// Question 24 : Use every() to check if all numbers in an array are positive.

let positiveNumbersArray = [1, 2, 3, 4, 5];

let allPositive = positiveNumbersArray.every((number) => {
    return number > 0;
});

console.log(allPositive);

// Question 25 : Given an array of strings, use every() to check if all strings contain only lowercase letters.

let lowercaseStringsArray = ["hello", "world", "javascript"];

let allLowercase = lowercaseStringsArray.every((str) => {
    return /^[a-z]+$/.test(str);
});

console.log(allLowercase);

// Question 26 : Use every() to check if all items in an array are of type number.

let mixedArray = [1, "2", 3, 4, "5"];

let allNumbers = mixedArray.every((item) => {
    return typeof item === "number";
});

console.log(allNumbers);


// flatMap()

// Question 27 : Use flatMap() to create an array where each element is doubled and then flattened.

let nestedNumbers = [[1, 2], [3, 4], [5, 6]];

let doubledFlattened = nestedNumbers.flatMap((subArray) => {
    return subArray.map((num) => num * 2);
});

console.log(doubledFlattened);

// Question 28 : Given an array of arrays, use flatMap() to merge them into a single array.

let arrayOfArrays = [[1, 2], [3, 4], [5, 6]];

let mergedArray = arrayOfArrays.flatMap((subArray) => subArray);

console.log(mergedArray);

// Question 29 : Use flatMap() to transform an array of strings where each string is split into an array of characters and flattened.

let flattenedStringArray = ["hello", "world", "javascript"];

let flattenedCharacters = flattenedStringArray.flatMap((str) => str.split(""));

console.log(flattenedCharacters);