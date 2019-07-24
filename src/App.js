import React, { Component } from 'react';
import './App.scss';
import Sprite from 'components/Coin/';
import Shake from 'shake2.js';

class App extends Component {

  componentDidMount() {
    // Create an instance
    const myShakeEvent = new Shake({
      threshold: 15, // optional shake strength threshold
      timeout: 1000 // optional, determines the frequency of event generation
    });

    // Start listening to device motion:
    myShakeEvent.start();

    // Register a `shake` event listener on `window` with your callback:
    window.addEventListener('shake', shakeEventDidOccur, false);

    // Dunction to call when shake event occurs
    function shakeEventDidOccur () {
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
          numberOfFrames: 10,
          ticksPerFrame: -15,
      });
    }
  }

  render() {

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
      numberOfFrames: 0,
      ticksPerFrame: 0,
    });

    return (
      <div className="App">
      </div>
    )

  }
}

export default App;
