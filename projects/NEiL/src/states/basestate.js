// basestate for inheritance
// chris geese @ 2026

class BaseState {
	constructor() {
	}
	
	enter() {}
	
	update(deltaTime) {}
	
	pause() {}
	
	resume() {}
	
	draw() {}
	
	touchStarted(touches) {}
	
	touchMoved(touches) {}
	
	touchEnded(touches) {}
	
	exit() {}
	
}