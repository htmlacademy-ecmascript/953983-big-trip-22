import { createElement } from '../render';

function createTripEvents () {
  return `
    <li class="trip-events__item"></li>
  `;
}

export default class TripEvent {

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
