const jwt = require("jsonwebtoken");

const generateToken = (payload, isRefresh) => {
  if (isRefresh) {
    return jwt.sign(payload, process.env.PASSWORD_SECRET_REFRESH, {
      expiresIn: "120min",
    });
  }

  return jwt.sign(payload, process.env.PASSWORD_SECRET, {
    expiresIn: "60min",
  });
};

module.exports = generateToken;
