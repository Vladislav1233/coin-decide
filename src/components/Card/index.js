import React, { Component } from 'react';

import Sale from 'components/Sale';

import './style.scss';

class Card extends Component {
  render() {
    return(
      <div className="b-card">
        <div className="b-card__wrapper">
          <div className="b-card__image-wrapper">
            <img className="b-card__image" src="https://media-cdn.tripadvisor.com/media/photo-w/12/a0/59/c9/69-pints-craft-pub-tverskaya.jpg" alt="Фото бара" />
          </div>

          <div className="b-card__info-bar">
            <div className="b-card__address">ул. Красно-словянская, 72</div>
            <h1 className="b-card__name">69 pint house</h1>
          </div>

          <Sale />
        </div>
      </div>
    )
  }
}

export default Card;