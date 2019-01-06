var express = require('express')
var router = express.Router()
var Model = require('../models/przejazd').Model
var parseQuery = require('../utils').parseQuery
var counter = require('../utils').counter
var bodyParser = require('body-parser')

router.use(bodyParser.json())

router.get('/',(req,res,next)=>{
  var parsed = parseQuery(req.query)
  var totalCount = 0
  getQuery(parsed).count()
  .then((count)=>{
    count = count[0]
    totalCount = count[Object.keys(count)[0]]
    return getQuery(parsed).offset(parsed.offset).limit(parsed.limit).select()
  })  
  .then((result)=>{
    res.set('X-Total-Count',totalCount)
        
    var cur = parsed.offset
    res.json(result.map((x,index)=>{
      x['__index'] = counter()
      return x
    }))
    
  },(err)=>{
    res.status(500).send(err.message||err)
  })

  function getQuery(parsed){
    var query = Model.query()
    query.where(parsed.where)
    if(parsed.sort.column && parsed.sort.column){
      query = query.orderBy(parsed.sort.column,parsed.sort.direction)
    }
    return query
  }
})


router.post('/',(req,res,next)=>{
  new Model(req.body).save()
  .then((model)=>{
    res.json(model)
  },(err)=>{
    res.status(500).send(err.message||err)
  })
})


router.get('/:id',(req,res,next)=>{
  
  throw 'no primary key, you can not get by id!'
  
})

router.put('/:id',(req,res,next)=>{
  
  throw 'no primary key, you can not update!'
  
})

router.delete('/:id',(req,res,next)=>{
  
  throw 'no primary key, you can not delete!'
  
})

module.exports = router