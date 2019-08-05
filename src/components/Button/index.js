import React, { Component } from 'react';

import './style.scss';

class Button extends Component {
  render() {
    const { children, tagName, onClick } = this.props;
    const TagName = tagName;

    return(
      <TagName
        className='b-button'
        onClick={onClick}
      >
        {children}
      </TagName>
    )
  }
}

Button.defaultProps = {
  tagName: 'button'
}

export default Button