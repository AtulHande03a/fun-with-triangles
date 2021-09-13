const base = document.querySelector(".base");
const height = document.querySelector(".height");
const calculateBtn = document.querySelector("#calculate");
const message = document.querySelector(".message");

const checkIfArea = () => {
  const baseValue = Number(base.value);
  const heightValue = Number(height.value);

  if (baseValue === 0 && heightValue === 0) {
    console.log("empty");
    showMessage("Please enter base & height values.");
  } else if (Math.sign(baseValue) === -1 || Math.sign(heightValue) === -1) {
    console.log("enter positive values");
    showMessage("Please enter positive base & height values.");
  } else if (baseValue === 0 || heightValue === 0) {
    console.log("one negative");
    showMessage("Please enter positive values.");
  } else {
    const areaNumber = calculateArea(baseValue, heightValue);
    showMessage(`The area of 📐 is ${areaNumber} cm.`);
  }
};
const calculateArea = (baseValue, heightValue) => {
  const areaValue = 0.5 * (baseValue * heightValue);
  return areaValue.toFixed(2);
};

const showMessage = (msg) => {
  message.style.display = "block";
  message.textContent = msg;
};

calculateBtn.addEventListener("click", checkIfArea);
