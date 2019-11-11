// Note:
// Логический компонент, который после броска монетки
// подбирает бар для пользователя.

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
// import { firestoreConnect } from 'react-redux-firebase';

// Note: actions
import { getRandomBar } from 'store/bars';

// Note: helpers
import isEmptyObj from 'helpers/isEmptyObj';
import randomInteger from 'helpers/randomInteger';

// Note: Components
import ScreenBar from './ScreenBar';

class ScreenBarCreate extends Component {
  componentDidMount() {
    this.props.getRandomBar();
  }

  render() {
    const { bar, auth, showBar, prize } = this.props;
    console.log(prize ? prize[0].description : '')

      if(isEmptyObj(bar) && !!prize) {
        return <div>'Загрузка...'</div>
      }

      return <CSSTransition
        unmountOnExit
        in={showBar}
        timeout={2300}
        classNames='b-screen'
      >
        <ScreenBar 
          isAuth={!!auth.uid}
          code={randomInteger(9999, 1000)} // TODO: узнать как работать с промокодом. Он будет генериться один на приз или один на пользователя?
          qrCode={null} // TODO
          endWorkTime={bar.end_work_time}
          address={bar.address}
          geo={null} // TODO
          name={bar.name}
          prize={prize ? prize[0] : {}}
        />
      </CSSTransition>
  }
}

const mapStateToProps = ({ firebase, firestore }) => {
  console.log(firestore)
  return {
    auth: firebase.auth,
    bar: firestore.ordered.bars && firestore.ordered.bars.length > 0
      ? firestore.ordered.bars[0]
      : {},
    prize: firestore.ordered.unique_prizes
      ? firestore.ordered.unique_prizes
      : firestore.ordered.common_prizes
        ? firestore.ordered.common_prizes
        : null
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRandomBar: () => dispatch(getRandomBar())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenBarCreate);