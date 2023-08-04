const primesList = [];
const numberToCheckInput = document.getElementById('numberToCheck');
const resultDiv = document.getElementById('result');
const historyTableBody = document.getElementById('historyTable').getElementsByTagName('tbody')[0];
const checkBtn = document.getElementById('checkBtn');
const historyBtn = document.getElementById('historyBtn');

function isPrime(number) {
  if (number <= 1) return false;
  if (number <= 3) return true;

  if (number % 2 === 0 || number % 3 === 0) return false;

  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) return false;
  }

  return true;
}

function checkNumberIsPrime() {
  const numberToCheck = parseInt(numberToCheckInput.value);

  if (isNaN(numberToCheck)) {
    resultDiv.innerHTML = 'Please enter a valid number.';
    return;
  }

  const isNumberPrime = isPrime(numberToCheck);

  if (isNumberPrime) {
    resultDiv.innerHTML = `${numberToCheck} is a prime number.`;
  } else {
    resultDiv.innerHTML = `${numberToCheck} 
    is not a prime number.`;
  }

  primesList.push(numberToCheck); // Adicionar o número verificado ao histórico
  numberToCheckInput.value = ''; // Limpar o campo após a verificação
  numberToCheckInput.focus(); // Dar foco novamente ao campo de verificação
}

function showHistory() {
  if (primesList.length === 0) {
    historyTableBody.innerHTML = '<tr><td>No number has been entered yet.</td></tr>';
  } else {
    historyTableBody.innerHTML = ''; // Limpar a tabela antes de exibir novamente

    for (const number of primesList) {
      const row = document.createElement('tr');
      const cell = document.createElement('td');
      cell.textContent = number;
      row.appendChild(cell);
      historyTableBody.appendChild(row);
    }
  }
}

// Verificar ao pressionar Enter no campo de verificação
numberToCheckInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    checkNumberIsPrime();
    event.preventDefault();
  }
});

// Verificar ao clicar no botão "check"
checkBtn.addEventListener('click', checkNumberIsPrime);

// Exibir histórico ao pressionar Enter no botão "Historic"
historyBtn.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    showHistory();
    event.preventDefault();
  }
});

// Exibir histórico ao clicar no botão "Historic"
historyBtn.addEventListener('click', showHistory);

  // função goBack para retornar a página anterior
  function goBack() {
    window.history.back();
  }