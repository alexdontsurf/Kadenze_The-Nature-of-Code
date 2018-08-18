
var Attractor = function(x, y, mass){
	this.pos = createVector(x, y);
	this.G = 1;
	this.diam = mass * 10;

	this.display = function() {
		ellipse(x, y, this.diam, this.diam);
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
