let firstNumber = "";
let secondNumber = "";
let operator = null;
let isResultDisplayed = false;
function logState() {
  console.log("State:", {
    firstNumber,
    operator,
    secondNumber,
  });
}
function logAction(action) {
  console.log(action);
  logState();
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
      if (num2 === 0) {
        return "Error";
      } else {
        return divide(num1, num2);
      }

    default:
      return null;
  }
};

const buttonSelector = document.querySelector("#buttons");
const display = document.querySelector("#display");
buttonSelector.addEventListener("click", (e) => {
  const target = e.target;
  if (!target.matches("button")) return;
  console.log("Clicked:", target.textContent);
  if (target.classList.contains("number")) {
    const value = target.dataset.value;
    if (isResultDisplayed) {
      firstNumber = value === "." ? "0." : value;
      operator = null;
      secondNumber = "";
      isResultDisplayed = false;
      display.textContent = firstNumber;
      return;
    }
    if (value === ".") {
      if (operator === null && firstNumber.includes(".")) return;
      if (operator !== null && secondNumber.includes(".")) return;
      if (operator === null && firstNumber === "") {
        firstNumber = "0.";
        display.textContent = firstNumber;
        return;
      }
      if (operator !== null && secondNumber === "") {
        secondNumber = "0.";
        display.textContent = secondNumber;
        return;
      }
      if (operator === null) {
        firstNumber += ".";
        display.textContent = firstNumber;
        logState();
      } else {
        secondNumber += ".";
        display.textContent = secondNumber;
        logState();
      }
      return;
    } else if (operator === null) {
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
    if (firstNumber === "") {
      return;
    } else if (operator === null) {
      operator = target.dataset.value;
      console.log("Operator set:", operator);
    } else if (secondNumber === "") {
      operator = target.dataset.value;
      console.log("Operator set:", operator);
    } else {
      const result = operate(operator, firstNumber, secondNumber);
      display.textContent = result;
      firstNumber = result.toString();
      operator = target.dataset.value;
      secondNumber = "";
      logState();
    }
  } else if (target.classList.contains("equals")) {
    if (firstNumber === "" || secondNumber === "" || operator === null) {
      return;
    } else {
      let result = operate(operator, firstNumber, secondNumber);

      if (result === "Error") {
        display.textContent = "Error";
        firstNumber = "";
        operator = null;
        secondNumber = "";
        isResultDisplayed = true;
        return;
      }
      result = Number(result.toFixed(5));
      display.textContent = result;
      firstNumber = result.toString();
      operator = null;
      secondNumber = "";
      isResultDisplayed = true;
      logState();
    }
  } else if (target.classList.contains("clear")) {
    firstNumber = "";
    operator = null;
    secondNumber = "";
    display.textContent = "0";
    logAction("Calculator cleared");
  } else if (target.classList.contains("delete")) {
    if (operator === null) {
      firstNumber = firstNumber.slice(0, -1);
      logAction("Character deleted");
      if (firstNumber === "") {
        display.textContent = "0";
      } else {
        display.textContent = firstNumber;
      }
    } else if (secondNumber !== "") {
      secondNumber = secondNumber.slice(0, -1);
      logAction("Character deleted");
      if (secondNumber === "") {
        operator = null;
        display.textContent = firstNumber;
      } else {
        display.textContent = secondNumber;
      }
    } else {
      operator = null;
      display.textContent = firstNumber;
      logState();
    }
  }
});
