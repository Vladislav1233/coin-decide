import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { isMobile } from "react-device-detect";
import { Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "components/ProtectedRoute";
import { history } from "helpers/history";
// import defineCity from 'helpers/defineCity';

// import Shake from 'helpers/shake'; TODO: shake событие
// import launchFlipCoin from 'helpers/launchFlipCoin';

// Note: actions
import { changeCity } from "store/users";

import ScreenCoin from "components/ScreenCoin";
import { ScreenBarGet, ScreenBarCreate } from "components/ScreenBar";
import SignUp from "components/SignUp";
import SignIn from "components/SignIn";
import DesktopScreen from "components/DesktopScreen";
import Admin from "components/Admin";
import AboutApp from "components/AboutApp";

import "./App.scss";

class App extends Component {
  state = {
    isStopFlipping: false,
    showBar: false,
  };

  stopFlipping = () => {
    this.setState({
      isStopFlipping: true,
    });
  };

  backToStartScreen = () => {
    this.setState({
      isStopFlipping: false,
      showBar: false,
    });
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
    // navigator.geolocation.getCurrentPosition(pos => {
    //   defineCity(pos.coords.latitude, pos.coords.longitude)
    //     .then(res => {
    //       this.props.changeCity(res.name, res.name_id);
    //     });
    // });
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

  componentDidUpdate(prevProps) {
    if (
      !this.props.auth.isEmpty &&
      !!this.props.userData.length &&
      !prevProps.userData
    ) {
      this.props.changeCity(
        this.props.userData[0].default_city.name,
        this.props.userData[0].default_city.name_id
      );
    }
  }

  render() {
    const { auth, userData } = this.props;
    const { isStopFlipping, showBar } = this.state;
    console.log(auth);

    // TODO: shake событие
    // launchFlipCoin(0, 0);

    return (
      <Router history={history}>
        <div className="App">
          {isMobile ? (
            <Switch>
              <Route exact path="/">
                <Fragment>
                  {/* Первый экран: Монетка */}
                  <CSSTransition
                    unmountOnExit
                    in={!isStopFlipping}
                    timeout={500}
                    classNames="b-screen"
                    onExited={() => this.setState({ showBar: true })}
                  >
                    <Fragment>
                      <ScreenCoin stopFlipping={this.stopFlipping} />
                    </Fragment>
                  </CSSTransition>

                  {/* Второй экран: Бар, скидка, промокод. */}
                  <ScreenBarCreate
                    showBar={showBar}
                    backToStartScreen={this.backToStartScreen}
                  />
                </Fragment>
              </Route>
              <Route path="/signup" component={SignUp} />
              <Route path="/signin" component={SignIn} />
              <Route path="/promocode/:id" component={ScreenBarGet} />
              <Route path="/about" component={AboutApp} />

              {/* Note: Админка */}
              {/* <ProtectedRoute
                exact
                path="/admin/add-bar"
                component={Admin}
                isAllowed={userData && userData[0].role === "admin"} // TODO: редирект плохо работает. Юзер не успевает сгенериться.
                redirectTo="/"
              /> */}
            </Switch>
          ) : (
            <DesktopScreen />
          )}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ firebase, firestore }) => {
  return {
    auth: firebase.auth,
    userData:
      !!firestore.ordered.users &&
      !!firestore.ordered.users.length &&
      firestore.ordered.users.filter((item) => firebase.auth.uid === item.id),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeCity: (name, nameId) => dispatch(changeCity(name, nameId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
