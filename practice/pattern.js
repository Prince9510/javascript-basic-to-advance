//        *
//      *   *
//    *       *
//  *           *
//* * * * * * * * *

for (let i = 1; i <= 5; i++) {
  let line = " ";
  for (let space = 1; space <= 5 - i; space++) {
    line += "  ";
  }
  for (let j = 1; j <= i * 2 - 1; j++) {
    if (j == 1 || j == i * 2 - 1 || i == 5) {
      line += "* ";
    } else {
      line += "  ";
    }
  }
  console.log(line);
}

//* * * * *
// * * * *
//  * * *
//   * *
//    *

for (let i = 5; i >= 1; i--) {
  let line = "";
  for (let space = 1; space <= 5 - i; space++) {
    line += " ";
  }
  for (let j = 1; j <= i; j++) {
    line += "* ";
  }
  console.log(line);
}

//     *
//    * *
//   * * *
//  * * * *
// * * * * *

for (let i = 1; i <= 5; i++) {
  let line = "";
  for (let space = 1; space <= 5 - i; space++) {
    line += " ";
  }

  for (let j = 1; j <= i; j++) {
    line += "* ";
  }

  console.log(line);
}

//     *
//    * *
//   * * *
//  * * * *
// * * * * *
//  * * * *
//   * * *
//    * *
//     *

for (let i = 1; i <= 5; i++) {
  let line = "";
  for (let space = 1; space <= 5 - i; space++) {
    line += " ";
  }

  for (let j = 1; j <= i; j++) {
    line += "* ";
  }

  console.log(line);
}

for (let i = 4; i >= 1; i--) {
  let line = "";
  for (let space = 1; space <= 5 - i; space++) {
    line += " ";
  }
  for (let j = 1; j <= i; j++) {
    line += "* ";
  }
  console.log(line);
}

//     *
//    * *
//   *   *
//  *     *
// *       *
//  *     *
//   *   *
//    * *
//     *

for (let i = 1; i <= 5; i++) {
  let line = "";
  for (let space = 1; space <= 5 - i; space++) {
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

for (let i = 4; i >= 1; i--) {
  let line = "";
  for (let space = 1; space <= 5 - i; space++) {
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

// *
// * *
// *   *
// *     *
// *       *
// *     *
// *   *
// * *
// *

for (let i = 1; i <= 5; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    if (j === 1 || j === i) {
      line += "* ";
    } else {
      line += "  ";
    }
  }

  console.log(line.trimEnd());
}

for (let i = 4; i >= 1; i--) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    if (j === 1 || j === i) {
      line += "* ";
    } else {
      line += "  ";
    }
  }

  console.log(line.trimEnd());
}

//*****        *****
// *****      *****
//  *****    *****
//   *****  *****
//    **********
//   *****  *****
//  *****    *****
// *****      *****
//*****        *****

for (let i = 5; i >= 1; i--) {
  let line = "";
  for (let space = 5 - i; space >= 1; space--) {
    line += " ";
  }

  for (let j = 1; j <= 5; j++) {
    line += "*";
  }

  for (let space = 1; space <= i - 1; space++) {
    line += "  ";
  }
  for (let j = 1; j <= 5; j++) {
    line += "*";
  }

  console.log(line);
}

for (let i = 2; i <= 5; i++) {
  let line = "";
  for (let space = 5 - i; space >= 1; space--) {
    line += " ";
  }

  for (let j = 1; j <= 5; j++) {
    line += "*";
  }

  for (let space = 1; space <= i - 1; space++) {
    line += "  ";
  }

  for (let j = 1; j <= 5; j++) {
    line += "*";
  }
  console.log(line);
}

//     *
//    * *
//   *   *
//  *     *
// *       *
//  *     *
//   *   *
//    * *
//     *

for (let i = 1; i <= 6; i++) {
  let line = "";
  for (let space = 1; space <= 6 - i; space++) {
    line += " ";
  }

  for (let j = 1; j <= i; j++) {
    if (j == 1 || j == 2 || j == 6 || j == 5) {
      line += j + " ";
    } else {
      line += "  ";
    }
  }

  console.log(line);
}

for (let i = 5; i >= 1; i--) {
  let line = "";
  for (let space = 1; space <= 6 - i; space++) {
    line += " ";
  }
  for (let j = 1; j <= i; j++) {
    if (j == 1 || j == 2 || j == 6 || j == 5) {
      line += j + " ";
    } else {
      line += "  ";
    }
  }
  console.log(line);
}










//*****        *****
// *****      *****
//  *****    *****
//   *****  *****
//    **********
//   *****  *****
//  *****    *****
// *****      *****
//*****        *****

for(let i = 1; i <= 5; i++){
  let line = ""
  for(let space = 1; space <= i - 1; space++){
    line += " "
  }
  for(let j = 1; j <= 5; j++){
    line += "*"
  }
  for(let space = 1; space <= 5 -i ; space++){
    line += "  "
  }
  for(let j = 1; j <= 5; j++){
    line += "*"
  }

  console.log(line)
}

for(let i = 4; i >= 1; i--){
  let line = ""
  for(let space = 1; space <= i- 1; space++){
    line += " "
  }
  for(let j = 1; j <=5; j++){
    line += "*"
  }
  for(let space = 1; space <= 5 - i; space++){
    line += "  "
  }
for(let j = 1; j <=5; j++){
    line += "*"
  }
  console.log(line)
}