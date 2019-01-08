var bookshelf = require('../bookshelf')

var Model = bookshelf.Model.extend({
  tableName: 'uzytkownik',
  
  idAttribute: 'id',
  
});

module.exports.Model = Model