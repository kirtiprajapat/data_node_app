const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'terraform-20250520054825274000000002.clqugs28ubb8.us-east-1.rds.amazonaws.com:3306',
    user: 'admin',
    password: 'Admin12345!',
    database: 'myappdb' 
});

connection.connect((err)=>{
    if (err) throw err;
    console.log('connected to rds mysql');
})

module.exports = connection;