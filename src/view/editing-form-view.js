import AbstractView from '../framework/view/abstract-view.js';
import { POINT_TYPES } from '../const.js';
import { createElement } from '../render.js';
import {
  humanizeEventEditDate,
  capitalizeFirstLetter,
} from '../utils.js';

function createEditingForm (point, destinations, offers) {
  const pointDestination = destinations.find((destination) => point.destination === destination.id);
  const typeOffers = offers.find((offer) => offer.type === point.type).offers;
  const pointOffers = typeOffers.filter((off) => point.offers.includes(off.id));
  const {dateFrom, dateTo, basePrice, type} = point;
  const {name, description} = pointDestination || {};
  const pointId = point.id || 0;

  return `
  <li class="trip-events__item">
    <form class="event event--edit" action="#" method="post">
      <header class="event__header">
        <div class="event__type-wrapper">
          <label class="event__type  event__type-btn" for="event-type-toggle-${point.id}">
            <span class="visually-hidden">Choose event type</span>
            <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
          </label>
          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${point.id}" type="checkbox">

          <div class="event__type-list">
            <fieldset class="event__type-group">
              <legend class="visually-hidden">Event type</legend>

            ${POINT_TYPES.map((pointType) => (
    `<div class="event__type-item">
              <input id="event-type-${pointType}-${point.id}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${pointType}" ${pointType === type ? 'checked' : ''}>
              <label class="event__type-label  event__type-label--${pointType}" for="event-type-${pointType}-${point.id}">${capitalizeFirstLetter(pointType)}</label>
            </div>`
  )).join('')}

            </fieldset>
          </div>
        </div>

        <div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-${pointId}">
          ${capitalizeFirstLetter(type)}
          </label>
          <input class="event__input  event__input--destination" id="event-destination-${pointId}" type="text" name="event-destination" value="${name || ''}" list="destination-list-${pointId}">
          <datalist id="destination-list-${pointId}">
            ${destinations.map((destination) => `<option value="${destination.name}"></option>`).join('')}
          </datalist>
        </div>

        <div class="event__field-group  event__field-group--time">
          <label class="visually-hidden" for="event-start-time-${pointId}">From</label>
          <input class="event__input  event__input--time" id="event-start-time-${pointId}" type="text" name="event-start-time" value="${humanizeEventEditDate(dateFrom)}">
          &mdash;
          <label class="visually-hidden" for="event-end-time-${pointId}">To</label>
          <input class="event__input  event__input--time" id="event-end-time-${pointId}" type="text" name="event-end-time" value="${humanizeEventEditDate(dateTo)}">
        </div>

        <div class="event__field-group  event__field-group--price">
          <label class="event__label" for="event-price-${pointId}">
            <span class="visually-hidden">Price</span>
            &euro;
          </label>
          <input class="event__input  event__input--price" id="event-price-${pointId}" type="text" name="event-price" value="${basePrice}">
        </div>

        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
        <button class="event__reset-btn" type="reset">${point.id ? 'Delete' : 'Cancel'}</button>
        ${point.id ? (
    `<button class="event__rollup-btn" type="button">
            <span class="visually-hidden">Open event</span>
          </button>`
  ) : ''}
      </header>

      <section class="event__details">

      ${typeOffers.length ?
    `<section class="event__section  event__section--offers">
          <h3 class="event__section-title  event__section-title--offers">Offers</h3>
          <div class="event__available-offers">

          ${typeOffers.map((typeOffer) => (
    `<div class="event__offer-selector">
            <input class="event__offer-checkbox  visually-hidden" id="event-offer-${capitalizeFirstLetter(typeOffer.title)}-${point.id}" type="checkbox" name="event-offer-${capitalizeFirstLetter(typeOffer.title)}" ${pointOffers.map((offer) => offer.id).includes(typeOffer.id) ? 'checked' : ''}>
            <label class="event__offer-label" for="event-offer-luggage-1">
              <span class="event__offer-title">${capitalizeFirstLetter(typeOffer.title)}</span>
              &plus;&euro;&nbsp;
              <span class="event__offer-price">${capitalizeFirstLetter(typeOffer.price)}</span>
            </label>
          </div>`
  )).join('')}
        </div>
      </section>`
    : ''}

        ${pointDestination ? (
    `<section class="event__section  event__section--destination">
          <h3 class="event__section-title  event__section-title--destination">Destination</h3>
          <p class="event__destination-description">${description}</p>
          </section>`
  ) : ''}

      </section>
    </form>
  </li>
  `;
}

export default class EditingForm extends AbstractView {
  constructor({point, destinations, offers}) {
    this.point = point;
    this.destinations = destinations;
    this.offers = offers;
  }

  get template() {
    return createEditingForm(this.point, this.destinations, this.offers);
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
