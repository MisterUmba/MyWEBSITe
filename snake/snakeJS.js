/**
 * Authore: Henri M. Umba
 * Email: umbamw@gmail.com
 *
 * Feedback is well appricated
 */
class Node {
    constructor(x1, y1) {
        this.x = x1;
        this.y = y1;
    }

    move(x, y){
        this.x = x;
        this.y = y;
    }
}

class Snake{
    constructor(){
        this.head = new Node(10,10);
        this.direction = new Node(0, 1);
        this.body = [this.head];
    }

    add(x){
        this.body.push(x);
    }

    move(){
            this.head.x += this.direction.x;
            this.head.y += this.direction.y;

            let temp = this.head;
            for(let x in this.body){
                if(x!==this.head){
                    this.body[x].x = this.head.x;
                    this.body[x].y = this.head.y;
                    temp = this.body[x];
                }
            }
    }

    toString(){
        console.log(this);
    }

}

class View{
    constructor(snk){
        const canvas = document.getElementById('canvas');
        this.snake = snk;
        this.pan = canvas.getContext('2d');
    }

    draw(){
        this.clearScreen();
    }

    clearScreen(){
        this.pen.fillStyle = 'black';
        this.pen.fillRec(0,0,this.canvas.width, this.canvas.height);
    }
}

class Control{
    constructor(){
        this.snake = new Snake();
        this.snake.add(new Node(this.snake.head.x, this.snake.head.y));
        this.view = new View(this.snake);
    }

    update(){
        this.snake.move();
    }

    toString(){
        this.snake.toString();
    }


}

let con = new Control();
con.mainGameLoop = function(){
    con.update();
    con.view.draw();
    console.log(this);
    con.toString();
    requestAnimationFrame(con.mainGameLoop);
}

requestAnimationFrame(con.mainGameLoop);