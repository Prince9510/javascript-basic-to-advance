// reverse string

function reverseString(word) {
  let res = word.split(" ");
  let final = [];

  for (let i = res.length - 1; i >= 0; i--) {
    final.push(res[i]);
  }

  return final.join(" ");
}

console.log(reverseString("javascript is a programming language"));
