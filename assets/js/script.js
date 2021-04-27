// Variable Declaration
var homepage = document.querySelector("#homepage");
var startQuizBtn = document.querySelector("#startQuiz");
var nextQn1 = document.querySelector(".next1");
var nextQn2 = document.querySelector(".next2");
var nextQn3 = document.querySelector(".next3");
var nextQn4 = document.querySelector(".next4");
var nextQn5 = document.querySelector(".next5");
var nextQn = [nextQn1, nextQn2, nextQn3, nextQn4, nextQn5];
var question1 = document.getElementById("question1");
var question2 = document.getElementById("question2");
var question3 = document.getElementById("question3");
var question4 = document.getElementById("question4");
var question5 = document.getElementById("question5");
var countDown = document.querySelector("#time");
var userInput = document.getElementById("userInput");
var submitBtn = document.querySelector(".submitBtn");
var firstPlace = document.getElementById("first");
var goBackBtn = document.getElementById("goBackBtn");
var clearScoresBtn = document.getElementById("clearScoresBtn");
var viewHighscores = document.getElementById("viewHighscores");
var header = document.getElementById("header");
var timeDeduction = document.querySelectorAll(".wrongAns");
var scoreVal = document.getElementById("score");
var scorePlayer = document.createElement("span");
var scoreInt = 0;
var scoreList = document.getElementById("scoreList");
var pointList = document.getElementById("pointList");
var deleteItem = document.getElementsByClassName("delete");

question1.style.display = "none";
question2.style.display = "none";
question3.style.display = "none";
question4.style.display = "none";
question5.style.display = "none";
allDone.style.display = "none";
highscores.style.display = "none";

viewHighscores.addEventListener("click", function () {
  header.style.display = "none";
  homepage.style.display = "none";
  highscores.style.display = "flex";
  allDone.style.display = "none";
  question1.style.display = "none";
  question2.style.display = "none";
  question3.style.display = "none";
  question4.style.display = "none";
  question5.style.display = "none";
});

startQuizBtn.addEventListener("click", function () {
  homepage.style.display = "none";
  question1.style.display = "flex";

  timeLeft = 75;
  var timeInterval = setInterval(function () {
    timeLeft--;
    countDown.textContent = timeLeft;

    if (timeLeft === 0 || timeLeft < 0) {
      clearInterval(timeInterval);
      countDown.textContent = "";

      question1.style.display = "none";
      question2.style.display = "none";
      question3.style.display = "none";
      question4.style.display = "none";
      question5.style.display = "none";
      highscores.style.display = "none";
      allDone.style.display = "flex";
    } else if (true) {
      nextQn5.addEventListener("click", function () {
        clearInterval(timeInterval);
        countDown.textContent = "";
      });
      viewHighscores.addEventListener("click", function () {
        clearInterval(timeInterval);
        countDown.textContent = "";
      });
    }
  }, 1000);
});

for (i = 0; i < timeDeduction.length; i++) {
  timeDeduction[i].addEventListener("click", function () {
    onClick();
  });
}

function onClick() {
  timeLeft -= 15;
  countDown.textContent = timeLeft;

  if (timeLeft < 0 || timeLeft === 0) {
    countDown.textContent = "";
  }
}

for (i = 0; i < nextQn.length; i++) {
  nextQn[i].addEventListener("click", function () {
    scoreInt += 5;
    console.log(scoreInt);
  });
}

for (i = 0; i < timeDeduction.length; i++) {
  timeDeduction[i].addEventListener("click", function () {
    scoreInt -= 3;
    console.log(scoreInt);
  });
}

nextQn1.addEventListener("click", function () {
  question1.style.display = "none";
  question2.style.display = "flex";
});

nextQn2.addEventListener("click", function () {
  question2.style.display = "none";
  question3.style.display = "flex";
});

nextQn3.addEventListener("click", function () {
  question3.style.display = "none";
  question4.style.display = "flex";
});

nextQn4.addEventListener("click", function () {
  question4.style.display = "none";
  question5.style.display = "flex";
});

nextQn5.addEventListener("click", function () {
  question5.style.display = "none";
  allDone.style.display = "block";
  scoreVal.innerHTML = scoreInt;
  scorePlayer.innerHTML = scoreInt;
});

submitBtn.addEventListener("click", function () {
  allDone.style.display = "none";
  header.style.display = "none";
  highscores.style.display = "flex";

  var listItem = document.createElement("li");
  listItem.className = "delete";
  listItem.textContent = userInput.value;
  scoreList.appendChild(listItem);

  var listItem2 = document.createElement("li");
  listItem2.className = "delete";
  listItem2.textContent = scoreInt;
  pointList.appendChild(listItem2);

  userInput.value = "";
});

clearScoresBtn.addEventListener("click", function () {
  localStorage.clear();

  while (deleteItem.length > 0) {
    deleteItem[0].parentNode.removeChild(deleteItem[0]);
  }
});

goBackBtn.addEventListener("click", function () {
  header.style.display = "flex";
  homepage.style.display = "block";
  highscores.style.display = "none";
  scoreInt = 0;
});
