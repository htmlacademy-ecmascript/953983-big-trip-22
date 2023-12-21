import { createElement } from '../render';

function createTripEvents () {
  return `
    <ul class="trip-events__list"></ul>
  `;
}

export default class TripList {

  getTemplate() {
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
