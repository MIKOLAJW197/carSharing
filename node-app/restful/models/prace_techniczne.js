var bookshelf = require('../bookshelf')

var Model = bookshelf.Model.extend({
  tableName: 'prace_techniczne',
  
  idAttribute: 'id',
  
});

module.exports.Model = Model