function validate()
      {
        var fname=document.getElementById("name").value;
        var fname_span=document.getElementById("fname_span");

        var email=document.getElementById("email").value;
        var email_span=document.getElementById("email_span");

        var passowrd=document.getElementById("password").value;
        var password_span=document.getElementById("password_span");

        var repeat=document.getElementById("repeat").value;
        var repeat_span=document.getElementById("repeat_span");

        if(fname==="")
        {
            document.getElementById("name").style.border="2px solid red";
            fname_span.innerHTML="Name Required";
            return false;
        }

        if(fname!=null)
        {
          fname_span.innerHTML="";
          document.getElementById("name").style.borderStyle="hidden hidden hidden hidden";
        }

        if(email==="")
        {
            document.getElementById("email").style.border="2px solid red";
            email_span.innerHTML="Email Required";
            return false;
        }

        if(email!=null)
        {
          email_span.innerHTML="";
          document.getElementById("email").style.borderStyle="hidden hidden hidden hidden";
        }

        if(passowrd.length==0 || passowrd==="")
        {
            document.getElementById("password").style.border="2px solid red";
            password_span.innerHTML="Password Required";
            return false;
        }

        if(passowrd!=null)
        {
          password_span.innerHTML="";
          document.getElementById("password").style.borderStyle="hidden hidden hidden hidden";
        }

        if(repeat.length==0 || repeat==="")
        {
            document.getElementById("repeat").style.border="2px solid red";
            repeat_span.innerHTML="Repeat Password Required";
            return false;
        }
      }