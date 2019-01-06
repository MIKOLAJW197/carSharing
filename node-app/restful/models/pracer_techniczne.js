var bookshelf = require('../bookshelf')

var Model = bookshelf.Model.extend({
  tableName: 'pracer_techniczne',
  
  idAttribute: 'id',
  
});

module.exports.Model = Model