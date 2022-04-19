$(document).ready(function(){
    var section_contact_us=$('#section_contact_us');

    var color=
    [
        'lightgrey',
        'orange',
        'red',
        '#6bd9eae0',
        '#736beacf',
    ]

    var i=0;
    function changeColor()
    {
        section_contact_us.css('background-color',color[i]);
        i++;

        if(i>=color.length)
        {
            i=0;
        }
    }

    setInterval(changeColor,1000);
});
