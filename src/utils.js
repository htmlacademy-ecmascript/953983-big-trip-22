import dayjs from 'dayjs';
const DATE_CUSTOM_FORMAT = 'MMM D';
const DATE_FULL_FORMAT = 'DD/MM/YY';
const DATE_EDIT_FORMAT = 'DD/MM/YY HH:mm';
const DATE_TIME_FORMAT = 'HH:mm';

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function humanizeEventCustomDate(dueDate) {
  return dueDate ? dayjs(dueDate).format(DATE_CUSTOM_FORMAT) : '';
}

function humanizeEventEditDate(dueDate){
  return dueDate ? dayjs(dueDate).format(DATE_EDIT_FORMAT) : '';
}

function humanizeEventFullDate(dueDate){
  return dueDate ? dayjs(dueDate).format(DATE_FULL_FORMAT) : '';
}

function humanizeEventTimeDate(dueDate){
  return dueDate ? dayjs(dueDate).format(DATE_TIME_FORMAT) : '';
}

function capitalizeFirstLetter(str) {
  const stringifiedValue = str.toString();
  return stringifiedValue.charAt(0).toUpperCase() + stringifiedValue.slice(1);
}

const convertTwoDigitFormat = (number) => `0${number}`.slice(-2);

const humanizeDuration = ({ dateFrom, dateTo }) => {
  const duration = Date.parse(dateTo) - Date.parse(dateFrom);
  const minutes = Math.floor((duration / 1000 / 60) % 60);
  const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  const days = Math.floor(duration / (1000 * 60 * 60 * 24));

  if (days >= 1) {
    return `${convertTwoDigitFormat(days)}D ${convertTwoDigitFormat(
      hours
    )}H ${convertTwoDigitFormat(minutes)}M`;
  }
  if (hours >= 1) {
    return `${convertTwoDigitFormat(hours)}H ${convertTwoDigitFormat(
      minutes
    )}M`;
  }
  return `${convertTwoDigitFormat(minutes)}M`;
};

export {
  getRandomArrayElement,
  humanizeEventCustomDate,
  humanizeEventEditDate,
  humanizeEventFullDate,
  humanizeEventTimeDate,
  humanizeDuration,
  capitalizeFirstLetter
};
