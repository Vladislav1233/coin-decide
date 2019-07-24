import React, { Component } from 'react';
import './App.scss';
import Sprite from 'components/Coin/';

class App extends Component {

  render() {
    let canvas = document.getElementById('canvas');
    canvas.width = 100;
    canvas.height = 100;
    let coinImage = new Image();
    coinImage.src = 'http://www.williammalone.com/articles/create-html5-canvas-javascript-sprite-animation/downloads/sprite-animation-demo/images/coin-sprite-animation.png';
    let sprite = new Sprite({
        ctx: canvas.getContext('2d'),
        image: coinImage,
        width: 1000,
        height: 100,
        numberOfFrames: 10,
        ticksPerFrame: -10,
    })

    return (
      <div className="App">
      </div>
    )

  }
}

export default App;
