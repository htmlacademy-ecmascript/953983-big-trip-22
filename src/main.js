import { render } from './render.js';

import Filters from './view/filters.js';
import Sort from './view/sort.js';
import CreationForm from './view/creation-form.js';
import EditingForm from './view/editing-form.js';

const tripMainElement = document.querySelector('.trip-main');
const filtersContainer = tripMainElement.querySelector('.trip-controls__filters');

const pageMain = document.querySelector('.page-main');
const mainContainer = pageMain.querySelector('.trip-events');

render(new Filters(), filtersContainer);

render(new Sort(), mainContainer);

render(new CreationForm(), mainContainer);

render(new EditingForm(), mainContainer);
