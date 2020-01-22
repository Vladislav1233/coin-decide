import React, { Component } from 'react';
import qrImage from 'images/qr-code.png';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './index.scss';

class Code extends Component {
  static propTypes = {
    isAuth: PropTypes.bool
  };

  static defaultProps = {
    isAuth: false
  };

  render() {
    const { isAuth, code, qrCode } = this.props;

    return(
      <div className="b-code">
        <div className="b-code__value">Code: {code}</div>
        {!!qrCode
          && <div className="b-code__qr-wrapper">
            <img src={qrImage} alt="qr код" />
          </div>
        }

        <div className="b-code__footer">
          <div className="b-code__note">
            <span>Покажи QR-code, или продиктуй код бармену и получи скидку</span>
          </div>

          {!isAuth
            && <Link to="/signup" className="b-code__auth">
              <span>Зарегистрируйся</span> чтобы не потерять!.
            </Link>
          }
        </div>
      </div>
    )
  }
}

export default Code;