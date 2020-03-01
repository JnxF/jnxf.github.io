// Set of drawable words
let words = ["talk", "me"];

// Words to textures
let textures = [];

// Position
let xposition = [];
let yposition = [];
let zposition = [];

// Scale and velocity
let scales = [];
let speed = [];

// Total number of words to be printed
let numWords = 40;

// Initialize p5 speech recognition system
// in English, in continuous mode (listening
// all the time) and with intermedium results
let myRec = new p5.SpeechRec('en-US', parseResult);
myRec.continuous = true;
myRec.interimResults = true;

// Selects a random word from `words`
function getRandomWord() {
  let index = Math.floor(Math.random() * words.length);
  return words[index];
}

function setup() {
  myRec.start();
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(HSB);
}

function draw() {
  // If there are not enough displayed words,
  // create new word and all the parameters
  while (textures.length != numWords) {
  	// Create random values
    xposition.push(1.5 * random(-width/2, width/2));
    yposition.push(1.5 * random(-height/2, height/2));
    zposition.push(random(-3500, 0));
    speed.push(random(5, 20));
    scales.push(random(3, 5));
    
    // Create bright color with random hue
    let textColor = color(random(0, 255), 255, 255);
    
    // Create a texture with a random word,
    // a random color and a random blur
    let tx = createGraphics(120, 60);
    tx.background(255, 255, 255, 0);
    tx.fill(textColor);
    tx.textAlign(CENTER, CENTER);
    tx.textSize(20);
    tx.text(getRandomWord(), 60, 30);
    tx.filter(BLUR, random(0, 3));

    // Append that texture to the end of textures
    textures.push(tx);
  }
  
  // Clear everything
  background(0);
  
  // Display each texture
  for (let i = 0; i < textures.length; ++i) {
    push();
    let x = xposition[i];
    let y = yposition[i];
    let z = zposition[i];
    let sc = scales[i];

    // Increment the z coordinate with the speed
    zposition[i] += speed[i];

    translate(x, y, z);
    texture(textures[i]);

    // Scale with concrete scale
    scale(sc, sc, 1);
    plane(120, 60);
    pop();
  }
  
  deleteOutWords();
}

// Clear all the words with z position greater than 420:
// words start with negative Z coordinate and go to positive
// Z coordinate. 
function deleteOutWords() {
  for (let i = textures.length; i >= 0; i -= 1) {
    if (zposition[i] > 420) {
      textures.splice(i, 1);
      xposition.splice(i, 1);
      yposition.splice(i, 1);
      zposition.splice(i, 1);
      scales.splice(i, 1);
    }
  } 
}

// Parse speech
function parseResult() {
  // Last recognized words
  var ws = myRec.resultString.split(" ");
  if (ws) {
    for (let word of ws) {
      // Append each recognized word to `words`
      words.unshift(word);
    }
  }
  
  // Remove last recorded words
  // if there are more than 10
  // (there will always be at most 10 words)
  while (words.length > 10) {
    words.pop();
  }
}