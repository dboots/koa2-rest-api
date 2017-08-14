const foo = require('./foo.api');

module.exports = (router) => {
  router    
    .get('/foo', foo.read())
    .post('/foo', foo.create())
};