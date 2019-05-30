class Node{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.w = 1;
        this.h = 1;
    }
}

head = new Node(0,0);
let dir = new Node(0,0);
let body = [head];
let HEIGHT = 45;
let WIDTH = 60;
let scale = 10;

let gameOver = false;

const canvas = document.getElementById("canvas");
const pen = canvas.getContext("2d");
canvas.width = 6*100;
canvas.height = 4.5*100;

let coin = new Node(5+Math.floor(Math.random()*(WIDTH-10)), 5+Math.floor(Math.random()*(HEIGHT-10)));

function draw(){
    clean();
    pen.fillStyle = 'white';
    for(let x = 0; x<body.length; x++){
        pen.fillRect(body[x].x*scale, body[x].y*scale, body[x].w*scale, body[x].h*scale);
    }

    pen.fillStyle = 'gold';
    pen.fillRect(coin.x*scale, coin.y*scale, coin.w*scale, coin.h*scale);

    if(!gameOver){
        pen.fillStyle = 'red';
        pen.stroke
    }
}

function clean(){
    pen.fillStyle = "black";
    pen.fillRect(0,0,WIDTH*10, HEIGHT*10);
}

function update(){
    if(OutofBounds())
        gameOver = true;

    if(head.x==coin.x && head.y==coin.y){
        coin.x = 5+Math.floor(Math.random()*(WIDTH-10));
        coin.y = 5+Math.floor(Math.random()*(HEIGHT-10));

        while(collision(coin)){
            coin.x = 5+Math.floor(Math.random()*(WIDTH-10));
            coin.y = 5+Math.floor(Math.random()*(HEIGHT-10));
        }
        //for(let x = 0; x<100; x++)
            body.push(new Node(head.x, head.y));
    }
    
    head.x+=dir.x;
    head.y+=dir.y;

    let lx = head.x;
    let ly = head.y;
    let kx = undefined;
    let ky = undefined;
    for(let x = 0; x<body.length; x++){
        if(body[x]==head){
            
        }
            kx = body[x].x;
            ky = body[x].y;

            body[x].x = lx;
            body[x].y = ly;

            lx = kx;
            ly = ky;
        
    }
}

function mainLoop(){
   if(!gameOver)
    update();
    draw();
   
}

function collision(p){
    for(let x = 0; x<body.length; x++){
        if(p.x === body[x].x && p.y === body[x].y){
            return true;
        }
    }
    return false;
}


function OutofBounds(){
    if(head.x > WIDTH-1 || head.x < 0 || head.y < 0 || head.y > HEIGHT-1)
        return true;
    return false;
}

function events(key){
    if(key.code==="KeyW"){
        dir.x = 0; dir.y =- 1;
    }

    if(key.code==="KeyS"){
        dir.x = 0; dir.y =+ 1;
    }
    if(key.code==="KeyD"){
        dir.x =+ 1; dir.y = 0;
    }

    if(key.code==="KeyA"){
        dir.x =- 1; dir.y = 0;
    }
}

document.addEventListener("keydown", events);

clean();
setInterval(mainLoop, 1000/15);