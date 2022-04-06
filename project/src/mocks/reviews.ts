import { Reviews } from './../types/comment-types';

export const reviews: Reviews[] = [{
  comment: 'I was glad to visit this wonderful place',
  date: '03.11.2020',
  id: 1,
  rating: 5,
  user: {
    avatarUrl: '',
    id: 1,
    isPro: false,
    name: 'Nick',
  },
},
{
  comment: 'This is the best place',
  date: '04.08.2021',
  id: 1,
  rating: 4,
  user: {
    avatarUrl: '',
    id: 2,
    isPro: false,
    name: 'Bob',
  },
},
{
  comment: 'I celebrated New Year here. It was good holidays',
  date: '01.01.2022',
  id: 3,
  rating: 4,
  user: {
    avatarUrl: '',
    id: 3,
    isPro: false,
    name: 'Ann',
  },
},
];

