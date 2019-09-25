import React, { Component } from 'react';
// import { isMobileOnly } from 'react-device-detect';
import Slider from 'react-slick';
import { Player, ControlBar } from 'video-react';
import 'video-react/dist/video-react.css';
// import launchFlipCoin from 'helpers/launchFlipCoin';

// Note: media
import v from 'images/coin-v.mp4';
import settingIcon from 'images/setting.svg';
import list from 'images/list.svg';
import swipeImg from 'images/swipe.svg';
import arrowSideIcon from 'images/arrow-side.svg';

// Note: components
import PromocodeList from 'components/PromocodeList';
import SettingList from 'components/SettingList';
// import Button from 'components/Button';

import './style.scss';

class ScreenCoin extends Component {

  // TODO: shake событие
  // onClickFlip = () => {
  //   launchFlipCoin(10, -15, this.props.stopFlipping);
  // }

  nextSlide = () => {
    this.slider.slickNext();
  };

  previousSlide = () => {
    this.slider.slickPrev();
  };

  render() {
    const sliderSetting = {
      dots: true,
      infinity: false,
      adaptiveHeight: true,
      initialSlide: 1,
      arrows: false,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return(
      <div className="b-screen-coin">
        <Slider ref={c => (this.slider = c)} { ...sliderSetting }>
          <div className="b-screen-coin__slide">
            <h2 className="b-screen-coin__title">Настройки</h2>

            <div className="b-coin-head">
              <div className="b-coin-head__item b-coin-head__item--right">
                <div className="b-coin-head__icon b-coin-head__icon--right" onClick={this.nextSlide}>
                  <img src={arrowSideIcon} alt="" />
                </div>
              </div>
            </div>

            <SettingList />
          </div>

          <div className="b-screen-coin__slide">
            <div className="b-coin-head">
              <div className="b-coin-head__item">
                <div className="b-coin-head__icon" onClick={this.previousSlide}>
                  <img src={settingIcon} alt="" />
                </div>
              </div>

              <div className="b-coin-head__item">
                <div className="b-coin-head__icon" onClick={this.nextSlide}>
                  <img src={list} alt="" />
                </div>
              </div>
            </div>

            <div className="b-screen-coin__control-image">
              <img src={swipeImg} alt="" />
              <div></div>
            </div>

            <Player fluid={false} width="100%" height="100%">
              <source src={v}/>
              <ControlBar disableCompletely={true} />
            </Player>
          </div>

          <div className="b-screen-coin__slide">
            <h2 className="b-screen-coin__title">Мои промокоды</h2>

            <div className="b-coin-head">
              <div className="b-coin-head__item">
                <div className="b-coin-head__icon" onClick={this.previousSlide}>
                  <img src={arrowSideIcon} alt="" />
                </div>
              </div>
            </div>

            <PromocodeList />
          </div>
        </Slider>
      </div>
    )
  }
}

export default ScreenCoin;