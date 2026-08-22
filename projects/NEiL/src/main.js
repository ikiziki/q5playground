let theme;
let gsm;

function setup() {
	  createCanvas(windowWidth, windowHeight);
    theme = new ThemeEngine();
		gsm = new StateMachine();
		gsm.enter(new MenuState());
}

function update(deltaTime) {
	gsm.currentState.update(deltaTime);
}

function draw() {
	gsm.currentState.draw();
}

function touchStarted() {
	gsm.currentState.touchStarted(touches);
}

function touchMoved() {
	gsm.currentState.touchMoved(touches);
}

function touchEnded() {
	gsm.currentState.touchEnded(touches);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}