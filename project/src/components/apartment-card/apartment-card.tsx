import { Link } from 'react-router-dom';
import { Apartment } from '../../types/offer-type';

type ApartmentCardProps = {
  apartment: Apartment;
  activeCardHandler: (apartment: Apartment | null) => void;
}

export default function ApartmentCard({ apartment, activeCardHandler }: ApartmentCardProps): JSX.Element {
  const { id, previewImage, price, rating, title, type } = apartment;
  return (
    <article className="cities__place-card place-card" onMouseEnter={() => {
      activeCardHandler(apartment);
    }} onMouseLeave={() => {
      activeCardHandler(null);
    }}
    >
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;euro</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>Beautiful &amp; {title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
