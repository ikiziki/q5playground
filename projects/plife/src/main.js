let theme;

function setup() {
	world = new World();
}

function update(deltaTime) {
	world.update(deltaTime);
}

function draw() {
	update(deltaTime);
	world.draw();
}

function windowResized() {
	world.windowResized();
}