const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Configuración de la base de datos
require('./config/mongo.config');

app.use(
    cors({
        credentials: true,
        origin: ["http://localhost:5173", "http://localhost:3000"]
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Importa las rutas de autenticación de usuarios
const userRoutes = require('./routes/user.routes');
app.use("/api/user", userRoutes);

// Importa las rutas de citas
const citaRoutes = require('./routes/citas.routes');
app.use("/api/citas", citaRoutes);

app.listen(port, () => console.log(`Listening on port: ${port}`));