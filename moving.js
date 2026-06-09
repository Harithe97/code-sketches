const TEXT_PHRASE = "keep moving"; 

const TOP_PADDING = 1;     
const BOTTOM_PADDING = 4; 
const GAP_COLUMNS = 16;    

function setup() {
  createCanvas(1000, 1000); 
}

function draw() {
  background(5); 

 
  textFont;
  textSize(16); 
  textAlign(LEFT, CENTER); 

  
  let N = TEXT_PHRASE.length;
  let cellWidth = 24;    
  let rowHeight = 32;     
  let leftMargin = 80;    
 
  
  let pulse = sin(frameCount * 0.015);
  let currentGap = GAP_COLUMNS + pulse * 6; 

  
  let waveShift = frameCount * 0.03;

  let transitionRows = N + GAP_COLUMNS; 
  let totalRows = TOP_PADDING + transitionRows + BOTTOM_PADDING;
  
  
  let startY = (height - (totalRows * rowHeight)) / 2;


  for (let r = 0; r < totalRows; r++) {
    
    let yWobble = sin(r * 0.4 + frameCount * 0.025) * 7;
    let y = startY + r * rowHeight + yWobble;
    
    let transR = (r - TOP_PADDING + waveShift) % (N + currentGap); 

    let maxColIndex = 0; 
    let positions = [];

    for (let i = 0; i < N; i++) {
      let colIndex = 0;

      if (transR < i) {
        colIndex = i + currentGap;
      } else if (transR <= i + currentGap - 1) {
        colIndex = 2 * i + currentGap - transR - 1;
      } else {
        colIndex = i;
      }

      positions.push(colIndex);
      if (colIndex > maxColIndex) {
        maxColIndex = colIndex;
      }
    }

    let lineEndX = leftMargin + (maxColIndex * cellWidth) + (cellWidth * 0.85);
    stroke(245, 245, 245, 180);
    strokeWeight(1.2);
    line(leftMargin, y, lineEndX, y);

    noStroke();
    
    for (let i = 0; i < N; i++) {
      let charStr = TEXT_PHRASE.charAt(i);
      let charX = leftMargin + positions[i] * cellWidth;
      
      let alpha = map(sin(i * 0.5 + frameCount * 0.04), -1, 1, 130, 255);
      fill(245, 245, 245, alpha);
      
      text(charStr, charX, y);
    }
  }
}