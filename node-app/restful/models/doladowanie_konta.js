var bookshelf = require('../bookshelf')

var Model = bookshelf.Model.extend({
  tableName: 'doladowanie_konta',
  
  idAttribute: 'id_doladowania',
  
});

module.exports.Model = Model