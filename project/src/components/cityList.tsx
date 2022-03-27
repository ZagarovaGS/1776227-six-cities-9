import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { CityName } from '../types/city-name';
import { cityNames } from '../mocks/city';


function getLinkClassName(city: string, activeCity: string | null): string {
  return classNames({
    'locations__item-link': true,
    'tabs__item': true,
    'tabs__item--active': city === activeCity,
  });
}

type CitiesPropsType = {
  activeCity: CityName,
}

function CityList({ activeCity }: CitiesPropsType) {

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cityNames.map((city) => (
          <li className="locations__item" key={city}>
            <Link className={getLinkClassName(city, activeCity)} to={`/?city=${city}`}>
              <span>{city}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CityList;
