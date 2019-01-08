var bookshelf = require('../bookshelf')

var Model = bookshelf.Model.extend({
  tableName: 'pracownik',
  
  idAttribute: 'id',
  
});

module.exports.Model = Model