class Camera {
	constructor() {
		this.x = 0;
		this.y = 0;
		this.zoom = 1;
		this.dragging = false;
		this.lastX = 0;
		this.lastY = 0;
		this.pinchDistance = 0;
		this.pinchX = 0;
		this.pinchY = 0;
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

	touchStart(activeTouches) {
		if (activeTouches.length >= 2) {
			this.setPinchState(activeTouches);
			this.panEnd();
		} else if (activeTouches.length === 1) {
			this.panStart(activeTouches[0].x, activeTouches[0].y);
		}
	}

	touchMove(activeTouches) {
		if (activeTouches.length >= 2) {
			if (this.pinchDistance === 0) this.setPinchState(activeTouches);

			let midpoint = this.getTouchMidpoint(activeTouches);
			let distance = this.getTouchDistance(activeTouches);
			this.zoomAtFactor(distance / this.pinchDistance, this.pinchX, this.pinchY);
			this.x -= (midpoint.x - this.pinchX) / this.zoom;
			this.y -= (midpoint.y - this.pinchY) / this.zoom;
			this.pinchDistance = distance;
			this.pinchX = midpoint.x;
			this.pinchY = midpoint.y;
		} else if (activeTouches.length === 1) {
			if (this.pinchDistance !== 0) {
				this.pinchDistance = 0;
				this.panStart(activeTouches[0].x, activeTouches[0].y);
			} else {
				this.panMove(activeTouches[0].x, activeTouches[0].y);
			}
		}
	}

	touchEnd(activeTouches) {
		this.pinchDistance = 0;
		if (activeTouches.length === 1) {
			this.panStart(activeTouches[0].x, activeTouches[0].y);
		} else {
			this.panEnd();
		}
	}

	setPinchState(activeTouches) {
		this.pinchDistance = this.getTouchDistance(activeTouches);
		let midpoint = this.getTouchMidpoint(activeTouches);
		this.pinchX = midpoint.x;
		this.pinchY = midpoint.y;
	}

	getTouchDistance(activeTouches) {
		let dx = activeTouches[1].x - activeTouches[0].x;
		let dy = activeTouches[1].y - activeTouches[0].y;
		return Math.hypot(dx, dy);
	}

	getTouchMidpoint(activeTouches) {
		return {
			x: (activeTouches[0].x + activeTouches[1].x) / 2,
			y: (activeTouches[0].y + activeTouches[1].y) / 2
		};
	}

	zoomAt(delta, screenX, screenY) {
		this.zoomAtFactor(Math.pow(1.001, -delta), screenX, screenY);
	}

	zoomAtFactor(zoomFactor, screenX, screenY) {
		let worldX = this.x + (screenX - width / 2) / this.zoom;
		let worldY = this.y + (screenY - height / 2) / this.zoom;
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