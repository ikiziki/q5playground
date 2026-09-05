class World {
	constructor() {
		this.theme = new ThemeEngine();
		this.camera = new Camera();
		this.grid = new Grid();
		createCanvas(windowWidth * 3, windowHeight * 3);
		
		this.camera.reset();
	}
	
	update(deltaTime) {
		this.grid.clear();
	}
	
	draw() {
		background(this.theme.colors.bg)
		this.camera.apply();
		this.grid.draw();
	}
	
  windowResized() {
		resizeCanvas(windowWidth * 3, windowHeight * 3);
		this.camera.reset();
 }
}