import React from 'react';
import ApartmentCard from '../aprtment-card/apartment-card';

type WellcomeScreenProps = {
  offersCount: number;
}

function Main({ offersCount }: WellcomeScreenProps): JSX.Element {
  const apartments = [
    {
      id: 1,
      cardImg: 'img/apartment-01.jpg',
      priceValue: '120 euro',
      priceText: 'night',
      cardName: ' luxurious apartment at great location',
      cardType: 'Apartment',
    },
    {
      id: 2,
      cardImg: 'img/room.jpg',
      priceValue: '80 euro',
      priceText: 'night',
      cardName: 'Beatuful palace',
      cardType: 'Private room',
    },
    {
      id: 3,
      cardImg: 'img/apartment-02.jpg',
      priceValue: '132 euro',
      priceText: 'night',
      cardName: 'Canal View Prinsengracht',
      cardType: 'Apartment',
    },
    {
      id: 4,
      cardImg: 'img/apartment-03.jpg',
      priceValue: '180 euro',
      priceText: 'night',
      cardName: 'Nice, cozy, warm big bed apartment',
      cardType: 'Apartment',
    },
    {
      id: 5,
      cardImg: 'img/room.jpg',
      priceValue: '80 euro',
      priceText: 'night',
      cardName: 'Wood and stone place',
      cardType: 'Private room',
    },
  ];
  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Paris</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Cologne</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Brussels</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item tabs__item--active">
                  <span>Amsterdam</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Hamburg</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Dusseldorf</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersCount} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                {apartments.map((card) => (
                  <ApartmentCard
                    key={card.id}
                    id={card.id}
                    cardImg={card.cardImg}
                    priceValue={card.priceValue}
                    priceText={card.priceText}
                    cardName={card.cardName}
                    cardType={card.cardType}
                  />
                ),
                )};
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Main;
