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
  // Found out where is being clicked in the canvas.
  const bb = canvas.getBoundingClientRect();
  const clx = event.clientX - (bb.left + 16) ;
  const cly = event.clientY - (bb.top + 16);

  // Found out what is at the position being clicked based on game mode.
  let name = undefined;
  viewer.viewGraps[GAME_MODE].nodes.forEach(vn => {
    if(vn.x < clx && vn.x + vn.w > clx && vn.y < cly && vn.y + vn.h > cly) {
      name = vn.name;
    }
  });


  console.log(name);

  // Run the right code based on click event item name.

});


viewer.resize();
viewer.clearScreen();