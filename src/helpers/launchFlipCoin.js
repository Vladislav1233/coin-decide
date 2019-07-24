import Sprite from 'components/Coin/';

const launchFlipCoin = (numFrame, ticksFrame) => {
  let canvas = document.getElementById('canvas');
  canvas.width = 100;
  canvas.height = 100;
  let coinImage = new Image();
  coinImage.src = 'http://www.williammalone.com/articles/create-html5-canvas-javascript-sprite-animation/downloads/sprite-animation-demo/images/coin-sprite-animation.png';
  // eslint-disable-next-line
  let sprite = new Sprite({
      ctx: canvas.getContext('2d'),
      image: coinImage,
      width: 1000,
      height: 100,
      numberOfFrames: numFrame || 0,
      ticksPerFrame: ticksFrame || 0,
  });
};

export default launchFlipCoin;