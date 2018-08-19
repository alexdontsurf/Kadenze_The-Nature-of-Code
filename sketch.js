var font;
var fontSize = 12;
var margin = 50;
var bgColor = 20;
var xoff = 0.0;
var num = 40;
var particles = [];

function preload() {
	font = loadFont('assets/IBMPlexMono-Regular.ttf');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	// background(bgColor);

	for (var i = 0; i < num; i++) {
		translate(width/2, height/2);
		particles[i] = new Particle( random(width), random(height), random(1,5));
	}

	attractor = new Attractor(20);
}

function mousePressed() {
	var p = new Particle( mouseX, mouseY, random(1,5));
	particles.push(p);
	console.log(particles.length);
}

function draw() {
	background(bgColor,100);

	attractor.display();

	var wind = createVector(1,0);


	for (var i = 0; i < particles.length; i++) {
		particles[i].display();
		particles[i].update();
		// particles[i].edges();
		var gravity = createVector(0, (0.2 * particles[i].mass));
		// if (mouseIsPressed){
		// 	particles[i].applyForce(gravity);
		// }

		var attractionForce = attractor.calculateAttraction(particles[i]);
		particles[i].applyForce(attractionForce);

	}

	if (particles.length >= 100) {
		particles.splice(0,1);
	}


	// INTERFACE ELEMENTS
	fill(255);
	noStroke();
	textFont(font);
	textSize(fontSize);
	text('THE NATURE OF CODE', margin, margin);
	text('Session 2 Lessons ', margin, margin * 1.5);
	text('particles: ' + particles.length , margin, windowHeight - margin * 1.4);
	text('frame rate: ' + frameCount, margin, windowHeight - margin);
	textAlign(LEFT);
}
