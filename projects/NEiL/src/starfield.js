// starfield animation
// chris geese @ 2026

// star class
class Star {
	constructor() {
		this.x = rX();
		this.y = rY();
		this.speed = rFlt(1, 5);
		this.radius = rFlt(1, 3);
	}

	update(deltaTime) {
		this.x += this.speed * deltaTime / 50;
		if (this.x > width) {
			this.x = 0;
			this.y = rY();
		}
	}

	draw() {
		fill(theme.fg)
		ellipse(this.x, this.y, this.radius);
	}
}

// starfield class
class StarField {
	constructor() {
		this.x = width;
		this.y = height;
		this.count = 250;
		this.stars = [];

		for (let i = 0; i < this.count; i++) {
			this.stars.push(new Star());
		}
	}

	update(deltaTime) {
		for (let star of this.stars) {
			star.update(deltaTime);
		}
	}

	draw() {
		for (let star of this.stars) {
			star.draw();
		}
	}
}
