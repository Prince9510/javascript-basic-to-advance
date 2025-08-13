let inputArea = document.querySelector(".inputArea");
let h1 = document.querySelector("h1");
let firstValue = null;
let secondValue = null;
let operator = null;

function clearInput() {
  inputArea.value = "";
  h1.innerText = "";
  firstValue = null;
  secondValue = null;
  operator = null;
}

function back() {
  let val = inputArea.value.slice(0, -1);
  inputArea.value = val;
}

function cal(a, b, op) {
  a = parseFloat(a);
  b = parseFloat(b);

  console.log(a, b, op);

  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b === 0) {
        return "Error: Division by zero";
      }
      return a / b;
    default:
      return "Invalid operator";
  }
}

function handleNumberInput(value) {
  inputArea.value += value;
}

function handleOperatorInput(op) {
  if (firstValue == null) {
    if (inputArea.value !== "") {
      firstValue = inputArea.value;
      operator = op;
      h1.innerText = inputArea.value + " " + operator;
      inputArea.value = "";
      console.log("f", firstValue, "op", operator);
    }
  } else {
    if (inputArea.value !== "") {
      let result = cal(firstValue, inputArea.value, operator);
      firstValue = result;
      operator = op;
      h1.innerText = result + " " + operator;
      inputArea.value = "";
    } else {
      operator = op;
      h1.innerText = firstValue + " " + operator;
    }
  }
}

function handleResult() {
  if (firstValue !== null && operator !== null && inputArea.value !== "") {
    let ans = cal(firstValue, inputArea.value, operator);
    h1.innerText = `${firstValue} ${operator} ${inputArea.value} = ${ans}`;
    inputArea.value = ans;
    firstValue = null;
    secondValue = null;
    operator = null;
  }
}

document.addEventListener("keydown", function (event) {
  const numberOnly = "0123456789.";
  const operators = "+-*/";

  if (event.key === "Escape") {
    clearInput();
  }

  if (event.key === "Backspace") {
    back();
  }

  if (numberOnly.includes(event.key)) {
    handleNumberInput(event.key);
    event.preventDefault();
  }

  if (operators.includes(event.key)) {
    handleOperatorInput(event.key);
    event.preventDefault();
  }

  if (event.key === "Enter" || event.key === "=") {
    handleResult();
    event.preventDefault();
  }
});

function numberClick(value) {
  if (typeof value === "number") {
    handleNumberInput(value.toString());
  } else if (value === "+" || value === "-" || value === "*" || value === "/") {
    handleOperatorInput(value);
  }else if(value == '00'){
    handleNumberInput("00")
  }
}

function ansClick() {
  handleResult();
}
