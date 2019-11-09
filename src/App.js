import React, { Component, Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';
import { isMobile } from 'react-device-detect';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import Shake from 'helpers/shake'; TODO: shake событие
// import launchFlipCoin from 'helpers/launchFlipCoin';

import ScreenCoin from 'components/ScreenCoin';
import { ScreenBarGet, ScreenBarCreate } from 'components/ScreenBar';
import SignUp from 'components/SignUp';
import SignIn from 'components/SignIn';
import DesktopScreen from 'components/DesktopScreen';

import './App.scss';

class App extends Component {

  state = {
    isStopFlipping: false,
    showBar: false
  };

  stopFlipping = () => {
    this.setState({
      isStopFlipping: true
    })
  };

  // TODO: shake событие
  // stopFlipping = () => {
  //   setTimeout(() => {
  //     this.setState({
  //       isStopFlipping: true
  //     });

  //     const canvasElem = document.getElementById('canvas');
  //     canvasElem.classList='hide';

  //     setTimeout(() => {
  //       canvasElem.style.display="none";
  //     }, 500);
  //   }, 300);
  // };

  componentDidMount() {
    // TODO: shake событие
    // //create a new instance of shake.js.
    // const myShakeEvent = new Shake({
    //   threshold: 10
    // });
    // // start listening to device motion
    // myShakeEvent.start();

    // //shake event callback
    // const shakeEventDidOccur = () => launchFlipCoin(10, -15, this.stopFlipping);

    // // register a shake event
    // window.addEventListener('shake', shakeEventDidOccur, false);
  }

  render() {
    const { isStopFlipping, showBar } = this.state;

    // TODO: shake событие
    // launchFlipCoin(0, 0);

    return (
      <BrowserRouter>
        <div className="App">
          { isMobile
            ? <Switch>
              <Route exact path="/">
                <Fragment>
                  {/* Первый экран: Монетка */}
                  <CSSTransition
                    unmountOnExit
                    in={!isStopFlipping}
                    timeout={500}
                    classNames='b-screen'
                    onExited={() => this.setState({ showBar: true })}
                  >
                    <Fragment>
                      <ScreenCoin
                        stopFlipping={this.stopFlipping}
                      />
                    </Fragment>
                  </CSSTransition>

                  {/* Второй экран: Бар, скидка, промокод. */}
                  <ScreenBarCreate showBar={showBar} />
                </Fragment>
              </Route>
              <Route path="/signup" component={SignUp} />
              <Route path="/signin" component={SignIn} />
              <Route path="/promocode/:id" component={ScreenBarGet} />
            </Switch>

            : <DesktopScreen />
          }
        </div>
      </BrowserRouter>
    )

  }
}

export default App;
