function makeSound(key) {
    var sound;
    switch (key) {
        case "w":
            sound = new Audio('./sounds/tom-1.mp3');
            break;
        case "a":
            sound = new Audio('./sounds/tom-2.mp3');
            break;
        case "s":
            sound = new Audio('./sounds/tom-3.mp3');
            break;
        case "d":
            sound = new Audio('./sounds/tom-4.mp3');
            break;
        case "j":
            sound = new Audio('./sounds/snare.mp3');
            break;
        case "k":
            sound = new Audio('./sounds/crash.mp3');
            break;
        case "l":
            sound = new Audio('./sounds/kick-bass.mp3');
            break;
    }
        
    sound.play();
    console.log("you pressed " + key);
}

function buttonPressed(current) {
    var active = document.querySelector("." + current);
    active.classList.add("pressed");
    setTimeout(function() {
        active.classList.remove("pressed");
    }, 100);
}

var drums = document.querySelectorAll(".drum");
var drumsTotal = drums.length;
for (var i = 0; i < drumsTotal; i++) {
    drums[i].addEventListener("click", function () {
        var keyPressed = this.innerHTML;
        makeSound(keyPressed);
        buttonPressed(keyPressed);
    });
}

document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonPressed(event.key);
});
