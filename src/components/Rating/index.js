import React, { Component } from 'react';

// Note: styles
import './style.scss';
class Rating extends Component {
  render() {
    return(
      <div className="b-rating">
        <span>☆</span>
        <span className="checked">☆</span>
        <span className="checked">☆</span>
        <span className="checked">☆</span>
        <span className="checked">☆</span>
      </div>
    )
  }
}

export default Rating;