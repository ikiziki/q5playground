class Atom {
	constructor(pos) {
		this.pos = pos.copy();
		this.velocity = createVector(0, 0);
		this.radius = 5;
		this.mass = 1;
		this.type = 0;
	}

	get x() { return this.pos.x; }
	get y() { return this.pos.y; }

	update(dt) {
		this.pos.add(p5.Vector.mult(this.velocity, dt));
	}

	draw(fillColor) {
		push();
		fill(fillColor[0], fillColor[1], fillColor[2]);
		circle(this.x, this.y, this.radius * 2);
		pop();
	}
}