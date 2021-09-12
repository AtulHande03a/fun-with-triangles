const angleInput = document.querySelectorAll(".angle-input");
const angleInputBtn = document.getElementById("submit-angle-input");

const message = document.querySelector(".message");

const checkIfTriangle = () => {
  //convert string to number
  const angle1 = Number(angleInput[0].value);
  const angle2 = Number(angleInput[1].value);
  const angle3 = Number(angleInput[2].value);

  //check conditions to filter and show prompt messages
  if (angle1 === 0 && angle2 === 0 && angle3 === 0) {
    showMessage("Please enter all angles value.");
  } else if (
    Math.sign(angle1) === -1 ||
    Math.sign(angle1) === -1 ||
    Math.sign(angle3) === -1
  ) {
    showMessage("Please enter positive angle values.");
  } else if (angle1 === 0 || angle2 === 0 || angle3 === 0) {
    showMessage("Please enter  angles value.");
  } else {
    isTriangle(angle1, angle2, angle3);
  }
};

const isTriangle = (angle1, angle2, angle3) => {
  if (calculateAngleSum(angle1, angle2, angle3)) {
    showMessage("✔ Yes, these angles form a triangle.✔");
  } else {
    showMessage("❌ No, these angles don't form a triangle.❌");
  }
};

//add angles and return true or false
const calculateAngleSum = (angle1, angle2, angle3) => {
  const angleSum = angle1 + angle2 + angle3;
  return angleSum === 180;
};

const showMessage = (msg) => {
  message.style.display = "block";
  message.textContent = msg;
};

angleInputBtn.addEventListener("click", checkIfTriangle);
