import React, { Component } from 'react';

// Note: styles
import './style.scss';

class Avatar extends Component {

  render() {
    const { text, src } = this.props;

    return(
      <div className="b-avatar">
        {!!text && text}
        {!!src && <img src={src} alt="" />}
      </div>
    )
  }
}

export default Avatar;