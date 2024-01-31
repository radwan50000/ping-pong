let canvas = document.getElementById("mainCanvas");

canvas.width = window.innerWidth;

canvas.height = window.innerHeight;

canvas.style.backgroundColor = "black";

let c = canvas.getContext("2d");

let rectHeight = canvas.height * (30/100),
    yRect = ((window.innerHeight / 2) - (rectHeight / 2)),
    yRect2 = ((window.innerHeight / 2) - (rectHeight / 2)),
    dyRect = 23,
    xBall = (window.innerWidth / 2),
    yBall = (window.innerHeight / 2),
    dxBall = -12,
    dyBall = 12;


function animation(){
    requestAnimationFrame(animation);
    c.clearRect(0,0,window.innerWidth,window.innerHeight);
    c.fillStyle = "#f00";

    //the rectangles
    c.fillRect(0,yRect,20,rectHeight);
    c.fillRect((window.innerWidth - 20),yRect2,20,rectHeight);
    
    //the ball
    c.beginPath();
    c.arc(xBall, yBall, 14, 0, Math.PI * 2, false);
    c.strokeStyle = "rgba(255,255,255,1)";
    c.fillStyle = "#fff";
    c.fill()
    c.stroke();
    //Reflex when get up
    if(yBall >= (window.innerHeight - 14) || yBall <= (0 + 14)){
        dyBall = -dyBall;
    }

    //The Ball Reflex when get the left Rectangle
    if(yBall >= yRect && yBall <= (yRect + rectHeight) && xBall <= 25){
        dxBall = -dxBall;
    //The Ball Reflex when get the Right Rectangle
    }else if((yBall >= yRect2) &&( yBall <= (yRect2 + rectHeight)) && (xBall >= window.innerWidth - 25)){
        dxBall = -dxBall;
    }
    //Reload the page when the ball get out
    if((xBall < 0) || (xBall > window.innerWidth)){
        window.location.reload();
    }
    xBall += dxBall;
    yBall += dyBall;
}

animation();

window.addEventListener("keydown",function(e){
    if(dxBall < 0){
        if(e.code === "KeyS" || e.code === "ArrowDown"){
            if(!(yRect >= ((canvas.height - rectHeight)))){
                yRect += dyRect;
            }
        }else if(e.code === "KeyW" || e.code === "ArrowUp"){
            if(!(yRect === 0)){
                yRect -= dyRect;
            }
        }
    }else{
        if(e.code === "KeyS" || e.code === "ArrowDown"){
            if(!(yRect2 >= ((canvas.height - rectHeight)))){
                yRect2 += dyRect;
            }
        }else if(e.code === "KeyW" || e.code === "ArrowUp"){
            if(!(yRect2 === 0)){
                yRect2 -= dyRect;
            }
        }
    }
});