let n = 30;
let lenghts = [];
let rotations = [];

function setup() {
	angleMode(DEGREES);
	createCanvas(400, 400);

	// Defnine n segments
	for (let i = 0; i < n; ++i) {
		lenghts[i] = random(40, 380);
		rotations[i] = random(365);
	}
}

function draw() {
	background(0);
	translate(width/2, height/2);

	// Paint the n lines
	for (let i = 0; i < n; ++i) {
		let len = lenghts[i];
		let rot = rotations[i];

		// Increase (or decrease) rotations
		// and length with perlin noise
		rot += 60*(noise(i,millis()/4000) - 0.5);
		len += 10*(noise(i, millis()/1000) - 0.5);
		push();
		let tr = map(len, 40, 380, 0, 255);
		tr = map(sin(millis()/ (3.65 * 4 )), -1, 1, 0.3*tr, tr);
		let transparentWhite = color(255, 255, 255, tr);
		stroke(transparentWhite);
		fill(transparentWhite);

		strokeWeight(map(tr, 0, 255, 10, 1));
		rotate(rot);
		line(-len/2, 0, len/2, 0);
		noStroke();		
		circle(-len/2 - 5, 0, 10);
		circle(len/2 + 5, 0, 10);
		pop();
	}
}