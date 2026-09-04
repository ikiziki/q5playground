class Game {
	constructor() {
		this.theme = new ThemeEngine();
		this.camera = new Camera();
	}

	update(deltaTime) {}

	draw() {
		background(this.theme.bg);
		this.camera.begin();
		drawGrid();
	}
	
	touchStarted() {
		this.camera.panStart(mouseX, mouseY);
	}
	
	touchMoved() {
		this.camera.panMove(mouseX, mouseY);
		return false;
	}
	
	touchEnded() {
		this.camera.panEnd();
	}

	mousePressed() {
		this.camera.panStart(mouseX, mouseY);
	}

	mouseDragged() {
		this.camera.panMove(mouseX, mouseY);
		return false;
	}

	mouseReleased() {
		this.camera.panEnd();
	}

	mouseWheel(event) {
		this.camera.zoomAt(event.deltaY, mouseX, mouseY);
		return false;
	}

}




function drawGrid() {
    let size = 100;
    let extent = 2000;
    stroke(0);
    strokeWeight(1);
    for (let x = -extent; x <= extent; x += size) {
        line(x, -extent, x, extent);
    }
    for (let y = -extent; y <= extent; y += size) {
        line(-extent, y, extent, y);
    }
    stroke(255);
    strokeWeight(3);
    line(0, -extent, 0, extent);
    line(-extent, 0, extent, 0);
}