const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.post('/submit',(req,res)=>{
    const {name,email} = req.body;
    const sql = 'insert into users(name,email) values(?,?)';
    db.query(sql,[name,email],(err,result)=>{
        if(err) throw err;
        res.send('Data inserted successfully');
    });

});

app.listen(3000,()=>{
    console.log("server started on port 3000")
});