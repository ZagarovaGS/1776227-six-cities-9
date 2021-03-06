import { useAppSelector } from '../hooks';
import ReviewItem from './review-item';

export default function ReviewsList() {
  const comments = useAppSelector((state) => state.comments);
  return (
    <ul className="reviews__list">
      {comments.map((userReview) => (
        <ReviewItem key={userReview.id} review={userReview} />
      ))}
    </ul>
  );
}
