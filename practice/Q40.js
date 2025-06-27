//    *       *
//   * *     * *
//  *   *   *   *
// *     * *     *
//*       *       *
// *     * *     *
//  *   *   *   *
//   * *     * *
//    *       *

let n = 5;
let line = "";

for (let i = 1; i <= n; i++) {
  for (let space = 1; space <= n - i; space++) {
    line += " ";
  }

  if (i == 5) {
    for (let j = 1; j <= i - 1; j++) {
      if (j == 1) {
        line += "* ";
      } else {
        line += "  ";
      }
    }
  } else {
    for (let j = 1; j <= i; j++) {
      if (j == 1 || j == i) {
        line += "* ";
      } else {
        line += "  ";
      }
    }
  }

  for (let space = 2; space <= n - i; space++) {
    line += "  ";
  }

  for (let j = 1; j <= i; j++) {
    if (j == 1 || j == i) {
      line += "* ";
    } else {
      line += "  ";
    }
  }

  line += "\n";
}

for (let i = n - 1; i >= 1; i--) {
  for (let space = 1; space <= n - i; space++) {
    line += " ";
  }

  for (let j = 1; j <= i; j++) {
    if (j == 1 || j == i) {
      line += "* ";
    } else {
      line += "  ";
    }
  }

  for (let space = 2; space <= n - i; space++) {
    line += "  ";
  }

  for (let j = 1; j <= i; j++) {
    if (j == 1 || j == i) {
      line += "* ";
    } else {
      line += "  ";
    }
  }

  line += "\n";
}

console.log(line);
