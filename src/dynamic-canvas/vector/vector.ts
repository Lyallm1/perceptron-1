export class Vector {
  constructor(public x: number, public y: number) {}

  static create(): Vector {
    return new Vector(0, 0);
  }

  static dotProduct(a: Vector, b: Vector): number {
    return a.x * b.x + a.y * b.y;
  }

  copy(): Vector {
    return new Vector(this.x, this.y);
  }

  get magnitude() { return Math.sqrt(Vector.dotProduct(this, this)); }
  get angle() {
    const absoluteAngle = Math.acos(this.x / this.magnitude);
    return this.y > 0 ? 2 * Math.PI - absoluteAngle : absoluteAngle;
  }
  
  add(additor: Vector): Vector {
    this.x += additor.x;
    this.y += additor.y;
    return this;
  }

  multiply(multiplier: number): Vector {
    this.x *= multiplier;
    this.y *= multiplier;
    return this;
  }

  substract(substractor: Vector): Vector {
    return this.add(substractor.multiply(-1));
  }

  divide(divisor: number): Vector {
    if (divisor === 0) throw new Error('Cannot normalize a vector with magnitude 0');
    return this.multiply(1 / divisor);
  }

  normalize(): Vector {
    return this.divide(this.magnitude);
  }

  equals(other: Vector): boolean {
    return this.x === other.x && this.y === other.y;
  }
}
