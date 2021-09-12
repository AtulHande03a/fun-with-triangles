const angleInput = document.querySelectorAll(".angle-input");
const angleInputBtn = document.getElementById("submit-angle-input");
const result = document.querySelector(".result");
const message = document.querySelector(".message");

const checkIfTriangle = () => {
  const angle1 = Number(angleInput[0].value);
  const angle2 = Number(angleInput[1].value);
  const angle3 = Number(angleInput[2].value);
  if (angle1 === 0 && angle2 === 0 && angle3 === 0) {
    showMessage("Please enter angles values.");
  } else {
    console.log("hey there");
  }
};

const showMessage = (msg) => {
  message.textContent = msg;
};

angleInputBtn.addEventListener("click", checkIfTriangle);
