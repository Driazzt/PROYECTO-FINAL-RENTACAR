const jwt = require("jsonwebtoken");

const generateToken = (payload, isRefresh) => {
  if (isRefresh) {
    return jwt.sign(payload, process.env.PASSWORD_SECRET_REFRESH, {
      expiresIn: "60min",
    });
  }

  return jwt.sign(payload, process.env.PASSWORD_SECRET, {
    expiresIn: "15min",
  });
};

module.exports = generateToken;
