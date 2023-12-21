import { render } from '../render.js';

import Sort from '../view/sort-view.js';
import CreationForm from '../view/creating-form-view.js';
import EditingForm from '../view/editing-form-view.js';
import TripPoint from '../view/trip-point.js';
import TripList from '../view/trip-list-view.js';
import TripEvent from '../view/trip-event-view.js';

export default class TripListPresenter {
  tripListComponent = new TripList(); // trip list

  tripEventComponent = new TripEvent(); // item of the list

  constructor({mainContentContainer}) {
    this.mainContentContainer = mainContentContainer; //container for sort and trip list
  }

  init() {
    render(new Sort(), this.mainContentContainer);
    render(this.tripListComponent, this.mainContentContainer);
    render(this.tripEventComponent, this.tripListComponent.getElement());

    render(new EditingForm(), this.tripEventComponent.getElement());

    for(let i = 0; i < 3; i++) {
      render(new TripPoint, this.tripEventComponent.getElement());
    }

    render(new CreationForm(), this.tripEventComponent.getElement());
  }
}
