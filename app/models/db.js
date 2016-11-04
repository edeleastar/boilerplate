'use strict';

var connect = require('camo').connect;

let database;

//const uri = 'mongodb://localhost/spacebook';

const uri = 'mongodb://donationuser:donationuser@ds055626.mlab.com:55626/donation';
connect(uri).then(function (db) {
  database = db;
  console.log('conneced to database');
});
