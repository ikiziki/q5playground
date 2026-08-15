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
	}

	insert(object) {
		if (!this.contains(object)) return false;
		if (this.objects.length < this.capacity && !this.subdivided) {
			this.objects.push(object);
			return true;
		}
		if (this.depth >= this.maxDepth) {
			this.objects.push(object);
			return true;
		}
		if (!this.subdivided) {
			this.subdivide();
		}
		for (let child of Object.values(this.children)) {
			if (child.insert(object)) {
				return true;
			}
		}
		return false;
	}
	
	intersects(range) {
		if (range instanceof RectFinder) {
			return !(
				range.x > this.x + this.width ||
				range.x + range.width < this.x ||
				range.y > this.y + this.height ||
				range.y + range.height < this.y
			);
		}
		if (range instanceof CircFinder) {
			let closestX = Math.max(this.x,Math.min(range.x, this.x + this.width));
			let closestY = Math.max(this.y,Math.min(range.y, this.y + this.height));
			let dx = range.x - closestX;
			let dy = range.y - closestY;
			return (dx * dx + dy * dy) <= range.radius * range.radius;
		}
		return false;
	}

	query(range, found = []) {
		if (!this.intersects(range)) return found;
		for (let object of this.objects) {
			if (range instanceof RectFinder) {
				if (
					object.x >= range.x &&
					object.x < range.x + range.width &&
					object.y >= range.y &&
					object.y < range.y + range.height
				) {
					found.push(object);
				}
			}
			if (range instanceof CircFinder) {
				let dx = object.x - range.x;
				let dy = object.y - range.y;
	
				if (dx * dx + dy * dy <= range.radius * range.radius) {
					found.push(object);
				}
			}
		}
		if (this.subdivided) {
			for (let child of Object.values(this.children)) {
				child.query(range, found);
			}
		}
		return found;
	}
	
	contains(object) {
		return (
			object.x >= this.x &&
			object.x < this.x + this.width &&
			object.y >= this.y &&
			object.y < this.y + this.height
		);
	}

	subdivide() {
		if (this.subdivided) return;
		if (this.depth >= this.maxDepth) return;
		let halfwidth = this.width / 2;
		let halfheight = this.height / 2;
		this.children.NW = new QuadTree(
			this.x,
			this.y,
			halfwidth,
			halfheight,
			this.capacity,
			this.depth + 1,
			this.maxDepth
		);
		this.children.NE = new QuadTree(
			this.x + halfwidth,
			this.y,
			halfwidth,
			halfheight,
			this.capacity,
			this.depth + 1,
			this.maxDepth
		);
		this.children.SW = new QuadTree(
			this.x,
			this.y + halfheight,
			halfwidth,
			halfheight,
			this.capacity,
			this.depth + 1,
			this.maxDepth
		);
		this.children.SE = new QuadTree(
			this.x + halfwidth,
			this.y + halfheight,
			halfwidth,
			halfheight,
			this.capacity,
			this.depth + 1,
			this.maxDepth
		);
		this.children.NW.parent = this;
		this.children.NE.parent = this;
		this.children.SW.parent = this;
		this.children.SE.parent = this;

		this.subdivided = true;

		for (let object of this.objects) {
			for (let child of Object.values(this.children)) {
				if (child.insert(object)) {
					break;
				}
			}
		}
		this.objects = [];
	}

	clear() {
		this.objects = [];
		this.children = {
			NW: null,
			NE: null,
			SW: null,
			SE: null
		};
		this.subdivided = false;
	}

	draw() {
		push();
		stroke(theme.fg);
		strokeWeight(1);
		noFill();
		rect(this.x, this.y, this.width, this.height);
		if (this.subdivided) {
			for (let child of Object.values(this.children)) {
				child.draw();
			};
		};
		pop();
	}
}
