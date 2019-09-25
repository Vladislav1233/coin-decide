import React, { Component } from 'react';

// Note: style
import './style.scss';

const data = [{
  content: [{
    name: 'Луи Дагер',
    description: 'Изменить имя'
  }]
}, {
  head: {
    title: 'General'
  },
  content: [{
    name: 'Ульяновск',
    description: 'Изменить ваш город'
  }, {
    name: '+7 (902) 009-09-09',
    description: 'Tap to change your phone number'
  }, {
    name: 'MasterCard **0962',
    description: 'Tap to change your pay card'
  }]
}, {
  head: {
    title: 'О приложении',
    additional: 'v0.12.817-a'
  },
  content: [{
    name: 'Как это работает?',
    description: 'Информация о приложении'
  }, {
    name: 'Список баров',
    description: 'Посмотреть бары учавствующие в игре'
  }]
}];

class SettingList extends Component {
  render() {
    return(
      <div className="b-setting-list">
        {data.map((item, index) => (
          <div key={`setting-${index}`} className="b-setting-list__item">
            {item.head
              ? <div className="b-setting-list__head">
                {!!item.head.title && <div className="b-setting-list__title">{item.head.title}</div>}
                {!!item.head.additional && <div className="b-setting-list__additional-title">{item.head.additional}</div>}
              </div>
              : null
            }
            {!!item.content.length && item.content.map((contentItem, contentIndex) => (
              <div key={`settingContent-${contentIndex}`} className="b-setting-list__content">
                {!!contentItem.name && <div className="b-setting-list__name">{contentItem.name}</div>}
                {!!contentItem.description && <div className="b-setting-list__description">{contentItem.description}</div>}
              </div>
            ))}
          </div>
        ))}
      </div>
    )
  }
}

export default SettingList;