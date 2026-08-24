class Launcher {
    constructor() {
        this.active = false;
        this.launched = false;
        this.start = new q5.Vector(0, 0);
        this.current = new q5.Vector(0, 0);
        this.maxDistance = 200;
        this.maxSpeed = 100;
        this.circleRadius = 20;
        this.velocity = new q5.Vector(0, 0);
    }
    mousePressed() {
        this.start.set(mouseX, mouseY);
        this.current.set(mouseX, mouseY);
        this.active = true;
        this.launched = false;
    }
    mouseDragged() {
        if (!this.active) return;
        this.current.set(mouseX, mouseY);
    }
    mouseReleased() {
        if (!this.active) return;
        this.current.set(mouseX, mouseY);
        this.launch();
    }
    launch() {
        this.velocity = this.getVelocity();
        this.launched = true;
        this.active = false;
    }
    getVelocity() {
        let vector = q5.Vector.sub(this.start, this.current);
        let lengthSqr = vector.magSq();
        if (lengthSqr === 0) return new q5.Vector(0, 0);
        let length = Math.sqrt(lengthSqr);
        let distance = Math.min(length, this.maxDistance);
        vector.normalize();
        let power = distance / this.maxDistance;
        return vector.mult(power * this.maxSpeed);
    }
    getPower() {
        let vector = q5.Vector.sub(this.start, this.current);
        let distance = vector.mag();
        return Math.min(distance / this.maxDistance, 1);
    }
    getPowerColor() {
        let power = this.getPower();
        if (power < 0.333) {
            let t = power / 0.333;
            return {r: theme.fg.r * (1 - t), g: theme.fg.g * (1 - t) + 255 * t, b: theme.fg.b * (1 - t)};
        } else if (power < 0.666) {
            let t = (power - 0.333) / 0.333;
            return {r: 255 * t, g: 255 - 100 * t, b: 0};
        } else {
            let t = (power - 0.666) / 0.334;
            return {r: 255, g: 155 * (1 - t), b: 0};
        }
    }
    draw() {
        if (!this.active) return;
        this.current.set(mouseX, mouseY);
        let powerColor = this.getPowerColor();
        let radius = this.circleRadius * 4 * this.getPower();
        push();
        stroke(powerColor.r, powerColor.g, powerColor.b, 128);
        strokeWeight(2);
        line(this.start.x, this.start.y, this.current.x, this.current.y);
        noFill();
        stroke(powerColor.r, powerColor.g, powerColor.b, 128);
        strokeWeight(4);
        ellipse(this.start.x, this.start.y, radius * 2, radius * 2);
        fill(theme.fg);
        noStroke();
        ellipse(this.start.x, this.start.y, 12, 12);
        pop();
    }
}