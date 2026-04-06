let firstNumber = "";
let secondNumber = "";
let operator = null;
function logState() {
  console.log("State:", {
    firstNumber,
    operator,
    secondNumber,
  });
}
const add = function (firstNumber, secondNumber) {
  return firstNumber + secondNumber;
};

const subtract = function (firstNumber, secondNumber) {
  return firstNumber - secondNumber;
};

const multiply = function (firstNumber, secondNumber) {
  return firstNumber * secondNumber;
};

const divide = function (firstNumber, secondNumber) {
  return firstNumber / secondNumber;
};

const operate = function (operator, firstNumber, secondNumber) {
  let num1 = Number(firstNumber);
  let num2 = Number(secondNumber);
  switch (operator) {
    case "+":
      return add(num1, num2);

    case "-":
      return subtract(num1, num2);

    case "*":
      return multiply(num1, num2);

    case "/":
      return divide(num1, num2);

    default:
      return null;
  }
};

const buttonSelector = document.querySelector("#buttons");
const display = document.querySelector("#display");
buttonSelector.addEventListener("click", (e) => {
  const target = e.target;
  console.log("Clicked:", target.textContent);
  if (target.classList.contains("number")) {
    const value = target.dataset.value;
    if (operator === null) {
      firstNumber += value;
      console.log("Number pressed:");
      logState();
      display.textContent = firstNumber;
    } else {
      secondNumber += value;
      console.log("Number pressed:");
      logState();
      display.textContent = secondNumber;
    }
  } else if (target.classList.contains("operator")) {
    if (firstNumber === "") return;
    operator = target.dataset.value;
    console.log("Operator set:", operator);
  }
});
