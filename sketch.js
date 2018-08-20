var vehicle;

function setup() {
	createCanvas(windowWidth, windowHeight);
	// background(bgColor);
	vehicle = new Vehicle(130, 200, 1);
}

function draw() {
	var bgColor = 25;
	background(bgColor,100);

	var target = createVector(mouseX,mouseY);
	vehicle.seek(target);
	vehicle.display();
	vehicle.update();

}
