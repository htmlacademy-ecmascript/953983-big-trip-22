//import { getRandomArrayElement } from '../utils.js';

const mockPoints = [
  {
    id: 1,
    basePrice: 0,
    dateFrom: '2024-07-10T11:22Z',
    dateTo: '2024-07-10T11:45Z',
    destination: 'dest0',
    isFavorite: false,
    offers: [1,2],
    type: 'bus',
  },
  {
    id: 2,
    basePrice: 0,
    dateFrom: '2024-08-10T11:22Z',
    dateTo: '2024-08-10T11:45Z',
    destination: 'dest0',
    isFavorite: true,
    offers: [1,2],
    type: 'ship',
  },
  {
    id: 3,
    basePrice: 0,
    dateFrom: '2024-09-10T11:22Z',
    dateTo: '2024-09-10T11:45Z',
    destination: 'dest0',
    isFavorite: false,
    offers: [1,2],
    type: 'flight',
  }
];

// function getRandomPoint() {
//   return getRandomArrayElement(mockPoints);
// }

export {mockPoints};
