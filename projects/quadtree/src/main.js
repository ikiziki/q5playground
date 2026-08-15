let theme;
let qt;

function setup() {
	theme = new ThemeEngine();
	qt = new QuadTree(0, 0, windowWidth, windowHeight, 10, 0, 4);
	createCanvas(windowWidth, windowHeight);
}

function update(deltaTime) {
}

function draw() {
	background(theme.bg);

	//subdivide the quadtree
	qt.subdivide();

	//Draw touches
	push();
	fill(theme.fg);
	if (touches.length > 0) {
  	ellipse(touches[0].x, touches[0].y, 25, 25);
		console.log(floor(touches[0].x), floor(touches[0].y));
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

	//show the quadtree in the console
	console.log(qt)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}