var bookshelf = require('../bookshelf')

var Model = bookshelf.Model.extend({
  tableName: 'przejazd',
  
});

module.exports.Model = Model