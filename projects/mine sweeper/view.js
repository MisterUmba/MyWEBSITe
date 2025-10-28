class Node {
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


function drawGame() {
  console.log("playing the game.")
}

function drawGameOptions() {
  console.log("Choosing the game difficulty.");
}

function drawPausedMenu() {
  console.log("Game paused.");
}

function drawMenu() {
  console.log("On the Main Menu.");
}

function drawMenuOptions() {
  console.log("Picking menu options. (i.e. Muting sounds)");
}
