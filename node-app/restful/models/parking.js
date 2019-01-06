var bookshelf = require('../bookshelf')

var Model = bookshelf.Model.extend({
  tableName: 'parking',
  
  idAttribute: 'id_parkingu',
  
});

module.exports.Model = Model