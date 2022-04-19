function getBMI()
{
        Height = document.getElementById("Height").value;
        Weight = document.getElementById("Weight").value;
        var span_height=document.getElementById("span_height");
        var span_weight=document.getElementById("span_weight");


        if(Height=="")
        {
                span_height.innerHTML="Input the Field.";
        }

        if(Height!="")
        {
                span_height.innerHTML="";
        }

        if(Weight=="")
        {
                span_weight.innerHTML="Input the Field.";
        }

        if(Weight!="")
        {
                span_weight.innerHTML="";
        }

        if(isNaN(Height))
        {
                span_height.innerHTML="Enter in Digits.";
                Height.focus();
        }

        if(isNaN(Weight))
        {
                span_weight.innerHTML="Enter in Digits";
                Weight.focus();
        }

        document.getElementById("BMI").innerHTML = Weight/((Height/100) * (Height/100));
}

