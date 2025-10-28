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
  // Making sure aspect ratio is 16w by 9h
  canvas.width = window.innerWidth * 0.5;
  canvas.height = canvas.width * .5625;
  clearScreen();
  draw();
}

window.addEventListener('resize', resize);
window.addEventListener('load', ev => {
  requestAnimationFrame(draw);
});

// Catch input from user and return which node was pressed. 
canvas.addEventListener("mouseup", event => {
  console.log(event);
});


resize();
clearScreen();