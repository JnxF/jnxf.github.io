// Sound files
var sad;
var neutral;
var happy;

// Either "sad", "neutral" or "happy"
var playing_theme;

var bg; // Current background
var des_bg; // Destination background

// If we use two background variables and
// we constantly interpollate within them,
// we get smooth background color transitions.

// Load mp3 files
function preload() {
  soundFormats('mp3', 'ogg');
  sad = loadSound('./bensound-creativeminds.mp3');
  neutral = loadSound('./bensound-littleidea.mp3');
  happy = loadSound('./bensound-ukulele.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0)
  bg = color("black");
  des_bg = color("black");
}


// Returns a gradient:
// 0->purple ... 0.5->orange ... 1.0->yellow
function percentToColor(p) {
  c1 = color("#6e3ffc");  // Purple
  c2 = color("#ed7c4c");  // Orange
  c3 = color("#ffe719");  // Yellow

  // Interpolate depending
  // on the percent
  if (p <= 0.5) {
    return lerpColor(c1, c2, p*2);
  }
  else {
    return lerpColor(c2, c3, (p-0.5)*2);
  }
}

// Darken a bit a color
// (mix it with 30% black)
function darken(c) {
  return lerpColor(c, color(0), 0.3);
}

function processKey(k) {
  var selected_theme = "";
  var selected_song;
  var letter_ok = true;
  if ("asd".indexOf(k) >= 0) {
    selected_theme = "sad";
    selected_song = sad;
  } else if( "fgh".indexOf(k) >= 0 ) {
    selected_theme = "neutral";
    selected_song = neutral;
  } else if( "jkl".indexOf(k) >= 0){
    selected_theme = "happy";
    selected_song = happy;
  } else {
    letter_ok = false;
  }

  // If letter is on a..l, change background
  if (letter_ok) {
    var index = "asdfghjkl".indexOf(k);
    how_happy = map(index, 0, 8, 0, 1);
    des_bg = darken(percentToColor(how_happy));
  }

  // If correctly selected one song (different than
  // the one currently playing), play that song
  // and stop all the others
  if (selected_theme !== "" && selected_theme !== playing_theme) {
    playing_theme = selected_theme;
    sad.stop()
    neutral.stop()
    happy.stop()
    selected_song.play();
  }
}

function draw() {
  // Interpolate background
  bg = lerpColor(bg, des_bg, 0.1);
  background(bg);

  // Process key
  var k = key;
  if (keyIsPressed === true) {
    processKey(k)
  }
}