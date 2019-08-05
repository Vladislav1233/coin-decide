import React, { Component } from 'react';
import './App.scss';
import Shake from 'shake2.js';
import launchFlipCoin from 'helpers/launchFlipCoin';
import ScreenCoin from 'components/ScreenCoin';

class App extends Component {

  componentDidMount() {
    //create a new instance of shake.js.
    var myShakeEvent = new Shake({
      threshold: 30
    });
    // start listening to device motion
    myShakeEvent.start();
    // register a shake event
    window.addEventListener('shake', shakeEventDidOccur, false);
    //shake event callback
    function shakeEventDidOccur () {
      alert('shaking');
      launchFlipCoin(10, -15);
    }
  }

  render() {

    launchFlipCoin();

    return (
      <div className="App">
        <ScreenCoin />
      </div>
    )

  }
}

export default App;
