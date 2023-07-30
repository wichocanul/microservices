const express = require('express');

const response = require('../../../network/response')

const router = express.Router();

router.get('/', function(req, resp) {
    response.success(req, resp, 'everything works', 200);
});

module.exports = router;