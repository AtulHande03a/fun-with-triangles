const base = document.querySelector(".base");
const height = document.querySelector(".height");
const calculateBtn = document.querySelector("#calculate");
const message = document.querySelector(".message");

const checkIfHypotenuse = () => {
  const baseValue = Number(base.value);
  const heightValue = Number(height.value);

  if (baseValue === 0 && heightValue === 0) {
    //console.log("empty");
    showMessage("Please enter base & height values.");
  } else if (Math.sign(baseValue) === -1 || Math.sign(heightValue) === -1) {
    //console.log("enter positive values");
    showMessage("Please enter positive base & height values.");
  } else if (baseValue === 0 || heightValue === 0) {
    //console.log("one negative");
    showMessage("Please enter positive values.");
  } else {
    const hypoLength = calculateHypotenuse(baseValue, heightValue);
    showMessage(`The hypotenuse value is ${hypoLength} cm.`);
  }
};
const calculateHypotenuse = (baseValue, heightValue) => {
  const hypotenuseValue = Math.sqrt(baseValue ** 2 + heightValue ** 2);
  return hypotenuseValue.toFixed(2);
};

const showMessage = (msg) => {
  message.style.display = "block";
  message.textContent = msg;
};

calculateBtn.addEventListener("click", checkIfHypotenuse);
