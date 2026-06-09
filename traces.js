
let inputs;
let framwCountCustom = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}


function draw() {
  
  framwCountCustom += 0.1;
  background(25,12);


  let txt = "These are waves";
  let numberOfLines = 16;
  let lineSpacing = 85;

  push();
  fill(300);
  

  blendMode(DIFFERENCE);

  translate(0, height / 2 - (lineSpacing * numberOfLines) / 2);

  for (let j = 0; j < numberOfLines; j++) {
    let x0 = sin((framwCountCustom + j) * 0.4) * 310;
    let y0 = lineSpacing * j;

    push();
    translate(x0, y0);
    scale(3.5)
    let letterLocX = 0;
    for (let i = 0; i < txt.length; i++) {
      let whichLetter = txt.charAt(i);

      let movementX = tan((framwCountCustom + i * 2 + j * 0.14) * 0.2) * 110;
      let s0 = sin(((i + 1) * (j + 1) + framwCountCustom) * 0.15)
      
      let txtSize = map(s0,-1,1,2,10)*12;
      let x1 = letterLocX + movementX;
      let y1 = 0;

      
      textSize(txtSize);
      text(whichLetter, x1, y1);

      letterLocX += textWidth(whichLetter);
    }
    pop();
  }

  pop();
}
