
var Particle = function(x, y, mass){

	this.pos = createVector(x, y);
	this.vel = createVector(0, 0);

	this.acc = createVector(0, 0);
	this.mass = mass;
	this.diam = this.mass * 10;

	this.display = function(){
		stroke(255);
		noFill();
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

		if(this.pos.y - this.diam/2 < 0) {
			this.vel.y *= -1;
			this.pos.y = this.diam/2;
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
