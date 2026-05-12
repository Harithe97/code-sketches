const totalRows = 8;
const totalCols = 8;
const unit = 50;


function setup() {
  createCanvas(totalCols * unit, totalRows * unit);
  background(220);
  noStroke();

}

let col = 0;
let row = 0;

function draw() {
  
  let somme = row + col;
  console.log (row,col, somme, somme%2);
  
  if ( somme % 2 === 0) { fill(255); }
  else if ( somme % 2 === 1){ fill(0); }
  
  square(col * unit, row * unit, unit)
  
  col += 1;
  if (col >= totalCols){
    col = 0 ;
    row += 1;
  }
  
  if(frameCount >= totalCols * totalRows) { noLoop ();}
}