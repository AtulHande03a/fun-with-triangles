const quizForm = document.getElementById("quiz-form");
const quizSubmitBtn = document.querySelector("#submit-btn");
const outputText = document.querySelector(".output-text");

const answer = ["yes", "no", "5", "scalene", "isosceles"];

const calculateScore = () => {
  let score = 0;
  let index = 0;

  const formResult = new FormData(quizForm);
  for (let value of formResult.values()) {
    if (value === answer[index]) {
      score++;
    }
    index++;
  }
  console.log(score);
  showResult(score);
};

const showResult = (score) => {
  outputText.textContent = `Score : ${score}/5`;
  outputText.style.display = "block";
};

quizSubmitBtn.addEventListener("click", calculateScore);
