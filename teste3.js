function calculateFactorial() {
    const numberInput = document.getElementById("numberInput");
    const resultElement = document.getElementById("result");
  
    const number = parseInt(numberInput.value);
    if (isNaN(number)) {
      resultElement.textContent = "Por favor, digite um número válido.";
    } else {
      resultElement.textContent = `O fatorial de ${number} é: ${factorial(number)}`;
    }
  }
  
  function factorial(num) {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * factorial(num - 1);
    }
  }
  