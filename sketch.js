var font;
var fontSize = 12;
var margin = 50;
var bgColor = 20;

var w;

function preload() {
	font = loadFont('assets/SourceCodePro-Regular.ttf');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	w = new Walker();
}

function draw() {
	background(bgColor);

	w.display();
	w.move();


	// INTERFACE ELEMENTS
	fill(255);
	noStroke();
	textSize(fontSize);
	text('The Nature of Code', margin, margin);
	text('mouseX: ' + mouseX, margin, windowHeight - margin * 1.4);
	text('mouseY: ' + mouseY, margin, windowHeight - margin);

	// COOL CURSOR
	noCursor();
	stroke(255);
	line(mouseX,0,mouseX,height);
	line(0,mouseY, width, mouseY);
	rectMode(CENTER);
	fill(bgColor);
	rect(mouseX, mouseY, 5, 5);

}


function Walker(){
	this.pos = createVector(width/2, height/2);

	this.display = function() {
		noStroke();
		fill(255);
		ellipse(this.pos.x, this.pos.y, 48,48);
	}

	this.move = function() {
		this.pos.x += (random(-2,2));
		this.pos.y += (random(-2,2));
	}
}
