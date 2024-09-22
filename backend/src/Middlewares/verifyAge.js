const { calculeAge } = require("../Utils/ageFormat");

const verifyAge = (req, res, next) => {
  try {
    const adult = calculeAge(req.payload.birth_date) >= 18;

    req.isAdult = adult;
    next();
  } catch (error) {
    res.status(400).send("Access denied.");
  }
};

module.exports = verifyAge;
