class World {
	constructor() {
		this.theme = new ThemeEngine();
		this.camera = new Camera();
		this.grid = new Grid();
		this.atoms = [];

		createCanvas(windowWidth * 3, windowHeight * 3);
		
		this.camera.reset();

		for (let i = 0; i < 100; i++) {
			this.atoms.push(
				new Atom(createVector(random(width), random(height)))
			);
		}
	}
	
	update(deltaTime) {
		this.grid.clear();

		for (let atom of this.atoms) {
			atom.update(deltaTime);
			this.grid.insert(atom);
		}
	}
	
	draw() {
		background(this.theme.colors.bg);
		this.camera.apply();
		this.grid.draw();

		for (let atom of this.atoms) {
			atom.draw();
		}
	}
	
	windowResized() {
		resizeCanvas(windowWidth * 3, windowHeight * 3);
		this.camera.reset();
	}
}