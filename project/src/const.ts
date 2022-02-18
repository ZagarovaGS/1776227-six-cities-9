export enum AppRoute {
  Login = '/login',
  Main = '/',
  Room = '/property',
  Favorities = '/favorites',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const apartments = [
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
