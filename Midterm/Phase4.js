function setup() {
  createCanvas(400, 400); 
  noStroke();
}

function drawObject(x, y, s) {
  push();
  translate(x, y);
  scale(s);
  fill(0);
  triangle(75, 5, 55, 45, 95, 45);
  triangle(75, 35, 55, 75, 95, 75);
  triangle(75, 65, 55, 105, 95, 105);
  triangle(75, 95, 45, 135, 105, 135);
  rect(65, 135, 20, 30);
  pop();

}

let x = 0
let y = 0

function draw() {
 
  drawObject(x, y, 1);
  x += 60; 
  if (x >= 400) {
    y += 160;
    x = 0
  }
  }