class Atom {
	constructor(pos) {
		this.pos = pos.copy();
		this.velocity = createVector(0, 0);
		this.radius = 6;
		this.mass = 1;
		this.type = 0;
	}

	get x() { return this.pos.x; }
	get y() { return this.pos.y; }

	update(dt) {
		this.pos.add(p5.Vector.mult(this.velocity, dt));
	}

	draw() {
		circle(this.x, this.y, this.radius * 2);
	}
}