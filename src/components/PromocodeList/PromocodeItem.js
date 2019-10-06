import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Note: images
import checkCircle from 'images/check-circle.svg';

// Note: styles
import './promocode-item.scss';

class PromocodeItem extends Component {

  render() {
    const {
      image,
      name_bar,
      prize,
      is_check,
      duration_action,
      id,
      bar_id,
      code,
      qr_code
    } =  this.props;

    return(
      <Link
        to={{
          pathname: `/promocode/${id}`,
          state: {
            barId: bar_id,
            code: code,
            qrCode: qr_code,
            prize: prize
          }
        }}
        className="b-promocode-item" 
        style={{ backgroundImage: `url(${image})` }}
      >
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
            {prize.description}
          </div>
        </div>

        <div className="b-promocode-item__footer">
          <div className="b-promocode-item__date">
            {/* TODO */}
            Действует до {duration_action}
          </div>
        </div>
      </Link>
    )
  }
}

export default PromocodeItem;