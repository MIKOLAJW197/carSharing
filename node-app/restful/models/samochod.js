var bookshelf = require('../bookshelf')

var Model = bookshelf.Model.extend({
  tableName: 'samochod',
  
  idAttribute: 'nr_boczny',
  
});

module.exports.Model = Model