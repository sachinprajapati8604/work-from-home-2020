setInterval(() => {
    
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];


    d=new Date();
    date=d.getDate();
    month=months[d.getMonth()] ;
    day=days[d.getDay()];
    year=d.getFullYear();
    
    htime=d.getHours();
    mtime=d.getMinutes();
    stime=d.getSeconds();

    hRoation=30*htime+mtime/2;
    mRotation=6*mtime;
    sRotation=6*stime;

    hour.style.transform=`rotate(${hRoation}deg)`;
    minute.style.transform=`rotate(${mRotation}deg)`;
    second.style.transform=`rotate(${sRotation}deg)`;

    
    var x=document.getElementsByClassName('data');      
    x[0].innerHTML=date +','+ month+','+year;
    
    var x=document.getElementsByClassName('data');      
    x[1].innerHTML=htime +':'+mtime+':'+stime;

    var x=document.getElementsByClassName('data');      
    x[2].innerHTML=day;

    
}, 1000);



    