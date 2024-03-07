// models/User.js
//Actualicé el nombre del archivo, estaba user.js y cambie a user.model.js - RAQUEL

const mongoose = require('mongoose');

//Validaciones para usuarios
const userSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: true,
        //VALIDACIONES - RAQUEL
        unique: true, // asegura que el nombre de usuario sea único
        minlength: 3,
        maxlength: 50,
        validate: {
            validator: function(v) {
                return /^[a-zA-Z]+$/.test(v);
            },
            message: props => `${props.value} no es un nombre de usuario válido. Debe contener solo letras y tener al menos 3 caracteres.`
        }
    },
    email: { 
        type: String, 
        required: true, 
        unique: true,
        //VALIDACIONES - RAQUEL
        validate: {
            validator: function(v) {
                return /\S+@\S+\.\S+/.test(v);
            },
            message: props => `${props.value} no es un correo electrónico válido.`
        }
    },
    password: { 
        type: String, 
        required: true,
        //VALIDACIONES - RAQUEL
        validate: {
            validator: function(v) {
                // Verifica que la contraseña tenga al menos 8 caracteres, una letra mayúscula, una minúscula, un número y un carácter especial
                return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/.test(v);
            },
            message: props => `${props.value} no es una contraseña segura. Debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial.`
        }
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;