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
  // Remover destaque de todos os botões e adicionar destaque apenas ao botão pressionado
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach((button) => {
    button.classList.remove('highlight');
  });
  const pressedButton = document.querySelector(`button[value="${number}"]`);
  pressedButton.classList.add('highlight');
}

function setOperator(op) {
  if (number2 !== null) {
    calculate();
  }
  operator = op;
  updateDisplay(number1 + ' ' + operator);
  // Remover destaque de todos os botões e adicionar destaque apenas ao botão pressionado
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach((button) => {
    button.classList.remove('highlight');
  });
  const pressedButton = document.querySelector(`button[value="${op}"]`);
  pressedButton.classList.add('highlight');
}

function calculate() {
  if (operator !== null && number2 !== null) {
    number1 = String(eval(number1 + operator + number2));
    updateDisplayLarge(number1); // Usamos a função com a fonte maior
  }
  number2 = null;
  operator = null;
}

function clearCalculator() {
  number1 = '0';
  number2 = null;
  operator = null;
  updateDisplay(number1);
  // Remover destaque de todos os botões
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach((button) => {
    button.classList.remove('highlight');
  });
}

function updateDisplay(value) {
  const resultElement = document.getElementById('result');
  resultElement.textContent = value;
}

function updateDisplayLarge(value) {
  const resultElement = document.getElementById('result');
  resultElement.textContent = value;
  resultElement.classList.add('result-large'); // Adicionamos a classe result-large para ter uma fonte maior
}
