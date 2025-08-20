const numbers = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "A",
  "J",
  "K",
  "Q",
];
let multiplyerArray = [
  "1.07",
  "1.40",
  "1.50",
  "1.90",
  "2.10",
  "2.30",
  "2.50",
  "3.00",
  "3.50",
  "4.00",
  "5.00",
  "6.00",
  "7.00",
  "8.00",
  "9.00",
  "10.00",
  "12.00",
  "14.00",
  "16.00",
  "18.00",
  "20.00",
  "25.00",
  "30.00",
  "35.00",
  "40.00",
  "50.00",
  "60.00",
  "70.00",
  "80.00",
  "90.00",
  "100.00",
  "120.00",
  "140.00",
  "160.00",
  "180.00",
  "200.00",
  "250.00",
  "300.00",
  "350.00",
  "400.00",
  "500.00",
  "600.00",
  "700.00",
  "800.00",
  "900.00",
  "1000.00",
];
const suits = ["♥", "♦", "♠", "♣"];
const deck = [];
let betBTN = document.querySelector(".bet");
let cashout_btn = document.querySelector(".cashout_btn");

const btn = document.querySelector("button");
let betCount = 0;
let newDeck;

for (const suit of suits) {
  for (const number of numbers) {
    let value;
    if (Number(number)) {
      value = number;
    } else if (isNaN(number)) {
      if (number == "A") {
        value = 0;
      } else if (number == "J") {
        value = 11;
      } else if (number == "Q") {
        value = 12;
      } else if (number == "K") {
        value = 13;
      }
    }

    let obj = {
      number: number,
      suit: suit,
      color: suit == "♦" || suit == "♥" ? "red" : "black",
      value: value.toString(),
    };
    deck.push(obj);
  }
}

function shuffle() {
  let currentIndex = deck.length;
  let deckOfCard = deck;

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [deckOfCard[currentIndex], deckOfCard[randomIndex]] = [
      deckOfCard[randomIndex],
      deckOfCard[currentIndex],
    ];
  }
  newDeck = deckOfCard;
  return deckOfCard;
}
// shuffle();
// console.log(deck);

async function showAllDeckInScreen() {
  let balanceCheck = gameStart();

  if (!balanceCheck) {
    alert("insufficient balance!");
    return;
  }

  let container = document.querySelector(".container");
  // container.innerHTML = ""
  let card = document.querySelectorAll(".card");
  card.forEach((cards) => {
    cards.remove();
  });

  let a = shuffle();
  console.log(a);

  a.forEach((e, i) => {
    container.innerHTML += `
    <div class="card" key=${i}>
       <div class="numberDiv">
          <h1 class="num" style="color: ${e.color};">${e.number}</h1>
        </div>
        <div class="suitDiv">
          <h1 class="suit" style="color: ${e.color};">
            ${e.suit}
          </h1>
        </div>
        <div class="numberDiv" id="num2">
          <h1 class="num" style="color: ${e.color};">${e.number}</h1>
        </div>
      </div>
    `;
  });

  let cards = document.querySelectorAll(".card");
  let delay = 0;

  cards.forEach((card) => {
    card.style.zIndex = 1;
  });

  for (let i = 0; i < deck.length; i++) {
    setTimeout(() => {
      cards[i].style.transition = "all 0.4s";
      cards[i].style.zIndex = i + 1;
      cards[i].style.transform = `rotate(10deg)`;

      setTimeout(() => {
        cards[i].style.transform = "rotate(0deg) scale(1)";
      }, 400);
    }, delay);
    delay += 10;
  }
  delay = 0;
}

function bet(response) {
  let cards = document.querySelector(".container");
  let children = cards.children;

  let lastCard = children[children.length - 1];
  // console.log(lastCard.innerHTML)
  let element = lastCard.querySelector(".numberDiv").querySelector("h1");
  let num = element.innerText;
  let suitInElement = lastCard.querySelector(".suitDiv").querySelector("h1");
  let suit = suitInElement.innerText;
  let color = suitInElement.style.cssText;
  let colorSlice = color.slice(7, color.length - 1);

  console.log("colorSlice", colorSlice);

  console.log("objectttttttttttttttttt", suitInElement.style.cssText);

  let obj = {
    suit,
    num,
    colorSlice,
  };

  console.log(newDeck);

  let findArrayIndex = newDeck.findIndex(
    (ele) =>
      ele.number == obj.num &&
      ele.suit == obj.suit &&
      ele.color == obj.colorSlice
  );

  console.log(newDeck[findArrayIndex]);

  if (response == "high") {
    if (
      Number(newDeck[findArrayIndex].value) <=
      Number(newDeck[findArrayIndex - 1].value)
    ) {
      console.log(
        newDeck[findArrayIndex].value,
        newDeck[findArrayIndex - 1].value
      );
      console.log("wowowoowowowowowo!");
      manageFund(betCount++);
      colorCombination(true);
    } else {
      console.log("loss");
      colorCombination(false);
      gameOver();
    }
  } else if (response == "low") {
    if (
      Number(newDeck[findArrayIndex].value) >=
      Number(newDeck[findArrayIndex - 1].value)
    ) {
      console.log("wowowoowowowowowo!");
      manageFund(betCount++);
      colorCombination(true);
    } else {
      console.log("loss in else ");
      gameOver();
      colorCombination(false);
    }
  }

  newDeck.pop();

  lastCard.style.left = "109px";
  lastCard.style.top = "50px";
  lastCard.offsetHeight;
  lastCard.style.transition = "all 0.5s";
  lastCard.style.left = "50px";
  lastCard.style.top = "-50px";
  lastCard.style.opacity = "0";

  setTimeout(() => {
    lastCard.remove();
  }, 500);

  // console.log(lastCard);
}

async function gameStart() {
  let game_start = document.querySelector(".game_start");
  let lowBTN = document.querySelector(".low");
  let highBTN = document.querySelector(".high");
  let cashout_btn = document.querySelector(".cashout_btn");
  let bet_amount = document.querySelector(".bet_amount").value;
  let multiplyer = document.querySelector(".multiplyer");

  let checkBalance = localStorage.getItem("balance");
  let parseBalance = await JSON.parse(checkBalance);

  if (!parseBalance || bet_amount <= 0) {
    return false;
  } else {
    if (Number.parseFloat(parseBalance) >= bet_amount) {
      cashout_btn.style.display = "block";
      lowBTN.style.display = "block";
      highBTN.style.display = "block";
      multiplyer.style.display = "flex";
      game_start.style.display = "none";

      updateBalance(bet_amount);

      return true;
    } else {
      return false;
    }
  }
}

function gameOver() {
  let game_start = document.querySelector(".game_start");
  let lowBTN = document.querySelector(".low");
  let highBTN = document.querySelector(".high");
  let cashout_btn = document.querySelector(".cashout_btn");
  let multiplyer = document.querySelector(".multiplyer");

  betCount = 0;
  multiplyer.style.display = "none";
  cashout_btn.style.display = "none";
  lowBTN.style.display = "none";
  highBTN.style.display = "none";
  game_start.style.display = "flex";
  localStorage.removeItem("betCount");
}

getBalance();

async function getBalance() {
  let strtingBalance = 100000.0;
  let getBalanceFromLocalStorage = localStorage.getItem("balance");
  let myBlanace = document.querySelector(".myBlanace");

  if (!getBalanceFromLocalStorage) {
    localStorage.setItem("balance", JSON.stringify(strtingBalance));
    let getBal = localStorage.getItem("balance");
    let balance = await JSON.parse(getBal);

    myBlanace.innerText = `$${Number.parseFloat(balance).toFixed(2)}`;
  } else {
    let balance = await JSON.parse(getBalanceFromLocalStorage);
    myBlanace.innerText = `$${Number.parseFloat(balance).toFixed(2)}`;
  }
}

async function updateBalance(amount) {
  let getBalanceFromLocalStorage = localStorage.getItem("balance");
  let balance = await JSON.parse(getBalanceFromLocalStorage);
  let numberAmount = Number(amount);
  if (!(balance >= numberAmount)) {
    return false;
  }
  if (getBalanceFromLocalStorage) {
    let newBalance = Number(balance) - numberAmount;
    localStorage.setItem("balance", JSON.stringify(newBalance));
    getBalance();
  } else {
    gameOver();
  }
}

function colorCombination(response) {
  if (response) {
    let container = document.querySelector(".container");
    container.style.backgroundColor = "#12ca14";
    container.style.opacity = "0.1";

    setTimeout(() => {
      container.style.backgroundColor = "white";
      container.style.transition = "all 0.3s";
      container.style.opacity = "1";
    }, 300);
  } else {
    let container = document.querySelector(".container");
    container.style.backgroundColor = "#ff223f";

    setTimeout(() => {
      container.style.backgroundColor = "white";
      container.style.transition = "all 0.3s";
      container.style.opacity = "1";
    }, 300);
  }
}

function manageFund(betCount) {
  let bet_amount = document.querySelector(".bet_amount").value;
  let profit = document.querySelector(".profit");
  let multiplyer_number = document.querySelector(".multiplyer_number");

  console.log(betCount);

  var profitAmount =
    Number.parseFloat(multiplyerArray[betCount]) *
    Number.parseFloat(bet_amount);
  // alert(profitAmount);

  multiplyer_number.innerText = `${multiplyerArray[betCount]}X`;
  profit.innerText = `${Number.parseFloat(profitAmount).toFixed(2)}`;
  localStorage.setItem("betCount", JSON.stringify(betCount));
}

async function cashout() {
  let bet_amount = document.querySelector(".bet_amount").value;
  let getBetCountFromLocalStorage = localStorage.getItem("betCount");
  let parseBetCountFromLocalStorage = await JSON.parse(getBetCountFromLocalStorage);
  console.log(
    "🚀 ~ cashout ~ parseBetCountFromLocalStorage:",
    parseBetCountFromLocalStorage
  );

  let newBalance =
    Number.parseFloat(multiplyerArray[parseBetCountFromLocalStorage]) *
    Number.parseFloat(bet_amount);

  let getBalanceFromLocalStorage = localStorage.getItem("balance");
  let parseBalance = await JSON.parse(getBalanceFromLocalStorage);

  parseBalance += newBalance;

  localStorage.setItem("balance", JSON.stringify(parseBalance));

  getBalance();
  gameOver();
}

function addAmount() {
  let amount = 100000;
  localStorage.setItem("balance", JSON.stringify(amount));
  getBalance();
}
