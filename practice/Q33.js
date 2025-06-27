function otp(n) {
  let otp = "";
  for (let i = 1; i <= n; i++) {
    otp += Math.floor(Math.random() * 10);
  }

  console.log(otp);
}

otp(20);
