import React, { Component, Fragment } from 'react';
import './App.scss';
import Shake from 'helpers/shake';
import launchFlipCoin from 'helpers/launchFlipCoin';
import ScreenCoin from 'components/ScreenCoin';
import Card from 'components/Card';
import Sale from 'components/Sale';

class App extends Component {

  state = {
    isStopFlipping: false
  };

  stopFlipping = () => {
    this.setState({
      isStopFlipping: true
    });

    document.getElementById('canvas').style.display='none';
  };

  componentDidMount() {
    //create a new instance of shake.js.
    const myShakeEvent = new Shake({
      threshold: 15
    });
    // start listening to device motion
    myShakeEvent.start();

    //shake event callback
    const shakeEventDidOccur = () => launchFlipCoin(10, -15, this.stopFlipping);

    // register a shake event
    window.addEventListener('shake', shakeEventDidOccur, false);
  }

  render() {
    const { isStopFlipping } = this.state;

    launchFlipCoin(0, 0);

    return (
      <div className="App">
        {isStopFlipping 
          ? (
            <Fragment>
              <Sale />
              <div className="b-title">
                Скорее, тебя уже ждут здесь
              </div>
              <Card />
            </Fragment>
          ) : <ScreenCoin stopFlipping={this.stopFlipping}/>
        }
      </div>
    )

  }
}

export default App;
