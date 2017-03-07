var clickedTime;
var createdTime;


function getRandomColor(){
    var letters = '0123456789ABCDEF'.split("");
    var color = '#';

    for (var i=0; i<6; i++){
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}


function makeBox(){
    var time=Math.random();
    time=time*6000;
    setTimeout(function(){
        if(Math.random() > 0.5){
            document.getElementById("box").style.borderRadius="100px";
        } else {
            document.getElementById("box").style.borderRadius="0px";
        }

        var top=Math.random();
        top=top*300;

        var left=Math.random();
        left=left*500;

        document.getElementById("box").style.top=top + "px";
        document.getElementById("box").style.left=left + "px";

        document.getElementById("box").style.display="block";
        document.getElementById("box").style.backgroundColor=getRandomColor();
        createdTime = Date.now();
    }, time);
}

document.getElementById("box").onclick=function(){
    this.style.display="none";
    clickedTime=Date.now()
    document.getElementById("time").innerHTML =  (clickedTime - createdTime);

    makeBox();
}

makeBox();
