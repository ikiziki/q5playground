// quadtree for performance scaling
// chris geese @ 2026

console.log("quadtree loaded")

class CircFinder {
	constructor(x, y, radius) {
		this.x = x ?? 0;
		this.y = y ?? 0;
		this.radius = radius ?? 0;
	}
}

class RectFinder {
	constructor(x, y, width, height) {
		this.x = x ?? 0;
		this.y = y ?? 0;
		this.width = width ?? 0;
		this.height = height ?? 0;
	}
}

class QuadTree {
	constructor(x, y, width, height, capacity, depth, maxDepth) {
		this.x = x ?? 0;
		this.y = y ?? 0;
		this.width = width ?? 0;
		this.height = height ?? 0;
		this.capacity = capacity ?? 10;
		this.depth = depth ?? 0;
		this.maxDepth = maxDepth ?? 4;
		this.subdivided = false;
		this.children = [];
		this.parent = null;
		this.objects = [];
		this.count = 0;
	}
	
	insert(){
	}
	
	intersects(){
	}
	
	query(){
	}
	
	contains(){
	}
	
	subdivide(){
	}
	
	clear() {
	}
	
	draw(){
		push();
		stroke(theme.fg);
		strokeWeight(1);
		noFill();
		rect(this.x, this.y, this.width, this.height);
		if (this.subdivided) {
			for (let child of this.children) {
				child.draw();
			}
		}
		pop();
	}
	
}