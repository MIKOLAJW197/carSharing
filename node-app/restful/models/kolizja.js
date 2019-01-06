var bookshelf = require('../bookshelf')

var Model = bookshelf.Model.extend({
  tableName: 'kolizja',
  
  idAttribute: 'id',
  
});

module.exports.Model = Model