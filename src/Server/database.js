const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  port:3306,
  user: 'root',
  password: '',
  database: 'profediana',
  multipleStatements: true
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('db is connected');
  }
});

module.exports = mysqlConnection;
