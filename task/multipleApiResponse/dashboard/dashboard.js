window.addEventListener("load", function () {
  userLoginOrNot();
});

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

async function startQuiz() {
  fullScreen(true);
  const examContainer = document.querySelector(".examContainer");

  try {
    let questionsList = [];
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
    <button type="button" class="submit">SUBMIT</button>
  `;
  examContainer.innerHTML = qu;
}

async function onNextQuestion() {
  const examContainer = document.querySelector(".examContainer");

  // if (Array.isArray(response)) {
  //   const userData = await updateUserQiuzState(0);
  //   const questionIndex = userData.quizStatus.questionIndex;
  //   const questionsList = response;
  //   const firstQuestion = questionsList[questionIndex];

  //   showQuestion(
  //     examContainer,
  //     firstQuestion,
  //     questionIndex,
  //     questionsList.length
  //   );
  // } else {
  const radioButtons = document.querySelectorAll('input[name="radionBTN"]');
  const isValid = [...radioButtons].some((button) => button.checked);
  if (!isValid) {
    alert("Please select an answer.");
    return;
  }
  const checkBoxes = [...radioButtons].find((value) => value.checked);
  const answer = checkBoxes.getAttribute("id");

  try {
    const userData = await updateUserQiuzState("next");
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
    }
  } catch (err) {
    console.error("Error fetching or rendering next question:", err);
  }
  // }
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
        .then((data) => (state = ++data.quizStatus.questionIndex));
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

    if (userData.quizStatus.questionIndex == 0) {
      await fetch(quizURL, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          id: ID,
          answers: [],
        }),
      });
    }

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







function result(){

}