const express = require('express')
const pool = require('../../mysql-connector')

const routerCierreElectrovalvula = express.Router()

routerCierreElectrovalvula.post('/', function (req, res) {
    pool.query(`INSERT INTO Log_Riegos(apertura,fecha,electrovalvulaId) VALUES (0,NOW(),(select d.electrovalvulaId from Dispositivos d where d.dispositivoId=${req.body.dispositivoId})));
    INSERT INTO Mediciones(dispositivoId,fecha,valor) VALUES (${req.body.dispositivoId}),NOW(),ROUND((RAND()*100)%60));`
    , function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
})

module.exports = routerCierreElectrovalvula