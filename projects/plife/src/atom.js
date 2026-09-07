class Atom {
	constructor(pos, speciesCount) {
		this.pos = pos.copy();
		this.velocity = p5.Vector.random2D().mult(random(20, 50));
		this.radius = 5;
		this.mass = 1;
		this.setSpeciesCount(speciesCount);
		this.force = createVector(0, 0);
	}
	
	get x() { return this.pos.x; }
	get y() { return this.pos.y; }

	resetForces() {
		this.force.set(0, 0);
	}

	setSpeciesCount(count) {
		this.species = String.fromCharCode(65 + floor(random(count)));
	}

	applyInteraction(
		other,
		delta,
		distance,
		strength,
		interactionDistance,
		ruleStrength
	) {
		let minimumDistance = this.radius + other.radius;
		if (distance >= interactionDistance) return;

		let direction = distance > 0 ? delta.copy().normalize() : p5.Vector.random2D();
		let falloff = 1 - distance / interactionDistance;
		let overlap = Math.max(0, minimumDistance - distance);
		if (overlap > 0)
			this.pos.add(direction.copy().mult(-overlap * 0.5));

		let repulsion = overlap > 0 ?
			strength + 800 * overlap / minimumDistance :
			0;
		let interaction = ruleStrength * 5 * falloff;
		this.force.add(direction.mult(interaction - repulsion));
	}
	
	update(dt, grid, speedLimit) {
		let seconds = dt / 1000;
		this.velocity.add(p5.Vector.mult(this.force, seconds / this.mass));
		this.velocity.limit(speedLimit);
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