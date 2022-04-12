const mysql = require('mysql');

const pool = mysql.createPool({
    "user":"gabriel2",
    "password": "admin",
    "database": "vagas",
    "host": "localhost",
    "port": 3306
});

exports.pool = pool;