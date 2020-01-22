import React, { Component } from 'react';
import './style.scss';
import imgSrc from 'images/sale-icon/beer.svg';

class Sale extends Component {
  render() {
    const { description } = this.props;

    return(
      <div className="b-sale">
        <div className="b-sale__info">
          <div className="b-sale__name">{description}</div>
          <div className="b-sale__type">Приз</div>
        </div>

        <div className="b-sale__icon">
          {/* TODO: Интегрировать иконку. Должна быть икона общая для приза в случае если нет иконки в базе. */}
          <img src={imgSrc} alt='Бокал пива' />
        </div>
      </div>
    )
  }
}

export default Sale;