window.addEventListener("load", function () {
  userLoginOrNot();
  checkQuizStatusTrueOrFalse();
});

// document.addEventListener("click", (e) => {
//   console.log(e);
//   if (document.fullscreenElement) {
//     document.exitFullscreen();
//   } else {
//     document.documentElement.requestFullscreen();
//   }
// });

let loaderPerentDiv = document.getElementById("loaderPerentDiv");
let URL = "http://localhost:3000/users";
let questionURL = "http://localhost:3000/questions";
let quizURL = "http://localhost:3000/quiz";

function showLoader() {
  // debugger;
  loaderPerentDiv.style.display = "flex";
}
function stopLoader() {
  loaderPerentDiv.style.display = "none";
}

async function getUserIdFromLocalStorage() {
  let ID = await JSON.parse(localStorage.getItem("token"));

  return ID.previousUserID;
}

async function userLoginOrNot() {
  showLoader();
  let token = await JSON.parse(localStorage.getItem("token"));
  if (!token) {
    window.location.href = "../login/login.html";
  }

  await fetch(URL)
    .then((data) => data.json())
    .then((data) => {
      if (token) {
        let userObject = data.find((e) => e.id == token.previousUserID);
        if (!userObject) {
          return;
        }

        // console.log(userObject);

        let currentLoginTimeStamp = Date.now();
        let previousLoginTimeStamp = userObject.timestamp;

        let calculateTime = currentLoginTimeStamp - previousLoginTimeStamp;
        let getTime = calculateTime / 1000;

        console.log(getTime);
        userData();

        if (getTime > 3600) {
          window.location.href = "../login/login.html";
        }
      }
    })
    .catch((err) => {
      console.log(err);
      localStorage.removeItem("token");
    })
    .finally(() => stopLoader());
}

function fullScreen(response) {
  showLoader();
  console.log(response);
  if (response) {
    document.querySelector(".examContainer").style.display = "block";
    document.querySelector(".startBTN").style.display = "none";
    let elem = document.documentElement;
    // elem.requestFullscreen();
  } else {
    document.querySelector(".examContainer").style.display = "none";
    document.querySelector(".startBTN").style.display = "block";
  }
  stopLoader();
}

async function startQuiz(response) {
  fullScreen(true);
  exitPopup();
  const examContainer = document.querySelector(".examContainer");
  document.querySelector(".resultContainer").style.display = "none";

  const ID = await getUserIdFromLocalStorage();

  try {
    if (!response) {
      let questionsList = [];

      await fetch(`${quizURL}/${ID}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          id: ID,
          answers: [],
        }),
      });

      await fetch(questionURL)
        .then((rawData) => rawData.json())
        .then((data) => (questionsList = data));
      console.log(questionsList);

      const userData = await updateUserQiuzState(0);
      const questionIndex = userData.quizStatus.questionIndex;
      // const questionsList = response;
      const firstQuestion = questionsList[questionIndex];

      showQuestion(
        examContainer,
        firstQuestion,
        questionIndex,
        questionsList.length
      );
    } else {
      await fetch(questionURL)
        .then((rawData) => rawData.json())
        .then((data) => (questionsList = data));
      console.log(questionsList);

      const userData = await updateUserQiuzState(response);
      // debugger;
      const questionIndex = userData.quizStatus.questionIndex;

      console.log("🚀 ~ startQuiz ~ questionIndex:", questionIndex);

      // const questionsList = response;
      const firstQuestion = questionsList[questionIndex];

      showQuestion(
        examContainer,
        firstQuestion,
        questionIndex,
        questionsList.length
      );
    }
    // onNextQuestion(questionsList);
  } catch (err) {
    console.log(err);
  }
}

async function showQuestion(
  examContainer,
  questionData,
  questionIndex,
  totalQuestions,
  answerByUser
) {
  // console.log("🚀 ~ showQuestion ~ answerByUser:", answerByUser);

  if (answerByUser) {
    updateQuizQuestionList(questionData, answerByUser);
  }

  const allAnswers = [
    ...questionData.incorrect_answers,
    questionData.correct_answer,
  ];
  const qu = `
    <p id="question">
      ${questionIndex + 1}. ${questionData.question}
    </p>

    <div class="parentOfAnswerOption">
    ${allAnswers
      .map(
        (item) => `
        <label for="${item}">
          <div class="answerOption">
            <input type="radio" id="${item}" name="radionBTN" />
            <p>${item}</p>
          </div>
        </label>`
      )
      .join("")}
    </div>
    <button type="button" class="next" onclick="onNextQuestion()">
      NEXT
    </button>
    <span class="questionList">${questionIndex + 1}/${totalQuestions}</span>
  `;
  examContainer.innerHTML = qu;
}

async function onNextQuestion() {
  const examContainer = document.querySelector(".examContainer");

  const radioButtons = document.querySelectorAll('input[name="radionBTN"]');
  const isValid = [...radioButtons].some((button) => button.checked);
  if (!isValid) {
    alert("Please select an answer.");
    return;
  }
  const checkBoxes = [...radioButtons].find((value) => value.checked);
  const answer = checkBoxes.getAttribute("id");

  try {
    const userData = await updateUserQiuzState();
    const questionIndex = userData.quizStatus.questionIndex;
    console.log("🚀 ~ onNextQuestion ~ questionIndex:", questionIndex);

    let questionsList = [];
    await fetch(questionURL)
      .then((rawData) => rawData.json())
      .then((data) => (questionsList = data));

    if (questionIndex < questionsList.length) {
      const nextQuestion = questionsList[questionIndex];

      if (questionIndex === questionsList.length - 1) {
        showQuestion(
          examContainer,
          nextQuestion,
          questionIndex,
          questionsList.length,
          answer
        );
        document.querySelector(".next").innerText = "SUBMIT";
      } else {
        showQuestion(
          examContainer,
          nextQuestion,
          questionIndex,
          questionsList.length,
          answer
        );
      }
    } else {
      let lastQuestion = questionsList[questionIndex - 1];
      await updateQuizQuestionList(lastQuestion, answer);
      result();
    }
  } catch (err) {
    console.error("Error fetching or rendering next question:", err);
  }
}

async function updateUserQiuzState(response) {
  try {
    let ID = await getUserIdFromLocalStorage();
    let state;
    let userData;
    if (response == 0) {
      state = 0;
    } else {
      await fetch(`${URL}/${ID}`)
        .then((rawData) => rawData.json())
        .then((data) => {
          if (typeof response == "object") {
            state = data.quizStatus.questionIndex;
          } else {
            state = ++data.quizStatus.questionIndex;
          }
        });
    }

    let obj = {
      status: true,
      questionIndex: state,
    };
    await fetch(`${URL}/${ID}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        quizStatus: obj,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        userData = data;
      });

    return userData;
  } catch (err) {
    console.log(err);
  }
}

async function updateQuizQuestionList(question, answerByUser) {
  console.log("🚀 ~ updateQuizQuestionList ~ answerByUser:", answerByUser);
  try {
    console.log(question);
    let ID = await getUserIdFromLocalStorage();

    let answerArray = [];
    answerArray.push(answerByUser);

    await fetch(`${quizURL}/${ID}`)
      .then((rawData) => rawData.json())
      .then(async (data) => {
        console.log("🚀 ~ updateQuizQuestionList ~ data:", data);
        await fetch(`${quizURL}/${ID}`, {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            answers: [...data.answers, answerByUser],
          }),
        });
      });
  } catch (err) {
    console.log(err);
  }
}

async function result() {
  showLoader();
  const examContainer = document.querySelector(".examContainer");
  const resultContainer = document.querySelector(".resultContainer");
  document.querySelector(".startBTN").style.display = "none";
  resultContainer.style.display = "flex";
  examContainer.style.display = "none";
  let ID = await getUserIdFromLocalStorage();
  // showLoader();
  let answerArray = [];
  let correct_answer;

  try {
    let questionsList = [];
    await fetch(questionURL)
      .then((rawData) => rawData.json())
      .then((data) => (questionsList = data));

    await fetch(`${quizURL}/${ID}`)
      .then((rawData) => rawData.json())
      .then((data) => (answerArray = data.answers))
      .then(() => {
        correct_answer = answerArray.filter((element) => {
          return questionsList.some((item) => element === item.correct_answer);
        });
      })
      .then(async () => {
        await fetch(`${URL}/${ID}`, {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            quizStatus: {
              status: false,
              questionIndex: 0,
            },
          }),
        });

        document.querySelector(".correctCounter").innerText =
          correct_answer.length;
        document.querySelector(".incorrectCounter").innerText =
          questionsList.length - correct_answer.length;
        document.querySelector(".questionCounter").innerText =
          questionsList.length;
      });
  } catch (err) {
    console.log(err);
  } finally {
    stopLoader();
  }
}

async function checkQuizStatusTrueOrFalse(response) {
  showLoader();
  let ID = await getUserIdFromLocalStorage();
  let userStatus;

  try {
    await fetch(`${URL}/${ID}`)
      .then((rawData) => rawData.json())
      .then((data) => (userStatus = data.quizStatus))
      .then(() => {
        if (userStatus.status) {
          popup();
          if (response) {
            startQuiz(userStatus);
          }
        }
      });
  } catch (err) {
    console.log(err);
  } finally {
    stopLoader();
  }
}

function popup() {
  let popupContainer = document.querySelector(".popupContainer");
  popupContainer.style.display = "flex";
}
function exitPopup() {
  let popupContainer = document.querySelector(".popupContainer");
  popupContainer.style.display = "none";
}

async function userData() {
  let userName = document.querySelector(".userName");
  const ID = await getUserIdFromLocalStorage();
  await fetch(`${URL}/${ID}`)
    .then((rawData) => rawData.json())
    .then((data) => {
      userName.innerText = data.name;
    });
}

function logout() {
  localStorage.removeItem("token");
  userLoginOrNot();
}
