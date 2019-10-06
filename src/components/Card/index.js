import React, { Component } from 'react';

import Sale from 'components/Sale';

import './style.scss';

class Card extends Component {
  render() {
    const { endWorkTime, address, name, descriptionSale } = this.props;

    return(
      <div className="b-card">
        <div className="b-card__wrapper">
          <div className="b-card__image-wrapper">
            <img className="b-card__image" src="https://media-cdn.tripadvisor.com/media/photo-w/12/a0/59/c9/69-pints-craft-pub-tverskaya.jpg" alt="Фото бара" />
          </div>

          <div className="b-card__info-bar">
            <div className="b-card__address">Открыто до {endWorkTime}</div>
            <div className="b-card__address">{address}</div>
            <h1 className="b-card__name">{name}</h1>
          </div>

          <Sale
            description={descriptionSale}
          />
        </div>
      </div>
    )
  }
}

export default Card;