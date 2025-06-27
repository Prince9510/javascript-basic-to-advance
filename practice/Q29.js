let a = [1, 2, 3, 8, 4, 5, 6];
let b = [4, 5, 6, 9, 2, 2, 7, 8, 9, 8, 7];
let n = [];

for (let i = 0; i < a.length; i++) {
  if (!b.includes(a[i]) && !n.includes(a[i])) {
    n.push(a[i]);
  }
}

for (let j = 0; j < b.length; j++) {
  if (!a.includes(b[j]) && !n.includes(b[j])) {
    n.push(b[j]);
  }
}

console.log(n);
