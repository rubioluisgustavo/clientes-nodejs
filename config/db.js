var mysql = require('mysql');

var con = function () {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'l5S#X^zG',
    database: 'nodejs'
  });
};

module.exports = con;
