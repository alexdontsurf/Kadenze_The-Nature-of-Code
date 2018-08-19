var font;
var fontSize = 12;
var margin = 50;
var bgColor = 20;

var p1, p2;

function preload() {
	font = loadFont('assets/IBMPlexMono-Regular.ttf');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	// background(bgColor);
	liquid = new Liquid(0, height-height/3, width, height/3, 0.1);
	p1 = new Particle(width/3, height/4, 2);
	p2 = new Particle(width - width/3, height/4, 5);
}

function draw() {
	background(bgColor);

	liquid.display();

	if (liquid.contains(p1)){
		var dragForce = liquid.calculateDrag(p1);
		p1.applyForce(dragForce);
	}

	if (liquid.contains(p2)){
		var dragForce = liquid.calculateDrag(p2);
		p2.applyForce(dragForce);
	}

	p1.display();
	p2.display();

	p1.update();
	p2.update();

	p1.edges();
	p2.edges();

	var wind = createVector(0.5,0);

	// Gravity is scaled by mass
	var gravity1 = createVector(0, (0.2 * this.p1.mass));
	p1.applyForce(gravity1);
	var gravity2 = createVector(0, 0.2 * this.p2.mass);
	p2.applyForce(gravity2);



	if (mouseIsPressed) {
			p1.applyForce(wind);
			p2.applyForce(wind);
	}

	// INTERFACE ELEMENTS
	noFill();
	stroke(255);
	textFont(font);
	textSize(fontSize);
	text('THE NATURE OF CODE', margin, margin);
	text('Session 2 Lessons 5', margin, margin * 1.5);
	text('v1: ' + p1.acc, margin, windowHeight - margin * 1.4);
	text('acc1: ' + p2.acc, margin, windowHeight - margin);
	textAlign(LEFT);
}
