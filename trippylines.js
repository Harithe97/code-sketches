let zoff = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  background(0);
}

function draw() {
  translate(width / 2, height / 2);
  
  for (let i = 0; i < 360; i += 3) {
    let angle = radians(i);
    let radius = map(noise(cos(angle) + 1, sin(angle) + 1, zoff), 0, 1, 100, 400);

    let x = cos(angle) * radius;
    let y = sin(angle) * radius;

    stroke((i + frameCount) % 360, 100, 100, 80);
    line(0, 0, x, y);
  }

  zoff += 0.01;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}