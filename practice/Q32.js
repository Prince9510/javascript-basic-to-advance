function missingNumbers(arr) {
  let min = arr[0];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  for (let i = min; i <= max; i++) {
    if (!arr.includes(i)) {
      console.log(i);
    }
  }

  // console.log(min);
  // console.log(max);
}

missingNumbers([1, 16, 22, 5, 13, 9, 10]);
