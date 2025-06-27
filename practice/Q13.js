// 54321
// 5432
// 543
// 54
// 5

for (let i = 1; i <= 5; i++) {
  let line = "";
  for (let j = 5; j >= i; j--) {
    line += j;
  }
  console.log(line);
}
