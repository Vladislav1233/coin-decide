import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom';

// Note: Components
import PromocodeItem from './PromocodeItem';

// Note: images
import SixtyNinePint from 'images/bar/69pint.jpg';

// Note: styles
import './style.scss';

const data = [{
  isCheck: true,
  image: SixtyNinePint,
  namePlace: '69 pint house',
  namePrize: 'Бесплатное пиво',
  date: '19.08.2019'
}, {
  isCheck: true,
  image: SixtyNinePint,
  namePlace: 'Vse vmeste',
  namePrize: '-10% шот',
  date: '12.08.2019'
}, {
  isCheck: false,
  image: SixtyNinePint,
  namePlace: '69 pint house',
  namePrize: '2 бесплатных пива',
  date: '5.08.2019'
}]

class PromocodeList extends Component {
  render() {
    console.log(this.props)
    const { auth } = this.props;
    const promocodes = this.props.promocodes ? this.props.promocodes.content : [];
    return(
      <ul className="b-promocode-list">
        {!!auth.uid ? promocodes.map((promocode, index) => (
          <li key={index} className="b-promocode-list__item">
            <PromocodeItem
              {...promocode}
            />
          </li>
        )) : <li className="b-promocode-list__registration">
          <Link to='/signin'>Войдите</Link>
          <div className="b-promocode-list__help">чтобы видеть все свои промокоды</div>
        </li>}
      </ul>
    )
  }
}

const mapStateToProps = ({ firestore, firebase }) => {
  return {
    promocodes: firestore.ordered.promocodes ? firestore.ordered.promocodes[0] : firestore.ordered.promocodes,
    auth: firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  // ref doc: https://github.com/prescottprue/redux-firestore#query-options%23query-options
  firestoreConnect(props => {
    let dataQuery = [];
    if (props.auth.uid) dataQuery.push({
      collection: 'promocodes',
      doc: props.auth.uid,
      subcollections: [{ collection: 'content'}]
    });

    return dataQuery
  })
)(PromocodeList);