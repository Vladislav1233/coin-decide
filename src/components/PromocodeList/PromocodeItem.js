import React, { Component } from 'react';

// Note: images
import checkCircle from 'images/check-circle.svg';

// Note: styles
import './promocode-item.scss';

class PromocodeItem extends Component {

  render() {
    const { image, namePlace, namePrize, isCheck, date } =  this.props;

    return(
      <a href="/" className="b-promocode-item" style={{ backgroundImage: `url(${image})` }}>
        {isCheck &&
          <div className="b-promocode-item__check-wrapper">
            <img src={checkCircle} alt="" />
          </div>
        }

        <div className="b-promocode-item__head">
          <div className="b-promocode-item__name-place">
            {namePlace}
          </div>
          <div className="b-promocode-item__name-prize">
            {namePrize}
          </div>
        </div>

        <div className="b-promocode-item__footer">
          <div className="b-promocode-item__date">
            {date}
          </div>
        </div>
      </a>
    )
  }
}

export default PromocodeItem;