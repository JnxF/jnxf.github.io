let n = 80;

function setup() {
	createCanvas(400, 400);
}

function draw() {
	n = constrain(millis() / 60, 0, 60);
	background(0);
	translate(width/2, height/2);
	angleMode(DEGREES);
	rotate(365 * millis() / 1000)
	for (let i = n; i > 0; --i) {
		rotate(1.5*360/n);
		fill(map(i, n, 1, 255, 0));
		triangle(-10, 0, 10, 0, 0, -10*i);
	}
}