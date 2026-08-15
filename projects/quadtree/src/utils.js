// a set of helper functions to keep projects clean
// chris geese @ 2026

console.log("utilities loaded")

// returns a random number between 0 and 1
function rNum(){
	return Math.random();
}

// returns a random integer between min and max
function rInt(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// returns a random floating-point number between min and max
function rFlt(min, max){
	return min + Math.random() * (max - min);
}

// returns either -1 or 1
function rSign(){
	return Math.random() < 0.5 ? -1 : 1;
}

// returns a random x position on the canvas
function rX(){
	return Math.random() * width;
}

// returns a random y position on the canvas
function rY(){
	return Math.random() * height;
}