import React, { Component } from 'react';

class SettingItem extends Component {

  render() {
    const { head, content, select } = this.props;

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
            !!item.name
            ? <div key={`settingContent-${index}`} className="b-setting-list__content" onClick={item.onClick ? item.onClick : false}>
              {!!item.name && <div className="b-setting-list__name">{item.name}</div>}
              {!!item.description && <div className="b-setting-list__description">{item.description}</div>}
            </div>
            : null
          ))
        }
        {!!select && !!select.length &&
          select.map((item) => (
            <div key={`settingSelect-${item.value}`} className="b-setting-list__content">
              <select className="b-setting-list__name b-setting-list__name--select">
                <option value="moscow">Москва</option>
                <option value="saint-petersburg">Санкт-Петербург</option>
                <option value="ul'anovsk">Ульяновск</option>
                <option value="kharkov">Харьков</option>
              </select>
              {!!item.description && <div className="b-setting-list__description">{item.description}</div>}
            </div>
          ))
        }
      </div>
    )
  };
}

export default SettingItem;