            //var allSounds:string[] =  ["taskmaterial/A.mp3", "taskmaterial/C.mp3", "taskmaterial/F.mp3","taskmaterial/G.mp3", "taskmaterial/hihat.mp3", "taskmaterial/kick.mp3", "taskmaterial/laugh-1.mp3","taskmaterial/laugh-2.mp3", "taskmaterial/snare.mp3"];

window.addEventListener("load", function() {
            //audios direkt ins playsample stecken.
document.querySelector(".pad1")?.addEventListener("click", function() {playSample("taskmaterial/A.mp3");});
document.querySelector(".pad2")?.addEventListener("click", function() {playSample("taskmaterial/C.mp3");});
document.querySelector(".pad3").addEventListener("click", function() {playSample("taskmaterial/F.mp3");});
document.querySelector(".pad4").addEventListener("click", function() {playSample("taskmaterial/G.mp3");});
document.querySelector(".pad5").addEventListener("click", function() {playSample("taskmaterial/hihat.mp3");});
document.querySelector(".pad6").addEventListener("click", function() {playSample( "taskmaterial/kick.mp3");});
document.querySelector(".pad7").addEventListener("click", function() {playSample("taskmaterial/laugh-1.mp3");});
document.querySelector(".pad8").addEventListener("click", function() {playSample("taskmaterial/laugh-2.mp3");});
document.querySelector(".pad9").addEventListener("click", function() {playSample("taskmaterial/snare.mp3");});
        document.querySelector("#play").addEventListener("click", playandstop);
        document.querySelector("#delete").addEventListener("click",deletebeat);
        document.querySelector("#record").addEventListener("click", recordbeat);


            //vordefinieren
let beatIntervalId: number = undefined;

let definedsounds:string[] =  ["taskmaterial/kick.mp3","taskmaterial/snare.mp3","taskmaterial/hihat.mp3"];

let record: boolean = false;
            
            //für Play&Stop - Button und Sounds wechseln
 function playandstop():void{
     let playstop = document.querySelector("#play");
     if (playstop.className == "fas fa-play") {
         playstop.className = "fas fa-stop";
         playbeat();
     } else {
         playstop.className = "fas fa-play";
         clearInterval(beatIntervalId);
     }
 }
            //Intervall für den Beat bestimmen
function playbeat () {
    var index: number = 0;
    beatIntervalId = setInterval(function() {
        playSample(definedsounds[index]);
        index += 1;
        if (index >= definedsounds.length) {
            index=0;
        }
    }, 400);
}

            //Beat löschen
function deletebeat() {
    definedsounds = [];
}

            //Den Beat aufnehmen (Bedingung & playsamples abspielen)
function recordbeat():void {
    if(record) {
      record = false;
    }
    else {
      record=true;
    }
  }
function playSample (audios:string): void{
    if (record) {
        definedsounds.push(audios);
    }
    const sound: HTMLAudioElement = new Audio(audios);
        sound.play();
}

/* Habe alles gelöscht und den code neu zusammen gebastelt, weil ich nicht mehr durchgeblickt habe. Orientiert an/ Insperiert von Fiona & Nadine */