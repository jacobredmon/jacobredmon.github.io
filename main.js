function changeColor(element) 
{
    if(element.style.backgroundColor !== "red")
    {
        element.style.backgroundColor = "red";
    } else 
    {
        element.style.backgroundColor = "white";
    }
    
}

function reset()
{
    var elements = document.getElementsByClassName("col");
    for(var i = 0; i < elements.length; i++)
    {
        console.log(elements[i]);
        elements[i].style.backgroundColor = "white";
    }
}