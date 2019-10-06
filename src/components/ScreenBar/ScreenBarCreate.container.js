import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

// Note: actions
import { getRandomBar } from 'store/bars';

// Note: helpers
import randomInteger from 'helpers/randomInteger';

// Note: Components
import ScreenBar from './ScreenBar';

class ScreenBarCreate extends Component {
  componentDidMount() {
    this.props.getRandomBar();
  }

  render() {
    return <ScreenBar 
      isAuth={true}
      code={'2222'}
      qrCode={null}
      endWorkTime={'22:30'}
      address={'ул. Копылова, 10'}
      geo={null}
      name={'69 pints'}
      prize={{description: '-10% шот'}}
    />
  }
}

const mapStateToProps = ({ firebase, firestore }) => {
  console.log(firestore);
  return {
    auth: firebase.auth
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRandomBar: () => dispatch(getRandomBar())
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(props => (
    [
      { collection: 'bars_id', doc: 'moscow' } // TODO: doc id
    ]
  ))
)(ScreenBarCreate);
