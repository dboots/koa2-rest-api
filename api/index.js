const Router = require('koa-router');
const compose = require('koa-compose');

var foo = require('./foo/foo.routes');

var routes = { foo };

module.exports = function api() {
    let prefix = '/api';
    const router = new Router({ prefix });

    Object.keys(routes).forEach(name => routes[name](router));

    return compose([
        router.routes(),
        router.allowedMethods()
    ]);
}