// state machine
// chris geese @ 2026

class StateMachine {
  constructor() {
    this.currentState = null;
    this.previousState = null;
    this.stateStack = {};
  }
  enter(state) {}

  push(state) {}

  pop(state) {}

  update(deltaTime) {}

  pause() {}

  resume() {}
  
  exit() {}
}
