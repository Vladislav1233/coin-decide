import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

// Note: helpers
import isEmptyObj from 'helpers/isEmptyObj';

// Note: Components
import ScreenBar from './ScreenBar';

class ScreenBarGet extends Component {
  render() {
    const { auth, location, barInfo } = this.props;
    console.log(this.props);

    return <ScreenBar
      isAuth={!!auth.uid}
      code={location.state.code}
      qrCode={location.state.qrCode}
      endWorkTime={isEmptyObj(barInfo) ? '' : barInfo.end_work_time}
      address={isEmptyObj(barInfo) ? '' :barInfo.address}
      geo={isEmptyObj(barInfo) ? null : barInfo.geo}
      name={isEmptyObj(barInfo) ? '' : barInfo.name}
      prize={location.state.prize}
      // review
    />
  }
}


const mapStateToProps = ({ firebase, firestore }) => {

  console.log(firestore);
  return {
    auth: firebase.auth,
    barInfo: !!firestore.ordered.bars ? firestore.ordered.bars[0] : {}
  }
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => (
    [
      { collection: 'bars', doc: props.barId }
    ]
  ))
)(ScreenBarGet);
