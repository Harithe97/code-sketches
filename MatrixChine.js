let cols, drops;
const fontSize = 44;
const chars = '田由甲申电男界畅0123456789アイウエオカキ';

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  cols = floor(width / fontSize);
  drops = Array(cols).fill(0).map(() => random(-100, 0));
}

function draw() {
  fill(0, 0, 0, 13);
  noStroke();
  rect(0, 0, width, height);

  textSize(fontSize);
  textFont('monospace');

  for (let i = 0; i < cols; i++) {
    let ch = chars[floor(random(chars.length))];
    let y = drops[i] * fontSize;
    let r = random();

    if (r > 0.97) fill(255);
    else if (r > 0.85) fill(170, 255, 200);
    else fill(0, 200, 50);

    text(ch, i * fontSize, y);

    if (y > height && random() > 0.975) drops[i] = 0;
    drops[i] += 0.2 + random(0.6);
  }
}