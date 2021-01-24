import Game from './scripts/game';

import './main.scss';

const canvas: HTMLCanvasElement = document.getElementById('arena') as HTMLCanvasElement;
const game = new Game(canvas);

const score: HTMLElement = document.getElementById('score') as HTMLElement;

game.on('score', s => score.innerHTML = s);
game.on('over', _s => alert('Game over!\nRefresh page for new game.'));

game.start();