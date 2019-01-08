var bookshelf = require('../bookshelf')

var Model = bookshelf.Model.extend({
  tableName: 'cennik',
  
  idAttribute: 'id',
  
});

module.exports.Model = Model