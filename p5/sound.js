var sad;
var neutral;
var happy;
var playing_theme;

var bg; // Current background
var des_bg; // Destination background

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

function percentToColor(p) {
  c1 = color("#6e3ffc");
  c2 = color("#ed7c4c");
  c3 = color("#ffe719");

  if (p < 0.5) {
    return lerpColor(c1, c2, p*2);
  }
  else if (p == 0.5) {
    return c2;
  } else {
    return lerpColor(c2, c3, (p-0.5)*2);
  }
}

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

  if (letter_ok) {
    var index = "asdfghjkl".indexOf(k);
    how_happy = map(index, 0, 8, 0, 1);
    des_bg = darken(percentToColor(how_happy));
  }

  if (selected_theme !== "" && selected_theme !== playing_theme) {
    playing_theme = selected_theme;
    sad.stop()
    neutral.stop()
    happy.stop()
    selected_song.play();
  }
}

function draw() {
  var k = key;

  bg = lerpColor(bg, des_bg, 0.1);
  background(bg);

  if (keyIsPressed === true) {
    processKey(k)
  }
}