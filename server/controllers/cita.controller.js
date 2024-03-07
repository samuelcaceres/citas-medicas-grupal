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
    const { nombre_y_apellido, CIN, edad, telefono, especialidades_consultadas, fecha_consulta,hora_consulta} = req.body;
    //console.log(nombre_y_apellido, CIN, edad, telefono, especialidades_consultadas)
    
    try {
        if (!nombre_y_apellido || !CIN || !edad || !telefono || !especialidades_consultadas ||!fecha_consulta || !hora_consulta) {
            // Si falta alguno de los campos requeridos, responde con un código de estado 400
            return res.status(400).json({ error: 'Todos los campos son requeridos' });
        }
        const newCita = new Citas({ nombre_y_apellido, CIN, edad, telefono, especialidades_consultadas, fecha_consulta, hora_consulta })
        await newCita.save()
        res.status(201).json(newCita);
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