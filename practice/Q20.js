//  * * * * * *
//   * * * * *
//    * * * *
//     * * *
//      * *
//       *
//       *
//      * *
//     * * *
//    * * * *
//   * * * * *
//  * * * * * *

for (let i = 6; i >= 1; i--) {
  let line = "";
  for (let space = 6; space > i - 1; space--) {
    line += " ";
  }
  for (let j = 1; j <= i; j++) {
    line += "* ";
  }
  console.log(line);
}

for (let i = 1; i <= 6; i++) {
  let line = "";
  for (let space = 6; space > i - 1; space--) {
    line += " ";
  }
  for (let j = 1; j <= i; j++) {
    line += "* ";
  }
  console.log(line);
}
