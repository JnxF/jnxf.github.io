let n = 15;

function setup() {
	createCanvas(400, 400);
}

function draw() {
	push();
	translate(width/2, height/2)
	rotate(millis() / 1000)
	scale(1.4)
	translate(-width/2, -height/2)
	background(230);
	let w = width / n;
	for (let i = 0; i < n; ++i) {
		for (let j = 0; j < n; ++j) {
			let c = map(sin(i+j + millis() / 1000), -1, 1, 30, 225);
			fill(c, c, c);
			square(i * w, j * w, w);
		}
	}
	pop();
}