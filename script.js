let number1 = '0';
let number2 = null;
let operator = null;

function appendNumber(number) {
  if (operator === null) {
    number1 = number1 === '0' ? number : number1 + number;
    updateDisplay(number1);
  } else {
    number2 = number2 === null ? number : number2 + number;
    updateDisplay(number2);
  }
}

function setOperator(op) {
  if (number2 !== null) {
    calculate();
  }
  operator = op;
}

function calculate() {
  if (operator !== null && number2 !== null) {
    number1 = String(eval(number1 + operator + number2));
    updateDisplay(number1);
  }
  number2 = null;
  operator = null;
}

function clearCalculator() {
  number1 = '0';
  number2 = null;
  operator = null;
  updateDisplay(number1);
}

function updateDisplay(value) {
  document.getElementById('result').textContent = value;
}
