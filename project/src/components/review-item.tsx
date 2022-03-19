import { Reviews } from '../types/comment-types';

export default function ReviewItem(userReview: Reviews) {
  const { userName, date, review } = userReview;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src="img/avatar-max.jpg" width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {userName}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden"></span>
          </div>
        </div>
        <p className="reviews__text">
          {review}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{date}</time>
      </div>
    </li>
  );
}
