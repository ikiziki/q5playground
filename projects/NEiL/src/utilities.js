// common helper utilitiea
// chris geese @ 2026

// returns a random integer between min and max, inclusive
function rInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// returns a random float between min and max, exclusive
function rFlt(min, max) {
  return Math.random() * (max - min) + min;
}

// returns a random x position
function rX() {
  return Math.floor(Math.random() * (WIDTH + 1));
}

// returns a random y position
function rY() {
  return Math.floor(Math.random() * (HEIGHT + 1));
}

// returns a random vec2
function rVec2() {
  let x = Math.floor(Math.random() * (WIDTH + 1));
  let y = Math.floor(Math.random() * (HEIGHT + 1));
  return createVector(x, y);
}

