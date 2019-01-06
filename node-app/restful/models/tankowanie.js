var bookshelf = require('../bookshelf')

var Model = bookshelf.Model.extend({
  tableName: 'tankowanie',
  
  idAttribute: 'id',
  
});

module.exports.Model = Model