var bookshelf = require('../bookshelf')

var Model = bookshelf.Model.extend({
  tableName: 'samochod',
  
  idAttribute: 'id',
  
});

module.exports.Model = Model