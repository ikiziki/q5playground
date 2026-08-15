// particle class
// chris geese @ 2026

console.log("particle loaded")

// particle color array
const typeColor = {
	A: [255,145,145],
	B: [255,190,130],
	C: [245,220,115],
	D: [120,220,175],
	E: [105,205,229],
	F: [175,155,225],
	G: [235,145,205]
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
		this.x = x ?? rX(); // particle x position
		this.y = y ?? rY(); // particle y position
		this.vX = 0; // x velocity
		this.vY = 0; // y velocity
		this.aX = 0; // x acceleration
		this.aY = 0; // y acceleration
		this.fX = 0; // x force
		this.fY = 0; // y force
		this.lifespan = 1; // lifespan can be affected in the sim
		this.maxSpeed = 5; // max particle speed 
		this.maxForce = 1; // max force that can be applied
		this.mass = 1; // the mass of the particle
		this.radius = 5; // the size of the particle
		this.type = type ?? setType(); // particle type
		this.color = getTypeColor(this.type); // particle color
		this.active = true; // is this particle currently active
	}
	
	decay() {
	}
	
	expire() {
	}
	
	update(deltatime) {
	}
	
	drawEllipse(){
		push()
		noStroke()
		fill(this.color)
		ellipse(this.x, this.y, this.radius * 2)
		pop()
	}
	
	drawHeading(){
		push();
		noStroke();
		fill(this.color);
		let angle = Math.atan2(this.vY, this.vX);
		translate(this.x, this.y);
		rotate(angle);
		triangle(this.radius, 0,-this.radius, -this.radius * 0.6,-this.radius, this.radius * 0.6);
		pop();
	}

}



