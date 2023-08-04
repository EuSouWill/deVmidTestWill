// Variável para armazenar o histórico de palavras
let wordHistory = [];

// Recuperar o histórico de palavras do LocalStorage, se existir
if (localStorage.getItem('wordHistory')) {
  wordHistory = JSON.parse(localStorage.getItem('wordHistory'));
  displayHistory(); // Exibir o histórico ao carregar a página
}

// Função para adicionar palavras ao histórico
function addToHistory(word) {
  wordHistory.push(word);
  localStorage.setItem('wordHistory', JSON.stringify(wordHistory));
  displayHistory(); // Exibir o histórico atualizado
}

// Função para exibir o histórico de palavras na página
function displayHistory() {
  const historyElement = document.getElementById('history');
  historyElement.innerHTML = '<h2>Historic of Typed Words:</h2>';
  wordHistory.forEach((word, index) => {
    const isPalindrome = checkPalindrome(word);
    const palindromoClass = isPalindrome ? 'text-success' : 'text-danger';
    historyElement.innerHTML += `<p class="${palindromoClass}">${index + 1}. ${word}</p>`;
  });
}

// Função para verificar se uma palavra é um palíndromo
function checkPalindrome(word) {
  const reversedWord = word.split('').reverse().join('');
  return word === reversedWord;
}

// Evento de clique do botão "Verificar"
document.getElementById('palindrome-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const wordInput = document.getElementById('word');
  const resultElement = document.getElementById('result');

  const word = wordInput.value.toLowerCase().replace(/[^a-z]/g, ''); // Remover caracteres especiais e converter para minúsculas

  const isPalindrome = checkPalindrome(word);

  if (isPalindrome) {
    resultElement.innerHTML = `<p class="text-success">The word "${word}" is a palindrome!</p>`;
  } else {
    resultElement.innerHTML = `<p class="text-danger">The word "${word}" it's not a palindrome.</p>`;
  }

  addToHistory(word); // Adicionar a palavra ao histórico
  wordInput.value = ''; // Limpar o campo de entrada após verificar
});

  // função goBack para retornar a página anterior
  function goBack() {
    window.history.back();
  }