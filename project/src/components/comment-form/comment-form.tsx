import { ChangeEvent, useState, FormEvent } from 'react';
import { useAppDispatch } from '../../hooks';
import { sendReview } from '../../store/api-action';
import { Apartment } from '../../types/offer-type';
import { Reviews } from '../../types/comment-types';
import Star from './star';

const STAR_TITLES: string[] = [
  'perfect',
  'good',
  'not bad',
  'badly',
  'terribly',
];
const MIN_REVIEW_LENGTH = 50;
const MAX_REVIEW_LENGTH = 300;

export type CommentFormProps = {
  apartment: Apartment;
}

export default function CommentForm({ apartment }: CommentFormProps) {
  const dispatch = useAppDispatch();

  const [comment, setComment] = useState<Pick<Reviews, 'comment' | 'rating'>>({
    rating: 0,
    comment: '',
  });

  const [isSending, setIsSending] = useState(false);

  const formChangeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setComment({ ...comment, [name]: name === 'rating' ? Number(value) : value });
  };

  const commentSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (comment.comment.length && comment.rating) {
      setIsSending(true);
      const actionResult = await dispatch(sendReview({ apartmentId: apartment.id, review: comment }));
      if (actionResult.meta.requestStatus === 'fulfilled') {
        setComment({ rating: 0, comment: '' });
      }
      setIsSending(false);
    }
  };
  const isReviewLengthCorrect =
    comment.comment.length >= MIN_REVIEW_LENGTH &&
    comment.comment.length <= MAX_REVIEW_LENGTH;

  return (

    <form className="reviews__form form" action="" method="post" onSubmit={commentSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {STAR_TITLES.map((title, index) => (
          <Star
            key={title}
            index={index.toString()}
            title={title}
            formChangeHandler={formChangeHandler}
            checkedRating={comment.rating}
          />
        ))}
      </div>
      <textarea className="reviews__textarea form__textarea" name="comment" disabled={isSending} placeholder="Tell how was your stay, what you like and what can be improved" onChange={formChangeHandler} value={comment.comment}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isSending && isReviewLengthCorrect}>Submit</button>
      </div>
    </form>
  );
}
