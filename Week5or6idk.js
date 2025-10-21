// Functions
// Encapsulate logic into a function instead of having to repeat code

//Function with one argument / parameter
function cube(n) {
	return n * n * n;
}
console.log(cube(2))

//With multiple inputs

function add (x, n) {
	return x + n;
}

//Function with no input
function hello() {
  console.log("Hello world")
}
hello();

//Function with default argument
function displayInstrument(name, instrument = "Guitar") {
	// If no instrument is provided, "Guitar" will be used by default.
	console.log(name + "likes" + instrument);
}
displayInstrument("Jennifer"); // Uses default: Guitar
displayInstrument("Elizabeth", "Drum");
displayInstrument("Susan", "Bass");

//Functions returning multiple outputs via an array
function getInstruments() {
	return ["Drum", "Guitar", "Bass"];
}

let instruments = getInstruments();
let primary = instruments[0];
let secondery = instruments[1];
let tertiary = instruments[2];

console.log(primary + secondary + tertiary)

//Nested function calls

function printLyrics(){
	console.log("Horses");
	console.log("Horses!!!!!");
}

function repeatLyrics(){
	printLyrics();
	printLyrics();
}

repeatLyrics();

//Function with if condition
function minimum(x, y) {
	//returns the smaller of the two numbers
	if (x < y) {
		return x;
	}
	return y;
}
console.log(minimum(3, 4));

//Function with if/else and recursion (factorial)
function factorial(n) {
	if (n === 0) {
		return 1;
	} else {
		//Recursively calls itself
		return n * factorial(n - 1);
	}	
}
console.log(factorial(3));

//Function using for loop
function sumup(n) {
	let sum = 0;
	for (let i = 0; i <= n; i++) {
		sum += i;
	}
	return sum;
}
console.log(sumup(5));

//Functions using local scope (instrument preference)
function printFavoriteInstrument() {
	let instrument = prompt("What is your favorite instrument?");
	console.log("Your favorite instrument is: " + instrument);
}

function printLeastFavoriteInstrument() {
	let instrument = prompt("What is your least favorite instrument?");
	console.log("Your least favorite instrument is: " + instrument);

}




//MIDTERM PROJECT PREP

//Count frames
function draw() {
	console.log(frameCount);
}

//Simple static line
function draw() {
	line(0, 50, 100, 50); // (x, y, x, y)
}

//Animate filling lines downward

let y = 0.0

function draw() {
	line (0, y, 100, y);
	y = y + 0.5;
}

//Moving line that resets after reaching bottom
let y = 0.0;

function draw() {
	background(204);
	line(0, y, 100, y);
	y = y + 0.5;
	if (y >= 100) {
		y = 0;
	}
}


//Draw lines down the canvas
let y = 0;

function setup() {
	createCanvas (300, 300);
}

function draw() {
	line(0, y, 300, y);
	y += 4;
}

//Draw a single eye
function setup() {
	createCanvas(100, 100);
	noStroke(); //Disables drawing points, lines, and outlines of shapes (common in graphics languages)
}

function draw() {
	background(204);
	fill(255);
	ellipse(50, 50, 60, 60);
	fill(0);
	ellipse(60, 50, 30, 30);
	fill (255);
	ellipse(66, 45, 6, 6);
}

function eye() {
	createCanvas(100, 100);
	noStroke();
}
function eye(x, y) {
	fill(255);
	ellipse(x, y, 60, 60);
	fill(0);
	ellipse(x + 10, y, 30, 30);
	fill(255);
	ellipse(x + 16, y - 5, 6, 6);
}
function draw() {
	eye(65, )
}