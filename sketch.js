var bg, c1, cat, m1, mouse;
var m2,c3, m3;
function preload() {
    //load the images here
    bg= loadImage("images/garden.png");
    c1= loadImage("images/cat1.png");
    m1= loadImage("images/mouse2.png");
    m2= loadImage("images/mouse3.png");
    c3= loadImage("images/cat4.png");
    m3= loadImage("images/mouse1.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat= createSprite(700,600);
    mouse= createSprite(250,600);
cat.addImage(c1);
mouse.addImage(m1);
cat.scale= 0.2;
mouse.scale= 0.2;
cat.debug= false;
mouse.debug= false;

cat.setCollider("rectangle", 0,0,20,30);
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
if(cat.isTouching(mouse)){
    cat.addImage(c3)
    mouse.addImage(m3)
} 
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
mouse.addImage(m2);
mouse.frameDelay= 25;
cat.x-=15;
}

}
