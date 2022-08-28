
function setTime(){
    var date=new Date();
    var text=":";
    var hour=date.getHours();
    var min=date.getMinutes();
    var sec=date.getSeconds();
    var session;
    var zero="0";

    if(hour>12){
        hour=hour-12;
    }

    var ses=date.getHours();
    if(ses>12){
        session="PM";
    }else{
        session="AM";
    }
    

    if(hour<10){
        document.getElementById("hour").innerHTML=zero+hour+text;
    }else{

        document.getElementById("hour").innerHTML=hour+text;
    }

    if(min<10){
        document.getElementById("min").innerHTML=zero+min+text;
    }else{
        document.getElementById("min").innerHTML=min+text;
    }
    
    if(sec<10){
        document.getElementById("sec").innerHTML=zero+sec+text;
    }else{

        document.getElementById("sec").innerHTML=sec+text;
    }

    document.getElementById("session").innerHTML=session;
}

setInterval(setTime);

