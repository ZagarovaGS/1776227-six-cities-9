import { CityName } from '../types/city-name';
import { City } from '../types/offer-type';

export const DEFAULT_CITY = 'Amsterdam';

export const CITY: City = {
  'location': {
    'latitude': 52.380216,
    'longitude': 4.895168,
    'zoom': 10,
  },
  'name': 'Amsterdam',
};

export const cityNames: CityName[] = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const Cities: Record<string, City> = {
  'Paris': {
    'name': 'Paris',
    location: {
      'latitude': 48.8534,
      'longitude': 2.3488,
      'zoom': 9,
    },
  },
  'Cologne': {
    'name': 'Cologne',
    location: {
      'latitude': 50.938361,
      'longitude': 6.959974,
      'zoom': 13,
    },
  },
  'Brussels': {
    'name': 'Brussels',
    location: {
      'latitude': 48.85661,
      'longitude': 2.351499,
      'zoom': 13,
    },
  },
  'Amsterdam': {
    name: 'Amsterdam',
    'location': {
      'latitude': 52.380216,
      'longitude': 4.895168,
      'zoom': 10,
    },
  },
  'Hamburg': {
    name: 'Hamburg',
    'location': {
      'latitude': 53.55034,
      'longitude': 10.000654,
      'zoom': 10,
    },
  },
  'Dusseldorf': {
    name: 'Dusseldorf',
    'location': {
      'latitude': 51.225402,
      'longitude': 6.776314,
      'zoom': 13,
    },
  },
};

