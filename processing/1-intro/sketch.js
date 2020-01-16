let gapSlider;
function setup() {
  createCanvas(400, 400);
  gapSlider = createSlider(10, 100, 40);
}

function draw() {
  translate(width/2, height/2);
  background(0);

  fill(255);
  stroke(255);

  // Draw particles
  noFill();
  let numPart = 2*width/gapSlider.value();
  for (let i = 0; i < numPart; ++i) {
  	  let radius = i * gapSlider.value() + map(millis()%1000, 0, 999, 0, gapSlider.value());
  	  let transp = map(radius, 0, sqrt(height*height + width*width), 255, 0);
  	  stroke(0,255,0,transp);
  	  circle(0,0, radius);	
  }

  // Draw axis
  stroke(255);
  line(-width, 0, width, 0);
  line(0, -height, 0, height);

  // Draw rotating
  push();
  strokeWeight(3);
  rotate(map(millis() % 4000, 0, 4000-1, 0, TWO_PI));
  line(0, 0, width*2, 0);
  pop();

  gapSlider.position(40, height-20);
  text('gap', gapSlider.x - width/2 - 30, gapSlider.y - height/2 +gapSlider.height/2);

}