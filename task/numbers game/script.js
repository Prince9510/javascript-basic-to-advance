let game = false;
let randomNumber = null;
let min = 10;
let max = 30;
let startBTN = document.querySelector(".start");
let checkBTN = document.querySelector(".check");
let input = document.querySelector("input");
let span = document.querySelector("span");
let h1 = document.querySelector("h1");

startBTN.addEventListener("click", gameStart);

document.addEventListener("keydown", function (e) {
  if (game) {
    if (e.key == "Enter") {
      check();
    }
  }
});

function gameStart() {
  game = true;
  randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  startBTN.style.display = "none";
  checkBTN.style.display = "block";
  input.style.display = "block";
  h1.innerText = "Guess a number between " + min + " and " + max;
  input.focus();
  input.value = "";
}

checkBTN.addEventListener("click", check);

function check() {

  const guess = Number(input.value.trim());

  if (input.value.trim() == "" || isNaN(guess)) {
    span.innerText = "please enter a valid number";
    input.select();
    input.focus();
    return;
  }

  if (guess > max || guess < min) {
    span.innerText = `Please enter a number between ${min} and ${max}`;
    input.select();
    input.focus();
    return;
  }

  if (guess < randomNumber) {
    input.focus();
    input.select();
    span.innerText = "Too Small!";
  } else if (guess > randomNumber) {
    input.focus();
    input.select();
    span.innerText = "Too High!";
  } else {
    span.innerText = "Congratulations you won!";
    game = false;
    startBTN.style.display = "block";
    checkBTN.style.display = "none";
    input.style.display = "none";
  }
}
