import { mockPoints } from '../mock/points.js';
import { mockDestinations } from '../mock/destinations.js';
import { mockOffers } from '../mock/offers.js';

export default class PointModel {
  constructor() {
    this.points = [];
    this.offers = [];
    this.destination = [];
  }

  init() {
    this.points = mockPoints;
    this.offers = mockOffers;
    this.destination = mockDestinations;
  }

  get allPoints() {
    return this.points;
  }

  get allOffers() {
    return this.offers;
  }

  get allDestinations() {
    return this.destination;
  }
}
