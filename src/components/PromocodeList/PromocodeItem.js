import React, { Component } from 'react';

// Note: images
import checkCircle from 'images/check-circle.svg';

// Note: styles
import './promocode-item.scss';

class PromocodeItem extends Component {

  render() {
    const { image, name_bar, prize, is_check, expiry_date } =  this.props;

    return(
      <a href="/" className="b-promocode-item" style={{ backgroundImage: `url(${image})` }}>
        {is_check &&
          <div className="b-promocode-item__check-wrapper">
            <img src={checkCircle} alt="" />
          </div>
        }

        <div className="b-promocode-item__head">
          <div className="b-promocode-item__name-place">
            {name_bar}
          </div>
          <div className="b-promocode-item__name-prize">
            {prize}
          </div>
        </div>

        <div className="b-promocode-item__footer">
          <div className="b-promocode-item__date">
            Действует до {expiry_date}
          </div>
        </div>
      </a>
    )
  }
}

export default PromocodeItem;