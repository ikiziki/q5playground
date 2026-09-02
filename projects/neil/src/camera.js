class Camera {
	constructor() {
		this.x = 0;
		this.y = 0;
		this.zoom = 1;
		this.dragging = false;
		this.lastX = 0;
		this.lastY = 0;
	}
	
	panStart(x, y) {
		this.dragging = true;
		this.lastX = x;
		this.lastY = y;
	}
	
	panMove(x, y) {
		if (!this.dragging) return;
		let dx = x - this.lastX;
		let dy = y - this.lastY;
		this.x -= dx / this.zoom;
		this.y -= dy / this.zoom;
		this.lastX = x;
		this.lastY = y;
	}
	
	panEnd() {
		this.dragging = false;
	}
	
	begin() {
		translate(width/2, height/2);
		scale(this.zoom);
		translate(-this.x, -this.y);
	}
}