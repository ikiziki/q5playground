// Particle Life Playground
// chris geese @ 2026

let theme;
let qt;

function setup() {
	theme = new ThemeEngine();
	qt = new QuadTree(0, 0, windowWidth, windowHeight, 10, 0, 4);
	createCanvas(windowWidth, windowHeight);

	//subdivide the quadtree
	qt.subdivide();
	//onsole.log(qt) after subdivision;	
	console.log(qt);
}

function update(deltaTime) {}

function draw() {
	background(theme.bg);

	//Draw touches
	push();
	fill(theme.fg);
	if (touches.length > 0) {
		ellipse(touches[0].x, touches[0].y, 25, 25);
	};
	pop();

	//Draw mouse
	push();
	fill(theme.fg);
	ellipse(mouseX, mouseY, 25, 25);
	pop();

	// recurively draw the quadtree
	push();
	qt.draw();
	pop();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
