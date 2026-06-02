const PHI = 1.61803398875; // The Golden Ratio

function setup() {
  createCanvas(800, 800);
}

function draw() {
  // 1. Solid dark background
  background (255, 255, 255, 30); 


  translate(width / 2, height / 2);

  let t = (millis() * 0.00666) % 69; 
  
  rotate(-t * HALF_PI);
  scale(pow(PHI, -t));

  let baseScale = 200; 
  let cx = 0.7236068 * baseScale;
  let cy = 0.1708204 * baseScale;
  translate(cx, cy);

  let currentStroke = 2 * pow(PHI, t);

  push();
  
  for (let i = -1; i >= -10; i--) {
    let size = pow(PHI, i) * baseScale;
    rotate(-HALF_PI);
    translate(-size, -size);
  }

  for (let i = -10; i < 15; i++) {
    let size = pow(PHI, i) * baseScale;

    stroke(37, 214, 24); 
    strokeWeight(currentStroke * 0.5);
    noFill();
    rect(0, 0, size, size);

    stroke(37, 214, 24); 
    strokeWeight(currentStroke);
    arc(0, size, size * 2, size * 2, 1.5 * PI, 0);

    translate(size, size);
    rotate(HALF_PI);
  }
  
  pop();
}