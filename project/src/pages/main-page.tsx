import { useSearchParams } from 'react-router-dom';
import Main from '../components/main/main';
import { useAppDispatch } from '../hooks';
import { cityNames, DEFAULT_CITY } from '../mocks/city';
import { changeCity } from '../store/action';
import { CityName } from '../types/city-name';
import { Apartments, City } from '../types/offer-type';

type MainPageProps = {
  offersCount: number;
  apartments: Apartments;
  city: City;
}

const checkCity = (cityNames: CityName[], city: string | null) => cityNames.includes(city as CityName);

export default function MainPage({ offersCount, apartments, city }: MainPageProps): JSX.Element {
  const [searchParams] = useSearchParams();
  const selectedCity = searchParams.get('city');
  const dispatch = useAppDispatch();
  const filterApartments: Apartments = apartments.filter((item) => item.city.name === selectedCity)!;
  const currentActiveCity = checkCity(cityNames, selectedCity) ? selectedCity : DEFAULT_CITY;
  // dispatch(changeCity());

  return (

    <Main offersCount={offersCount} apartments={filterApartments} city={city} activeCity={currentActiveCity} />

  );
}

