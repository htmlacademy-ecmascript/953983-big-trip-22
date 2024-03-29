const mockPoints = [
  {
    id: 1,
    basePrice: 1000,
    dateFrom: '2024-07-10T11:22Z',
    dateTo: '2024-07-10T11:45Z',
    destination: 1,
    isFavorite: false,
    offers: [1,2,3,4],
    type: 'bus',
  },
  {
    id: 2,
    basePrice: 2000,
    dateFrom: '2024-08-10T11:22Z',
    dateTo: '2024-08-10T11:45Z',
    destination: 2,
    isFavorite: true,
    offers: [6,7,8,9],
    type: 'ship',
  },
  {
    id: 3,
    basePrice: 3000,
    dateFrom: '2024-09-10T11:22Z',
    dateTo: '2024-09-10T11:45Z',
    destination: 3,
    isFavorite: false,
    offers: [11,12,13,14],
    type: 'flight',
  }
];

export {mockPoints};
