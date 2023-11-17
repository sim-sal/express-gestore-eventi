// importo l'istanza Event
const Event = require('../models/event');

// MIDDLEWARES
// error
// 404
const { errorsFormatterMiddleware } = require('../middlewares/errorsFormatter');
// 404
const { routeNotFoundMiddleware } = require('../middlewares/routeNotFound');

async function index(req, res) {
    // res.send("<h1>UNA SERIE DI SFORTUNATI EVENTI!</h1>");

    try {
        // Recupero gli eventi utilizzando il metodo statico del modello
        const events = await Event.getAllEvents(req.query);

        // Invio una risposta al client
        res.status(200).json(events);
    } catch (error) {
        errorsFormatterMiddleware(error, req, res);
    }
}

async function store(req, res) {
    try {
        // Verifico se il parametro "title" è presente nella richiesta
        if (!req.body.title) {
            throw new Error("Il parametro 'title' è obbligatorio");
        }
        // Verifico se il parametro "description" è presente nella richiesta
        if (!req.body.description) {
            throw new Error("Il parametro 'description' è obbligatorio");
        }

        // Verifico se il parametro "date" è presente nella richiesta
        if (!req.body.date) {
            throw new Error("Il parametro 'date' è obbligatorio");
        }

        // Verifica se il parametro "maxSeats" è presente e è un numero
        if (!req.body.maxSeats || isNaN(req.body.maxSeats)) {
            throw new Error("Il parametro 'maxSeats' è obbligatorio e deve essere un numero");
        }

        await Event.store(req);
        // Invio una risposta al client
        res.status(200).json({ message: 'Evento creato con successo' });
    } catch (error) {
        errorsFormatterMiddleware(error, req, res);
    }
}

function update(req, res) {
    res.send("<h1>ROTTA UPDATE SFORTUNATI EVENTI!</h1>");
}

module.exports = {
    index,
    store,
    update
}