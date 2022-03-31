import React, { useState } from 'react';
import { Apartment, Apartments } from '../../types/offer-type';
import ApartmentList from '../apartment-list';
import Map from '../map';
import CityList from '../city-list';
import { useAppSelector } from '../../hooks';
import { apartments } from '../../mocks/offer';
import SortList from '../sort-list';
import { SortMethods } from '../../const';

function Main(): JSX.Element {
  const [activeApartment, setActiveApartment] = useState<Apartment | null>(null);
  const activeCardHandler = (apartment: Apartment | null) => {
    setActiveApartment(apartment);
  };

  const city = useAppSelector((state) => state.city);
  const currentApartments = useAppSelector((state) => state.currentApartments);
  const [sortBy, setSortBy] = useState<string>(SortMethods.POPULAR);

  const sortOptionsHandle = (SortOption: string): void => {
    setSortBy(SortOption);
  };

  const changeOrderAparments = function (
    sortMethod: string,
    currentFilteredApartments: Apartments,
  ): Apartments {
    switch (sortMethod) {
      case SortMethods.PRICE_LOW_TO_HIGH:
        return currentFilteredApartments.sort((firstItem, lastItem) => firstItem.price - lastItem.price);
      case SortMethods.PRICE_HIGH_TO_LOW:
        return currentFilteredApartments.sort((firstItem, lastItem) => lastItem.price - firstItem.price);
      case SortMethods.TOP_RATED_FIRST:
        return currentFilteredApartments.sort((firstItem, lastItem) => lastItem.rating - firstItem.rating);
      case SortMethods.POPULAR:
      default:
        return currentFilteredApartments;
    }
  };
  const filteredApartments: Apartments = apartments.filter(
    (apartment) => apartment.city.name === city.name,
  );
  const sortedFilteredApartments = changeOrderAparments(sortBy, filteredApartments);

  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CityList />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentApartments.length} places to stay in Amsterdam</b>
              <SortList sortOptionsHandle={sortOptionsHandle} />
              <ApartmentList apartments={sortedFilteredApartments} activeCardHandler={activeCardHandler} />
            </section>

            <Map city={city} apartments={currentApartments} activeApartment={activeApartment} mapClassName='cities__right-section' />

          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
