// Source: https://thecodingtrain.com/CodingChallenges/012-lorenzattractor.html
let rotation = 0;

let x = 0.01;
let y = 0;
let z = 0;

let a = 10;
let b = 8.00/3;
let c = 28;

let pts = [];

function setup() {
	createCanvas(600, 400, WEBGL);
	background(0);
}

function iterateLorenz() {
	let dt = 0.01;

	let dx = a*(y-x);
	let dy = x*(c-z) - y;
	let dz = x*y - b*z;

	dx = dx * dt;
	dy = dy * dt;
	dz = dz * dt;

	x += dx;
	y += dy;
	z += dz;
}

function draw() {
	background(0)

	let camX = map(mouseX, 0, width, -200, 200);
 	let camY = map(mouseY, 0, height, -200, 200);
 	camera(camX, camY, height / 2.0 / tan((PI * 30.0) / 180.0), 0, 0, 0, 0, 1, 0);
	rotateY(rotation);
	rotation += 0.001;
	scale(3)

	iterateLorenz();

	pts.push(createVector(x, y, z));

	noFill();

	strokeWeight(1.5)
	beginShape();
	stroke(255)
	for (pt of pts) {
		vertex(pt.x, pt.y, pt.z);
	}
	endShape();
}