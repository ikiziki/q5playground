let theme;
let qt;

function setup() {
	theme = new ThemeEngine();
	qt = new QuadTree(0, 0, windowWidth, windowHeight, 10, 0, 4);
	createCanvas(windowWidth, windowHeight);
		
	console.log(qt)
}

function update(deltaTime) {
}

function draw() {
	background(theme.bg);
		
	push();
	fill(theme.fg);
	if (touches.length > 0) {
  	ellipse(touches[0].x, touches[0].y, 25, 25);
		console.log(floor(touches[0].x), floor(touches[0].y));
  }
	pop();
		
	qt.subdivide()
		
	push()
	qt.draw();
	pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}