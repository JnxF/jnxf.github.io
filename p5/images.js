// 
var input = document.getElementById("myInput");
input.addEventListener("keyup", function(event) {
  // If hit enter
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    if (input.value != "") {
      greet();
    }
  }
}); 


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0)
}

function draw() {
}


function drawImage(url) {
  // Draw top 5 images
  for (let i = 0; i < 5; ++i) {
    img_src = url.hits[i].previewURL
    img = loadImage(img_src, render);
  }
}

function render(img) {
  var x = random(- img.width/2, width - img.width/2);
  var y = random(-img.height/2, height - img.height);
  var sc = random(0.8, 2.2);
  var tr = random(120, 255);
  push();
  translate(x, y);
  scale(sc);
  tint(255, tr); // Display at half opacity
  image(img, 0, 0);
  pop();
}

function greet() {
  const words_str = input.value;
  const words = words_str.split(" ")
  input.value = '';
  // console.log(words)

  for (word of words) {
    console.log(word)
    img_url = "https://pixabay.com/api/?key=15410647-429fc66d6350cf8659ace2110&q=" + word + "&image_type=photo"
    img_json = loadJSON(img_url, drawImage)
  }
}