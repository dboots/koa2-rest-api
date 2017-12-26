const Router = require('koa-router');
const compose = require('koa-compose');

var signup = require('./signup/signup.routes');

var routes = { signup };

module.exports = function api() {
    let prefix = '/api';
    const router = new Router({ prefix });

    Object.keys(routes).forEach(name => routes[name](router));

    return compose([
        router.routes(),
        router.allowedMethods()
    ]);
}