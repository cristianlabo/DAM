const express = require('express')
const pool = require('../../mysql-connector')

const routerAperturaElectrovalvula = express.Router()

routerAperturaElectrovalvula.post('/', function (req, res) {
    pool.query(`INSERT INTO Log_Riegos(apertura,fecha,electrovalvulaId) VALUES (1,NOW(),(select d.electrovalvulaId from Dispositivos d where d.dispositivoId=${req.body.dispositivoId} ));`, function(err, result, fields) {
        if (err) {
           /*  console.log(`entro a post log riegos`) */
            res.send(err).status(400);
            return;
        }
        res.send(result);
        /* console.log(`entro a post log riegos ${req.body.dispositivoId} `) */
    });
})

module.exports = routerAperturaElectrovalvula