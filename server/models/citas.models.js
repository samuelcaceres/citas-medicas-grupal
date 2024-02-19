const mongoose = require("mongoose")

//creamos el modelo de base de datos requerido
const citaSchema = new mongoose.Schema({
    nombre_y_apellido: {
        type: String,
        minLength: [2, "El nombre completo debe contener más de dos letras"],
        maxLength: [150, "El nombre que ingresó es demasiado largo"]
    },
    CIN:{
        type: Number,
        minLength: [4, "El número de cédula debe contener al menos 4 dígitos"],
        maxLength: [20,"El número de cédula no puede contener más de 20 dígitos"]
    },
    edad:{
        type: Number,
        max:  [110,"El máximo de edad que se admite es de 110 años"]
    },
    telefono:{
        type: Number,
        minLength: [5, "El número de teléfono debe contener mínimamente 5 dígitos"],
        maxLength : [30, "El número de teléfono no puede contener más de 30 dígitos"]
    },
    especialidades_consultadas:{
        type: String,
        enum : ["Médico Clínico", "Cardiólogo", "Endocrinólogo"],
    }
},{timestamps: true, versionKey:false})

//se crea el modelo mongooose Citas
const Citas = mongoose.model("Citas", citaSchema);

module.exports = Citas;

//ya teniendo las citas, creamos los controladores.


