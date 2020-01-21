import React, { Component } from 'react';

class SettingItem extends Component {

  handleChange = (event) => {
    const { value } = event.target;
    const index = event.nativeEvent.target.selectedIndex;

    this.props.changeCity(event.nativeEvent.target[index].text, value);
  }

  render() {
    const { head, content, select, valueCity } = this.props;

    return (
      <div className="b-setting-list__item">
        {!!head &&
          <div className="b-setting-list__head">
            {!!head.title && <div className="b-setting-list__title">{head.title}</div>}
            {!!head.additional && <div className="b-setting-list__additional-title">{head.additional}</div>}
          </div>
        }
        {!!select &&
          <label className="b-setting-list__content">
            <select name='valueCity' value={valueCity}
              className="b-setting-list__name b-setting-list__name--select" onChange={this.handleChange}
            >
              <option value="saint-petersburg">Санкт-Петербург</option>
              <option value="ul'anovsk">Ульяновск</option>
              <option value="kharkov">Харьков</option>
              <option value="moscow">Москва</option>
            </select>
            {!!select.description && <div className="b-setting-list__description">{select.description}</div>}
          </label>
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
        {!!select &&
          <div className="b-setting-list__content">
            <select name='valueCity' value={valueCity} className="b-setting-list__name b-setting-list__name--select" onChange={this.handleChange}>
              {/* <option value="saint-petersburg">Санкт-Петербург</option> */}
              <option value="ulyanovsk">Ульяновск</option>
              {/* <option value="kharkov">Харьков</option> */}
              <option value="moscow">Москва</option>
            </select>
            {!!select.description && <div className="b-setting-list__description">{select.description}</div>}
          </div>
        }
      </div>
    )
  };
}

export default SettingItem;