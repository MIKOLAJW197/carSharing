var bookshelf = require('../bookshelf')

var Model = bookshelf.Model.extend({
  tableName: 'baza',
  
  idAttribute: 'id_bazy',
  
});

module.exports.Model = Model