const Citas = require("../models/citas.models");

module.exports.findAllcitas = async (req, res) => {
    try {
        const citas = await Citas.find();
        res.status(200).json(citas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports.findcita = async (req, res) => {
    try {
        const cita = await Citas.findOne({ _id: req.params.id });
        if (cita) {
            res.status(200).json(cita);
        } else {
            res.status(404).json({ error: "Cita not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports.createcita = async (req, res) => {
    try {
        const nuevaCita = await Citas.create(req.body);
        res.status(201).json(nuevaCita);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports.updatecita = async (req, res) => {
    try {
        const updateUser = await Citas.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        if (!updateUser) {
            return res.status(404).json({ error: "Cita not found" });
        }
        res.status(200).json(updateUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports.deletecita = async (req, res) => {
    try {
        const deletedUser = await Citas.deleteOne({ _id: req.params.id });
        res.status(200).json(deletedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
 //luego procedemos a editar las rutas