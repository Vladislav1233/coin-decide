import React, { Component } from 'react';
import BeerIcon from 'images/beer.svg';
import './style.scss';

class Sale extends Component {
  render() {
    return(
      <div class="b-sale">
        <div className="b-sale__image-wrapper">
          <img className="b-sale__image" src={BeerIcon} alt="" />
        </div>
        <div className="b-sale__value">
          <span>-10%</span>
          <span>На первый бокал пива!</span>
        </div>

        <div className="b-sale__code">
          <div className="b-sale__code-title">Покажи код бармену:</div>
          <div className="b-sale__code-value">69557</div>
        </div>

      </div>
    )
  }
}

export default Sale;