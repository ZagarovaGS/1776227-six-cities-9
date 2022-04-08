export enum AppRoute {
  Login = '/login',
  Main = '/',
  Room = ':/offer/:id',
  Favorites = '/favorites',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum SortMethods {
  POPULAR = 'Popular',
  PRICE_LOW_TO_HIGH = 'Price: low to high',
  PRICE_HIGH_TO_LOW = 'Price: high to low',
  TOP_RATED_FIRST = 'Top rated first'
}

export enum APIRoute {
  Apartments = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Favorite = '/favorite',
  Apartment = '/hotels',
  Comments = '/comments',
}

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

export enum NameSpace {
  apartments = 'APARTMENTS',
  user = 'USER',
  status = 'STATUS',
}

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const TIMEOUT_SHOW_ERROR = 2000;
