function move(event) 
{
    var object = document.getElementById('snake');
    var t = parseInt(object.style.top);
    var l = parseInt(object.style.left);

    if(t<90 && l < 90)
{
    var key = event.key;
    if(key=='ArrowRight')
    {
        console.log('right');
        l = l+1;
        object.style.left = l+'%';  
    }   
    else
    if(key=='ArrowLeft')
    {
        console.log('left');
        l = l-1;
        object.style.left = l+'%';  
    }
    else
    if(key=='ArrowUp')
    {
        console.log('up');
        t = t-1;
        object.style.top = t+'%';  
    }
    else 
    if(key=='ArrowDown')
    {
        console.log('down');
        t = t+1;
        object.style.top = t+'%';  
    }   
}   
}