import React, { Component } from 'react';
import arrowSideIcon from "images/arrow-side.svg";
import bem from "config/bem";
import logoNew from "images/beercoin.svg";
import { version } from "helpers/const";

// Note: styles
import './style.scss';

const bemClass = bem("about");

class AboutApp extends Component {
  render() {
    const { history } = this.props;
    return (
      <>
        <div className={ bemClass('nav') }>
          <div className="b-coin-head__item" onClick={ () => history.goBack() }>
            <div className="b-coin-head__icon">
              <img src={ arrowSideIcon } alt="" />
            </div>
          </div>

          <div className="b-screen-bar__nav-tab-bar">
            <h2 className={ bemClass('title') }>О приложении</h2>
          </div>
          <div className="b-coin-head__item">
            <div className="b-coin-head__icon">
            </div>
          </div>
        </div>
        <div className={ bemClass('content') }>
          <img className={ bemClass('logo') } src={ logoNew } alt="BeerCoin" />

          <p className={ bemClass('version') }>{ version }</p>

          <p className={ bemClass('slogan') }>BeerCoin - Позволь монетке решить за тебя</p>

          <h2>Описание</h2>
          <p>Данное приложение разработано с целью помочь вам определиться с баром или выбрать случайный в неизвестном городе или районе.</p>

          <h2>Создатели</h2>
          <p>
            <a href="https://www.instagram.com/amedomary2/">Максим</a>
            <br />
            <a href="https://www.instagram.com/vladka1233/">Влад</a>
          </p>

        </div>
      </>
    )
  }
}

export default AboutApp;