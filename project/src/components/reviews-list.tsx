import { useAppSelector } from '../hooks';
import { Reviews } from '../types/comment-types';
import ReviewItem from './review-item';

export type ReviewList = {
  reviews: Reviews[];
}

export default function ReviewsList() {
  const commentObject = useAppSelector((state) => state.comments);
  return (
    <ul className="reviews__list">
      {commentObject.map((userReview) => (
        <ReviewItem
          key={userReview.id}
          id={userReview.id}
          name={userReview.user.name}
          date={userReview.date}
          comment={userReview.comment}
          avatarUrl={userReview.user.avatarUrl}
          rating={userReview.rating}
        />
      ))}
    </ul>
  );
}
