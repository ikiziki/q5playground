let theme;
let gsm;

function setup() {
    theme = new ThemeEngine();
    gsm = new StateMachine();
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