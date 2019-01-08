var bookshelf = require('../bookshelf')

var Model = bookshelf.Model.extend({
  tableName: 'parking',
  
  idAttribute: 'id',
  
});

module.exports.Model = Model