let countdown;
let message = document.getElementById("message");
let display = document.getElementById("display");
let timeInput = document.getElementById("timeInput");

function startTimer() {
  clearInterval(countdown);
  let time = parseInt(timeInput.value);

  if (isNaN(time) || time <= 0) {
    message.innerText = "Please enter a valid number.";
    return;
  }

  message.innerText = "";
  display.innerText = time;

  countdown = setInterval(() => {
    time--;
    display.innerText = time;

    if (time <= 0) {
      clearInterval(countdown);
      message.innerText = "Time's up!";
    }
  }, 1000);
}
