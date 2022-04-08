import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import Authorized from './authorized';
import Unauthorized from './unauthorized';

export default function Header() {
  const authorizationStatus = useAppSelector(({ APARTMENTS }) => APARTMENTS.authorizationStatus);
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {authorizationStatus === AuthorizationStatus.Auth ? (
                <Authorized />
              ) : (
                <Unauthorized />
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
