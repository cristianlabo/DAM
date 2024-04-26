const express = require('express')
const pool = require('../../mysql-connector')

const routerUltimaMedicion = express.Router()

routerUltimaMedicion.get('/:id', function (req, res) {
    pool.query(`select * from Mediciones where medicionId = (select max(medicionId) from Mediciones where dispositivoId= ${req.params.id} group by dispositivoId); `, function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
})

module.exports = routerUltimaMedicion