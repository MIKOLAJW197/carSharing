var express = require('express')
var config = require('./config.json')
var path = require('path')

var router = express.Router()

config.tables.forEach((tableName)=>{
  var tableRouter = require(`./routers/${tableName}`)
  router.use(`/${tableName}`, tableRouter)
})


module.exports = router