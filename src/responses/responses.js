function success (req, res, message, status) {
    res.status(status || 200).send(message)
}

function error (req, res, message, status, error) {
    res.status(status || 500).send(message)
}

module.exports = {
    success,
    error
}