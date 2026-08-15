// Particle Life Playground
// chris geese @ 2026

let theme;
let qt;

function setup() {
	theme = new ThemeEngine();
	qt = new QuadTree(0, 0, windowWidth, windowHeight, 10, 0, 4);
	createCanvas(windowWidth, windowHeight);
	
	//qt insertion test
	for (let i = 0; i < 500; i++) {
		qt.insert(new Particle());
	}	
}

function update(deltaTime) {
}

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
	let range = new CircFinder(mouseX, mouseY, 100);
	let objects = qt.query(range);

	for (let object of objects) {
		object.drawEllipse();
	}
	pop();
	
	// draw particles within touch range
	push()
	if (touches.length > 0) {
		let range = new CircFinder(touches[0].x, touches[0].y, 100);
		let objects = qt.query(range);
		
		for (let object of objects) {
			object.drawEllipse();
		}
	}
	pop()
	
	// recurively draw the quadtree
	push();
	qt.draw();
	pop();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	qt.clear()
	qt = new QuadTree(0, 0, windowWidth, windowHeight, 10, 0, 4);
	for (let i = 0; i < 250; i++) {
		qt.insert(new Particle());
	}
}