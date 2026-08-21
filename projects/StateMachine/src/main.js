let theme;
let gsm;

function setup() {
	createCanvas(windowWidth, windowHeight);
	theme = new ThemeEngine();
	gsm = new StateMachine();
	gsm.enter(new MenuState())
}

function update(deltaTime) {
	gsm.update(deltaTime);
}

function draw() {
	gsm.draw();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
