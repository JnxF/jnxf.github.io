let words = ["talk", "me"];

let textures = [];
let xposition = [];
let yposition = [];
let zposition = [];
let speed = [];
let numWords = 30;

let angle = 0;

let myRec = new p5.SpeechRec('en-US', parseResult);
myRec.continuous = true;
myRec.interimResults = true;

function getRandomWord() {
  let index = Math.floor(Math.random() * words.length);
  return words[index];
}


function setup() {
  myRec.start();
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  textAlign(CENTER, CENTER);
}



function draw() {
  // Put missing ones
  while (textures.length != numWords) {
    xposition.push(1.5 * random(-width/2, width/2));
    yposition.push(1.5 * random(-height/2, height/2));
    zposition.push(random(-3500, 0));
    speed.push(random(5, 20));
    
    colorMode(HSB);
    let c = color(random(0, 255), 255, 255);
    
    let tx = createGraphics(120, 60);
    tx.background(255, 255, 255, 0);
    tx.fill(c);
    tx.textAlign(CENTER, CENTER);
    tx.textSize(20);
    tx.text(getRandomWord(), 60, 30);
    tx.filter(BLUR, random(0, 3));
    textures.push(tx);
  }
  
  background(0);
  
  for (let i = 0; i < textures.length; ++i) {
    push();
    let x = xposition[i];
    let y = yposition[i];
    let z = zposition[i];
    
    zposition[i] += speed[i];

    translate(x, y, z);
    texture(textures[i]);
    plane(120, 60);
    pop();
  }
  
  deleteOutWords();
}

function deleteOutWords() {
  for (let i = textures.length; i >= 0; i -= 1) {
    if (zposition[i] > 420) {
      textures.splice(i, 1);
      xposition.splice(i, 1);
      yposition.splice(i, 1);
      zposition.splice(i, 1);
    }
  } 
}

function parseResult() {
  var ws = myRec.resultString.split(" ");
  if (ws) {
    // console.log(ws);
    for (let word of ws) {
      words.unshift(word);
    }
  }
  
  while (words.length > 10) {
    words.pop();
  }
  console.log(words);
}