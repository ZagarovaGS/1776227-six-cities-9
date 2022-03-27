import React, { useState } from 'react';
import { Apartment, Apartments, City } from '../../types/offer-type';
import ApartmentList from '../apartment-list';
import Map from '../map';
import CityList from '../cityList';
import { CityName } from '../../types/city-name';

export type MainProps = {
  offersCount: number;
  apartments: Apartments;
  city: City;
  activeCity: CityName;
}


function Main({ apartments, offersCount, city, activeCity }: MainProps): JSX.Element {
  const [activeApartment, setActiveApartment] = useState<Apartment | null>(null);
  const activeCardHandler = (apartment: Apartment | null) => {
    setActiveApartment(apartment);
  };

  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CityList activeCity={activeCity} />
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
              <ApartmentList apartments={apartments} activeCardHandler={activeCardHandler} />
            </section>

            <Map city={city} apartments={apartments} mapClassName='cities__right-section' />

          </div>
        </div>
      </main>
    </div>
  );
}
export default Main;
