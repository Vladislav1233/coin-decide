import React, { Component } from 'react';

// Note: components
import Badge from 'components/Badge';
import Rating from 'components/Rating';
import Avatar from 'components/Avatar';

// Note: styles
import './style.scss';

class Review extends Component {
  render() {
    const { reviews, barId } = this.props;
    const review = reviews.find(item => item.id === barId);
    const currDate = new Date();
    const getDateFormat = (_date) => {
      currDate.setTime(_date*1000);
      const _month = currDate.getMonth() < 9 ? `0${currDate.getMonth() + 1}` : currDate.getMonth() + 1;

      return `${currDate.getDate()}.${_month}.${currDate.getFullYear()}`;
    };

    return !!review
      ? <div className="b-review">
        <div className="b-review__head">
          <Badge>{review.final_grade}</Badge>
          <div className="b-review__category">
            <span>Бар</span>
            <span>Паб</span>
          </div>
        </div>

        <ul className="b-review__list">
          {review.reviews.map((item, index) => {
            return <li className="b-review__item" key={index}>
              <div className="b-review__review">
                <div className="b-review__review-person">
                  <div className="b-review__avatar">
                    {/* TODO: avatar */}
                    <Avatar src="https://mhealth.ru/media/images/2019/3/13/033a4223a2a34775b354411666ff04ef.width-630.jpg" />
                    <div className="b-review__name">{`${item.author.firstName} ${item.author.lastName}`}</div>
                  </div>
                </div>

                <div className="b-review__rating">
                  <Rating
                    number={Math.trunc(item.rate)}
                  />
                  <div className="b-review__rating-date">
                    {getDateFormat(item.date.seconds)}
                  </div>
                </div>

                <div className="b-review__text">
                  {item.review}
                </div>
              </div>
            </li>
          })}
        </ul>
      </div>
    : "Пока никто не оставил отзыв."
  }
}

export default Review;