const express = require('express');

const config = require('../config.js');
const user = require('./components/user/network');

const app = express();

// ROUTERS
app.use('/api/user', user);

app.listen(config.api.port, () => {
    console.log('Api listening on port ', config.api.port);
});

// init command
// node api/index.js