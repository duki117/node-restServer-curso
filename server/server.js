require('./config/config');

const express = require('express')
const mongoose = require('mongoose');

const app = express()

const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
//CONFIGURACIÓN GLOBAL DE RUTAS
app.use( require('./routes/index'));


mongoose.connect(process.env.URLDB,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
}, (err, resp) => {
  if (err) throw err;

  console.log("base de datos ONLINE!!");
}
);

app.listen(process.env.PORT, () =>{
    console.log('Escuchando el puerto', 8080);
});