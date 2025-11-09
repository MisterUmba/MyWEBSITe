const GAME_STATES = {
  MENU: 'menu',
  MENU_OPTION: 'menu_options',
  PLAYING: 'playing',
  PLAYING_OPTION: 'game_difficulty',
  PLAYING_PAUSE: 'game_paused'
}

let GAME_MODE = GAME_STATES.MENU;

let model = new Model();
let viewer = new View(model, GAME_MODE);

window.addEventListener('resize', viewer.resize);

let secondsPassed;
let oldTimeStamp = 0;
let fps;
function drawScreen(timeStamp) {
  secondsPassed = (timeStamp - oldTimeStamp) / 1000;
  oldTimeStamp = timeStamp;

  viewer.clearScreen();
  viewer.draw();

  window.requestAnimationFrame(drawScreen);
}

window.addEventListener('load', () => {
  requestAnimationFrame(drawScreen);
});

// Catch input from user and return which node was pressed. 
canvas.addEventListener("mouseup", event => {
  console.log(event);
});


viewer.resize();
viewer.clearScreen();