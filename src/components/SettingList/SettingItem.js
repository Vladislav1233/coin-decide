import React, { Component } from 'react';

class SettingItem extends Component {

  render() {
    const { head, content } = this.props;

    return (
      <div className="b-setting-list__item">
        {!!head &&
          <div className="b-setting-list__head">
            {!!head.title && <div className="b-setting-list__title">{head.title}</div>}
            {!!head.additional && <div className="b-setting-list__additional-title">{head.additional}</div>}
          </div>
        }
        {!!content && !!content.length &&
          content.map((item, index) => (
            !!item.name ?
            <div key={`settingContent-${index}`} className="b-setting-list__content">
              {!!item.name && <div className="b-setting-list__name">{item.name}</div>}
              {!!item.description && <div className="b-setting-list__description">{item.description}</div>}
            </div>
            : null
          ))
        }
      </div>
    )
  };
}

export default SettingItem;