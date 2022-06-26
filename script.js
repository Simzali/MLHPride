var sequence = "";
var id = null;
var w = window.innerWidth;
var h = window.innerHeight;
 

function redClick() {    
    sequence = sequence + "r";
    addColor("red");
    updateDisplay();
    document.getElementById('red').play();
}

function blueClick() {
    sequence = sequence + "b";
    addColor("blue");
    updateDisplay();
    document.getElementById('blue').play();
}
function orangeClick() {
    sequence = sequence + "o";
    addColor("orange");
    updateDisplay();
    document.getElementById('orange').play();
}
function yellowClick() {
    sequence = sequence + "y";
    addColor("yellow");
    updateDisplay();
    document.getElementById('yellow').play();
}
function greenClick() {
    sequence = sequence + "g";
    addColor("green");
    updateDisplay();
    document.getElementById('green').play();
}
function purpleClick() {
    sequence = sequence + "P";
    addColor("purple");
    updateDisplay();
    document.getElementById('purple').play();

}
function blackClick() {
    sequence = sequence + "b";
   addColor("black");
    updateDisplay();
    document.getElementById('black').play();
}
function whiteClick() {
    sequence = sequence + "w";
    addColor("white");
    updateDisplay();
    document.getElementById('white').play();
}
function brownClick() {
    sequence = sequence + "b";
    addColor("brown");
    updateDisplay();
    document.getElementById('brown').play();

}
function browndarkClick() {
    sequence = sequence + "b";
    addColor("browndark");
    updateDisplay();
    document.getElementById('browndark').play();
}
function pinkClick() {
    sequence = sequence + "p";
    addColor("pink");
    updateDisplay();
    document.getElementById('pink').play();
}

function reset() {
    sequence ="";
    var elem = document.getElementById("colorContainer");
    elem.innerHTML = '';
    updateDisplay();
}

function addColor(cls) {
var elem;
var container_block;
 
elem = document.createElement( 'div' );
elem.style.height = "30px";
elem.style.width = "200px";
elem.className = cls; 
container_block = document.getElementById( 'colorContainer' );
container_block.appendChild( elem );
}

function updateDisplay() {
    //document.getElementById("sequence").innerHTML = sequence;
    if(sequence === "roygbP"){
      window.open("rainbowFlag.html","flagFrame");
    } else if(sequence==="bpwpb") {
      window.open("transgenderflag.html", "flagFrame");
    } else if(sequence==="ooowppp") {
      window.open("lesbianflag.html", "flagFrame");
    } else if(sequence==="gggwbbb") {
     window.open("gayflag.html", "flagFrame");  
    } else if(sequence==="pPb") {
       window.open("bisexualflag.html", "flagFrame"); 
    } else {
      window.open("blank.html","flagFrame");
    }
}
 