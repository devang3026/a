var li_index=[];

function add()
{
    var add_task=document.getElementById("addTask").value;
    var ol_list=document.getElementById("ordered_list");
    var ol_li=document.createElement('li');
    var li_text=document.createTextNode(add_task);
    ol_li.appendChild(li_text);

    

    var select=document.getElementById("deleteTask");
    var option=document.createElement('option');
    option.value=add_task;
   
    if (add_task === '' || option.value=== '') {
        alert("You must write something!");
        
    } 
    else 
    {
        document.getElementById("ordered_list").appendChild(ol_li);
        li_index.push(add_task);
        ol_list.appendChild(ol_li);
        option.innerHTML=add_task;
        select.appendChild(option);
    }
    document.getElementById("addTask").value = "";
};


function remove()
{
    var select=document.getElementById("deleteTask");
    var ol_list=document.getElementById("ordered_list");

    for(var i=0;i<select.length;i++)
    {
        if(select.options[i].selected)
        {
            select.remove(i);
            li_index.splice(i,1);
        }
        if(select.length==0)
        {
            ol_list.innerHTML='';
        }
    }
    ol_list.innerHTML='';
    for(var j=0;j<li_index.length;j++)
    {
        var ol_li=document.createElement('li');
        ol_li.innerHTML=li_index[j];
        ol_list.appendChild(ol_li);
    }
}