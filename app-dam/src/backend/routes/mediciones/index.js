const express = require('express')
const pool = require('../../mysql-connector')

const routerMediciones = express.Router()

routerMediciones.get('/:id', function (req, res) {
    pool.query(`Select * from Mediciones where dispositivoId= ${req.params.id} order by fecha desc;`, function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
})

module.exports = routerMediciones