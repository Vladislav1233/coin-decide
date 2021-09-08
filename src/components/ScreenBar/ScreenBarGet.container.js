// Note:
// Логический компонент, который рендерит бар
// по нажатию на промокоды пользователя.

import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { withRouter } from "react-router";

// Note: helpers
import isEmptyObj from "helpers/isEmptyObj";

// Note: Components
import ScreenBar from "./ScreenBar";

class ScreenBarGet extends Component {
  render() {
    const { auth, location, bars, history, reviews } = this.props;
    console.log(bars);
    const barInfo = !!bars
      ? bars[location.state.barId]
        ? bars[location.state.barId]
        : {}
      : {};

    return (
      <ScreenBar
        isAuth={!!auth.uid}
        code={location.state.code}
        qrCode={location.state.qrCode}
        endWorkTime={isEmptyObj(barInfo) ? "" : barInfo.end_work_time}
        address={isEmptyObj(barInfo) ? "" : barInfo.address}
        geo={isEmptyObj(barInfo) ? null : barInfo.geo}
        name={isEmptyObj(barInfo) ? "" : barInfo.name}
        prize={location.state.prize}
        urlImage={location.state.imageUrl}
        backToStartScreen={() => history.goBack()}
        reviews={reviews}
        barId={location.state.barId}
      />
    );
  }
}

const mapStateToProps = ({ firebase, firestore }) => {
  return {
    auth: firebase.auth,
    bars: firestore.data.bars,
    reviews: firestore.ordered.reviews ? firestore.ordered.reviews : [],
  };
};

export default compose(
  firestoreConnect((props) => {
    const barId = props.location.state.barId;
    return [
      { collection: "bars", doc: barId },
      { collection: "reviews", doc: barId },
    ];
  }),
  connect(mapStateToProps)
)(withRouter(ScreenBarGet));
