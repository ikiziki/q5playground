let theme;

function setup() {
    theme = new ThemeEngine();
    createCanvas(windowWidth, windowHeight);
}

function update(deltaTime) {
}

function draw() {
    background(theme.bg);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}