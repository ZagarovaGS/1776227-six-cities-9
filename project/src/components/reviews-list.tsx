import { Reviews } from '../types/comment-types';
import ReviewItem from './review-item';

export type ReviewList = {
  reviews: Reviews[];
}

export default function ReviewsList({ reviews }: ReviewList) {

  return (
    <ul className="reviews__list">
      {reviews.map((userReview) => (
        <ReviewItem
          key={userReview.id}
          id={userReview.id}
          userName={userReview.userName}
          date={userReview.date}
          review={userReview.review}
        />
      ))}
    </ul>
  );
}
