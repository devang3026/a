function validation()
        {
            var fname=document.getElementById("fname").value;
            var fname_span=document.getElementById("fname_span");
            var lname=document.getElementById("lname").value;
            var lname_span=document.getElementById("lname_span");
            // var form=document.getElementById("form");
            // var gender=document.getElementById("radio_gender").value;
            var phone_no=document.getElementById("phone_no").value;
            var phone_no_span=document.getElementById("phone_no_span");
            var email=document.getElementById("email").value;
            var email_span=document.getElementById("email_span");
            var address=document.getElementById("address").value;
            var address_span=document.getElementById("address_span");
            var confirmation= document.getElementById("confirmation");
            // console.log(gender);

                if(fname==='')
                {
                    fname_span.innerHTML="FirstName Required";
                    return false;
                }

                if(fname!=null)
                {
                    fname_span.innerHTML="";
                }

                if(lname==='')
                {
                    lname_span.innerHTML="LastName Required";
                    return false;
                }

                if(lname!=null)
                {
                    lname_span.innerHTML="";
                }

                if(isNaN(phone_no) || phone_no==='')
                {
                    phone_no_span.innerHTML="Phone No is Required";
                    return false;
                }
                
                if(phone_no!=null)
                {
                    phone_no_span.innerHTML="";
                }

                if(email==='')
                {
                    email_span.innerHTML="Email Required";
                    return false;
                }

                if(email!=null)
                {
                    email_span.innerHTML="";
                }

                if(fname!=null && lname!=null && phone_no!=null && email!=null)
                {
                    confirmation.innerHTML="Submitted Successfully!!"
                }
           
        };