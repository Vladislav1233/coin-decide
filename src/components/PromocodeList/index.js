import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

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
    console.log(this.props);
    return(
      <ul className="b-promocode-list">
        {data.map((item, index) => (
          <li key={index} className="b-promocode-list__item">
            <PromocodeItem
              {...item}
            />
          </li>
        ))}
      </ul>
    )
  }
}

const mapStateToProps = ({ firestore, firebase }) => {
  return {
    promocodes: firestore.ordered.promocodes,
    auth: firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  // ref doc: https://github.com/prescottprue/redux-firestore#query-options%23query-options
  firestoreConnect(props => {
    const dataQuery = [];
    if (props.auth.uid) dataQuery.push({
      collection: 'promocodes',
      doc: props.auth.uid,
      subcollections: [{ collection: 'content'}]
    });

    return dataQuery
  })
)(PromocodeList);