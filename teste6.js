document.getElementById("countButton").addEventListener("click", function() {
    countVowelsAndUpdateResult();
  });
  
  document.getElementById("inputText").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      countVowelsAndUpdateResult();
    }
  });
  
  function countVowelsAndUpdateResult() {
    const inputText = document.getElementById("inputText").value;
    const vowelCount = countVowels(inputText);
    document.getElementById("result").innerText = `A frase possui ${vowelCount} vogais.`;
  
    // Salva a frase no histórico
    addToHistory(inputText);
  
    // Limpa o campo de entrada
    document.getElementById("inputText").value = "";
  }
  
  function countVowels(text) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of text) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  }
  
  function addToHistory(text) {
    // Recupera o histórico atual do localStorage (se existir)
    let history = localStorage.getItem("frases") ? JSON.parse(localStorage.getItem("frases")) : [];
  
    // Adiciona a nova frase ao histórico
    history.push(text);
  
    // Limita o histórico para exibir apenas os últimos 5 itens (opcional)
    if (history.length > 5) {
      history = history.slice(history.length - 5);
    }
  
    // Atualiza o localStorage com o novo histórico
    localStorage.setItem("frases", JSON.stringify(history));
  
    // Exibe o histórico na página
    const historyList = document.getElementById("historyList");
    historyList.innerHTML = "";
    for (let i = history.length - 1; i >= 0; i--) {
      const listItem = document.createElement("li");
      const vowelHighlightedText = highlightVowels(history[i]);
      const vowelCount = countVowels(history[i]);
      listItem.innerHTML = `${vowelHighlightedText}<span class="vowel-count">(${vowelCount} vogais)</span>`;
      historyList.appendChild(listItem);
    }
  }
  
  function highlightVowels(text) {
    const vowels = "aeiouAEIOU";
    let highlightedText = "";
    for (let char of text) {
      if (vowels.includes(char)) {
        highlightedText += `<span class="vowel">${char}</span>`;
      } else {
        highlightedText += char;
      }
    }
    return highlightedText;
  }
  
  // Carrega o histórico ao carregar a página
  window.addEventListener("load", function() {
    const history = localStorage.getItem("frases") ? JSON.parse(localStorage.getItem("frases")) : [];
    const historyList = document.getElementById("historyList");
    for (let i = history.length - 1; i >= 0; i--) {
      const listItem = document.createElement("li");
      const vowelHighlightedText = highlightVowels(history[i]);
      const vowelCount = countVowels(history[i]);
      listItem.innerHTML = `${vowelHighlightedText}<span class="vowel-count">(${vowelCount} vogais)</span>`;
      historyList.appendChild(listItem);
    }
  });
  