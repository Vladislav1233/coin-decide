import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Card from 'components/Card';
import TabBar from 'components/TabBar';
import ArrowTo from 'components/ArrowTo';
import Code from 'components/Code';
import YMap from 'components/YMap';
import TaxiButton from 'components/TaxiButton';
import Review from 'components/Review';

// helpers
import isEmptyObj from 'helpers/isEmptyObj';

import './index.scss';

class ScreenBar extends Component {
  static propTypes = {
    endWorkTime: PropTypes.string,
    address: PropTypes.string,
    // geo: PropTypes.array, TODO
    name: PropTypes.string,
    prize: PropTypes.shape({
      description: PropTypes.string
    }),
    code: PropTypes.string,
    isAuth: PropTypes.bool
  };

  state = {
    tabIndex: 0
  };

  handleActiveIndexUpdate = (activeIndex) => {
    this.setState({
      tabIndex: activeIndex
    })
  };

  render() {
    const {
      isAuth,
      endWorkTime,
      address,
      geo,
      name,
      prize,
      code,
      qrCode,
      reviews,
      urlImage,
      backToStartScreen,
      barId
    } = this.props;
    const { tabIndex } = this.state;

    const contentBar = () => (
      <Fragment>
        <Card
          name={name}
          address={address}
          endWorkTime={endWorkTime}
          descriptionSale={prize.description}
          urlImage={urlImage}
        />
        <div className="b-screen-bar__tab-content">
          {!isEmptyObj(prize)
            ? <Code isAuth={isAuth} code={code} qrCode={qrCode} />
            : <div style={{ marginTop: '30px' }}>Тебя уже ждут здесь, приходи!</div>
          }
        </div>
      </Fragment>
    )

    const TabContent = () => {
      switch (tabIndex) {
        case 0:
          return contentBar()

        case 1:
          return <div className="b-screen-bar__tab-content b-screen-bar__tab-content--full">
            <h2 className="b-screen-bar__tab-title">{name}</h2>
            <Review reviews={reviews} barId={barId} />
          </div>

        case 2:
          return <div className="b-screen-bar__tab-content b-screen-bar__tab-content--full">
            <h2 className="b-screen-bar__tab-title">{name}</h2>
            <YMap 
              geo={geo}
            />
            <div className="b-screen-bar__taxi">
              <TaxiButton />
            </div>
          </div>

        default:
          return contentBar()
      }
    };

    return(
      <div className="b-screen-bar">
        <div className="b-screen-bar__nav">
          <div className="b-screen-bar__nav-arrow">
            <ArrowTo onClick={backToStartScreen} />
          </div>
          <div className="b-screen-bar__nav-tab-bar">
            <TabBar
              getTabIndex={this.handleActiveIndexUpdate}
              tabs={[
                'Код',
                'Отзывы',
                'Карта'
              ]}
            />
          </div>
          <div className="b-screen-bar__nav-share">
            <div className="b-screen-bar__share-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M18 3C16.8954 3 16 3.89543 16 5C16 6.10457 16.8954 7 18 7C19.1046 7 20 6.10457 20 5C20 3.89543 19.1046 3 18 3ZM14 5C14 2.79086 15.7909 1 18 1C20.2091 1 22 2.79086 22 5C22 7.20914 20.2091 9 18 9C15.7909 9 14 7.20914 14 5Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10ZM2 12C2 9.79086 3.79086 8 6 8C8.20914 8 10 9.79086 10 12C10 14.2091 8.20914 16 6 16C3.79086 16 2 14.2091 2 12Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M18 17C16.8954 17 16 17.8954 16 19C16 20.1046 16.8954 21 18 21C19.1046 21 20 20.1046 20 19C20 17.8954 19.1046 17 18 17ZM14 19C14 16.7909 15.7909 15 18 15C20.2091 15 22 16.7909 22 19C22 21.2091 20.2091 23 18 23C15.7909 23 14 21.2091 14 19Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M7.72599 13.0065C8.00406 12.5293 8.6163 12.3679 9.09348 12.646L15.9235 16.626C16.4007 16.9041 16.5621 17.5163 16.284 17.9935C16.0059 18.4707 15.3937 18.6321 14.9165 18.354L8.08652 14.374C7.60934 14.0959 7.44793 13.4837 7.72599 13.0065Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M16.2737 6.00597C16.5521 6.48297 16.391 7.09532 15.914 7.37369L9.09403 11.3537C8.61703 11.6321 8.00468 11.471 7.72631 10.994C7.44795 10.517 7.60897 9.90468 8.08597 9.62631L14.906 5.64631C15.383 5.36795 15.9953 5.52897 16.2737 6.00597Z" fill="white"/>
              </svg>
            </div>
          </div>
        </div>

        <TabContent />
      </div>
    )
  }
}

export default ScreenBar;