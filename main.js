//Create a reference for canvas 
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d")
//Give specific height and width to the car image
greencar_width=75
greencar_height=100
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
greencar_X=5
greencar_Y=225

function add() {
	//upload car, and background images on the canvas.
	backgroundImageTag=new Image();
	backgroundImageTag.onload=uploadBackground;
	backgroundImageTag.src=background_image;

	greencarImageTag=new Image();
	greencarImageTag.onload=uploadgreencar;
	greencarImageTag.src=greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(backgroundImageTag,0,0,canvas.width,canvas.height)

}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
ctx.drawImage(greencarImageTag,greencar_X,greencar_Y, greencar_width,greencar_height)
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if (greencar_Y>=0) {
		greencar_Y = greencar_Y - 10;
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	//Define function to move the car downward
	if (greencar_Y<=300) {
		greencar_Y +=10
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	//Define function to move the car left side
	if (greencar_X>=0) {
		greencar_X -=10
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	//Define function to move the car right side
	if (greencar_X<=700) {
		greencar_X +=10
		uploadBackground();
		uploadgreencar();
	}
}
