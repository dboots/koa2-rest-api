const signup = require('./signup.api');

module.exports = (router) => {
  router    
    .put('/signup', signup.put())
};