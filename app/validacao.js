function verificaChuteIsValid(chute){
    const numero = +chute; //verifica se é numero

    if(chuteForInvalido(numero)){
        elementChute.innerHTML += '<div>Inválido</div>';
        return;
    }
    if(numBigorSmalThanAllow(numero)){
        elementChute.innerHTML += `<div>Inválido, number need to be between ${maiorValor} and ${menorValor}</div>`;
        return;
    }
    if(numero === secretNumber){
        document.body.innerHTML = `
            <h2>You guess right the Secret Number! :)</h2>
            <h3>The Secret Number was ${secretNumber}</h3>
            <button id="play-again" class="btn-jogar">Play Again</button>
        `;
    }
    else if(numero > secretNumber){
        elementChute.innerHTML += `<div>The secret number is smaller <i class="fa-solid fa-arrow-down-long"></i>.</div>`;
    }
    else{
        elementChute.innerHTML += `<div>The secret number is bigger <i class="fa-solid fa-arrow-up-long"></i>.</div>`;
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}
function numBigorSmalThanAllow(numero){
   return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'play-again'){
        window.location.reload();
    }
})