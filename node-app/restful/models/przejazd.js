var bookshelf = require('../bookshelf')

var Model = bookshelf.Model.extend({
  tableName: 'przejazd',
  
  idAttribute: 'id',
  
});

module.exports.Model = Model