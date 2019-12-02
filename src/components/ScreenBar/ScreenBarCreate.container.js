// Note:
// Логический компонент, который после броска монетки
// подбирает бар для пользователя.

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import Pt from 'prop-types';
// import { firestoreConnect } from 'react-redux-firebase';

// Note: actions
import { getRandomBar } from 'store/bars';
import { savePromocode, saveWinningPromocodeInStore } from 'store/promocodes';

// Note: helpers
import isEmptyObj from 'helpers/isEmptyObj';
import randomInteger from 'helpers/randomInteger';

// Note: Components
import ScreenBar from './ScreenBar';

class ScreenBarCreate extends Component {
  static propTypes = {
    showBar: Pt.bool
  }

  state = {
    code: randomInteger(9999, 1000)
  }

  componentDidMount() {
    this.props.getRandomBar();
  }

  componentDidUpdate(prevProps) {
    const {
      showBar,
      savePromocode,
      auth,
      bar,
      prize,
      saveWinningPromocodeInStore
    } = this.props;

    if(showBar !== prevProps.showBar && showBar) {
      if(prize && prize.length > 0) {
        // Note: Промокод сохраняем только в том случае если он вообще есть.
        // т.е. если есть приз или какая-то скидка в этом баре.
        const promocodeData = {
          bar_id: bar.id,
          code: this.state.code,
          is_check: false,
          name_bar: bar.name,
          photo: bar.photo,
          prize: prize.length > 0 ? prize[0] : {},
          qr_code: null // TODO
        };

        if(!!auth.uid) {
          // Note: Если авторизован юзер то промокод сохраняем сразу в базе.
          savePromocode(auth.uid, promocodeData);
        } else {
          // Note: Если не авторизован юзер то отправляем промокод в store
          // до момента пока юзер не авторизуется, чтобы сохранить промокод
          // в базу прикрепив его к юзеру.
          saveWinningPromocodeInStore(promocodeData);
        }
      }
    }

  }

  render() {
    const { bar, auth, showBar, prize, barImageUrl, backToStartScreen } = this.props;
    const { code } = this.state;

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
          code={code} // TODO: узнать как работать с промокодом. Он будет генериться один на приз или один на пользователя?
          qrCode={null} // TODO
          endWorkTime={bar.end_work_time}
          address={bar.address}
          geo={null} // TODO
          name={bar.name}
          prize={prize ? prize[0] : {}}
          urlImage={barImageUrl}
          backToStartScreen={backToStartScreen}
        />
      </CSSTransition>
  }
}

const mapStateToProps = ({ firebase, firestore, bars }) => {
  console.log(bars)
  return {
    auth: firebase.auth,
    bar: firestore.ordered.bars && firestore.ordered.bars.length > 0
      ? firestore.ordered.bars[0]
      : {},
    prize: firestore.ordered.unique_prizes
      ? firestore.ordered.unique_prizes
      : firestore.ordered.common_prizes
        ? firestore.ordered.common_prizes
        : null,
    barImageUrl: bars.barImageUrl
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRandomBar: () => dispatch(getRandomBar()),
    savePromocode: (userUID, promocodeData) => dispatch(savePromocode(userUID, promocodeData)),
    saveWinningPromocodeInStore: (data) => dispatch(saveWinningPromocodeInStore(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenBarCreate);
