const mongoose = require('mongoose')

const DB_NAME= "Citas"

mongoose.set('strictQuery',false); //importanteeeee!
mongoose.connect(`mongodb://127.0.0.1/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("CONECTED TO DB"))
    .catch(err => console.log("ERROR WITH DB" + err))   