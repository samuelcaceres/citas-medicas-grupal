/*const mongoose = require("mongoose")

//creamos el modelo de base de datos requerido
const citaSchema = new mongoose.Schema({
    nombre_y_apellido: {
        type: String,
        minlength: [2, "El nombre completo debe contener más de dos letras"],
        maxlength: [150, "El nombre que ingresó es demasiado largo"]
    },
    CIN:{
        type: Number,
        minlength: [4, "El número de cédula debe contener al menos 4 dígitos"],
        maxlength: [20,"El número de cédula no puede contener más de 20 dígitos"]
    },
    edad:{
        type: Number,
        max:  [110,"El máximo de edad que se admite es de 110 años"]
    },
    telefono:{
        type: Number,
        minelngth: [5, "El número de teléfono debe contener mínimamente 5 dígitos"],
        maxlength : [30, "El número de teléfono no puede contener más de 30 dígitos"]
    },
    especialidades_consultadas:{
        type: String,
        enum : ["Médico Clínico", "Cardiólogo", "Endocrinólogo"],
    },
    fecha_consulta: {
        type: Date,
        required: true 
    },
    hora_consulta: {
        type: String,
        required: true,
        validate: {
            validator: function(value) {
                return /^(?:[01]\d|2[0-3]):[0-5]\d$/.test(value);
            },
            message: props => `${props.value} no es una hora válida. El formato debe ser HH:mm.`
        }
    },
    //inicio de agregado de campos hecho por Samuel Caceres
  


},{timestamps: true, versionKey:false})

//se crea el modelo mongooose Citas
const Citas = mongoose.model("Citas", citaSchema);

module.exports = Citas;

//ya teniendo las citas, creamos los controladores.


*/

const mongoose = require("mongoose")

const citaSchema = new mongoose.Schema({
    nombre_y_apellido: {
        type: String,
        minlength: [2, "El nombre completo debe contener más de dos letras"],
        maxlength: [150, "El nombre que ingresó es demasiado largo"]
    },
    CIN:{
        type: Number,
        minlength: [4, "El número de cédula debe contener al menos 4 dígitos"],
        maxlength: [20,"El número de cédula no puede contener más de 20 dígitos"]
    },
    edad:{
        type: Number,
        max:  [110,"El máximo de edad que se admite es de 110 años"]
    },
    telefono:{
        type: Number,
        minlength: [5, "El número de teléfono debe contener mínimamente 5 dígitos"],
        maxlength : [30, "El número de teléfono no puede contener más de 30 dígitos"]
    },
    especialidades_consultadas:{
        type: String,
        //enum : ["Médico Clínico", "Cardiólogo", "Endocrinólogo"],
    },
    fecha_consulta: {
        type: Date,
        required: true 
    },
    hora_consulta: {
        type: String,
        required: true,
        validate: {
            validator: function(value) {
                return /^(?:[01]\d|2[0-3]):[0-5]\d$/.test(value);
            },
            message: props => `${props.value} no es una hora válida. El formato debe ser HH:mm.`
        }
    },

    //Inicio de tarea de Samuel - Agregar campo de correo de paciente
    correo_paciente: {
        type: String,  
    }
    //Fin de tarea de Samuel - Agregar campo de correo de paciente


},{timestamps: true, versionKey:false});

const Citas = mongoose.model("Citas", citaSchema);

module.exports = Citas;
