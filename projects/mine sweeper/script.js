let GAME_MODE = 'menu';

const canvas = document.getElementById("canvas");
const pen = canvas.getContext('2d');

function clearScreen() {
  pen.save();
  pen.fillStyle = 'black';
  pen.fillRect(0, 0, canvas.width, canvas.height);
  pen.retore();
}

function drawGame() {

}

function drawGameOptions() {

}

function drawMenu() {

}

function drawMenuOptions() {

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