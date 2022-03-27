import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import Main, { MainProps } from '../components/main/main';


export default function MainPage({ offersCount, apartments, city }: MainProps): JSX.Element {
  const [searchParams] = useSearchParams();
  const selectedCity = searchParams.get('city');

  console.log(selectedCity)
  return (
    <>
      {apartments.map((apartment) => {
        if (apartment.city.name === selectedCity) {
          return (
            <Main offersCount={offersCount} apartments={apartments} city={city} />
          )
        } else return (
          <Main offersCount={offersCount} apartments={apartments} city={city} />
        )
      }
      )}
    </>
  );
};

