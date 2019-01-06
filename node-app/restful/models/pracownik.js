var bookshelf = require('../bookshelf')

var Model = bookshelf.Model.extend({
  tableName: 'pracownik',
  
  idAttribute: 'pesel',
  
});

module.exports.Model = Model