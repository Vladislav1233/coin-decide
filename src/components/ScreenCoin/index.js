import React, { Component } from 'react';
import { isMobileOnly } from 'react-device-detect';
import launchFlipCoin from 'helpers/launchFlipCoin';

// Note: components
import Button from 'components/Button';

import './style.scss';

class ScreenCoin extends Component {

  onClickFlip = () => {
    launchFlipCoin(10, -15, this.props.stopFlipping);
  }
  
  render() {
    const text = isMobileOnly 
      ? 'Потряси телефон и монетка решит в каком баре ты сегодня получаешь скидку и тусишь.'
      : '...и она решит в каком баре ты сегодня получаешь скидку и тусишь.';

    return(
      <div className="b-screen-coin">
        {!isMobileOnly && 
          <div className="b-screen-coin__button">
            <Button onClick={this.onClickFlip}>Брось монетку</Button>
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