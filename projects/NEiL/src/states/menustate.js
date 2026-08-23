// menu state
// cheis geese @ 2026

class MenuState extends BaseState {
	constructor() {
		super();
		this.sf = null
	}

	enter() {
		console.log("menu loaded")
		this.sf = new StarField();
	}

	update(deltaTime) {
		this.sf.update(deltaTime)
	}

	draw() {
		background(theme.bg)
		this.sf.draw();
	}

	touchStarted(touches) {}

	touchMoved(touches) {}

	touchEnded(touches) {}
}
