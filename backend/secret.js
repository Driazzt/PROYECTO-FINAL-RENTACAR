const crypto = require("crypto");

const secretPassword = "I really want to pass the practise";
const secretPasswordRefreshed = "I need holidays";

const hash = crypto
  .createHmac("sha256", secretPassword)
  .update(secretPasswordRefreshed)
  .digest("hex");

console.log(hash);
