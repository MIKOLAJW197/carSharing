var bookshelf = require('../bookshelf')

var Model = bookshelf.Model.extend({
  tableName: 'baza',
  
  idAttribute: 'id',
  
});

module.exports.Model = Model