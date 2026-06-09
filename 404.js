
const g = 100; 
const cellnum = 5; 

let cg; 

let sx;
let sy;
let sw;
let sh;


let dx;
let dy;
let dw;
let dh;
var wave;


function setup() {
  createCanvas(400, 400);
  cg = createGraphics(400, 400);
  cg.fill(225);
  cg.textFont("Helvetica")
}

function draw() {
  background(20);

  cg.push();
  cg.translate(width / 2, height / 2);
  cg.textSize(200);
  cg.textAlign(CENTER, CENTER);
  cg.text('404', 0, 0);
  cg.pop();

  for (let x = 0; x < cellnum; x++) {
    for (let y = 0; y < cellnum; y++) {
       wave = int(cos((frameCount + ( x*y )) * 0.1) * 200);
      

      sx = x * g + wave;
      sy = int(y * g + (wave*0.2));
      sw = g;
      sh = g;


      dx = x * g;
      dy = y * g;
      dw = g;
      dh = g;
      copy(cg, sx, sy, sw, sh, dx, dy, dw, dh);
    }
  }
grid();
}

function grid() {
  for (let i = 0; i < cellnum; i++) {
    for (let j = 0; j < cellnum; j++) {

      cg.strokeWeight(random(1,3));
      cg.stroke(221);
      cg.noFill();
      cg.rect(i * g, j * g, g, g);

    }
  }
}