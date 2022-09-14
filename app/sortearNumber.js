const menorValor = 1;
const maiorValor = 100;
const secretNumber = gerarAleatoryNumber();

console.log(secretNumber);

function gerarAleatoryNumber(){
    return parseInt(Math.random() * maiorValor +1);
}

const elementoMenorValue = document.getElementById('menor-valor');
elementoMenorValue.innerHTML = menorValor;

const elementoMaiorValue = document.getElementById('maior-valor');
elementoMaiorValue.innerHTML = maiorValor;