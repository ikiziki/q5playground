class Atom {
	constructor(pos) {
		this.pos = pos.copy();
		this.velocity = p5.Vector.random2D().mult(random(20, 50));
		this.radius = 5;
		this.mass = 1;
		this.type = 0;
		this.force = createVector(0, 0);
	}
	
	get x() { return this.pos.x; }
	get y() { return this.pos.y; }

	resetForces() {
		this.force.set(0, 0);
	}

	applyRepulsion(other, delta, distance) {
		let minimumDistance = this.radius + other.radius;
		let interactionDistance = minimumDistance * 4;
		if (distance >= interactionDistance) return;

		let direction = distance > 0 ? delta.copy().normalize() : p5.Vector.random2D();
		let falloff = 1 - distance / interactionDistance;
		let overlap = Math.max(0, minimumDistance - distance);
		let strength = 120 * falloff * falloff + 800 * overlap / minimumDistance;
		this.force.add(direction.mult(-strength));
	}
	
	update(dt, grid) {
		let seconds = dt / 1000;
		this.velocity.add(p5.Vector.mult(this.force, seconds / this.mass));
		this.pos.add(p5.Vector.mult(this.velocity, seconds));
		
		if (this.x <= grid.offsetX)
			this.pos.x = grid.offsetX + grid.width;
		else if (this.x >= grid.offsetX + grid.width)
			this.pos.x = grid.offsetX;
		
		if (this.y <= grid.offsetY)
			this.pos.y = grid.offsetY + grid.height;
		else if (this.y >= grid.offsetY + grid.height)
			this.pos.y = grid.offsetY;
	}
	
	draw(fillColor) {
		push();
		fill(fillColor[0], fillColor[1], fillColor[2]);
		circle(this.x, this.y, this.radius * 2);
		pop();
	}
}