let a = "abcd";
let b = "efgh";
if (!(a.length == b.length)) {
  console.log("enter same length string");
}

for (let i = 0; i < a.length; i++) {
  console.log(`${a[i]} maps to ${b[i]}`);
}