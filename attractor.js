
var Attractor = function(mass){

	this.G = 1;
	this.diam = mass * 10;

	this.display = function() {
		this.pos = createVector(mouseX, mouseY);
		noFill();
		stroke(255,100);
		// for (var i = 0; i < 10; i++) {
		// 	ellipse(x, y, this.diam * i + 10, this.diam * i +10);
		// }

		ellipse(this.pos.x, this.pos.y, this.diam, this.diam);
	}

	this.calculateAttraction = function(p){
		// Calculate direction of force
		var force = p5.Vector.sub(this.pos, p.pos);
    // Distance between objects
    var distance = force.mag();
    // Artificial constraint
    distance = constrain(distance, 5, 25);
    // Normalize vector (distance doesn't matter here, we just want this vector for direction)
    force.normalize();
    // Calculate gravitional force magnitude
    var strength = (this.G * mass * p.mass) / (distance * distance);
    // Get force vector --> magnitude * direction
    force.mult(strength);
    return force;
	}
}
