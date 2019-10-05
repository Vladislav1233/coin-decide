import React, { Component } from "react";
import phoneImg from "images/phones.png";

// Note: styles
import "./style.scss";

class DesktopScreen extends Component {
  render() {
    return (
      <div className="desktop-screen">
        <div className="desktop-screen__center">
          <div className="desktop-screen__left">
            <img className="desktop-screen__img" src={phoneImg} alt="" />
          </div>
          <div className="desktop-screen__right">
            <h1 className="desktop-screen__h1">
              Бросай монетку и пей бесплатно!
            </h1>
            <h2 className="desktop-screen__h2">
              Закрути свою удачу и получи скидку в случайном баре
            </h2>
            <button className="desktop-screen__btn" type="button">
              Запустите с телефона
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default DesktopScreen;
