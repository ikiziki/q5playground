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
		this.children = {
			NW: null,
			NE: null,
			SW: null,
			SE: null
		};
		this.parent = null;
		this.objects = [];
		this.count = this.objects.length;
	}
	
	insert(){
	}
	
	intersects(){
	}
	
	query(){
	}
	
	contains(object){
		return (
			object.x >= this.x &&
			object.x < this.x + this.width &&
			object.y >= this.y &&
			object.y < this.y + this.height
		);
	}
	
	subdivide(){
		if (this.subdivided) return;
		if (this.depth >= this.maxDepth) return;
		
		let halfwidth = this.width/2;
		let halfheight = this.height/2;
	
		this.children.NW = new QuadTree(
			this.x,
			this.y,
			halfwidth,
			halfheight,
			this.capacity,
			this.depth + 1,
			this.maxDepth
		),
		this.children.NE = new QuadTree(
			this.x + halfwidth,
			this.y,
			halfwidth,
			halfheight,
			this.capacity,
			this.depth + 1,
			this.maxDepth
		),
		this.children.SW = new QuadTree(
			this.x,
			this.y + halfheight,
			halfwidth,
			halfheight,
			this.capacity,
			this.depth + 1,
			this.maxDepth
		),
		this.children.SE = new QuadTree(
			this.x + halfwidth,
			this.y + halfheight,
			halfwidth,
			halfheight,
			this.capacity,
			this.depth + 1,
			this.maxDepth
		);
		this.subdivided = true;
	}
	
	clear() {
		this.objects = [];
		this.children = [];
		this.subdivided = false;
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