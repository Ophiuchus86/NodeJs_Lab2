require('dotenv').config("./");
const express = require("express");
const app = express();
const route = require('./route')
const config = require('../config')

app.use('/', route);

const port = config.get('proxy_port');

app.listen(port, () => {
    console.log('Proxy start at localhost:' + port);
});
