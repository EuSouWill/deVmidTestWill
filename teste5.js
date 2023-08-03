function calculateTabuada() {
    const numberInput = document.getElementById('numberInput');
    const tableBody = document.getElementById('tableBody');
    const number = parseInt(numberInput.value);

    // Limpar tabela antes de calcular a nova tabuada
    tableBody.innerHTML = '';

    // Criar as linhas da tabela com a tabuada
    for (let i = 1; i <= 10; i++) {
        const result = number * i;
        const row = document.createElement('tr');
        const numberCell = document.createElement('td');
        const resultCell = document.createElement('td');

        numberCell.textContent = `${number} x ${i}`;
        resultCell.textContent = result;

        row.appendChild(numberCell);
        row.appendChild(resultCell);

        tableBody.appendChild(row);
    }

    // Limpar campo de entrada após calcular a tabuada
    numberInput.value = '';
}

document.getElementById('calculateBtn').addEventListener('click', calculateTabuada);

document.getElementById('clearBtn').addEventListener('click', function () {
    // Limpar tabela e campo de entrada ao clicar no botão "Limpar"
    const tableBody = document.getElementById('tableBody');
    const numberInput = document.getElementById('numberInput');
    tableBody.innerHTML = '';
    numberInput.value = '';
});

document.getElementById('numberInput').addEventListener('keyup', function(event) {
    // Se a tecla pressionada for "Enter" (código 13)
    if (event.keyCode === 13) {
        calculateTabuada();
    }
});
