class World {
	constructor() {
		this.theme = new ThemeEngine();
		this.camera = new Camera();
		this.atoms = [];

		createCanvas(windowWidth * 3, windowHeight * 3);

		this.grid = new Grid(100);
		this.camera.reset();

		for (let i = 0; i < 100; i++) {
			this.atoms.push(
				new Atom(
					createVector(
						random(this.grid.offsetX, this.grid.offsetX + this.grid.width),
						random(this.grid.offsetY, this.grid.offsetY + this.grid.height)
					)
				)
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
		this.grid.draw(this.theme.colors.fg);

		for (let atom of this.atoms)
			atom.draw(this.theme.colors.fg);
	}
	
	windowResized() {
		resizeCanvas(windowWidth * 3, windowHeight * 3);
		this.camera.reset();
	}
}