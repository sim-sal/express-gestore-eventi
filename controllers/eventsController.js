function index(req, res) {
    res.send("<h1>UNA SERIE DI SFORTUNATI EVENTI!</h1>");
}

function store(req, res) {
    res.send("<h1>ROTTA STORE SFORTUNATI EVENTI!</h1>");
}

function update(req, res) {
    res.send("<h1>ROTTA UPDATE SFORTUNATI EVENTI!</h1>");
}

module.exports = {
    index,
    store,
    update
}