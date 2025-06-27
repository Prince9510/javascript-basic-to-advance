let a = 100000;
let b = 20000;
let c = 3000;
let d = 400;
let e = 50;

if (a > b) {
  if (a > c) {
    if (a > d) {
      if (a > e) {
        console.log(a);
      } else {
        console.log(e);
      }
    } else {
      if (d > e) {
        console.log(d);
      } else {
        console.log(e);
      }
    }
  } else {
    if (c > d) {
      if (d > e) {
        console.log(d);
      } else {
        console.log(e);
      }
    } else {
      if (d > e) {
        console.log(d);
      } else {
        console.log(e);
      }
    }
  }
} else {
  if (b > c) {
    if (b > d) {
      if (b > e) {
        console.log(b);
      } else {
        console.log(e);
      }
    } else {
      if (d > e) {
        console.log(d);
      } else {
        console.log(e);
      }
    }
  } else {
    if (c > d) {
      if (c > e) {
        console.log(c);
      } else {
        console.log(e);
      }
    } else {
      if (d > e) {
        console.log(d);
      } else {
        console.log(e);
      }
    }
  }
}
