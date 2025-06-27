// *
// **
// * *
// *  *
// *   *
// ******

for (let i = 1; i <= 6; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    if (j === 1 || j === i || i === 6) {
      line += "*";
    } else {
      line += " ";
    }
  }
  console.log(line);
}
