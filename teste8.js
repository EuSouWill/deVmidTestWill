const historicoResultados = [];

function calcularValorFinal() {
  const capitalInicial = parseFloat(document.getElementById("capitalInicial").value);
  const taxaJuros = parseFloat(document.getElementById("taxaJuros").value);
  const tempoInvestimento = parseInt(document.getElementById("tempoInvestimento").value);
  const valorFinalElement = document.getElementById("valorFinal");
  const errorMsgElement = document.getElementById("erroMsg");

  // Validação de entrada
  if (isNaN(capitalInicial) || isNaN(taxaJuros) || isNaN(tempoInvestimento) || capitalInicial <= 0 || taxaJuros <= 0 || tempoInvestimento <= 0) {
    errorMsgElement.textContent = "Por favor, insira valores válidos para realizar o cálculo.";
    valorFinalElement.textContent = "";
  } else {
    const taxaPorcentagem = taxaJuros / 100;
    const valorFinal = capitalInicial * Math.pow(1 + taxaPorcentagem, tempoInvestimento);
    const lucro = valorFinal - capitalInicial;
    valorFinalElement.textContent = "R$ " + valorFinal.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); // Formatação em moeda
    errorMsgElement.textContent = "";

    // Adicionar o resultado ao histórico
    const resultadoFormatado = `Valor Final: R$ ${valorFinal.toFixed(2)}, Lucro: R$ ${lucro.toFixed(2)}`;
    historicoResultados.push(`Investimento de R$ ${capitalInicial}, Taxa de Juros: ${taxaJuros}%, Tempo: ${tempoInvestimento} meses - ${resultadoFormatado}`);
    exibirHistorico();
    limparFormulario();
  }
}

function limparFormulario() {
    document.getElementById("capitalInicial").value = "";
    document.getElementById("taxaJuros").value = "";
    document.getElementById("tempoInvestimento").value = "";
    document.getElementById("valorFinal").textContent = "";
    document.getElementById("erroMsg").textContent = "";
    document.getElementById("capitalInicial").focus();
  }

function exibirHistorico() {
  const historicoElement = document.getElementById("historico");
  historicoElement.innerHTML = "";
  historicoResultados.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.className = "list-group-item historico-item";
    listItem.textContent = item;
    historicoElement.appendChild(listItem);
  });
}

// Evento para calcular ao pressionar Enter
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    calcularValorFinal();
  }
});

// Exibir histórico na inicialização
exibirHistorico();
