// explore.js

window.addEventListener('DOMContentLoaded', init);
var voiceSelect;
const synth = window.speechSynthesis;
var button;
var voices = [];
function init() {
  // TODO
    voiceSelect = document.getElementById('voice-select');
    button = document.querySelector('button');
    setTimeout(populateVoiceList, 100);
    button.addEventListener('click', talk);

}

function populateVoiceList() {
    voices = synth.getVoices();
    console.log(voices);
    for (let i = 0; i < voices.length; i++) {
        const option = document.createElement("option");
        option.textContent = `${voices[i].name} (${voices[i].lang})`;


        option.setAttribute("data-lang", voices[i].lang);
        option.setAttribute("data-name", voices[i].name);
        voiceSelect.appendChild(option);
    }
}



function talk() {
    let inputText = document.getElementById('text-to-speak');
    const textSpeech = new SpeechSynthesisUtterance(inputText.value);
    let option = voiceSelect.options[voiceSelect.selectedIndex];
    console.log(option);
    let selectedVoice = option.getAttribute('data-name');
    for (let i = 0; i < voices.length; i++) {
        if (voices[i].name === selectedVoice) {
            textSpeech.voice = voices[i];
        }
    }

    console.log(synth.speaking);
    synth.speak(textSpeech);
    console.log(synth.speaking);
    let smileImg = document.querySelector('img');

    const interval = setInterval(() => {
        if (synth.speaking == true) {
            smileImg.src = 'assets/images/smiling-open.png';
            console.log('hi');
        }
        else {
            smileImg.src = "assets/images/smiling.png";
            console.log('close');
            clearInterval(interval);
        }
    }, 10);
}

