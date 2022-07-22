const moment = require('moment');

const isDate = (value) => {
  if (!value) return false;

  const myDate = moment(value);

  if (!myDate.isValid()) return false;

  return true;
};

module.exports = isDate;
