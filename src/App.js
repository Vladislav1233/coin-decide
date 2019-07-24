import React, { Component } from 'react';
import './App.scss';
import Shake from 'shake2.js';
import launchFlipCoin from 'helpers/launchFlipCoin';

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
      launchFlipCoin();
    }
  }

  render() {

    launchFlipCoin();

    return (
      <div className="App">
      </div>
    )

  }
}

export default App;
