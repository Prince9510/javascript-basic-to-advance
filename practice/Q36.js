// * * * * *
// **     **
// * *   * *
// *  * *  *
// *   *   *
// *  * *  *
// * *   * *
// **     **
// * * * * *

let n = 5;

for (let i = n; i >= 1; i--) {
  let line = "";
  for (let space = 1; space <= n - i; space++) {
    if (space == 1) {
      line += "*";
    } else {
      line += " ";
    }
  }

  for (let j = 1; j <= i; j++) {
    if (j === 1 || j === i) {
      if (j == i) {
        line += "* ".trimEnd();
      } else {
        line += "* ";
      }
    } else {
      if (i === n) {
        line += "* ";
      } else {
        line += "  ";
      }
    }
  }

  for (let space = 1; space <= n - i; space++) {
    if (space == n - i) {
      line += "*";
    } else {
      line += " ";
    }
  }

  console.log(line);
}

for (let i = 2; i <= n; i++) {
  let line = "";
  for (let space = 1; space <= n - i; space++) {
    if (space == 1) {
      line += "*";
    } else {
      line += " ";
    }
  }

  for (let j = 1; j <= i; j++) {
    if (j === 1 || j === i) {
      if (j == i) {
        line += "* ".trimEnd();
      } else {
        line += "* ";
      }
    } else {
      if (i === n) {
        line += "* ";
      } else {
        line += "  ";
      }
    }
  }

  for (let space = 1; space <= n - i; space++) {
    if (space == n - i) {
      line += "*";
    } else {
      line += " ";
    }
  }

  console.log(line);
}
