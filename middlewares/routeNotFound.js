function routeNotFoundMiddleware(err, req, res, next) {
    res.status(404).send("<h1>404 Not Found! VOLIVI!</h1>")

    next();
}

module.exports = {
    routeNotFoundMiddleware,
};