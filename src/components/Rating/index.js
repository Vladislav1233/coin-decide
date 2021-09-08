import React, { Component } from "react";

// Note: styles
import "./style.scss";
class Rating extends Component {
  render() {
    const { number } = this.props;
    const maxRate = [...new Array(5)];
    const rateNumber = maxRate.length - number;

    return (
      <div className="b-rating">
        {maxRate.map((item, index) => {
          if (index < rateNumber) {
            return <span>☆</span>;
          }

          return <span className="checked">☆</span>;
        })}
      </div>
    );
  }
}

export default Rating;
