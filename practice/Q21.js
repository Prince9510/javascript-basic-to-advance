//          *
//         * *
//        *   *
//       *     *
//      *       *
//     *         *
//    *           *
//     *         *
//      *       *
//       *     *
//        *   *
//         * *
//          *

for (let i = 1; i <= 7; i++) {
  let line = "";
  for (let space = 1; space <= 7 - i; space++) {
    line += " ";
  }
  for (let j = 1; j <= i; j++) {
    if (j == 1 || j == i) {
      line += "* ";
    } else {
      line += "  ";
    }
  }
  console.log(line);
}

for (let i = 6; i >= 1; i--) {
  let line = "";
  for (let space = 1; space <= 7 - i; space++) {
    line += " ";
  }
  for (let j = 1; j <= i; j++) {
    if (j == 1 || j == i) {
      line += "* ";
    } else {
      line += "  ";
    }
  }
  console.log(line);
}
