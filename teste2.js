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
    resultDiv.innerHTML = 'Por favor, digite um número válido.';
    return;
  }

  const isNumberPrime = isPrime(numberToCheck);

  if (isNumberPrime) {
    resultDiv.innerHTML = `${numberToCheck} é um número primo.`;
  } else {
    resultDiv.innerHTML = `${numberToCheck} não é um número primo.`;
  }

  primesList.push(numberToCheck); // Adicionar o número verificado ao histórico
  numberToCheckInput.value = ''; // Limpar o campo após a verificação
  numberToCheckInput.focus(); // Dar foco novamente ao campo de verificação
}

function showHistory() {
  if (primesList.length === 0) {
    historyTableBody.innerHTML = '<tr><td>Nenhum número foi digitado ainda.</td></tr>';
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

// Verificar ao clicar no botão "Verificar"
checkBtn.addEventListener('click', checkNumberIsPrime);

// Exibir histórico ao pressionar Enter no botão "Histórico"
historyBtn.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    showHistory();
    event.preventDefault();
  }
});

// Exibir histórico ao clicar no botão "Histórico"
historyBtn.addEventListener('click', showHistory);
