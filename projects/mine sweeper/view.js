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

class ViewGraph {
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

  initiate() {
    // menu
    let playing = new ViewGraph([
      new ViewNode(canvas.width / 2, canvas.height / 2, canvas.width / 3, canvas.height / 5, "white", "Playing", "Playing")
    ]);
    this.viewGraps[GAME_STATES.PLAYING] = playing;

    let playingOptions = new ViewGraph([
      new ViewNode(canvas.width / 2, canvas.height / 2, canvas.width / 3, canvas.height / 5, "white", "Options", "PlayingOptions")
    ]);
    this.viewGraps[GAME_STATES.PLAYING_OPTION] = playingOptions;

    let playingPause = new ViewGraph([
      new ViewNode(canvas.width / 2, canvas.height / 2, canvas.width / 3, canvas.height / 5, "white", "Pause", "Pause")
    ]);
    this.viewGraps[GAME_STATES.PLAYING_PAUSE] = playingPause;

    let menu = new ViewGraph([
      new ViewNode(canvas.width / 2, canvas.height / 2, canvas.width / 3, canvas.height / 5, "white", "New Game", "NewGame")
    ]);
    this.viewGraps[GAME_STATES.MENU] = menu;

    let menuOption = new ViewGraph([
      new ViewNode(canvas.width / 2, canvas.height / 2, canvas.width / 3, canvas.height / 5, "white", "Menu Options", "MenuOptions")
    ]);
    this.viewGraps[GAME_STATES.MENU_OPTION] = menuOption;
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
