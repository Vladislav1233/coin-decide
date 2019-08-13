import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import Shake from 'helpers/shake';
import launchFlipCoin from 'helpers/launchFlipCoin';

import ScreenCoin from 'components/ScreenCoin';
import ScreenBar from 'components/ScreenBar';

import './App.scss';

class App extends Component {

  state = {
    isStopFlipping: false,
    showBar: false
  };

  stopFlipping = () => {
    setTimeout(() => {
      this.setState({
        isStopFlipping: true
      });

      const canvasElem = document.getElementById('canvas');
      canvasElem.classList='hide';

      setTimeout(() => {
        canvasElem.style.display="none";
      }, 500);
    }, 300);
  };

  componentDidMount() {
    //create a new instance of shake.js.
    const myShakeEvent = new Shake({
      threshold: 10
    });
    // start listening to device motion
    myShakeEvent.start();

    //shake event callback
    const shakeEventDidOccur = () => launchFlipCoin(10, -15, this.stopFlipping);

    // register a shake event
    window.addEventListener('shake', shakeEventDidOccur, false);
  }

  render() {
    const { isStopFlipping, showBar } = this.state;

    launchFlipCoin(0, 0);

    return (
      <div className="App">

        {/* Первый экран: Монетка */}
        <CSSTransition 
          unmountOnExit 
          in={!isStopFlipping} 
          timeout={500} 
          classNames='b-screen'
          onExited={() => this.setState({ showBar: true })}
        >
          <ScreenCoin stopFlipping={this.stopFlipping}/>
        </CSSTransition>

        {/* Второй экран: Бар, скидка, промокод. */}
        <CSSTransition 
          unmountOnExit 
          in={showBar} 
          timeout={1500}
          classNames='b-screen'
        >
          <ScreenBar />
        </CSSTransition>
      </div>
    )

  }
}

export default App;
