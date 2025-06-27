// *****
// *   *
// *   *
// *   *
// *****

for (let i = 1; i <= 5; i++) {
  let line = "";
  for (let j = 1; j <= 5; j++) {
    if (i === 1 || j === 1 || j === 5 || i === 5) {
      line += "*";
    } else {
      line += " ";
    }
  }
  console.log(line);
}
