// particle class
// chris geese @ 2026

console.log("particle loaded")

// particle color array
const typeColor = {
	A: [255, 0, 0],
	B: [0, 255, 0],
	C: [0, 0, 255],
	D: [255, 255, 0],
	E: [255, 0, 255],
	F: [0, 255, 255],
	G: [255, 255, 255]
};

// picks a random type assignment
function setType(){
	const types = ["A", "B", "C", "D", "E", "F", "G"];
	return types[rInt(0, types.length - 1)];
}

// sets a color based on type
function getTypeColor(type){
	return typeColor[type];
}

// particle class
class Particle {
	constructor(x, y, type) {
		this.x = x ?? rX();
		this.y = y ?? rY();
		this.vX = 0; // x velocity
		this.vY = 0; // y velocity
		this.aX = 0; // x acceleration
		this.aY = 0; // y acceleration
		this.fX = 0; // x force
		this.fY = 0; // y force
		this.mass = 1;
		this.radius = 5;
		this.type = type ?? setType();
		this.color = getTypeColor(this.type);
		this.active = true;
	}
	
	update(){
	}
	
	draw(){
		push()
		noStroke()
		fill(this.color)
		ellipse(this.x, this.y, this.radius)
		pop()
	}

}