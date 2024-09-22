const { differenceInYears } = require("date-fns");

const calculeAge = (birthDate) => {
  const today = new Date();
  return differenceInYears(today, new Date(birthDate));
};

module.exports = { calculeAge };
