const GAME_STATES = {
  MENU: 'menu',
  MENU_OPTION: 'menu_options',
  PLAYING: 'playing',
  PLAYING_OPTION: 'game_difficulty'
}

let GAME_MODE = GAME_STATES.MENU;

const canvas = document.getElementById("canvas");
const pen = canvas.getContext('2d');

function clearScreen() {
  pen.save();
  pen.fillStyle = 'black';
  pen.fillRect(0, 0, canvas.width, canvas.height);
  pen.retore();
}

function drawGame() {
  console.log("playing the game. ")
}

function drawGameOptions() {
  console.log("Choosing the game difficulty");
}

function drawMenu() {
  console.log("On the Main Menu");
}

function drawMenuOptions() {
  console.log("Picking menu options. (i.e. Muting sounds)");
}


function draw() {
  switch (GAME_MODE) {
    case GAME_STATES.PLAYING:
      drawGame();
      break;
    case GAME_STATES.PLAYING_OPTION:
      drawGameOptions();
      break;
    case GAME_STATES.MENU:
      drawMenu();
      break;
    case GAME_STATES.MENU_OPTION:
      drawMenuOptions();
      break;
  }
}

function resize() {
  canvas.width = window.innerWidth * 0.5;
  canvas.height = window.innerHeight * 0.5;
  clearScreen();
  drawCurrentGameMode();
}

window.addEventListener('resize', resize);

resize();
clearScreen();