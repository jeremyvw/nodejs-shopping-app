const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'shopping-app',
  password: 'azureus30',
});

module.exports = pool.promise();
