function errorsFormatterMiddleware(err, req, res, next) {
    res.format({
        json: () => {
            res.status(500).json({
                message: "OPS! NESCI I DOCU!",
                error: err.message,
            });
        },
        default: () => {
            res.status(500).send("<h1>PIJJALU!</h1>");
        }
    });
}

module.exports = {
    errorsFormatterMiddleware,
};