class Node {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.w = 1;
        this.h = 1;
    }

    setLocal(x, y) {
        this.x = x;
        this.y = y;
    }
}

head = new Node(0, 0);
let dir = new Node(0, 0);
let moveDir = "down";

let body = [head];
let HEIGHT = 45;
let WIDTH = 60;
let scale = 10;
let score = 0;

let movements = {
    LEFT: "left",
    RIGHT: "right",
    UP: "up",
    DOWN: "down"
}

let isGameOver = false;
let isGamePaused = false;

let nextMoveDir = undefined;

const canvas = document.getElementById("canvas");
const pen = canvas.getContext("2d");
canvas.width = 6 * 100;
canvas.height = 4.5 * 100;

let coin = new Node(5 + Math.floor(Math.random() * (WIDTH - 10)), 5 + Math.floor(Math.random() * (HEIGHT - 10)));

function draw() {
    clean();

    pen.fillStyle = 'white';
    for (let x = 0; x < body.length; x++) {
        pen.fillRect(body[x].x * scale, body[x].y * scale, body[x].w * scale, body[x].h * scale);
    }

    pen.fillStyle = 'gold';
    pen.fillRect(coin.x * scale, coin.y * scale, coin.w * scale, coin.h * scale);

    pen.fillStyle = 'red';
    pen.fillRect(head.x * scale, head.y * scale, head.w * scale, head.h * scale);

    if (isGameOver) displayPrompt("Game Over!", "Press SPACE to restart game");

    if (isGamePaused) displayPrompt("Paused Game", "Press P key to un-pause game!")

    pen.fillStyle = 'red';
    pen.font = "50px monospace";
    pen.textAlign = 'center';
    pen.fillText(score, canvas.width / 2, canvas.height * 0.20);
}

function displayPrompt(headerText, bodyText) {
    pen.strokeStyle = 'red';
    pen.fillStyle = 'red';
    pen.font = "50px monospace";
    pen.textAlign = 'center';
    let line = headerText;
    pen.fillText(line, canvas.width / 2, canvas.height / 2);

    pen.font = "20px monospace";
    pen.fillStyle = "gold";
    line = bodyText;
    pen.fillText(line, canvas.width / 2, (canvas.height * 5) / 8);
}

function clean() {
    pen.fillStyle = "black";
    pen.fillRect(0, 0, WIDTH * 10, HEIGHT * 10);
}

function computerInput() {
    if ((moveDir == movements.UP || moveDir == movements.DOWN) && (nextMoveDir == movements.LEFT || nextMoveDir == movements.RIGHT)) {
        moveDir = nextMoveDir;
    }
    if ((moveDir == movements.RIGHT || moveDir == movements.LEFT) && (nextMoveDir == movements.UP || nextMoveDir == movements.DOWN)) {
        moveDir = nextMoveDir;
    }
}

function update() {
    if (OutofBounds())
        isGameOver = true;

    if (head.x == coin.x && head.y == coin.y) {
        coin.x = 5 + Math.floor(Math.random() * (WIDTH - 10));
        coin.y = 5 + Math.floor(Math.random() * (HEIGHT - 10));

        while (collision(coin)) {
            coin.x = 5 + Math.floor(Math.random() * (WIDTH - 10));
            coin.y = 5 + Math.floor(Math.random() * (HEIGHT - 10));
        }
        for (let x = 0; x < 2; x++)
            body.push(new Node(head.x, head.y));
        score += 100;
    }

    console.log(nextMoveDir);

    head.x += dir.x;
    head.y += dir.y;

    computerInput();

    let lx = head.x;
    let ly = head.y;
    let kx = undefined;
    let ky = undefined;
    for (let x = 0; x < body.length; x++) {
        if (body[x].x == head.x && body[x].y == head.y && body[x] != dir && body[x] != head) {
            isGameOver = true;
        }
        kx = body[x].x;
        ky = body[x].y;

        body[x].x = lx;
        body[x].y = ly;

        lx = kx;
        ly = ky;

    }
}

function mainLoop(timestep) {
    while (true) {
        setTimeout(timestep);
        if (!isGameOver && !isGamePaused) {
            update();
        }
        draw();
    }
}

function collision(p) {
    for (let x = 0; x < body.length; x++) {
        if (p.x === body[x].x && p.y === body[x].y) {
            return true;
        }
    }
    return false;
}


function OutofBounds() {
    if (head.x > WIDTH - 1 || head.x < 0 || head.y < 0 || head.y > HEIGHT - 1)
        return true;
    return false;
}

function events(key) {
    // Provent webpage from scrolling down
    if (key.code === "ArrowDown") {
        key.preventDefault();
    }

    // Make the game restart by pressing SPACE
    if (key.code === "Space" && isGameOver) {
        restartGame();
    }

    // Pausing the game
    if ((key.code === "KeyP" || key.code === "Escape") && !isGameOver) {
        if (isGamePaused) {
            isGamePaused = false;
        } else {
            isGamePaused = true;
        }
    }


    if (key.code === "KeyW" || key.code === "ArrowUp") {
        nextMoveDir = movements.UP;
    }

    if (key.code === "KeyS" || key.code === "ArrowDown") {
        nextMoveDir = movements.DOWN;
    }
    if (key.code === "KeyD" || key.code === "ArrowRight") {
        nextMoveDir = movements.RIGHT;
    }

    if (key.code === "KeyA" || key.code === "ArrowLeft") {
        nextMoveDir = movements.LEFT;
    }

    console.log(nextMoveDir)


    switch (moveDir) {
        case "up":
            dir.x = 0; dir.y = -1;
            break;
        case "down":
            dir.x = 0; dir.y = +1;
            break;
        case "left":
            dir.x = -1; dir.y = 0;
            break;
        case "right":
            dir.x = 1; dir.y = 0;
            break;
    }
}

function restartGame() {
    head.setLocal(0, 0);
    body = [head];
    moveDir = "down";
    score = 0;

    let fakeKey = {
        code: "KeyS"
    }
    events(fakeKey)
    isGameOver = false;
}

document.addEventListener("keyup", events);

clean();

window.onload = function () {
    setTimeout(1000);
    //setInterval(mainLoop, 1000 / 10);
    mainLoop(1000 / 10);
}
