function setup() {
	createCanvas(400, 400);
	rectMode(CENTER);
}

function easing(t) {
	return t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t
}

function draw() {
	background(19, 7, 115);
	fill(220, 21, 85);
	noStroke();
	
	let t = (millis() % 4000)
	let rt = easing(map(t % 1000, 0, 999, 0, 1))
	rt = rt * QUARTER_PI;
	rt += Math.floor(t/1000) * QUARTER_PI;
			
	for (let i = 0; i < 20; ++i) {
		for (let j = 0; j < 21; ++j) {
			push();
			translate(40*i + (j%2)*20, 20*j)
			rotate(rt);
			rect(0, 0, 	10, 27);
			rect(0, 0, 27, 10);
			pop();
		}
	}
}