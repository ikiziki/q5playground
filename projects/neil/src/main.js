let game;

function setup() {
	createCanvas(windowWidth, windowHeight);
	game = new Game();
}

function update(deltaTime) {
	game.update(deltaTime);
}

function draw() {
	game.draw();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function touchStarted() {
	game.touchStarted();
}

function touchMoved() {
	game.touchMoved();
}

function touchEnded() {
	game.touchEnded();
}