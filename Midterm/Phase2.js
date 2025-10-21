function setup() {
  createCanvas(200, 200); 
  noStroke();
}

function draw() {
  fill(0);
  triangle(75, 5, 55, 45, 95, 45);
  triangle(75, 35, 55, 75, 95, 75);
  triangle(75, 65, 55, 105, 95, 105);
  triangle(75, 95, 45, 135, 105, 135);
  rect(65, 135, 20, 30);
}