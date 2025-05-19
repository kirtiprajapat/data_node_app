const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'terraform-20250519122600261400000002.ctcisg2amgzh.us-east-1.rds.amazonaws.com:3306',
    user: 'admin',
    password: 'Admin12345!',
    database: 'myappdb' 
});

connection.connect((err)=>{
    if (err) throw err;
    console.log('connected to rds mysql');
})

module.exports = connection;