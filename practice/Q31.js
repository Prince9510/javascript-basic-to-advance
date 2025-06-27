// find largest number from an array

function largestNumber(arr) {
  let large = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[0] < arr[i]) {
      large = arr[i];
    }
  }

  return large;

}

console.log(largestNumber([10, 2, 30, 40, 1]));
