const mysql = require('mysql');

module.exports = () => {
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'noticiasdb'
    });
}