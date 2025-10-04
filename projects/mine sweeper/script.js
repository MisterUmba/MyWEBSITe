const GAME_STATES = {
  MENU: 'menu',
  MENU_OPTION: 'menu_options',
  PLAYING: 'playing',
  PLAYING_OPTION: 'game_difficulty',
  PLAYING_PAUSE: 'game_paused'
}

let GAME_MODE = GAME_STATES.MENU;

const canvas = document.getElementById("canvas");
const pen = canvas.getContext('2d');

function clearScreen() {
  pen.save();
  pen.fillStyle = 'black';
  pen.fillRect(0, 0, canvas.width, canvas.height);
  pen.restore();
}

function drawGame() {
  console.log("playing the game. ")
}

function drawGameOptions() {
  console.log("Choosing the game difficulty");
}

function drawPausedMenu() {
  console.log("Game paused");
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
    case GAME_STATES.PLAYING_PAUSE:
      drawPausedMenu();
      break;
    case GAME_STATES.MENU:
      drawMenu();
      break;
    case GAME_STATES.MENU_OPTION:
      drawMenuOptions();
      break;
  }

  requestAnimationFrame(draw);
}

function resize() {
  canvas.width = window.innerWidth * 0.5;
  canvas.height = window.innerHeight * 0.5;
  clearScreen();
  draw();
}

window.addEventListener('resize', resize);
window.addEventListener('load', ev => {
  requestAnimationFrame(draw);
})

resize();
clearScreen();