class Atom {
	constructor(pos) {
		this.pos = pos.copy();
		this.velocity = p5.Vector.random2D().mult(random(20, 50));
		this.radius = 6;
		this.mass = 1;
		this.type = 0;
	}
	
	get x() { return this.pos.x; }
	get y() { return this.pos.y; }
	
	update(dt, grid) {
		this.pos.add(p5.Vector.mult(this.velocity, dt / 1000));
		
		if (this.x < grid.offsetX)
			this.pos.x = grid.offsetX + grid.width;
		else if (this.x > grid.offsetX + grid.width)
			this.pos.x = grid.offsetX;
		
		if (this.y < grid.offsetY)
			this.pos.y = grid.offsetY + grid.height;
		else if (this.y > grid.offsetY + grid.height)
			this.pos.y = grid.offsetY;
	}
	
	draw(fillColor) {
		push();
		fill(fillColor[0], fillColor[1], fillColor[2]);
		circle(this.x, this.y, this.radius * 2);
		pop();
	}
}