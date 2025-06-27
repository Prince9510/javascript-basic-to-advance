// AAAAA
// AAAA
// AAA
// AA
// A

// B
// BB
// BBB
// BBBB
// BBBBB

for (let i = 5; i >= 1; i--) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += "A";
  }
  console.log(line);
}
console.log("\n");

for (let i = 1; i <= 5; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += "B";
  }
  console.log(line);
}
