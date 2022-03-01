import { CardProps } from '../../types/offer-type';
import FavoriteCard from '../favoriteCard/favorite-card';

export type FavoritesCardProps = {
  apartments: CardProps;
}

export default function Favorites({ apartments }: FavoritesCardProps) {
  return (
    <div className="page">
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {apartments.map((card) => {
                    if (card.isFavorite === true && card.city.name === 'Amsterdam') {
                      return (
                        <FavoriteCard
                          key={card.id}
                          id={card.id}
                          previewImage={card.previewImage}
                          price={card.price}
                          rating={card.rating}
                          title={card.title}
                          type={card.type}
                        />
                      );
                    }
                  },
                  )};
                </div>
              </li>
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {apartments.map((card) => {
                    if (card.isFavorite === true && card.city.name === 'Cologne') {
                      return (
                        <FavoriteCard
                          key={card.id}
                          id={card.id}
                          previewImage={card.previewImage}
                          price={card.price}
                          rating={card.rating}
                          title={card.title}
                          type={card.type}
                        />
                      );
                    }
                  },
                  )}
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}
