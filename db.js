const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '',
    user: 'admin',
    password: 'Admin12345!',
    database: 'myappdb' 
});

connection.connect((err)=>{
    if (err) throw err;
    console.log('connected to rds mysql');
})

module.exports = connection;