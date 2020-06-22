var allSounds:string[] =  ["taskmaterial/A.mp3", "taskmaterial/C.mp3", "taskmaterial/F.mp3","taskmaterial/G.mp3", "taskmaterial/hihat.mp3", "taskmaterial/kick.mp3", "taskmaterial/laugh-1.mp3","taskmaterial/laugh-2.mp3", "taskmaterial/snare.mp3"];


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
        document.querySelector("#play").addEventListener("click", function() {teilZwei();});
        document.querySelector("#delete").addEventListener("click", function() {mulleimer();});
        document.querySelector("#micro").addEventListener("click", function() {recordbeat();});



function playSample(Button_Nummer) {
    var sound:HTMLAudioElement = new Audio(allSounds[Button_Nummer]);
    sound.play();
  }

/*array für die drei sounds*/

/*Dass der Playbutton zum Stopbutton wird*/
function teilZwei(): void {
  var play = document.querySelector("#play");
  if (play.getAttribute("class") == "fas fa-play") {
      play.setAttribute("class", "fas fa-stop");
      startBeatbyPlay();
  } else {
      play!.setAttribute("class", "fas fa-play");
      stopBeatbyStop();
  }
/*Dass beim Playbutton auch der Beat abspielt*/

/*Ich weiß nicht, wo mein Fehler ist, dass die sounds nicht alle abgespielt werden.HELP*/ 
function startBeatbyPlay(){
  beatIntervalId = setInterval(function() {
    playSample(4); },500);
    playSample(5); },500);
    playSample(8); },400); 
}
  
/*Dass beim klick auf den Stopbutton der Beat angehalten wird*/
var beatIntervalId: number;

function stopBeatbyStop() {
  clearInterval(beatIntervalId);
}

/*Dass der Beat geleert wird*/
var definedsounds:string[] =  ["taskmaterial/hihat.mp3", "taskmaterial/kick.mp3","taskmaterial/snare.mp3"];
function mulleimer(){
  definedsounds = [];
  
 /* allSounds = [];*/
/*Dass der Beat aufgenommen wird*/
//inspiriert by Fiona
var recording: boolean = false;

function recordbeat() {
    
  if (recording == false) {
    recording = true;
      document.getElementById("#micro");
  } else {
    recording = false;
  }

}

function record() {
  var play = document.querySelector("#rec");
  if (play.getAttribute("id") == "micro") {
      play.setAttribute("id", "rec");
      recordbeat();
  } else {
      play!.setAttribute("id", "micro");
      stopBeatbyStop();
  }
}
