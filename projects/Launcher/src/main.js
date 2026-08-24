let theme;

function setup() {
    theme = new ThemeEngine();
    createCanvas(windowWidth, windowHeight);
    launcher = new Launcher();
}

function update(deltaTime) {
}

function draw() {
    background(theme.bg);
    launcher.draw();
}

function mousePressed() {
    launcher.mousePressed();
}

function mouseDragged() {
    launcher.mouseDragged();
}

function mouseReleased() {
    launcher.mouseReleased();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}