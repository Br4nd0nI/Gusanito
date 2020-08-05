
alert("Iniciando");
window.onload=function() {
    canv=document.getElementById("abhi");
    ctx=canv.getContext("2d");
    setInterval(game,1000/10);
    xv=0;yv=-1;
}

function p2(){
alert("AJUSTE DE VELOCIDAD! \ n \ n Para baja velocidad, ingrese 1000 \ n para alta velocidad, ingrese 500 \ n O \ n ________________________ según su necesidad, espero que lo arregle");
var sp =  prompt("Enter here!");
if (sp=="") {}
else {setInterval(sp/15);}
alert("Success! \n \n now Go back & play!");
}


function p1(){
    setInterval(1000/20);
}

function p3(){
alert( "I am Abhi enjoy the game!! use SETTINGS FOR SPEED adjusment.");
}


function swipedetect(el, callback){

    var touchsurface = el,
    swipedirection,
    startX,
    startY,
    distX,
    distY,
    threshold = 150,
    restraint = 100, 
    allowedTime = 250, 
    elapsedTime,
    startTime,
    handleswipe = callback ||
    
    
    
    
function(swipedirection){}
touchsurface.addEventListener('touchstart', function(e){
        var touchobj = e.changedTouches[0]
        swipedirection = 'none'
        dist = 0
        startX = touchobj.pageX
        startY = touchobj.pageY
        startTime = new Date().getTime() 
        e.preventDefault()
    }, false)

    touchsurface.addEventListener('touchmove', function(e){
        e.preventDefault()
    }, false)

    touchsurface.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0]
        distX = touchobj.pageX - startX 
        distY = touchobj.pageY - startY 
        
        
        elapsedTime = new Date().getTime() - startTime 
        
        if (elapsedTime <= allowedTime){ 
        
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ 
                swipedirection = (distX < 0)? 'left' : 'right' 
            }
            else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ 
                swipedirection = (distY < 0)? 'up' : 'down' 
            }
        }
        handleswipe(swipedirection)
        e.preventDefault()
    }, false)
}

px=py=10;
gs=tc=20;
ax=ay=15;
xv=yv=0;
trail=[];
tail = 5;

function game() {
    px+=xv;
    py+=yv;
    if(px<0) {
        px= tc-1;
    }
    if(px>tc-1) {
        px= 0;
    }
    if(py<0) {
        py= tc-1;
    }
    if(py>tc-1) {
        py= 0;
    }
    ctx.fillStyle="black";
    ctx.fillRect(0,0,canv.width,canv.height);

    ctx.fillStyle="pink";
    for(var i=0;i<trail.length;i++) {
        ctx.fillRect(trail[i].x*gs,trail[i].y*gs,gs-2,gs-2);
        if(trail[i].x==px && trail[i].y==py) {
            tail = 5;
        }
    }
    trail.push({x:px,y:py});
    while(trail.length>tail) {
    trail.shift();
    }

    if(ax==px && ay==py) {
        tail++;
        ax=Math.floor(Math.random()*tc);
        ay=Math.floor(Math.random()*tc);
    }
    ctx.fillStyle="red";
    ctx.fillRect(ax*gs,ay*gs,gs-2,gs-2);
}

var el = document.getElementById('abhi');
swipedetect(el,function(swipedirection){

switch(swipedirection) {
        case "left":
            xv=-1;yv=0;
            break;
        case "up":
            xv=0;yv=-1;
            break;
        case "right":
            xv=1;yv=0;
            break;
        case "down":
            xv=0;yv=1;
            break;
}
});

function up() {
    xv=0;yv=-1;
    
}
function down() {
    xv=0;yv=1;    
}
function left() {
    xv=-1;yv=0;    
}
function right() {
    xv=1;yv=0;    
}