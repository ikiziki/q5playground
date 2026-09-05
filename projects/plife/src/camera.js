class Camera {
	constructor() {
		this.x = 0;
		this.y = 0;
		this.zoom = 1;
	}

	apply() {
		translate(width / 2, height / 2);
		scale(this.zoom);
		translate(-this.x, -this.y);
	}

	reset() {
		this.x = width / 2;
		this.y = height / 2;
		this.zoom = 1;
	}
}