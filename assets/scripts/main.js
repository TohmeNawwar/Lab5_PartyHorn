// main.js

// TODO
var audio = document.getElementById("horn-sound");
var slider = document.getElementById("volume-slider");
var number = document.getElementById("volume-number");
var image = document.getElementById("volume-image");
var sound = document.getElementById("horn-sound");
var sound_image = document.getElementById("sound-image");
var sound_select = document.getElementById("audio-selection");
var air_horn = document.getElementById("radio-air-horn");
var car_horn = document.getElementById("radio-car-horn");
var button = document.getElementById("honk-btn");

button.type = "button";

slider.addEventListener("change", function(){
    number.value = slider.value; 
    audio.volume = number.value/100;
    if(number.value == 0){
        image.src = "./assets/media/icons/volume-level-0.svg";
        button.disabled = true;
    }
    else if(number.value <= 33){
        image.src = "./assets/media/icons/volume-level-1.svg";
        button.disabled = false;
    }
    else if(number.value <= 66){
        image.src = "./assets/media/icons/volume-level-2.svg";
        button.disabled = false;
    }
    else{
        image.src = "./assets/media/icons/volume-level-3.svg";
        button.disabled = false;
    }
});

number.addEventListener("change", function(){
    slider.value = number.value; 
    audio.volume = slider.value/100;
    if(number.value == 0){
        image.src = "./assets/media/icons/volume-level-0.svg";
        button.disabled = true;
    }
    else if(number.value <= 33){
        image.src = "./assets/media/icons/volume-level-1.svg";
        button.disabled = false;
    }
    else if(number.value <= 66){
        image.src = "./assets/media/icons/volume-level-2.svg";
        button.disabled = false;
    }
    else{
        image.src = "./assets/media/icons/volume-level-3.svg";
        button.disabled = false;
    }
});

sound_select.addEventListener("change", function(){
    if(air_horn.checked){
        sound.src = "./assets/media/audio/air-horn.mp3";
        sound_image.src = "./assets/media/images/air-horn.svg";
    }
    else if(car_horn.checked){
        sound.src = "./assets/media/audio/car-horn.mp3";
        sound_image.src = "./assets/media/images/car.svg";
    }
    else{
        sound.src = "./assets/media/audio/party-horn.mp3";
        sound_image.src = "./assets/media/images/party-horn.svg";
    }
});

button.addEventListener("click", function(){
    audio.play();
});


