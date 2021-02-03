
function validate(){
    var ml=document.getElementById("hide");
    var pw=document.getElementById("pass");
    if(ml.value==""||pw.value=="")
    {
      alert("Blank is not allowed!!!");
      return false;
    }
    else{
      true;
    }
    var mailformat=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var ml=document.getElementById("hide").value;
    if(ml.match(mailformat))
    {
      alert;
      
    }
    else{
      alert("Invalid email");
      return false;
    }
    var password=/^[A-Za-z0-9]\w{7,12}$/;
    var pw=document.getElementById("pass").value;
    if(pw.match(password))
    {
      alert;
    }
    else{
      alert("Password is incorrect");
      return false;
    }
    }
    
