var font;
var fontSize = 12;
var margin = 50;
var bgColor = 20;
var xoff = 0.0;

var w;

function preload() {
	font = loadFont('assets/IBMPlexMono-Regular.ttf');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	w = new Walker();
	background(bgColor);
}

function draw() {


	w.display();
	w.move();
	xoff += 0.02;

	// INTERFACE ELEMENTS
	fill(255);
	noStroke();
	textFont(font);
	textSize(fontSize);
	text('THE NATURE OF CODE', margin, margin);
	text('Lesson 9', margin, margin * 1.5);
	text('mouseX: ' + mouseX, margin, windowHeight - margin * 1.4);
	text('mouseY: ' + mouseY, margin, windowHeight - margin);
	textAlign(LEFT);

	// COOL CURSOR
	// noCursor();
	// stroke(255);
	// line(mouseX,0,mouseX,height);
	// line(0,mouseY, width, mouseY);
	// rectMode(CENTER);
	// fill(bgColor);
	// rect(mouseX, mouseY, 5, 5);

}


function Walker(){

	this.diam = noise(xoff) * 100;
	this.pos = createVector(random(width), random(height));
	this.pos2 = createVector(random(width), random(height));
	this.vel = createVector(0,0);
	this.acc = p5.Vector.fromAngle(random(TWO_PI));


	this.display = function() {
		stroke(255);
		noFill();
		this.diam = noise(xoff) * 100;
		ellipse(this.pos.x, this.pos.y, this.diam, this.diam);
		// line(this.pos.x, this.pos.y, this.pos2.x - this.diam, this.pos2.y - this.diam);
	}

	this.move = function() {
		var mouse = createVector(mouseX, mouseY);

		// 2 WAYS OF OPERATING WITH VECTORS
		// Substract from that vector mouse.sub(this.pos);
		// Subtract from two vector and store in new variable this.acc = p5.Vector.sub(mouse, this.pos);
		// p = p + v; v = v + a; a = a + m

		// this.acc.rotate(0.4);
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.pos2.add(this.vel);



		// // Calculate the vector from the position to the mouseX
	  // this.acc = p5.Vector.sub(mouse, this.pos);
		// // Any vector is normalized to 1
		// this.acc.normalize();
		// // Scale it down
		// this.acc.mult(0.2);

		// Can be shorted as:


		// Soft random walk
		// this.acc = createVector(random(-1,1), random(-1,1));
		// this.acc.mult(.4);

		//Random walk from an angle
		this.acc = p5.Vector.fromAngle(random(TWO_PI));
		this.acc.setMag(0.4);

	}



}
