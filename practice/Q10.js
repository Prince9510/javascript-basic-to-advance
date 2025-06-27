//     *
//    **
//   ***
//  ****
// *****

for (let i = 1; i <= 5; i++) {
  let line = "";
  for (let space = 1; space <= 5 - i; space++) {
    line += " ";
  }
  for (let j = 1; j <= i; j++) {
    line += "*";
  }
  console.log(line);
}
