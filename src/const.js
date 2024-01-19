const POINT_TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];
const POINT_COUNT = 4;

const getDefaultPoint = () => ({
  basePrice: 0,
  dateFrom: new Date().toISOString(),
  dateTo: new Date().toISOString(),
  destination: 1,
  isFavorite: false,
  offers: [],
  type: 'bus',
});

export { POINT_TYPES, POINT_COUNT, getDefaultPoint };

