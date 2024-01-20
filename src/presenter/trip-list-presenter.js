import { render, replace, RenderPosition } from '../framework/render.js';
import Sort from '../view/sort-view.js';
import CreationForm from '../view/creating-form-view.js';
import EditingForm from '../view/editing-form-view.js';
import TripPoint from '../view/trip-point.js';
import TripList from '../view/trip-list-view.js';
import AbstractView from '../framework/view/abstract-view';
//import { getDefaultPoint } from '../const.js';

export default class TripListPresenter {

  #mainContentContainer = null;
  #pointModel = null;

  constructor({mainContentContainer, pointModel}) {
    this.#mainContentContainer = mainContentContainer; //container for sort and trip list
    this.#pointModel = pointModel;
  }

  #tripListComponent = new TripList();

  init() {
    const points = this.#pointModel.allPoints;
    const destinations = this.#pointModel.allDestinations;
    const offers = this.#pointModel.allOffers;

    render(new Sort(), this.#mainContentContainer);
    render(this.#tripListComponent, this.#mainContentContainer);

    render(new CreationForm({
      point: points[1],
      destinations,
      offers,
      onEditingFormClick: () => {
       /* replaceEditFormToPoint();*/
        document.removeEventListener('keydown', replacePointToEditForm);
      }}
    ), this.#tripListComponent.element);
    //render(new CreationForm({getDefaultPoint(), destinations, offers}), this.tripListComponent.element);
    const editingForm = new EditingForm({point: points[0], destinations, offers})
    const abstract = new AbstractView() // так нельзя
    render(editingForm, this.#tripListComponent.element);

    for(const point of points) {
      render(new TripPoint({point, destinations, offers}), this.#tripListComponent.element);
    }

    function replacePointToEditForm() {
      /*replace(eventEditingFormComponent, eventComponent);*/
    }
    function replaceEditFormToPoint() {
      /*replace(eventComponent, eventEditingFormComponent);*/
    }

  }
}
