// *               *
// * *           * *
// * * *       * * *
// * * * *   * * * *
// * * * * * * * * *
// * * * *   * * * *
// * * *       * * *
// * *           * *
// *               *

let n = 5;
let line = "";

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    line += "* ";
  }
  for (let space = 1; space <= n - i; space++) {
    line += "    ";
  }
  for (let j = 1; j <= i; j++) {
    line += "* ";
  }

  line += "\n";
}

for (let i = n - 1; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    line += "* ";
  }

  for (let space = 1; space <= n - i; space++) {
    line += "    ";
  }
  for (let j = 1; j <= i; j++) {
    line += "* ";
  }

  line += "\n";
}

console.log(line);
