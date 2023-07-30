exports.success = function(req, resp, message, status) {
    let statusCode = status || 200;
    let statusMessage = message || '';

    resp.status(statusCode).send({
        error: false,
        status: status,
        body: message,
    });
}

exports.error = function(req, resp, message, status) {
    let statusCode = status || 500;
    let statusMessage = message || 'Internal server error';

    resp.status(statusCode).send({
        error: false,
        status: status,
        body: message,
    })
}