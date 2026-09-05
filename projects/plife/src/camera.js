class Camera {
	constructor() {
		this.x = 0;
		this.y = 0;
		this.zoom = 1;
	}

	apply() {
		translate(windowWidth / 2, windowHeight / 2);
		scale(this.zoom);
		translate(-this.x, -this.y);
	}

	reset() {
		this.x = width / 2;
		this.y = height / 2;
		this.zoom = min(windowWidth / width, windowHeight / height) * 0.95;
	}
}