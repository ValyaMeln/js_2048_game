'use strict';

// Uncomment the next lines to use your game instance in the browser
// const Game = require('../modules/Game.class');
// const game = new Game();

// Write your code here
import Game from '../modules/Game.class.js';

const game = new Game();

const scoreEl = document.querySelector('.game-score');
const messageStart = document.querySelector('.message-start');
const messageWin = document.querySelector('.message-win');
const messageLose = document.querySelector('.message-lose');

window.game = game;

// ================= UI UPDATE =================

function updateUI() {
  scoreEl.textContent = game.getScore();

  const statusGame = game.getStatus();

  messageStart.classList.add('hidden');

  messageWin.classList.add('hidden');
  messageLose.classList.add('hidden');

  if (statusGame === 'win') {
    messageWin.classList.remove('hidden');
  }

  if (statusGame === 'lose') {
    messageLose.classList.remove('hidden');
  }
}

// ================= CONTROLS =================

document.addEventListener('keydown', (e) => {
  game.start();

  switch (e.key) {
    case 'ArrowLeft':
      game.moveLeft();
      break;
    case 'ArrowRight':
      game.moveRight();
      break;
    case 'ArrowUp':
      game.moveUp();
      break;
    case 'ArrowDown':
      game.moveDown();
      break;
  }

  updateUI();
});

// ================= START BUTTON =================

document.querySelector('.start').addEventListener('click', () => {
  game.start();
  updateUI();
});

document.querySelector('.restart').addEventListener('click', () => {
  game.restart();

  document.querySelector('.game-score').textContent = game.getScore();

  document.querySelector('.message-start').classList.remove('hidden');
  document.querySelector('.message-win').classList.add('hidden');
  document.querySelector('.message-lose').classList.add('hidden');
});
