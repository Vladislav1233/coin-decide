import React, { Component } from 'react';

import Sale from 'components/Sale';

import './style.scss';

class Card extends Component {
  render() {
    const { endWorkTime, address, name, descriptionSale, urlImage } = this.props;

    return(
      <div className="b-card">
        <div className="b-card__wrapper">
          <div className="b-card__image-wrapper">
            {/* alt={`Фото ${name}`} */}
            <img className="b-card__image" src={urlImage} alt='' />
          </div>

          <div className="b-card__info-bar">
            <div className="b-card__address">Открыто до {endWorkTime}</div>
            <div className="b-card__address">{address}</div>
            <h1 className="b-card__name">{name}</h1>
          </div>
          {!!descriptionSale &&
            <Sale
              description={descriptionSale}
            />
          }
        </div>
      </div>
    )
  }
}

export default Card;