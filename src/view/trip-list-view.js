import { createElement } from '../render';
import AbstractView from '../framework/view/abstract-view.js';

function createTripEvents () {
  return `
    <ul class="trip-events__list"></ul>
  `;
}

export default class TripList extends AbstractView{

  get template() {
    return createTripEvents();
  }

  getElement() {
    if(!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
