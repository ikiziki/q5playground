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

	zoomAt(delta, screenX, screenY) {
		let worldX = this.x + (screenX - width / 2) / this.zoom;
		let worldY = this.y + (screenY - height / 2) / this.zoom;
		let zoomFactor = Math.pow(1.001, -delta);
		this.zoom = constrain(this.zoom * zoomFactor, 0.25, 4);
		this.x = worldX - (screenX - width / 2) / this.zoom;
		this.y = worldY - (screenY - height / 2) / this.zoom;
	}
	
	begin() {
		translate(width/2, height/2);
		scale(this.zoom);
		translate(-this.x, -this.y);
	}
}