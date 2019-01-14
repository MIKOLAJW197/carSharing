var express = require('express')
var router = express.Router()
var parseQuery = require('../utils').parseQuery
var counter = require('../utils').counter
var bodyParser = require('body-parser')
var Bookshelf = require('../bookshelf')

router.use(bodyParser.json())

router.get('/:id',(req,res,next)=>{
  Bookshelf.knex.raw('SELECT suma_doladowan(' + req.params.id + ') AS suma_doladowan;')
  .then((rows) => {
  res.json(JSON.stringify(rows))
})
})


module.exports = router