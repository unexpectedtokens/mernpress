const validator = require("validator");
const isEmpty = require("./is_empty");
module.exports = function validateLoginInput(data) {
  let errors = {};
  data.username = !isEmpty(data.username) ? data.username : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  //   if (!validator.isEmail(data.username)) {
  //     errors.username = "Username is invalid";
  //   }
  if (validator.isEmpty(data.username)) {
    errors.username = "Username is invalid";
  }
  if (validator.isEmpty(data.password)) {
    errors.password = "Password field is invalid";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
