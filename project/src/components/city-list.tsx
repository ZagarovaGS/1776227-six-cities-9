import classNames from 'classnames';
import { cityNames } from '../mocks/city';
import { useAppDispatch, useAppSelector } from '../hooks';
import { City } from '../types/offer-type';
import { changeCity } from '../store/action';


function getLinkClassName(city: string, activeCity: City): string {
  return classNames({
    'locations__item-link': true,
    'tabs__item': true,
    'tabs__item--active': city === activeCity.name,
  });
}

function CityList() {
  const activeCity = useAppSelector(({ APARTMENTS }) => APARTMENTS.city);
  const dispatch = useAppDispatch();

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cityNames.map((city) => (
          <li className="locations__item" key={city}>
            <a className={getLinkClassName(city, activeCity)} onClick={() => dispatch(changeCity(city))}>
              <span>{city}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CityList;
