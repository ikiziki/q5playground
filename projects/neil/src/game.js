class Game {
	constructor() {
		this.theme = new ThemeEngine();
	}

	update() {}

	draw() {
		background(this.theme.bg)
	}

}
