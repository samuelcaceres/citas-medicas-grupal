const express = require('express')
const cors = require('cors')
const app = express();
const port = 3000;

app.use(
    cors({
        credentials: true,
        origin:  [ "http://localhost:5173"]
    })
)

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//ROUTES   

const citaRoutes = require('./routes/citas.routes');
app.use("/api/citas", citaRoutes);


app.listen(port,() => console.log(`Listening on port: ${port}`))     

   