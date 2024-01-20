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

  get points() {
    return this.points;
  }

  get offers() {
    return this.offers;
  }

  getDestinations() {
    return this.destination;
  }
}
