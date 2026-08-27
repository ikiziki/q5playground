class StateMachine {
    constructor() {
        this.currentState = null;
        this.previousState = null;
        this.stateStack = [];
    }

    enter(state) {
        if (this.currentState && this.currentState.exit) {
            this.currentState.exit();
        }
        this.previousState = this.currentState;
        this.currentState = state;
        if (this.currentState && this.currentState.enter) {
            this.currentState.enter();
        }
    }

    pause(state) {
        if (!this.currentState || !state) {
            return;
        }
        if (this.currentState.pause) {
            this.currentState.pause();
        }
        this.previousState = this.currentState;
        this.stateStack.push(this.currentState);
        this.currentState = state;
        if (this.currentState.enter) {
            this.currentState.enter();
        }
    }

    resume() {
        if (this.stateStack.length === 0) {
            return;
        }
        if (this.currentState && this.currentState.exit) {
            this.currentState.exit();
        }
        this.previousState = this.currentState;
        this.currentState = this.stateStack.pop();
        if (this.currentState.resume) {
            this.currentState.resume();
        }
    }

    handleInput(inputName, event) {
        if (!this.currentState || !this.currentState[inputName]) {
            return true;
        }
        return this.currentState[inputName].call(this.currentState, event);
    }

    update(deltaTime) {
        if (this.currentState && this.currentState.update) {
            this.currentState.update(deltaTime);
        }
    }

    draw() { 
        if (this.currentState && this.currentState.draw) {
            this.currentState.draw();
        }
    }

    exit() {
        if (this.currentState && this.currentState.exit) {
            this.currentState.exit();
        }
    }
}