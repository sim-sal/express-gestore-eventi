// IMPORTAZIONI
// express
const express = require('express');
// dotenv
const dotenv = require('dotenv').config();
// controllers
const homeController = require("./controllers/home");
// router
const eventsRouter = require("./routers/events");


// ISTANZA EXPRESS
const app = express();

// configuro express per la lettura dei dati JSON
app.use(express.json());
// configuro express per la lettura dei dati x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// usiamo la nostra istanza per definire le rotte
app.get("/", homeController.index);

app.use("/events", eventsRouter);


// avviamo il nostro server mettendolo in ascolto
app.listen(process.env.PORT || 3001, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`);
})