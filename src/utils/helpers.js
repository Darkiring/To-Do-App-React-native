import moment from 'moment';

export const formatTime = value => {
  return moment(value).format('hh:mm A');
};

export const formatDate = value => {
  return moment(value).format('YYYY-MM-DD');
};

export const addHours = value => {
  return new moment(value).add(1, 'h').toDate();
};
