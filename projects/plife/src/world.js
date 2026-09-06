class World {
	constructor() {
		this.theme = new ThemeEngine();
		this.camera = new Camera();
		this.atoms = [];
		this.settings = {
			speciesCount: 7,
			repulsionStrength: 120,
			repulsionDistance: 40
		};
		this.display = {
			grid: true,
			heatmap: true
		};
		this.gui = new GUI();
		this.gui.add(this.display, "grid").name("Show Grid");
		this.gui.add(this.display, "heatmap").name("Show Heatmap");
		this.gui.add(this.settings, "speciesCount", 3, 7, 1)
			.name("Species")
			.onChange((count) => this.setSpeciesCount(count));
		this.gui.add(this.settings, "repulsionStrength", 0, 500)
			.name("Repulsion Strength");
		this.gui.add(this.settings, "repulsionDistance", 1, 100)
			.name("Repulsion Distance");

		createCanvas(windowWidth * 3, windowHeight * 3);

		this.grid = new Grid(100);
		this.camera.reset();

		for (let i = 0; i < 100; i++) {
			this.atoms.push(
				new Atom(
					createVector(
						random(this.grid.offsetX, this.grid.offsetX + this.grid.width),
						random(this.grid.offsetY, this.grid.offsetY + this.grid.height)
					),
					this.settings.speciesCount
				)
			);
		}
	}

	setSpeciesCount(count) {
		for (let atom of this.atoms)
			atom.setSpeciesCount(count);
	}
	
	update(deltaTime) {
		this.grid.clear();

		for (let atom of this.atoms)
			atom.resetForces();

		for (let atom of this.atoms)
			this.grid.insert(atom);

		for (let atom of this.atoms) {
			let radius = atom.radius * 8;
			for (let other of this.grid.getNearby(atom, radius)) {
				let delta = this.grid.deltaBetween(atom, other);
				atom.applyRepulsion(
					other,
					delta,
					delta.mag(),
					this.settings.repulsionStrength,
					this.settings.repulsionDistance
				);
			}
		}

		for (let atom of this.atoms)
			atom.update(deltaTime, this.grid);
	}
	
	draw() {
		background(this.theme.colors.bg);
		this.camera.apply();
		this.grid.draw(this.theme.colors.fg, this.display);

		for (let atom of this.atoms)
			atom.draw(this.theme.colors.species[atom.species]);
	}
	
	windowResized() {
		resizeCanvas(windowWidth * 3, windowHeight * 3);
		this.camera.reset();
	}
}