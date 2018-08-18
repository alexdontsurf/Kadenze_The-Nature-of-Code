var font;
var fontSize = 12;
var margin = 50;
var bgColor = 20;
var xoff = 0.0;

var p1;

function preload() {
	font = loadFont('assets/IBMPlexMono-Regular.ttf');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	// background(bgColor);

	p1 = new Particle(width/3, height/8, 2);
	attractor = new Attractor(width/2, height/2, 15);
}

function draw() {
	background(bgColor);

	p1.display();
	p1.update();
	// p1.edges();

	var wind = createVector(0.1,0);

	var gravity1 = createVector(0, (0.2 * this.p1.mass));
	//p1.applyForce(gravity1);

	attractor.display();
	var attractionForce = attractor.calculateAttraction(p1);

	p1.applyForce(attractionForce);

	if (mouseIsPressed) {
			p1.applyForce(wind);
	}

	// INTERFACE ELEMENTS
	noFill();
	stroke(255);
	textFont(font);
	textSize(fontSize);
	text('THE NATURE OF CODE', margin, margin);
	text('Session 2 Lessons 5', margin, margin * 1.5);
	text('v1: ' + attractionForce, margin, windowHeight - margin * 1.4);
	text('acc1: ' + p1.acc, margin, windowHeight - margin);
	textAlign(LEFT);
}
