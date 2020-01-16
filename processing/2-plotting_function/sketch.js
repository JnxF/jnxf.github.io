let gapSlider;
let f = function(X) {return X};

function setup() {
	createCanvas(400, 400);
	let inp = createInput('x');
	inp.input(myInputEvent);
}

function myInputEvent() {
	let w = this.value();
	f = function(x) {
		try {
			return eval(w) || x;
		} catch (e) {
			return x;
		}
	}	
	draw();
}

function drawAxis() {
	push();
	translate(height/2, width/2);
	stroke(0, 0, 0, 255/2);
	line(0, -200, 0, 200);
	line(-200, 0, 200, 0);
	pop();
}

function drawShape() {
	stroke(0,0,255);
	noFill();
	beginShape();
	for (let X = -200; X < 200; ++X) {
		let x = X + width/2;
		let Y = Math.round(f(X));
		y = -Y + height/2;
		vertex(x, y);
	}

	endShape();
}

function draw() {
	background(230);
	drawAxis();
	drawShape();
	noLoop();
}