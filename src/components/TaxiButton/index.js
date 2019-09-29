import React, { Component } from 'react';

// Note: media
import taxiIcon from 'images/taxi.svg';

// Note: styles
import './style.scss';

class TaxiButton extends Component {
  render() {
    return(
      <a href="#" title="Вызвать такси" className="b-taxi-button">
        <img className="b-taxi-button__icon-taxi" src={taxiIcon} alt="Иконка такси" />
        <span className="b-taxi-button__text">Вызвать такси</span>
      </a>
    )
  }
}

export default TaxiButton;