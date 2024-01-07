import { render } from '../render.js';
//import { getRandomArrayElement } from '../utils.js';
import Sort from '../view/sort-view.js';
import CreationForm from '../view/creating-form-view.js';
import EditingForm from '../view/editing-form-view.js';
import TripPoint from '../view/trip-point.js';
import TripList from '../view/trip-list-view.js';
import { getDefaultPoint } from '../const.js';

export default class TripListPresenter {

  constructor({mainContentContainer, pointModel}) {
    this.mainContentContainer = mainContentContainer; //container for sort and trip list
    this.pointModel = pointModel;
  }

  tripListComponent = new TripList(); // trip list

  init() {
    const points = this.pointModel.getPoints();
    const destinations = this.pointModel.getDestinations();
    const offers = this.pointModel.getOffers();

    render(new Sort(), this.mainContentContainer);
    render(this.tripListComponent, this.mainContentContainer);

    render(new CreationForm(points[2], destinations, offers), this.tripListComponent.getElement());
    render(new EditingForm(getDefaultPoint(), destinations, offers), this.tripListComponent.getElement());

    for(const point of points) {
      render(new TripPoint(point, destinations, offers), this.tripListComponent.getElement());
    }

  }
}
