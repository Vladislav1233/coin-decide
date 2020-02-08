import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
        { !!head &&
          <div className="b-setting-list__head">
            { !!head.title && <div className="b-setting-list__title">{ head.title }</div> }
            { !!head.additional && <div className="b-setting-list__additional-title">{ head.additional }</div> }
          </div>
        }
        { !!content && !!content.length &&
          content.map((item, index) => {
            return !!item.name || !!item.link || item.linkTo
              ? <div key={ `settingContent-${index}` } className="b-setting-list__content" onClick={ item.onClick ? item.onClick : () => { } }>
                { !!item.name && <div className="b-setting-list__name">{ item.name }</div> }
                { !!item.link && <a href={item.href} className="b-setting-list__name b-setting-list__name--link">{ item.link }</a> }
                { !!item.linkTo  && <Link className="b-setting-list__name" to={item.href}>{item.linkTo}</Link>}
                { !!item.description && <div className="b-setting-list__description">{ item.description }</div> }
              </div>
              : null
          })
        }
        { !!select &&
          <div className="b-setting-list__content">
            <select name='valueCity' value={ valueCity } className="b-setting-list__name b-setting-list__name--select" onChange={ this.handleChange }>
              <option value="ulyanovsk">Ульяновск</option>
              {/* <option value="kharkov">Харьков</option> */ }
              <option value="moscow">Москва</option>
              <option value="saint_petersburg">Санкт-Петербург</option>
            </select>
            { !!select.description && <div className="b-setting-list__description">{ select.description }</div> }
          </div>
        }
      </div>
    )
  };
}

export default SettingItem;