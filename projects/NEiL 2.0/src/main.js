let theme;

function setup() {
    theme = new ThemeEngine();
    sm = new StateMachine();
    createCanvas(windowWidth, windowHeight);
}

function update(deltaTime) {
    sm.update(deltaTime);
}

function draw() {
    sm.draw();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function keyPressed(event) {
    return sm.handleInput('keyPressed', event);
}

function keyReleased(event) {
    return sm.handleInput('keyReleased', event);
}

function keyTyped(event) {
    return sm.handleInput('keyTyped', event);
}

function mouseMoved(event) {
    return sm.handleInput('mouseMoved', event);
}

function mousePressed(event) {
    return sm.handleInput('mousePressed', event);
}

function mouseReleased(event) {
    return sm.handleInput('mouseReleased', event);
}

function mouseDragged(event) {
    return sm.handleInput('mouseDragged', event);
}

function mouseClicked(event) {
    return sm.handleInput('mouseClicked', event);
}

function doubleClicked(event) {
    return sm.handleInput('doubleClicked', event);
}

function mouseWheel(event) {
    return sm.handleInput('mouseWheel', event);
}

function touchStarted(event) {
    return sm.handleInput('touchStarted', event);
}

function touchMoved(event) {
    return sm.handleInput('touchMoved', event);
}

function touchEnded(event) {
    return sm.handleInput('touchEnded', event);
}