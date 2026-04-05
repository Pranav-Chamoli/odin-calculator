let firstNumber = "";
let secondNumber = "";
let operator = null;
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
  if (target.classList.contains("number")) {
    const value = target.dataset.value;
    firstNumber += value;
    display.textContent = firstNumber;
  }
});
