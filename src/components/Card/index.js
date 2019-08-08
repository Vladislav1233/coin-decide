import React, { Component } from 'react';

import './style.scss';

class Card extends Component {
  render() {
    return(
      <div className="b-card">
        <div className="b-card__image-wrapper">
          <img className="b-card__image" src="https://media-cdn.tripadvisor.com/media/photo-w/12/a0/59/c9/69-pints-craft-pub-tverskaya.jpg" alt="" />
        </div>

        <div className="b-card__content">
          <div className="b-card__name">69 Pints</div>

          <div className="b-card__feedback">
            <div className="b-card__feedback-star b-card__feedback-star--five">
              {[...new Array(5)].map(() => (
                <span className="b-card__feedback-dot">
                  <span></span>
                </span>
              ))}
            </div>
            <div className="b-card__feedback-count">45 отзывов</div>
          </div>

          <div className="b-card__info">
            <p>
              <span className="b-card__icon">
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 97.713 97.713"><g><path d="M48.855,0C29.021,0,12.883,16.138,12.883,35.974c0,5.174,1.059,10.114,3.146,14.684 c8.994,19.681,26.238,40.46,31.31,46.359c0.38,0.441,0.934,0.695,1.517,0.695s1.137-0.254,1.517-0.695 c5.07-5.898,22.314-26.676,31.311-46.359c2.088-4.57,3.146-9.51,3.146-14.684C84.828,16.138,68.69,0,48.855,0z M48.855,54.659 c-10.303,0-18.686-8.383-18.686-18.686c0-10.304,8.383-18.687,18.686-18.687s18.686,8.383,18.686,18.687 C67.542,46.276,59.159,54.659,48.855,54.659z"/></g></svg>
              </span>
              Тверская улица 5/6, Москва, Россия
            </p>

            <p>
              <span className="b-card__icon">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 32 32"><g id="surface1"><path d="M 16 4 C 9.382813 4 4 9.382813 4 16 C 4 22.617188 9.382813 28 16 28 C 22.617188 28 28 22.617188 28 16 C 28 9.382813 22.617188 4 16 4 Z M 16 6 C 21.535156 6 26 10.464844 26 16 C 26 21.535156 21.535156 26 16 26 C 10.464844 26 6 21.535156 6 16 C 6 10.464844 10.464844 6 16 6 Z M 15 8 L 15 17 L 22 17 L 22 15 L 17 15 L 17 8 Z "></path></g></svg>
              </span>
              Открыто сегодня: 12:00 - 23:45
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Card;