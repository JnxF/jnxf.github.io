// Source: https://gist.github.com/gre/1650294
EasingFunctions = {
  // no easing, no acceleration
  linear: function (t) { return t },
  // accelerating from zero velocity
  easeInQuad: function (t) { return t*t },
  // decelerating to zero velocity
  easeOutQuad: function (t) { return t*(2-t) },
  // acceleration until halfway, then deceleration
  easeInOutQuad: function (t) { return t<.5 ? 2*t*t : -1+(4-2*t)*t },
  // accelerating from zero velocity 
  easeInCubic: function (t) { return t*t*t },
  // decelerating to zero velocity 
  easeOutCubic: function (t) { return (--t)*t*t+1 },
  // acceleration until halfway, then deceleration 
  easeInOutCubic: function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 },
  // accelerating from zero velocity 
  easeInQuart: function (t) { return t*t*t*t },
  // decelerating to zero velocity 
  easeOutQuart: function (t) { return 1-(--t)*t*t*t },
  // acceleration until halfway, then deceleration
  easeInOutQuart: function (t) { return t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t },
  // accelerating from zero velocity
  easeInQuint: function (t) { return t*t*t*t*t },
  // decelerating to zero velocity
  easeOutQuint: function (t) { return 1+(--t)*t*t*t*t },
  // acceleration until halfway, then deceleration 
  easeInOutQuint: function (t) { return t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t }
}

function setup() {
	createCanvas(400, 750);
}


function draw() {
	smooth()
	background(0);
	scale(1, -1)

	let off = 25
	let i = 0
	let j = 0

	for (let function_name of Object.keys(EasingFunctions)) {
		
		push();
		translate(off + j*125, -off -100 - i*145)

		j += 1
		if (j == 3) {
			j = 0;
			i += 1
		}

		/* Codigo que pinta la escena */
		push();
		scale(1, -1);
		fill(255)
		text(function_name, 0, 20)
		pop();

		stroke(255)
		beginShape();
		noFill();
		let f = EasingFunctions[function_name]

		for (let i = 0; i < 100; ++i) {
			let y = f(i/100) * 100;
			vertex(i, y);
		}
		endShape();

		fill(255)
		let valY = 100*f((millis() % 1000)/1000)
		circle(0, valY, 10)

		stroke(255, 255, 255, 100)
		line(0, 0, 100, 0)
		line(0, 0, 0, 100)
		pop();
	}

	
}