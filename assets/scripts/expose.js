// expose.js

window.addEventListener('DOMContentLoaded', init);
var audioTag;
var volInput;
var hornType;
var hornImg;
var soundButton;
var volImg;

const jsConfetti = new JSConfetti();

function init() {

    audioTag = document.querySelector('audio');
    volInput = document.getElementById("volume");
    hornType = document.getElementById("horn-select");
    hornImg = document.querySelector('img');
    soundButton = document.querySelector('button');
    volImg = document.querySelector('div img');

    hornType.addEventListener("change", hornChanger);
    soundButton.addEventListener('click', playSound);
    volInput.addEventListener('change', imgChanger);

}

function hornChanger() {
    switch (hornType.value) {
        case "air-horn":
            audioTag.src = 'assets/audio/air-horn.mp3';
            hornImg.src = 'assets/images/air-horn.svg';
            break;
        case "car-horn":
            audioTag.src = 'assets/audio/car-horn.mp3';
            hornImg.src = 'assets/images/car-horn.svg';
            break;
        case "party-horn":
            audioTag.src = 'assets/audio/party-horn.mp3';
            hornImg.src = 'assets/images/party-horn.svg';
            break;
        // add as many cases as needed
        default:
    }
}

function playSound() {
    audioTag.volume = (volInput.value)/100;
    console.log(volInput.value);
    audioTag.play();
    jsConfetti.addConfetti();
}

function imgChanger() {
    if ( volInput.value == 0 ) {
        volImg.src = 'assets/icons/volume-level-0.svg';
    }
    else if (volInput.value < 33) {
        volImg.src = 'assets/icons/volume-level-1.svg';
    }
    else if ( volInput.value < 67 ) {
        volImg.src = 'assets/icons/volume-level-2.svg';
    }
    else {
        volImg.src = 'assets/icons/volume-level-3.svg';
    }
}