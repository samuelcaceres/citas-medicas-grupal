// config/mongo.config.js
/*const mongoose = require('mongoose');

const DB_NAME = "Citas";

mongoose.connect(`mongodb://127.0.0.1/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("CONECT TO DB"))
    .catch(err => console.error("Error de conexión a la base de datos:", err));
*/



// config/mongo.config.js
const mongoose = require('mongoose');

const DB_NAME = "Citas";
const DB_URL = `mongodb://127.0.0.1:27017/${DB_NAME}`; // Agrega el puerto 27017

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Conectado a la base de datos"))
    .catch(err => console.error("Error de conexión a la base de datos:", err));
