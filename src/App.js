import React, { Component } from 'react';
import './App.scss';
import Shake from 'shake2.js';
import launchFlipCoin from 'helpers/launchFlipCoin';
import ScreenCoin from 'components/ScreenCoin';
import Card from 'components/Card';

class App extends Component {

  state = {
    isStopFlipping: false
  };

  stopFlipping = () => {
    this.setState({
      isStopFlipping: true
    })
  };

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
      launchFlipCoin(10, -15);
    }
  }

  render() {

    launchFlipCoin(0, 0);

    return (
      <div className="App">
        <ScreenCoin />
        <Card />
      </div>
    )

  }
}

export default App;
