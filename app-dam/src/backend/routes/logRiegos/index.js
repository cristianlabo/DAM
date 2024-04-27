const express = require('express')
const pool = require('../../mysql-connector')

const routerLogRiegos = express.Router()

routerLogRiegos.get('/:id', function (req, res) {
    pool.query(`select d.nombre as nombreSensor,e.nombre as nombreElectrovalvula,l.logRiegoId,l.apertura,l.fecha,l.electrovalvulaId from Dispositivos d 
    left join Electrovalvulas e on e.electrovalvulaId = d.electrovalvulaId
    left join Log_Riegos l on l.electrovalvulaId = e.electrovalvulaId
    where d.dispositivoId= ${req.params.id}
    ; `, function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
})

module.exports = routerLogRiegos