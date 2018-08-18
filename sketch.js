var font;
var fontSize = 12;
var margin = 50;
var bgColor = 20;
var xoff = 0.0;

var p1, p2;

function preload() {
	font = loadFont('assets/IBMPlexMono-Regular.ttf');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	// background(bgColor);

	p1 = new Particle(width/3, height/4, 2);
	p2 = new Particle(width - width/3, height/4, 5);
}

function draw() {
	background(bgColor);

	p1.display();
	p2.display();

	p1.update();
	p2.update();

	p1.edges();
	p2.edges();

	var wind = createVector(0.5,0);

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


function Particle(x, y, mass){

	this.pos = createVector(x, y);
	this.vel = createVector(0, 0);

	this.acc = createVector(0, 0);
	this.mass = mass;
	this.diam = this.mass * 10;

	this.display = function(){
		ellipse(this.pos.x, this.pos.y, this.diam, this.diam);
	}

	this.update = function(){
		this.vel.add(this.acc);
		this.pos.add(this.vel);

		// acc must be 0 at in order to not acumulate
		this.acc.set(0,0);
	}

	// Newton 2LAW F = m * a
	this.applyForce = function(force) {
		// Instead of set several forces such as gravity and wind acc must be add in order to not overwritten acc

		// need to copy on other variable in order to  always apply the original force to every object, not the reduced by mass one.
		var fCopy = force.copy();
		// a = F / m
		fCopy.div(this.mass);
		this.acc.add(fCopy);
	}

	this.edges = function() {
		if(this.pos.y + this.diam/2 > height) {
			this.vel.y *= -1;
			this.pos.y = height - this.diam/2;
		}

		if(this.pos.x + this.diam/2 > width) {
			this.vel.x *= -1;
			this.pos.x = width - this.diam/2;
		}

		if(this.pos.x - this.diam/2 < 0) {
			this.vel.x *= -1;
			this.pos.x = 0 + this.diam/2;
		}
	}
}
