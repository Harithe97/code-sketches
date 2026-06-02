// p5.js version of Tim Rodenbroeker Kinetic typography tutorial 
// Updated with a foolproof Google Font injector to prevent HTML signature errors!

let pg;
let tX, tY, sp, dspx, dspy, fct;

function setup() {
  createCanvas(400, 400);
  
  // INJECT GOOGLE FONT: This adds the font via standard CSS so it safely loads in any browser
  let link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+Sinhala:wght@700&display=swap';
  link.rel = 'stylesheet';
  document.head.appendChild(link);

  createSliders();
  pg = createGraphics(400, 400);
}

function draw() {
  background(0);

  // 1. Render Typography to the Offscreen Graphic Buffer
  pg.background(0);
  pg.fill(255);
  
  // Use the loaded CSS font name directly as a string
  pg.textFont('Noto Sans Sinhala'); 
  pg.textSize(320);   
  
  pg.push();
  pg.translate(width / 2, height / 2);
  pg.textAlign(CENTER, CENTER);
  
  // Shifting y up slightly (-40) to center the Sinhala glyph
  pg.text("අ", 0, -40); 
  pg.pop();

  // 2. Slit-Scan Grid Math
  let tilesX = tX.value();
  let tilesY = tY.value();

  let tileW = int(width / tilesX);
  let tileH = int(height / tilesY);

  for (let y = 0; y < tilesY; y++) {
    for (let x = 0; x < tilesX; x++) {

      // WARP
      let waveX = int(sin(frameCount * sp.value() + (x * y) * dspx.value()) * fct.value());
      let waveY = int(sin(frameCount * sp.value() + (x * y) * dspy.value()) * fct.value());

      if (dspx.value() === 0) {
        waveX = 0;
      }

      if (dspy.value() === 0) {
        waveY = 0;
      }
      
      // SOURCE
      let sx = x * tileW + waveX;
      let sy = y * tileH + waveY;
      let sw = tileW;
      let sh = tileH;

      // DESTINATION
      let dx = x * tileW;
      let dy = y * tileH;
      let dw = tileW;
      let dh = tileH;

      copy(pg, sx, sy, sw, sh, dx, dy, dw, dh);
    }
  }
}

function createSliders() {
  tX = createSlider(1, 80, 16, 1);
  tX.position(20, height + 40);
  createP('Tiles X').position(20, height);

  tY = createSlider(1, 80, 16, 1);
  tY.position(20, height + 100);
  createP('Tiles Y').position(20, height + 60);

  sp = createSlider(0, 1, 0.05, 0.01); 
  sp.position(20, height + 160);
  createP('Speed').position(20, height + 120);

  dspx = createSlider(0, 0.1, 0.05, 0.001);
  dspx.position(180, height + 40);
  createP('Displacement X').position(180, height);

  dspy = createSlider(0, 0.2, 0, 0.01);
  dspy.position(180, height + 100);
  createP('Displacement Y').position(180, height + 60);

  fct = createSlider(0, 300, 100, 1);
  fct.position(180, height + 160);
  createP('Offset').position(180, height + 120);
}