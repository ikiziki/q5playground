// a set of helper functions to keep projects clean
// chris geese @ 2026

console.log("utilities loaded")


// ============================================================
// RANDOM
// ============================================================

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

// returns a random angle in radians
function rAngle(){
	return Math.random() * Math.PI * 2;
}

// returns a random 2D unit vector
function rVec(){
	let angle = rAngle();
	return {
		x: Math.cos(angle),
		y: Math.sin(angle)
	};
}

// returns a random 2D vector with a magnitude between min and max
function rVecMag(min, max){
	let angle = rAngle();
	let magnitude = rFlt(min, max);

	return {
		x: Math.cos(angle) * magnitude,
		y: Math.sin(angle) * magnitude
	};
}


// ============================================================
// VECTOR
// ============================================================

// returns the magnitude of a vector
function vMag(x, y){
	return Math.sqrt(x * x + y * y);
}

// returns the squared magnitude of a vector
function vMagSq(x, y){
	return x * x + y * y;
}

// returns a normalized vector
function vNorm(x, y){
	let magnitude = vMag(x, y);

	if (magnitude === 0) {
		return {
			x: 0,
			y: 0
		};
	}

	return {
		x: x / magnitude,
		y: y / magnitude
	};
}

// adds two vectors
function vAdd(x1, y1, x2, y2){
	return {
		x: x1 + x2,
		y: y1 + y2
	};
}

// subtracts vector 2 from vector 1
function vSub(x1, y1, x2, y2){
	return {
		x: x1 - x2,
		y: y1 - y2
	};
}

// multiplies a vector by a scalar
function vMult(x, y, scalar){
	return {
		x: x * scalar,
		y: y * scalar
	};
}

// limits the magnitude of a vector
function vLimit(x, y, max){
	let magSq = vMagSq(x, y);

	if (magSq > max * max) {
		let scale = max / Math.sqrt(magSq);

		return {
			x: x * scale,
			y: y * scale
		};
	}

	return {
		x: x,
		y: y
	};
}


// ============================================================
// DISTANCE / GEOMETRY
// ============================================================

// returns squared distance between two points
function distSq(x1, y1, x2, y2){
	let dx = x2 - x1;
	let dy = y2 - y1;

	return dx * dx + dy * dy;
}

// returns distance between two points
function dist(x1, y1, x2, y2){
	return Math.sqrt(distSq(x1, y1, x2, y2));
}

// returns the angle from one point to another
function angleTo(x1, y1, x2, y2){
	return Math.atan2(y2 - y1, x2 - x1);
}

// returns the squared distance from a point to the origin
function pointMagSq(x, y){
	return x * x + y * y;
}

// returns the distance from a point to the origin
function pointMag(x, y){
	return Math.sqrt(pointMagSq(x, y));
}


// ============================================================
// VALUE / SIMULATION
// ============================================================

// keeps a value between min and max
function clamp(value, min, max){
	return Math.max(min, Math.min(max, value));
}

// maps a value from one range to another
function mapValue(value, inMin, inMax, outMin, outMax){
	return outMin + (value - inMin) *
		(outMax - outMin) / (inMax - inMin);
}

// linearly interpolates between two values
function lerpValue(a, b, amount){
	return a + (b - a) * amount;
}

// returns the sign of a value
function sign(value){
	if (value < 0) return -1;
	if (value > 0) return 1;
	return 0;
}


// ============================================================
// BOUNDARY
// ============================================================

// wraps a value around a range
function wrap(value, min, max){
	if (value < min) return max;
	if (value > max) return min;
	return value;
}

// reflects a value at a boundary
function reflect(value, min, max){
	if (value < min) return min + (min - value);
	if (value > max) return max - (value - max);
	return value;
}


// ============================================================
// NORMALIZATION
// ============================================================

// converts a value from min-max into 0-1
function normalize(value, min, max){
	return (value - min) / (max - min);
}

// converts a normalized 0-1 value into min-max
function denormalize(value, min, max){
	return min + value * (max - min);
}


// ============================================================
// ANGLES
// ============================================================

// converts degrees to radians
function degToRad(degrees){
	return degrees * Math.PI / 180;
}

// converts radians to degrees
function radToDeg(radians){
	return radians * 180 / Math.PI;
}

// keeps an angle between 0 and 2π
function normalizeAngle(angle){
	angle %= Math.PI * 2;

	if (angle < 0) {
		angle += Math.PI * 2;
	}

	return angle;
}