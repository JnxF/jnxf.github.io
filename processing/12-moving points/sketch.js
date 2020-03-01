let numPoints = 100;
let points = [];

function setup() {
	createCanvas(600, 400);
	background(0);
	for (let i = 0; i < numPoints; ++i) {
		let x = random(width);
		let y = random(height);
		points.push(new Point(x, y));
	}
}

function draw() {
	background(0)

	for (let i = 0; i < numPoints; ++i) {
		for (let j = 0; j < numPoints; ++j) {
			if (i == j) continue;
			let x1 = points[i].x;
			let y1 = points[i].y;
			let x2 = points[j].x;
			let y2 = points[j].y;
			let dx = x1 - x2;
			let dy = y1 - y2;
			let d = dx*dx + dy*dy;
			if (d > 10000) continue;
			d = sqrt(d)

			
			stroke(map(d, 0, 100, 255, 0));
			line(x1, y1, x2, y2);
		}
	}

	for (pt of points) {
		pt.draw();
	}
	for (pt of points) {
		pt.update();

	}
}

class Point {
	constructor(x_, y_) {
		this.x = x_;
		this.y = y_;
		this.vel = createVector(0, 0);
		this.finalForce = p5.Vector.random2D()
		this.finalForce.mult(0.003)
		this.maxVel = 2
	}


	update() {
		// Reset final force
		//this.finalForce.mult(0);


		// Velocity
		this.vel.add(this.finalForce);

		if (this.vel.mag() > this.maxVel) {
			this.vel.setMag(this.maxVel)
		}

		// Position
		this.x += this.vel.x;
		this.y += this.vel.y;

		// Wrapping
		if (this.x < 0) this.x += width;
		if (this.x >= width) this.x -= width;
		if (this.y < 0) this.y += height;
		if (this.y >= height) this.y -= height;
	}

	draw() {
		circle(this.x, this.y, 10)
	}
}