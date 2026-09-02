let game;

function setup() {
	createCanvas(windowWidth, windowHeight);
	game = new Game();
}

function update(deltaTime) {
	game.update();
}

function draw() {
	game.draw();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
