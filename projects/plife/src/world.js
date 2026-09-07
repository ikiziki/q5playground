class World {
	constructor() {
		this.theme = new ThemeEngine();
		this.camera = new Camera();
		this.atoms = [];
		this.settings = {
			speciesCount: 4,
			atomCount: 100,
			speedLimit: 100,
			repulsionStrength: 120,
			repulsionDistance: 100
		};
		this.display = {
			grid: false,
			heatmap: false
		};
		this.gui = new GUI();
		this.gui.add(this, "resetDefaults").name("Reset Defaults");
		this.gui.add(this, "randomizeRules").name("Randomize Rules");
		this.gui.add(this.display, "grid").name("Show Grid");
		this.gui.add(this.display, "heatmap").name("Show Heatmap");
		this.gui.add(this.settings, "speciesCount", 2, 7, 1)
			.name("Species")
			.onChange((count) => this.setSpeciesCount(count));
		this.gui.add(this.settings, "atomCount", 50, 5000, 1)
			.name("Atoms")
			.onChange((count) => this.setAtomCount(count));
		this.gui.add(this.settings, "speedLimit", 10, 300)
			.name("Speed Limit");
		this.gui.add(this.settings, "repulsionStrength", 0, 500)
			.name("Repulsion Strength");
		this.gui.add(this.settings, "repulsionDistance", 1, 300)
			.name("Interaction Distance");
		this.addRuleControls();

		createCanvas(windowWidth * 3, windowHeight * 3);

		this.grid = new Grid(100);
		this.camera.reset();

		this.setAtomCount(this.settings.atomCount);
	}

	resetDefaults() {
		this.settings.speciesCount = 4;
		this.settings.atomCount = 100;
		this.settings.speedLimit = 100;
		this.settings.repulsionStrength = 120;
		this.settings.repulsionDistance = 100;
		this.display.grid = false;
		this.display.heatmap = false;
		for (let key in rules)
			rules[key] = defaultRules[key];
		this.setAtomCount(this.settings.atomCount);
		this.setSpeciesCount(this.settings.speciesCount);
		for (let controller of this.gui.controllersRecursive())
			controller.updateDisplay();
	}

	randomizeRules() {
		for (let key in rules)
			rules[key] = random(-100, 100);
		for (let controller of this.gui.controllersRecursive())
			controller.updateDisplay();
	}

	addRuleControls() {
		let rulesFolder = this.gui.addFolder("Rules");
		for (let source of "ABCDEFG") {
			let sourceFolder = rulesFolder.addFolder(source);
			for (let target of "ABCDEFG") {
				let key = source + target;
				sourceFolder.add(rules, key, -100, 100, 0.1).name(target);
			}
		}
	}

	setAtomCount(count) {
		while (this.atoms.length < count) {
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
		this.atoms.length = count;
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
			let radius = Math.max(
				atom.radius * 8,
				this.settings.repulsionDistance
			);
			for (let other of this.grid.getNearby(atom, radius)) {
				let delta = this.grid.deltaBetween(atom, other);
				atom.applyInteraction(
					other,
					delta,
					delta.mag(),
					this.settings.repulsionStrength,
					this.settings.repulsionDistance,
					rules[atom.species + other.species]
				);
			}
		}

		for (let atom of this.atoms)
			atom.update(deltaTime, this.grid, this.settings.speedLimit);
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