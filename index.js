const Koa = require('koa');
const Router = require('koa-router');
const mongoose = require('mongoose');

const api = require('./api');

const app = new Koa();
const port = 3000;

mongoose.connect('mongodb://localhost/stylist');
mongoose.connection.on('error', console.error);

app
    .use(api())
    .listen(port, () => console.log(`Server running on ${port}`))