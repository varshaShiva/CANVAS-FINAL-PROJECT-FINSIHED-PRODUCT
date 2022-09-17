var last_position_of_x, last_position_of_y;
widthofline=3;
color="black";

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var width=screen.width;
var new_width= screen.width-70;
var new_heigth= screen.height-300;

if (width<992)
{
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_heigth;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart",my_touchstart);

function my_touchstart(e)
{
    console.log("my_touchstart");
    widthofline=document.getElementById("widthofline").value;
    color=document.getElementById("color").value;
    last_position_of_x= e.touches[0].clientX-canvas.offsetLeft;
    last_position_of_y= e.touches[0].clientY-canvas.offsetTop;
}

canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e)
{
    console.log("my_touchmove");
    current_position_of_x= e.touches[0].clientX-canvas.offsetLeft;
    current_position_of_y= e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=widthofline;
    console.log("last position of X and Y coordinates = ")
    console.log(last_position_of_x+","+last_position_of_y);
    ctx.moveTo(last_position_of_x,last_position_of_y);
    console.log("current position of X and Y coordinates = ")
    console.log(current_position_of_x+","+current_position_of_y);
    ctx.lineTo(current_position_of_x,current_position_of_y);
    ctx.stroke();
    last_position_of_x=current_position_of_x;
    last_position_of_y=current_position_of_y;
}

function clear_function(e)
{
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}