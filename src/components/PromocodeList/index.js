import React, { Component } from 'react';

// Note: Components
import PromocodeItem from './PromocodeItem';

// Note: styles
import './style.scss';

class PromocodeList extends Component {
  render() {
    return(
      <ul className="b-promocode-list">
        <li className="b-promocode-list__item">
          <PromocodeItem 
            
          />
        </li>
      </ul>
    )
  }
}

export default PromocodeList;