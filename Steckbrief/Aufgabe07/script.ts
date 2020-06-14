var allSounds =  ["taskmaterial/A.mp3", "taskmaterial/C.mp3", "taskmaterial/F.mp3","taskmaterial/G.mp3", "taskmaterial/hihat.mp3", "taskmaterial/kick.mp3", "taskmaterial/laugh-1.mp3","taskmaterial/laugh-2.mp3", "taskmaterial/snare.mp3"];
      /*7.2*/
      var kick = new Audio ("taskmaterial/kick.mp3");
      var hihat = new Audio ("taskmaterial/hihat.mp3");
      var snare = new Audio ("taskmaterial/snare.mp3");


window.addEventListener("load", function() {
      
document.querySelector(".pad1")?.addEventListener("click", function() {playSample(0);});
document.querySelector(".pad2")?.addEventListener("click", function() {playSample(1);});
document.querySelector(".pad3").addEventListener("click", function() {playSample(2);});
document.querySelector(".pad4").addEventListener("click", function() {playSample(3);});
document.querySelector(".pad5").addEventListener("click", function() {playSample(4);});
document.querySelector(".pad6").addEventListener("click", function() {playSample(5);});
document.querySelector(".pad7").addEventListener("click", function() {playSample(6);});
document.querySelector(".pad8").addEventListener("click", function() {playSample(7);});
document.querySelector(".pad9").addEventListener("click", function() {playSample(8);});
/*7.2 */document.querySelector(".play").addEventListener("click", function() {teilZwei();});



function playSample(Button_Nummer) {
    var sound:HTMLAudioElement = new Audio(allSounds[Button_Nummer]);
    sound.play();
  }

/*7.2*/ //Fiona hat mir geholfen->>
function teilZwei() {
    setInterval(function() {
      kick.play();
  }, 600);

  setInterval(function() {
    snare.play();
}, 600);

setInterval(function() {
  hihat.play();
}, 900);
} 
