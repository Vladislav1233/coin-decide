import React, { Component } from "react";
// import { isMobileOnly } from 'react-device-detect';
import Slider from "react-slick";
import { Player, ControlBar } from "video-react";
import "video-react/dist/video-react.css";
import { Swipeable } from "react-swipeable";
// import launchFlipCoin from 'helpers/launchFlipCoin';

// Note: media
import v from "images/coin-v.mp4";
import settingIcon from "images/setting.svg";
import list from "images/list.svg";
import swipeImg from "images/swipe.svg";
import arrowSideIcon from "images/arrow-side.svg";

// Note: components
import PromocodeList from "components/PromocodeList";
import SettingList from "components/SettingList";
// import Button from 'components/Button';

import "./style.scss";

navigator.geolocation.getCurrentPosition(pos => {
  console.log(pos);
});

class ScreenCoin extends Component {
  state = {
    flipEnded: false,
    isCoinToss: false
  };

  componentDidMount() {
    // Note: subscribe state change on player
    this.player.subscribeToStateChange(this.handleStateChange.bind(this));
    this.player.play();
    this.player.pause();
  }

  handleStateChange(state, prevState) {
    if (state.ended) {
      this.props.stopFlipping();
    }
  }

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

  onSwipedUp = () => {
    this.setState({
      isCoinToss: true
    });
    this.player.play();
  };

  render() {
    const { isCoinToss } = this.state;

    const sliderSetting = {
      dots: true,
      infinity: false,
      adaptiveHeight: true,
      initialSlide: 1,
      arrows: false,
      fade: true, // TODO: Сделать не fade но чтобы запускалась монетка, а то неясно почему монетка не работает.
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div className={`b-screen-coin ${isCoinToss ? "is-coin-toss" : ""}`}>
        <Slider ref={c => (this.slider = c)} {...sliderSetting}>
          <div className="b-screen-coin__slide">
            <h2 className="b-screen-coin__title">Настройки</h2>

            <div className="b-coin-head">
              <div
                className="b-coin-head__item b-coin-head__item--right"
                onClick={this.nextSlide}
              >
                <div className="b-coin-head__icon b-coin-head__icon--right">
                  <img src={arrowSideIcon} alt="" />
                </div>
              </div>
            </div>

            <SettingList />
          </div>

          <div className="b-screen-coin__slide">
            <div className={`b-coin-head ${isCoinToss ? "is-hide" : ""}`}>
              <button
                className="b-coin-head__item"
                type="button"
                onClick={this.previousSlide}
              >
                <div className="b-coin-head__icon">
                  <img src={settingIcon} alt="" />
                </div>
              </button>

              <button
                className="b-coin-head__item"
                type="button"
                onClick={this.nextSlide}
              >
                <div className="b-coin-head__icon">
                  <img src={list} alt="" />
                </div>
              </button>
            </div>

            <Swipeable
              className="b-screen-coin__swipeable"
              onSwipedUp={this.onSwipedUp}
              preventDefaultTouchmoveEvent={true}
            >
              <div
                className={`b-screen-coin__control-image ${
                  isCoinToss ? "is-hide" : ""
                }`}
              >
                <img src={swipeImg} alt="" />
                <div></div>
              </div>

              <Player
                ref={player => {
                  this.player = player;
                }}
                fluid={false}
                width="100%"
                height="100%"
                playsInline
                type='video/mp4'
                preload="auto"
                src={v}
              >
                {/* <source src={v} /> */}
                <ControlBar disableCompletely={true} />
              </Player>
            </Swipeable>
          </div>

          <div className="b-screen-coin__slide">
            <h2 className="b-screen-coin__title">Мои промокоды</h2>

            <div className="b-coin-head">
              <div className="b-coin-head__item" onClick={this.previousSlide}>
                <div className="b-coin-head__icon">
                  <img src={arrowSideIcon} alt="" />
                </div>
              </div>
            </div>

            <PromocodeList />
          </div>
        </Slider>
      </div>
    );
  }
}

export default ScreenCoin;
