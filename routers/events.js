// importo express
const express = require("express");

// creo l'istanza
const router = express.Router();

// importo il controller
const eventsController = require("../controllers/eventsController");



// CREO LE ROTTE

// index
router.get("/", eventsController.index);
// store
router.post("/", eventsController.store);
// update
router.put("/:event", eventsController.update);


// esporto l'istanza
module.exports = router;