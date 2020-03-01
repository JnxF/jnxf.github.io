function setup() {
	createCanvas(400, 400);
	angleMode(DEGREES);
textAlign(CENTER, CENTER);
}

function draw() {
	noFill();
	stroke(255);
	background(0);
	translate(width/2, height/2);

	line(-5, 0, 5, 0)
	line(0, -5, 0, 5)

	// Seconds
	push();
	rotate(-90);
	rotate(map(second(), 0, 60, 0, 360));
	text("S", 120, 0)
	pop();

	// Minutes
	push();
	rotate(-90);
	rotate(map(minute() + second() / 60, 0, 60, 0, 360));
	text("M", 90, 0)
	pop();


	// Hours
	push();
	rotate(-90);
	rotate(map(hour() + minute() / 60 + second() / 3600, 0, 12, 0, 360));
	text("H", 70, 0)
	pop();

	// Ticks
	for (let i = 0; i < 60; ++i) {
		push();
		rotate(i*360/60);
		let d = 5
		if (i % 5 == 0) d*=3 ;
		line(150,0,150 + d,0)
		pop();
	}
}