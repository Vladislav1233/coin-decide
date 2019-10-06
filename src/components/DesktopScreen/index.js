import React, { Component } from "react";
import phoneImg from "images/phones.png";
import logo from "images/logo.png";

// Note: styles
import "./style.scss";

class DesktopScreen extends Component {
  render() {
    return (
      <>
        <div className="desktop-screen">
          <header className="desktop-screen__header">
            <div className="container">
              <img className="desktop-screen__logo" src={logo} alt="beer-coin"/>
              <nav className="desktop-screen__nav">
                <a className="desktop-screen__nav-link" href="http://">
                  Мои коды
                </a>
                <a className="desktop-screen__nav-link" href="http://">
                  Приложение
                </a>
                <a className="desktop-screen__nav-link" href="http://">
                  Рейтинг - coming soon
                </a>
              </nav>
              <input
                className="desktop-screen__search"
                type="text"
                name="text"
                id=""
                disabled
                placeholder="Coming soon"
              />
            </div>
          </header>

          <div className="desktop-screen__center">
            <div className="desktop-screen__left">
              <img className="desktop-screen__img" src={phoneImg} alt="" />
            </div>
            <div className="desktop-screen__right">
              <h1 className="desktop-screen__h1">
                Бросай монетку и пей бесплатно!
              </h1>
              <h2 className="desktop-screen__h2">
                Закрути свою удачу и получи скидку в случайном баре. "Beer coin
                - for your awesome night"
              </h2>
              <button className="desktop-screen__btn" type="button">
                Открыть на телефоне
              </button>
            </div>
          </div>
        </div>
        <footer className="desktop-screen__footer">
          <div className="desktop-screen__cookies">
            We use cookies - by using this site you agree to ourApple Privacy
            Policy
          </div>
          <div>© Copyright 2019 Beer Coin</div>
        </footer>
      </>
    );
  }
}

export default DesktopScreen;
