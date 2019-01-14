var express = require('express')
var router = express.Router()
var parseQuery = require('../utils').parseQuery
var counter = require('../utils').counter
var bodyParser = require('body-parser')
var Bookshelf = require('../bookshelf')

router.use(bodyParser.json())

router.get('/:id',(req,res,next)=>{
  Bookshelf.knex.raw('CALL doladuj_wszystkim(' + req.params.id + ')')
  res.send('done')
})


module.exports = router