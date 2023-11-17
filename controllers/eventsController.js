// importo l'istanza Event
const Event = require('../models/event');

function index(req, res) {
    res.send("<h1>UNA SERIE DI SFORTUNATI EVENTI!</h1>");
}

async function store(req, res) {
    try {
        await Event.store(req);

        // Invia una risposta al client
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