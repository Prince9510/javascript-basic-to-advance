// * * * * * * * * * *
// * * * *     * * * *
// * * *         * * *
// * *             * *
// *                 *
// * *             * *
// * * *         * * *
// * * * *     * * * *
// * * * * * * * * * *

let line = "";
let n = 5;

for (let i = n; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    line += "* ";
  }
  for (let space = 1; space <= n - i; space++) {
    line += "    ";
  }

  for (let j = 1; j <= i; j++) {
    if (j == i) {
      line += "*";
    } else {
      line += "* ";
    }
  }
  line += "\n";
}

for (let i = 2; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    line += "* ";
  }
  for (let space = 1; space <= n - i; space++) {
    line += "    ";
  }

  for (let j = 1; j <= i; j++) {
    if (j == i) {
      line += "*";
    } else {
      line += "* ";
    }
  }
  line += "\n";
}

console.log(line);
