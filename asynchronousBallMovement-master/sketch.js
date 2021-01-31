var ball;
var database;
var Position;

function setup(){
    database= firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ballPosition=database.ref('Ball/Position');
    ballPosition.on("value", readPosition, showError);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref('Ball/Position').set({
        'x': Position.x +x,
        'y': Position.y +y
    })
}

function readPosition(data){
Position = data.val();
ball.x=Position.x
ball.y=Position.y
console.log(Position.x);
}

function showError(){
    console.log("errorinreading");
}