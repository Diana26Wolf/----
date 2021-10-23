x = 0;
y = 0;
music = "";
to_number= ""
var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    document.getElementById("status").innerHTML = "Speak Now"
    recognition.start()
}

recognition.onresult = function (event) {

    console.log(event);

    content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "I heard you say: " + content;

}
to_number= Number(content)
if(Number.isInteger(to_number)){
    document.getElementById("status").innerHTML = "The music symbol is being presented to you";
    music="set"; 
}
    else{
        document.getElementById("status").innerHTML = "I did not recognize a number";
    }
function preload(){
   music= loadImage("Music.png")
}

function setup() {
    canvas = createCanvas(700, 430)
}

function draw() {
    if (music == "set") {
        document.getElementById("status").innerHTML = to_number + " Music Symbols have presented";
        music = ""
    }
}