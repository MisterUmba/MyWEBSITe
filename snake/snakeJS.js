class Node{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.w = 10;
        this.h = 10;
    }
}

let head = new Node(0,0);
let dir = new Node(0,0);
let body = [head];

const canvas = document.getElementById("canvas");
const pen = canvas.getContext("2d");

let coin = new Node(5+Math.floor(Math.random()*(canvas.width-10)), 5+Math.floor(Math.random()*(canvas.height-10)));

function draw(){
    //clean();
    pen.fillStyle = 'white';
    pen.fillRect(head.x, head.y, head.w, head.h);

    pen.fillStyle = 'gold';
    pen.fillRect(coin.x, coin.y, coin.w, coin.h);
}

function clean(){
    pen.fillStyle = "black";
    pen.fillRect(0,0,canvas.width, canvas.height);
}

function update(){
    if(head.x==coin.x && head.y==coin.y){
        coin.x = 5+Math.floor(Math.random()*(canvas.width-10));
        coin.y = 5+Math.floor(Math.random()*(canvas.height-10));
    }
    
    head.x+=dir.x;
    head.y+=dir.y;

    
}

function mainLoop(){
    update();
    draw();
}

function events(key){
    if(key.code==="KeyW"){
        dir.x = 0; dir.y =- 10;
    }

    if(key.code==="KeyS"){
        dir.x = 0; dir.y =+ 10;
    }
    if(key.code==="KeyD"){
        dir.x =+ 10; dir.y = 0;
    }

    if(key.code==="KeyA"){
        dir.x =- 10; dir.y = 0;
    }
}

document.addEventListener("keydown", events);

clean();
setInterval(mainLoop, 1000/30);