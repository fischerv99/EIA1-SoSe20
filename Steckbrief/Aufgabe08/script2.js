"use strict";
window.addEventListener("load", function () {
    document.querySelector("#pad1").addEventListener("click", function () { playsample("taskmaterial/A.mp3"); });
    document.querySelector("#pad2").addEventListener("click", function () { playsample("taskmaterial/C.mp3"); });
    document.querySelector("#pad3").addEventListener("click", function () { playsample("taskmaterial/F.mp3"); });
    document.querySelector("#pad4").addEventListener("click", function () { playsample("taskmaterial/G.mp3"); });
    document.querySelector("#pad5").addEventListener("click", function () { playsample("taskmaterial/hihat.mp3"); });
    document.querySelector("#pad6").addEventListener("click", function () { playsample("taskmaterial/kick.mp3"); });
    document.querySelector("#pad7").addEventListener("click", function () { playsample("taskmaterial/laugh-1.mp3"); });
    document.querySelector("#pad8").addEventListener("click", function () { playsample("taskmaterial/laugh-2.mp3"); });
    document.querySelector("#pad9").addEventListener("click", function () { playsample("taskmaterial/snare.mp3"); });
    document.querySelector("#play").addEventListener("click", playorstop);
    document.querySelector("#delete").addEventListener("click", deleteBeat);
    document.querySelector("#micro").addEventListener("click", recordBeat);
    //Aufgabe 7 und 8
    let beatIntervalId = undefined;
    let definedsounds = ["taskmaterial/kick.mp3", "taskmaterial/snare.mp3", "taskmaterial/hihat.mp3"];
    let recording = false;
    function recordBeat() {
        if (recording) {
            recording = false;
        }
        else {
            recording = true;
        }
    }
    function playsample(audios) {
        if (recording) {
            definedsounds.push(audios);
        }
        const sound = new Audio(audios);
        sound.play();
    }
    function playorstop() {
        let playorstopbtn = document.querySelector("#play");
        if (playorstopbtn.className == "fas fa-play") {
            playorstopbtn.className = "fas fa-stop";
            playbeat();
        }
        else {
            playorstopbtn.className = "fas fa-play";
            clearInterval(beatIntervalId);
        }
    }
    function deleteBeat() {
        definedsounds = [];
    }
    function playbeat() {
        var index = 0;
        beatIntervalId = setInterval(function () {
            playsample(definedsounds[index]);
            index += 1;
            if (index >= definedsounds.length) {
                index = 0;
            }
        }, 600);
    }
});
//# sourceMappingURL=script2.js.map