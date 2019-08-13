import React, { Component } from 'react';
import './style.scss';
import imgSrc from 'images/sale-icon/beer.svg';

class Sale extends Component {
  render() {

    return(
      <div class="b-sale">
        <div className="b-sale__info">
          <div className="b-sale__name">Бесплатное светлое</div>
          <div className="b-sale__type">Приз</div>
        </div>

        <div className="b-sale__icon">
          <img src={imgSrc} alt='Бокал пива' />
        </div>
      </div>
    )
  }
}

export default Sale;