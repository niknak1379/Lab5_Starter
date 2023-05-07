// explore.js

window.addEventListener('DOMContentLoaded', init);
var voiceSelect;
function init() {
  // TODO
    const synth = window.speechSynthesis;
    voiceSelect = document.getElementById('voice-select');
    populateVoiceList();
}

function populateVoiceList() {
    let voices = [];
    voices = synth.getVoices();
    console.log(voices);
    console.log('hi');
    for (let i = 0; i < voices.length; i++) {
        const option = document.createElement("option");
        option.textContent = `${voices[i].name} (${voices[i].lang})`;

        if (voices[i].default) {
            option.textContent += " — DEFAULT";
        }

        option.setAttribute("data-lang", voices[i].lang);
        option.setAttribute("data-name", voices[i].name);
        voiceSelect.appendChild(option);
    }
}