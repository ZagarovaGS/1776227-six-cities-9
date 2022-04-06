import { ChangeEvent } from 'react';

type StarProps = {
  title: string;
  index: string;
  formChangeHandler: (evt: ChangeEvent<HTMLInputElement>) => void;
  checkedRating: number;
};

const MAX_STAR_RATING = 5;

function Star(props: StarProps): JSX.Element {

  const { formChangeHandler, checkedRating, title, index } = props;
  const value: string = (MAX_STAR_RATING - Number(index)).toString();
  return (
    <>
      <input
        onChange={formChangeHandler}
        className="form__rating-input visually-hidden"
        name="rating"
        value={value}
        id={`${value}-star`}
        type="radio"
        checked={checkedRating === 5}
      />
      <label
        htmlFor={`${value}-star`}
        className="reviews__rating-label form__rating-label"
        title={title}
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default Star;
