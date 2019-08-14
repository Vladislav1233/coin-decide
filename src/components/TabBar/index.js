import React, { Component } from 'react';

import Tab from '@material/react-tab';
import TabBarComponent from '@material/react-tab-bar';
import '@material/react-tab-bar/dist/tab-bar.css';
import '@material/react-tab-scroller/dist/tab-scroller.css';
import '@material/react-tab/dist/tab.css';
import '@material/react-tab-indicator/dist/tab-indicator.css';

import './index.scss';


class TabBar extends Component {
  state = {
    activeIndex: 0
  }

  handleActiveIndexUpdate = (activeIndex) => {
    this.setState({activeIndex});

    if(this.props.getTabIndex) {
      this.props.getTabIndex(activeIndex);
    }
  };

  render() {
    const { tabs } = this.props;

    return(
      <div className="b-tab-bar">
        <TabBarComponent
          activeIndex={this.state.activeIndex}
          handleActiveIndexUpdate={this.handleActiveIndexUpdate}
        >
          {tabs.map(item => {
            return <Tab key={item}>
              <span className='mdc-tab__text-label'>{item}</span>
            </Tab>
          })}
        </TabBarComponent>
      </div>
    )
  }
}

export default TabBar;