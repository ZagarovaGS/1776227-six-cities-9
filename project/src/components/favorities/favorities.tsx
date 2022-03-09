import { Apartments } from '../../types/offer-type';
import FavoriteCard from '../favorite-card/favorite-card';

export type FavoritesCardProps = {
  apartments: Apartments;
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
                  {apartments.map((apartment) => {
                    if (apartment.isFavorite && apartment.city.name === 'Amsterdam') {
                      return (
                        <FavoriteCard
                          key={apartment.id}
                          apartment={apartment}
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
                  {apartments.map((apartment) => {
                    if (apartment.isFavorite && apartment.city.name === 'Cologne') {
                      return (
                        <FavoriteCard
                          key={apartment.id}
                          apartment={apartment}
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
