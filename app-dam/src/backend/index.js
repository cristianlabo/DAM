//=======[ Settings, Imports & Data ]==========================================

var PORT = 3000;



var express = require('express');
var app = express();
var pool = require('./mysql-connector');
const jwt = require('jsonwebtoken')

const routerDispositivo = require('./routes/dispositivos')
const routerUltimaMedicion = require('./routes/ultimaMedicion')
const routerAperturaElectrovalvula = require('./routes/aperturaElectrovalvula')
const routerCierreElectrovalvula = require('./routes/cierreElectrovalvula')
const routerMediciones = require('./routes/mediciones')
const routerLogRiegos = require('./routes/logRiegos')

const cors = require('cors');

const corsOptions = {
    origin: '*',
}

// to parse application/json
app.use(express.json());
// to serve static files
app.use(express.static('/home/node/app/static/'));
app.use(cors(corsOptions))

//=======[ Main module code ]==================================================

app.use('/dispositivo', routerDispositivo)
app.use('/aperturaElectrovalvula', routerAperturaElectrovalvula)
app.use('/cierreElectrovalvula', routerCierreElectrovalvula)
app.use('/ultimaMedicion', routerUltimaMedicion)
app.use('/mediciones', routerMediciones)
app.use('/logRiegos', routerLogRiegos)




app.listen(PORT, function(req, res) {
    console.log("NodeJS API running correctly");
});
