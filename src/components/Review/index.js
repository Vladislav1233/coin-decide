import React, { Component } from 'react';

// Note: components
import Badge from 'components/Badge';
import Rating from 'components/Rating';
import Avatar from 'components/Avatar';

// Note: styles
import './style.scss';

class Review extends Component {
  render() {
    return(
      <div className="b-review">
        <div className="b-review__head">
          <Badge>4,7</Badge>
          <div className="b-review__category">
            <span>Бар</span>
            <span>Паб</span>
          </div>
        </div>

        <ul className="b-review__list">
          <li className="b-review__item">
            <div className="b-review__review">
              <div className="b-review__review-person">
                <div className="b-review__avatar">
                  <Avatar src="https://mhealth.ru/media/images/2019/3/13/033a4223a2a34775b354411666ff04ef.width-630.jpg" />
                  <div className="b-review__name">Арина Прихожая</div>
                </div>
              </div>

              <div className="b-review__rating">
                <Rating />
                <div className="b-review__rating-date">05 июля 2019</div>
              </div>

              <div className="b-review__text">
                Расстались с парнем, отлично залечили раны в Neon Monkey. Самые вкусные коктейли в Москве. Отличный выбор, и ингредиенты. Место для узкого круга «своих». Highly recommended ;)
              </div>
            </div>
          </li>

          <li className="b-review__item">
            <div className="b-review__review">
              <div className="b-review__review-person">
                <div className="b-review__avatar">
                  <Avatar src="https://mhealth.ru/media/images/2019/3/13/033a4223a2a34775b354411666ff04ef.width-630.jpg" />
                  <div className="b-review__name">Арина Прихожая</div>
                </div>
              </div>

              <div className="b-review__rating">
                <Rating />
                <div className="b-review__rating-date">05 июля 2019</div>
              </div>

              <div className="b-review__text">
                Расстались с парнем, отлично залечили раны в Neon Monkey. Самые вкусные коктейли в Москве. Отличный выбор, и ингредиенты. Место для узкого круга «своих». Highly recommended ;)
              </div>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default Review;