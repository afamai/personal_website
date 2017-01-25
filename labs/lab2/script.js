var canvas = document.getElementById("drawArea");
canvas.width = canvas.height = document.getElementById("container").offsetWidth;
var slider = document.getElementById("speed");
var ctx = canvas.getContext("2d");
var angle = Math.random()*2*Math.PI;
var img = new Image();
img.src = "ufo.png";
var ufo = {
	x:Math.random()*(canvas.width-10)+5,
	y:Math.random()*(canvas.height-10)+5,
	width:50,
	height:32,
	xSpeed:Math.cos(angle),
	ySpeed:Math.sin(angle),
	draw:function(){
		ctx.drawImage(img,this.x,this.y,this.width,this.height);
	}
}
function update()
{
    if(slider.value != 0){
	ctx.clearRect(0,0,canvas.width,canvas.height);
	ufo.draw();
	ufo.x += ufo.xSpeed * slider.value;
	ufo.y += ufo.ySpeed * slider.value;
	if(ufo.x + ufo.width > canvas.width)
	{
		ufo.x = canvas.width - ufo.width;
		ufo.xSpeed *= -1;
	}
	else if(ufo.x < 0)
	{
		ufo.x = 0;
		ufo.xSpeed *= -1;
	}
	if(ufo.y+ufo.height > canvas.height)
	{
		ufo.y = canvas.height - ufo.height;
		ufo.ySpeed *= -1;
	}
	else if(ufo.y < 0)
	{
		ufo.y = 0;
		ufo.ySpeed *= -1;
	}
    }
}
setInterval(update,10);
