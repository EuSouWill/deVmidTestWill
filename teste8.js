const historicoResultados = [];
const MAX_HISTORICO_LENGTH = 10; // Definir o limite máximo de itens no histórico

function calcularValorFinal() {
  // Obter os elementos do formulário
  const capitalInicialElement = document.getElementById("capitalInicial");
  const taxaJurosElement = document.getElementById("taxaJuros");
  const tempoInvestimentoElement = document.getElementById("tempoInvestimento");
  const valorFinalElement = document.getElementById("valorFinal");
  const errorMsgElement = document.getElementById("erroMsg");

  // Limpar erros anteriores
  errorMsgElement.textContent = "";
  valorFinalElement.textContent = "";

  // Obter os valores dos campos
  const capitalInicial = parseFloat(capitalInicialElement.value.replace(/\D/g, "")) / 100; // Formatado como moeda
  const taxaJuros = parseFloat(taxaJurosElement.value.replace(",", "."));
  const tempoInvestimento = parseInt(tempoInvestimentoElement.value);

  // Validação de entrada
  if (isNaN(capitalInicial) || capitalInicial <= 0) {
    mostrarErro(capitalInicialElement, "Enter a valid value for the starting capital.");
  } else if (isNaN(taxaJuros) || taxaJuros < 0 || taxaJuros > 100) {
    mostrarErro(taxaJurosElement, "Enter a valid interest rate between 0 e 100.");
  } else if (isNaN(tempoInvestimento) || tempoInvestimento <= 0) {
    mostrarErro(tempoInvestimentoElement, "Enter a valid investment time.");
  } else {
    // Cálculo do valor final e lucro
    const taxaPorcentagem = taxaJuros / 100;
    const valorFinal = capitalInicial * Math.pow(1 + taxaPorcentagem, tempoInvestimento);
    const lucro = valorFinal - capitalInicial;

    // Exibir o resultado
    valorFinalElement.textContent = "$ " + valorFinal.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); // Formatação em moeda

    // Adicionar o resultado ao histórico
    const resultadoFormatado = `Final value: $ ${valorFinal.toFixed(2)}, Profit: $ ${lucro.toFixed(2)}`;
    historicoResultados.push(`Investment of $ ${capitalInicial}--- Interest rate: ${taxaJuros}% --- Time: ${tempoInvestimento} Months --- ${resultadoFormatado}`);
    if (historicoResultados.length > MAX_HISTORICO_LENGTH) {
      historicoResultados.shift(); // Remover o item mais antigo do histórico se exceder o limite
    }
    exibirHistorico();
    limparFormulario();
  }
}

function mostrarErro(inputElement, mensagem) {
  inputElement.classList.add("erro");
  errorMsgElement.textContent = mensagem;
}

function limparFormulario() {
  // Limpar os campos do formulário e remover a classe de erro
  document.getElementById("capitalInicial").value = "";
  document.getElementById("taxaJuros").value = "";
  document.getElementById("tempoInvestimento").value = "";
  document.getElementById("capitalInicial").classList.remove("erro");
  document.getElementById("taxaJuros").classList.remove("erro");
  document.getElementById("tempoInvestimento").classList.remove("erro");
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

function formatarMoeda() {
  const input = document.getElementById("capitalInicial");
  const valor = input.value.replace(/\D/g, ""); // Remover todos os caracteres não numéricos
  const valorFormatado = (parseInt(valor) / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  input.value = valorFormatado;
}


// Evento para calcular ao pressionar Enter
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    calcularValorFinal();
  }
});

// Exibir histórico na inicialização
exibirHistorico();

  // função goBack para retornar a página anterior
  function goBack() {
    window.history.back();
  }