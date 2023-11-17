// importo l'istanza Event
const Event = require('../models/event');

async function index(req, res) {
    // res.send("<h1>UNA SERIE DI SFORTUNATI EVENTI!</h1>");

    try {
        // Recupero gli eventi utilizzando il metodo statico del modello
        const events = await Event.getAllEvents(req.query);

        // Invio una risposta al client
        res.status(200).json(events);
    } catch (error) {
        console.error("Errore durante il recupero degli eventi:", error);
        res.status(500).json({ error: 'Errore durante il recupero degli eventi' });
    }
}

async function store(req, res) {
    try {
        await Event.store(req);

        // Invio una risposta al client
        res.status(200).json({ message: 'Evento creato con successo' });
    } catch (error) {
        console.error("Errore durante la creazione dell'evento:", error);
        res.status(500).json({ error: 'Errore durante la creazione dell\'evento' });
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