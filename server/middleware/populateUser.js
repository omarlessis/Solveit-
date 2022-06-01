const User = require("../models/Users");

module.exports = populateUser = (req, res, next) => {
  User.findOne({email: req.user.email}).then(user => {
    req.user = user;
    next();
  }).catch(error => {
      next();
  })
};

