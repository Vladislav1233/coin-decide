import React, { Component } from 'react';
import qrImage from 'images/qr-code.png';

import './index.scss';

class Code extends Component {
  render() {
    return(
      <div className="b-code">
        <div className="b-code__value">Code: 871638401</div>
        <div className="b-code__qr-wrapper">
          <img src={qrImage} alt="qr код" />
        </div>
      </div>
    )
  }
}

export default Code;