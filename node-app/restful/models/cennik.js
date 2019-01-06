var bookshelf = require('../bookshelf')

var Model = bookshelf.Model.extend({
  tableName: 'cennik',
  
  idAttribute: 'od_kiedy',
  
});

module.exports.Model = Model