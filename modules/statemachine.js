// state machine
// chris geese @ 2026

class StateMachine {
	constructor() {
		this.currentState = null;
		this.previousState = null;
		this.stateStack = [];
	}

	enter(state) {
		if (this.currentState) {
			this.currentState.exit();
			this.previousState = this.currentState;
		}
		this.currentState = state;
		this.currentState.enter();
	}

	push(state) {
		if (this.currentState) {
			this.stateStack.push(this.currentState);
			this.currentState.pause();
		}
		this.currentState = state;
		this.currentState.enter();
	}

	pop() {
		if (this.currentState) {
			this.currentState.exit();
		}
		this.currentState = this.stateStack.pop();
		this.currentState.resume();
	}

	update(deltaTime) {
		if (this.currentState) {
			this.currentState.update(deltaTime);
		}
	}
	
	draw() {
		if (this.currentState) {
			this.currentState.draw();
		}
	}

	pause() {
		if (this.currentState) {
			this.currentState.pause();
		}
	}

	resume() {
		if (this.currentState) {
			this.currentState.resume();
		}
	}

	exit() {
		if (this.currentState) {
			this.currentState.exit();
		}
	}
}
