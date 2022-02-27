const express = require('express');
const middleware = require('./middleware.js');
const router = require('./router.js');

const app = express();
const port = 3000;

module.exports.run = () => {
    middleware.run(express, app);
    router.run(app);
    app.listen(port);
};