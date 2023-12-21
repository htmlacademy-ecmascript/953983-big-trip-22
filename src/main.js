import { render } from './render.js';

import Filters from './view/filters-view.js';
import TripListPresenter from './presenter/trip-list-presenter.js';

const tripMainElement = document.querySelector('.trip-main');
const filtersContainer = tripMainElement.querySelector('.trip-controls__filters');

const pageMain = document.querySelector('.page-main');
const mainContainer = pageMain.querySelector('.trip-events');

const tripListPresenter = new TripListPresenter({mainContentContainer: mainContainer});

render(new Filters(), filtersContainer);
tripListPresenter.init();

