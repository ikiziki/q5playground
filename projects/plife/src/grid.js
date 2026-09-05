class Grid {
	constructor() {
		this.cellSize = 100;
		this.cells = new Map();
	}
	
	clear() {
		this.cells.clear();
	}
	
	insert(object) {
		let col = Math.floor(object.x / this.cellSize);
		let row = Math.floor(object.y / this.cellSize);
		let key = `${col},${row}`;
		
		if (!this.cells.has(key)) this.cells.set(key, []);
		this.cells.get(key).push(object);
	}
	
	getNearby(object, radius) {
		let nearby = [];
		let col = Math.floor(object.x / this.cellSize);
		let row = Math.floor(object.y / this.cellSize);
		let range = Math.ceil(radius / this.cellSize);
		
		for (let y = row - range; y <= row + range; y++) {
			for (let x = col - range; x <= col + range; x++) {
				let key = `${x},${y}`;
				if (!this.cells.has(key)) continue;
				
				for (let other of this.cells.get(key)) {
					if (other === object) continue;
					if (dist(object.x, object.y, other.x, other.y) <= radius)
						nearby.push(other);
				}
			}
		}
		
		return nearby;
	}
	
	draw(strokeColor) {
		push();
		
		let max = 0;
		
		for (let cell of this.cells.values())
			max = Math.max(max, cell.length);
		
		noStroke();
		
		for (let [key, cell] of this.cells) {
			let [col, row] = key.split(",").map(Number);
			let x = col * this.cellSize;
			let y = row * this.cellSize;
			let intensity = max ? cell.length / max : 0;
			
			fill(255, 0, 0, intensity * 40);
			rect(x, y, this.cellSize, this.cellSize);
		}
		
		noFill();
		stroke(strokeColor[0], strokeColor[1], strokeColor[2], 40);
		
		for (let x = 0; x <= width; x += this.cellSize)
			line(x, 0, x, height);
		
		for (let y = 0; y <= height; y += this.cellSize)
			line(0, y, width, y);
		
		pop();
	}
}