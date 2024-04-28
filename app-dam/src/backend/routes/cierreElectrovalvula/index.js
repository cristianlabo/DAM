const express = require('express')
const pool = require('../../mysql-connector')

const routerCierreElectrovalvula = express.Router()

routerCierreElectrovalvula.post('/', function (req, res) {

    const queryString1 = `INSERT INTO Log_Riegos(apertura,fecha,electrovalvulaId) VALUES (0,NOW(),(select d.electrovalvulaId from Dispositivos d where d.dispositivoId=${req.body.dispositivoId}));`;
    const queryString2 = `INSERT INTO Mediciones(dispositivoId,fecha,valor) VALUES (${req.body.dispositivoId},NOW(),ROUND((RAND()*100)%60));`;

    pool.query(queryString1, function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        pool.query(queryString2, function(err, result, fields) {
            if (err) {
                res.send(err).status(400);
                return;
            }
            res.send(result);
        });
    });
})

module.exports = routerCierreElectrovalvula