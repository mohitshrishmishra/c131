img="";

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
}

function preload(){
img=loadImage('dog_cat.jpg');
}

function draw(){
    image(img,0,0,640,420);
    fill("#037ffc");
    text("dog",45,75);
    noFill();
}