// code and inspiration from:
// https://youtu.be/MfxBfRD0FVU

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // update the size of the element we render
  update() {
    this.x += random(-5, 5);
    this.y += random(-5, 5);
  }

  // render the element on the screen
  // by default the shape will be a point/circle
  show() {
    stroke(255);
    strokeWeight(25);
    point(this.x, this.y);
  }
}

class Box extends Particle {
  constructor(x, y) {
    super(x, y);
    this.bright = random(255);
    this.r = 10;
  }

  update() {
    super.update();
    this.r += random(-8, 8);
  }

  show() {
    strokeWeight(1);
    stroke(255);
    fill(this.bright);
    square(this.x, this.y, this.r);
  }
}

class Triangle extends Particle {
  constructor(x, y) {
    super(x, y);
    this.bright = random(255);
    this.size = 10;
    this.targetY = this.y; // Initial target position for smooth movement
  }

  update() {
    super.update();
    //following user's mouse
    this.targetY = mouseY;
  }

  show() {
    strokeWeight(1);
    stroke(255);
    fill(this.bright);
    // (0.1) for the speed of movement
    this.y = lerp(this.y, this.targetY, 0.1);
    // equilateral triangle based on the size(length)
    let h = (Math.sqrt(3) / 2) * this.size;
    //three vertex
    triangle(
      this.x,
      this.y - h / 2,
      this.x - this.size / 2,
      this.y + h / 2,
      this.x + this.size / 2,
      this.y + h / 2
    );
  }
}
