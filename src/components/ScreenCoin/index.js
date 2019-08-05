import React, { Component } from 'react';
import { isMobileOnly } from 'react-device-detect';

// Note: components
import Button from 'components/Button';

import './style.scss';

class ScreenCoin extends Component {
  
  render() {
    const text = isMobileOnly 
      ? 'Потряси телефон и монетка решит в каком баре ты сегодня получаешь скидку и тусишь.'
      : '...и она решит в каком баре ты сегодня получаешь скидку и тусишь.';

    return(
      <div className="b-screen-coin">
        {!isMobileOnly && 
          <div className="b-screen-coin__button">
            <Button>Брось монетку</Button>
          </div>
        }

        <div className="b-screen-coin__text">
          {text}
        </div>
      </div>
    )
  }
}

export default ScreenCoin;