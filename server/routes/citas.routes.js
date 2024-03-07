
const express = require('express');
const router = express.Router();
const citaController = require('../controllers/cita.controller');

// Create
router.post("/agendar", citaController.createcita); 

// Find All
router.get("/all", citaController.findAllcitas);

// Find one
router.get("/:id", citaController.findcita);

// Update One
router.put("/:id", citaController.updatecita); 

// Delete One
router.delete("/:id", citaController.deletecita);

module.exports = router;
