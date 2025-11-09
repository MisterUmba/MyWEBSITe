const canvas = document.getElementById("canvas");
const pen = canvas.getContext('2d');

class ViewNode {
  constructor(x, y, width, height, color = "white", text = "", name = "") {
    this.x = x;
    this.y = y;
    this.w = width;
    this.h = height;
    this.color = color;
    this.text = text;
    this.name = name;
  }

  draw(x = this.x, y = this.y, w = this.w, h = this.h, c = this.color, t = this.text) {
    pen.save();
    pen.fillStyle = c;
    pen.fillRect(x, y, w, h);
    pen.textAlign = 'center';
    pen.textBaseline = 'middle';
    pen.fillStyle = invertColor(pen.fillStyle);
    pen.font = '25px sans-serif';
    pen.fillText(t, x + .5 * w, y + .5 * h, w);
  }
}

class ViewGrap {
  constructor(nodes = []) {
    this.nodes = nodes;
  }

  draw() {
    this.nodes.forEach(node => node.draw());
  }
}


class View {
  constructor(model, game_state) {
    this.model = model;
    this.gameState = game_state;

    this.viewGraps = new Map();
    this.initiate();
  }

function drawGameOptions() {
  console.log("Choosing the game difficulty.");
}

  clearScreen() {
    pen.save();
    pen.fillStyle = 'black';
    pen.fillRect(0, 0, canvas.width, canvas.height);
    pen.restore();
  }

  draw() {
    this.viewGraps[this.gameState].draw();
  }

  resize() {
    // Making sure aspect ratio is 16w by 9h
    canvas.width = window.innerWidth * 0.5;
    canvas.height = canvas.width * .5625;
    this.clearScreen();
    // this.draw();
  }

}
