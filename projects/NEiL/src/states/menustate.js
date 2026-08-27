// menu state
// cheis geese @ 2026

class MenuState extends BaseState {
	constructor() {
		super();
	}

	enter() {
		console.log("menu loaded")
	}

	update(deltaTime) {
	}

	draw() {
		background(theme.bg)
	}

	touchStarted(touches) {}

	touchMoved(touches) {}

	touchEnded(touches) {}
}
