var express=require('express');
var app=express();
var bodyParser=require('body-parser');

var connection=require('./model/database');

app.set("views","./views")
app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname));

app.get('/register',function(req,res){
  console.log("Hello");
  res.render("register");
 })

 app.use('/valid',function(req,res)
  {
    var m1=req.body.Email;
    var pass=req.body.Password;
    var passw2=req.body.password2;
    var namevalid=req.body.username;
    var number=req.body.rollnumber;
    console.log("data submitted");
    

    /* res.writeHead(200,{'Content-type':'text/html'});
    res.write("<h3>Registration Success!! </h3>");
    res.end();*/
    connection.query('insert into students_details values(?,?,?,?)',[number,namevalid,m1,pass],(err,results)=>{
      if(err)throw err;
      if(results){
        console.log("Values Inserted");
        res.render('loginst');
      }
    })
})  

app.use('/loginst',function(req,res){
 console.log("Hi");
 res.render('loginst');

})
 app.post('/validate',function(req,res){
   var m1=req.body.Email;
   var pwd=req.body.password;
   console.log("data submitted");
   connection.query('select email from students_details where email like ?',[m1],(err,result)=>{
     if(err)throw err;
     if(result)
     {
       console.log("wel");
       connection.query('select password from students_details where email like ? and password like ?',[m1,pwd],(err,result)=>{
         console.log("!1");
         connection.query('select students_marksheet.*,students_details.email from students_marksheet join students_details on students_marksheet.RollNo=students_details.rollnum where students_details.email like ?',[m1],(err,data)=>{
          
          if(err)throw err;
           if(data)
           {
             res.render("user",{userdata:data});
             console.log(data);
           }
         })
       })
     }
   }) 
  /* res.send(`Email:${m1},Password:${pwd}`);*/
 })

 app.listen(1103,()=>{
   console.log("Server is listening 1103");
 })
 