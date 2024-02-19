let somaidade = 0;
let mediaIdade = 0;
let maioridadehomem = 0;
let nomevelho = '';
let totmulher20 = 0;
let contadorPessoas = 0;

function adicionarPessoa() {
    contadorPessoas++;
    let nome = document.getElementById('nome').value.trim();
    let idade = parseInt(document.getElementById('idade').value);
    let sexo = document.getElementById('sexo').value;

    somaidade += idade;

    if (contadorPessoas === 1 && sexo === 'M') {
        maioridadehomem = idade;
        nomevelho = nome;
    }

    if (sexo === 'M' && idade > maioridadehomem) {
        maioridadehomem = idade;
        nomevelho = nome;
    }

    if (sexo === 'F' && idade < 20) {
        totmulher20++;
    }

    document.getElementById('nome').value = '';
    document.getElementById('idade').value = '';
}


function realizarAnalise() {
    if (contadorPessoas === 0) {
        alert("Adicione pelo menos uma pessoa para realizar a análise.");
        return;
    }

    mediaIdade = somaidade / contadorPessoas;
    document.getElementById('resultado').innerHTML = `
        <p>A média de idade do grupo: ${mediaIdade.toFixed(1)} anos.</p>
        <p>Idade do homem mais velho: ${maioridadehomem} anos e se chama ${nomevelho}.</p>
        <p>Mulheres com menos de 20 anos: ${totmulher20}</p>
    `;
    document.getElementById('resultado').style.display = 'block';
}
