// Note:
// Логический компонент, который после броска монетки
// подбирает бар для пользователя.

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import Pt from 'prop-types';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

// Note: actions
import { getRandomBar } from 'store/bars';
import { savePromocode, saveWinningPromocodeInStore } from 'store/promocodes';
import { changeCity } from 'store/users';

// Note: helpers
import isEmptyObj from 'helpers/isEmptyObj';
import randomInteger from 'helpers/randomInteger';
// import defineCity from 'helpers/defineCity';

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
    const { dataCity } = this.props;

    this.props.getRandomBar(dataCity.valueCity);
    this.props.changeCity(dataCity.nameCity, dataCity.valueCity);

    // navigator.geolocation.getCurrentPosition(pos => {
    //   defineCity(pos.coords.latitude, pos.coords.longitude)
    //     .then(res => {
    //       this.props.getRandomBar(res.name_id);
    //       this.props.changeCity(res.name, res.name_id);
    //     });
    // });
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

    if (prevProps.dataCity.valueCity !== this.props.dataCity.valueCity) {
      this.props.getRandomBar(this.props.dataCity.valueCity);
    }

    if (showBar !== prevProps.showBar && showBar) {
      if (prize && prize.length > 0) {
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

        if (!!auth.uid) {
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
    const { bar, auth, showBar, prize, barImageUrl, backToStartScreen, reviews } = this.props;
    const { code } = this.state;

    // console.log('this.props', this.props);
    // console.log('this.state', this.state);

    if (typeof (bar) === 'object' && isEmptyObj(bar) && !!prize) {
      return <div>'Загрузка...'</div>
    }

    if (!bar && Array.isArray(bar) && bar.length <= 0) {
      return <div>'Загрузка...'</div>
    }

    if (!bar) {
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
        geo={bar.geo} // TODO
        name={bar.name}
        prize={prize && Array.isArray(prize) && !!prize.length ? prize[0] : {}}
        // urlImage={barImageUrl} // todo: проверить
        urlImage={bar.photo} // todo: проверить
        backToStartScreen={backToStartScreen}
        reviews={reviews}
        barId={bar.id}
      />
    </CSSTransition>
  }
}

const mapStateToProps = ({ firebase, firestore, bars, users }) => {
  const targetBarId = firestore.ordered.bars && firestore.ordered.bars.length > 0
    ? firestore.ordered.bars.filter(item => {
      return item.id === bars.targetBarId
    })
    : {};


  return {
    auth: firebase.auth,
    bar: Array.isArray(targetBarId) ? targetBarId[0] : targetBarId,
    prize: firestore.ordered.unique_prizes ? firestore.ordered.unique_prizes.filter(item => (
      item.id === bars.typePrize[1]
    )) : null,
    barImageUrl: bars.barImageUrl,
    reviews: firestore.ordered.reviews ? firestore.ordered.reviews : [],
    dataCity: {
      valueCity: users.valueCity,
      nameCity: users.nameCity
    }
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRandomBar: (nameCity) => dispatch(getRandomBar(nameCity)),
    savePromocode: (userUID, promocodeData) => dispatch(savePromocode(userUID, promocodeData)),
    saveWinningPromocodeInStore: (data) => dispatch(saveWinningPromocodeInStore(data)),
    changeCity: (name, nameId) => dispatch(changeCity(name, nameId))
  }
}

export default compose(
  firestoreConnect(props => {
    const query = [];
    if (props.bar && props.bar.id) {
      query.push({ collection: 'reviews', doc: props.bar.id });
    };
    return query
  }),
  connect(mapStateToProps, mapDispatchToProps)
)(ScreenBarCreate);
