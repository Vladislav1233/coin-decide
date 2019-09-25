import React, { Component } from 'react';

// Note: images
import checkCircle from 'images/check-circle.svg';
import SixtyNinePint from 'images/bar/69pint.jpg';

// Note: styles
import './promocode-item.scss';

class PromocodeItem extends Component {
  render() {
    return(
      <a href="#" className="b-promocode-item" style={{ backgroundImage: `url(${SixtyNinePint})` }}>
        <div className="b-promocode-item__check-wrapper">
          <img src={checkCircle} alt="" />
        </div>

        <div className="b-promocode-item__head">
          <div className="b-promocode-item__name-place">
            69 pint house
          </div>
          <div className="b-promocode-item__name-prize">
            Бесплатное пиво
          </div>
        </div>

        <div className="b-promocode-item__footer">
          <div className="b-promocode-item__date">19.08.2019</div>
        </div>
      </a>
    )
  }
}

export default PromocodeItem;