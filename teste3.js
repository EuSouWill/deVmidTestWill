
const numberInput = document.getElementById("numberInput");
numberInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    calculateFactorial();
  }
});

function calculateFactorial() {
  const numberInput = document.getElementById("numberInput");
  const resultElement = document.getElementById("result");

  const number = parseInt(numberInput.value);
  if (isNaN(number)) {
    resultElement.textContent = "Please enter a valid number.";
  } else {
    const result = factorial(number);
    resultElement.textContent = `The factorial of ${number} is: ${result}`;
  }

  // Limpar o campo de entrada e definir o foco novamente
  numberInput.value = "";
  numberInput.focus();
}

function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

  // função goBack para retornar a página anterior
  function goBack() {
    window.history.back();
  }