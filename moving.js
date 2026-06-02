const TEXT_PHRASE = "keep moving"; 

const TOP_PADDING = 1;     // Static rows at the top
const BOTTOM_PADDING = 4;  // Brought this up from -16 so the bottom rows don't get cut off!
const GAP_COLUMNS = 16;    // Base number of grid spaces between left and right positions

function setup() {
  createCanvas(1000, 1000); // Clean vertical poster aspect ratio
  // Removed noLoop() so the draw loop runs continuously for animation!
}

function draw() {
  background(5); // Solid deep black

  // 1. Typography Setup (Fixed the syntax error from your snippet)
  textFont;
  textSize(16); // Adjusted size slightly to look crisp on a 1000x1000 canvas
  textAlign(LEFT, CENTER); // Centers text vertically over the line

  // 2. Monospace Grid Math
  let N = TEXT_PHRASE.length;
  let cellWidth = 24;       // Width per character slot
  let rowHeight = 32;       // Vertical spacing between rows
  let leftMargin = 80;      // Outer left margin for the lines

  // TRIPPY ANIMATION VARIABLES
  // 'pulse' creates a slow, breathing expansion of the center gap over time
  let pulse = sin(frameCount * 0.015);
  let currentGap = GAP_COLUMNS + pulse * 6; 

  // 'waveShift' makes the letter-migration ripple downward through the rows continuously
  let waveShift = frameCount * 0.03;

  let transitionRows = N + GAP_COLUMNS; 
  let totalRows = TOP_PADDING + transitionRows + BOTTOM_PADDING;
  
  // Center the entire grid vertically on the canvas
  let startY = (height - (totalRows * rowHeight)) / 2;

  // 3. Render the Poster Row by Row
  for (let r = 0; r < totalRows; r++) {
    
    // SLOW TRIPPY WOBBLE: Makes rows wave vertically like liquid or wires
    let yWobble = sin(r * 0.4 + frameCount * 0.025) * 7;
    let y = startY + r * rowHeight + yWobble;
    
    // Injecting waveShift here causes the split-point to travel endlessly down the rows
    let transR = (r - TOP_PADDING + waveShift) % (N + currentGap); 

    let maxColIndex = 0; 
    let positions = [];

    for (let i = 0; i < N; i++) {
      let colIndex = 0;

      // THE CORE WAVE FORMULA (Updated to adapt to the dynamic breathing gap):
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

    // 4. Draw the Base Horizontal Line
    let lineEndX = leftMargin + (maxColIndex * cellWidth) + (cellWidth * 0.85);
    stroke(245, 245, 245, 180);
    strokeWeight(1.2);
    line(leftMargin, y, lineEndX, y);

    // 5. Draw the Characters directly over the line
    noStroke();
    
    for (let i = 0; i < N; i++) {
      let charStr = TEXT_PHRASE.charAt(i);
      let charX = leftMargin + positions[i] * cellWidth;
      
      // Subtle organic opacity shifting per letter for an extra dream-like state
      let alpha = map(sin(i * 0.5 + frameCount * 0.04), -1, 1, 130, 255);
      fill(245, 245, 245, alpha);
      
      text(charStr, charX, y);
    }
  }
}