const elementChute = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e){
    const chute = e.results[0][0].transcript;
    showChute(chute);
    verificaChuteIsValid(chute);
}

function showChute(chute){
    elementChute.innerHTML = `
    <div>You said:</div>
    <span class="box">${chute}</span>
    `;
}
recognition.addEventListener('end', () => recognition.start())