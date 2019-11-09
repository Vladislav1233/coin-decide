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

// Note: Components
import ScreenBar from './ScreenBar';

class ScreenBarCreate extends Component {
  componentDidMount() {
    this.props.getRandomBar();
  }

  render() {
    const { bar, auth, showBar } = this.props;

      if(isEmptyObj(bar)) {
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
          code={'2222'} // TODO
          qrCode={null} // TODO
          endWorkTime={bar.end_work_time}
          address={bar.address}
          geo={null} // TODO
          name={bar.name}
          prize={{description: '-10% шот'}}
        />
      </CSSTransition>
  }
}

const mapStateToProps = ({ firebase, firestore }) => {
  return {
    auth: firebase.auth,
    bar: firestore.ordered.bars && firestore.ordered.bars.length > 0
      ? firestore.ordered.bars[0]
      : {}
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRandomBar: () => dispatch(getRandomBar())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenBarCreate);
