var bookshelf = require('../bookshelf')

var Model = bookshelf.Model.extend({
  tableName: 'uzytkownik',
  
  idAttribute: 'pesel',
  
});

module.exports.Model = Model