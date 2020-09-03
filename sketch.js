var bodyImg, body, canvas, bg1, bg2;
var database, form, user;

function preload(){
    bodyImg = loadImage('images/Human Body.png');
}

function setup(){
    canvas = createCanvas(windowWidth-10, windowHeight-10);
    database = firebase.database();
    form = new Form();
    user = new User();
    bg1 = 0;
    bg2 = 0;
}

function draw(){
    bg1 = map(mouseX,0,windowWidth-10,0,255);
    bg2 = map(mouseY,0,windowHeight-10,0,255);
    background(bg2,255,bg1);

    form.display();
    body = image(bodyImg, 100, 100);
}