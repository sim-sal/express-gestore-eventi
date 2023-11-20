const fs = require('fs');
const path = require('path');

class Event {

    #title;
    #description;
    #date;
    #maxSeats;

    constructor(title, description, date, maxSeats) {
        this.#title = title;
        this.#description = description;
        this.#date = date;
        this.#maxSeats = maxSeats;
    }

    // Getter e Setter per 'title'
    get title() {
        return this.#title;
    }

    set title(newTitle) {
        this.#title = newTitle;
    }

    // Getter e Setter per 'description'
    get description() {
        return this.#description;
    }

    set description(newDescription) {
        this.#description = newDescription;
    }

    // Getter e Setter per 'date'
    get date() {
        return this.#date;
    }

    set date(newDate) {
        this.#date = newDate;
    }

    // Getter e Setter per 'maxSeats'
    get maxSeats() {
        return this.#maxSeats;
    }

    set maxSeats(newMaxSeats) {
        this.#maxSeats = newMaxSeats;
    }

    // Metodo per ottenere tutti gli eventi
    static getAllEvents(filters = {}) {
        try {
            // Leggo il db
            const events = require("../db/events.json");

            // Applico i filtri, se presenti
            if (filters.id) {
                // Filtro per ID se specificato
                return events.filter((event) => event.id === parseInt(filters.id));
            }
            if (filters.title) {
                // Filtro per title se specificato
                const titleToSearch = filters.title.toLowerCase();
                return events.filter((event) => event.title.toLowerCase().includes(titleToSearch));
            }
            else {
                // Altrimenti restituisco tutti gli eventi
                return events;
            }
        } catch (error) {
            console.error("Errore durante il recupero degli eventi:", error);
            return [];
        }
    }

    // Metodo per la scrittura su file
    static async store(req) {
        try {
            // Ottenere gli eventi correnti
            const events = Event.getAllEvents();

            // Recupero gli id degli eventi
            let idList = events.map((event) => event.id);

            // Ordino gli id in ordine decrescente
            idList.sort((a, b) => b - a);

            // Creo il nuovo evento
            const newEvent = {
                id: idList[0] + 1,
                ...req.body
            };

            // Aggiungo il nuovo evento all'array
            events.push(newEvent);

            // Scrivo il JSON dati aggiornati nel file
            await fs.promises.writeFile(path.resolve(__dirname, "../db", 'events.json'), JSON.stringify(events, null, 2), 'utf8');

            console.log("Evento salvato con successo.");
        } catch (error) {
            console.error("Errore durante il salvataggio dell'evento:", error);
        }
    }
}

module.exports = Event;