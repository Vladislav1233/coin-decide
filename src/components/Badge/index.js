import React, { Component } from 'react';

// Note: styles
import './style.scss';

class Badge extends Component {
  render() {
    return(
      <div className="b-badge">{this.props.children}</div>
    )
  }
}

export default Badge;