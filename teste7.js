
document.getElementById('calcularBtn').addEventListener('click', calcularMedia);

// Adicionando o evento de teclado para o botão "Calcular Média"
document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    calcularMedia();
  }
});

function calcularMedia() {
  const nota1 = parseFloat(document.getElementById('nota1').value);
  const nota2 = parseFloat(document.getElementById('nota2').value);
  const nota3 = parseFloat(document.getElementById('nota3').value);

  if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
    alert('Please enter valid numerical values for grades.');
    return;
  }

  if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10) {
    alert('The notes must be between 0 e 10.');
    return;
  }

  const media = (nota1 + nota2 + nota3) / 3;
  const historicoMedias = document.getElementById('historicoMedias');
  const listItem = document.createElement('li');
  listItem.innerText = `Average: ${media.toFixed(2)}`;
  if (media < 5) {
    listItem.classList.add('reprovado');
  }
else{
    listItem.classList.add('aprovado');
}
  historicoMedias.appendChild(listItem);

  document.getElementById('mediaResult').innerText = `The average is: ${media.toFixed(2)}`;
  limparCampos();
}

function limparCampos() {
  document.getElementById('nota1').value = '';
  document.getElementById('nota2').value = '';
  document.getElementById('nota3').value = '';
}

  // função goBack para retornar a página anterior
  function goBack() {
    window.history.back();
  }
