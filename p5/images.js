// Process input on pressing enter
var input = document.getElementById("myInput");
input.addEventListener("keyup", function(event) {
  // If hit enter
  if (event.keyCode === 13) {
    event.preventDefault(); 
    // If we have written something,
    // call `greet` callback function
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


// Load top 5 results of images
function drawImage(url) {
  for (let i = 0; i < 5; ++i) {
    img_src = url.hits[i].previewURL

    // When the image is downloaded,
    // call `render`
    img = loadImage(img_src, render);
  }
}

// Place a semi-transparent image randomly
// on the screen. `img` is a texture.
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
  // Split words on input field and clear it
  const words_str = input.value;
  const words = words_str.split(" ")
  input.value = '';

  // Load each image by calling pixabay API
  for (word of words) {
    console.log(word)
    img_url = "https://pixabay.com/api/?key=15410647-429fc66d6350cf8659ace2110&q=" + word + "&image_type=photo"

    // Call `drawImage` on loading JSON from url
    img_json = loadJSON(img_url, drawImage)
  }
}