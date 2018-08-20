class Vehicle{

	constructor(x, y, m) {
		this.pos = createVector(x, y);
		this.vel = createVector(0, 0.0);
		this.acc = createVector(0, 0);
		this.mass = m;
		this.diam = this.mass * 10;
		this.maxSpeed = 5;
		this.maxForce = 0.2;
	}

	seek(target) {
		var desired = p5.Vector.sub(target, this.pos);

    // The seek behavior!
    desired.setMag(this.maxSpeed);

		// Steering formula
		var steering = p5.Vector.sub(desired, this.vel);
		steering.limit(this.maxForce);
		this.applyForce(steering);

	}

	update() {
		this.vel.add(this.acc);
		this.vel.limit(this.maxSpeed);
		this.pos.add(this.vel);
		this.acc.set(0,0);


	}

	applyForce(force) {
		var f = force.copy();
		f.div(this.mass);
		this.acc.add(f);
	}

	display() {

		var theta = this.vel.heading() + PI/2;

		noFill();
		stroke(255);
		// ellipse(this.pos.x, this.pos.y, this.diam, this.diam);
		translate(this.pos.x, this.pos.y);
		rotate(theta);
		beginShape();
		vertex(0, -this.diam * 2);
		vertex(-this.diam , this.diam);
		vertex(this.diam , this.diam);
		endShape(CLOSE);
		
	}


}
