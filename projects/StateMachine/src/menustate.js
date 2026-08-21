// menu state
// chris geese @ 2026

class MenuState extends BaseState {
	constructor() {
		super();
	}

	enter() {
		console.log("menu state loaded");
	}

	update(deltaTime) {}
	
	draw() {
		background(theme.bg);
	}

	pause() {}

	resume() {}

	exit() {}
}
