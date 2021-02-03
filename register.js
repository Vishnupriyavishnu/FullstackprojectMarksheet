
  
            function valid() 
            { 
              var ml=document.getElementById("email");
              var passw=document.getElementById("pass");
              var passw2=document.getElementById("pass1");
              var namevalid=document.getElementById("name");
              var number=document.getElementById("roll");
              
            if(ml.value==""||passw.value=="" || passw2.value =="" ||namevalid.value==""||number=="")
            {
              alert("Blank is not allowed.....!!!");
              return false;
            }
            
               var name=/^[A-Za-z]+$/;
               var namevalid=name.test(document.getElementById("name").value);
               if(!namevalid)
               {
                 alert("No Special character allowed!!");
               }
               var regx=/^[0-9]+$/;
               var number=regx.test(document.getElementById("roll").value);
                if(!number)
               {
                alert("Blank is not allowed.....!!!");
                return false;
               } 
                

            var mailformat=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            var ml=document.getElementById("email").value;
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
            var passw=document.getElementById("pass").value;
            var passw2=document.getElementById("pass1").value;
            if(passw!=passw2)
            {
              alert("Password didnot matched!!");
              return false;
            }
            
                var rd1=document.getElementById("rd1");
                var rd2=document.getElementById("rd2");
                var rd3=document.getElementById("rd3");
                if(rd1.checked==true)
                 {
                   alert("All Fields are selected:Press OK to continue");
                  
                 }
                  else if(rd2.checked==true)
                  {
                   alert("All Fields are selected:Press OK to continue");
                 }
                  else if(rd3.checked==true)
                  {
                   alert("All Fields are selected:Press OK to continue");
                   
                 }
                 else
                 {
                   alert("Blank is not allowed.....!!!");
                    return false;
                 }
           } 
    