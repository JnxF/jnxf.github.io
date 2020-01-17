function setup() {
	createCanvas(400, 400);
	fill(255);
	noStroke();
	rectMode(CENTER);
}


function draw() {
	background(0);

	let ang = millis() / 1000
	let p1 = createVector(cos(ang), sin(ang));
	p1.mult(100)

	for (let h = 0; h < 21; ++h) {
		for (let w = 0; w < 21; ++w) {
			let i = h*20;
			let j = w*20;


			push();
			translate(j, i)
			i -= width/2; 
			j -= height/2;

			/* Define here your function */
			let p = createVector(i, j);
			let f1 = createVector(p.x - p1.x, p.y - p1.y)
			f1 = createVector(f1.x / f1.mag()**2, f1.y / f1.mag()**2)

			let v = f1;
			v.mult(100)	
			console.log(v);

			/* */
			rotate(PI/2 - v.heading())

			let s = constrain(v.mag(), 0, 2)
			scale(s, s)
			rect(0, 2.5, 2.5, 5);
			triangle(-2.5, 0, 2.5, 0, 0, -7.5);
			pop();
		}
	}

	

	stroke(255);
	// Axis
		translate(width/2, height/2);

	line(0, -200, 0, 200)
	line(-200, 0, 200, 0)
}