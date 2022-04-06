Status = "";
object = [];

function preload() {

}

function setup() {
    canvas = createCanvas(350, 350);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status_lbl").innerHTML = "Status : Detecting Objects";
}