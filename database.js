const mysql=require('mysql');
const connect=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'priya',
    database:'miniproject'
});
module.exports=connect;