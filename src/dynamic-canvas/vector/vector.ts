export class Vector {
  public static create (): Vector {
    return new Vector(0, 0);
  }

  /** Calculates the dot product or skalar product of the given Vectors */
  public static dotProduct (a: Vector, b: Vector): number {
    return a.x * b.x + a.y * b.y;
  }

  constructor (public x: number, public y: number) {}

  /** Returns a new instance of the Vector with the same x and y values */
  public copy (): Vector {
    return new Vector(this.x, this.y);
  }

  /** Calculates the magnitude of the vector */
  public get magnitude (): number {
    return Math.sqrt(Vector.dotProduct(this, this));
  }

  /** Calculates the angle in radians between this Vector and the horizon unit Vector(1, 0) */
  public get angle (): number {
    const absoluteAngle = Math.acos(this.x / this.magnitude);
    const vectorBelowHorizon = this.y > 0;
    if (vectorBelowHorizon) return 2 * Math.PI - absoluteAngle;
    return absoluteAngle;
  }

  /** Adds the given Vector to this Vector */
  public add (additor: Vector): Vector {
    this.x += additor.x;
    this.y += additor.y;

    return this;
  }

  /** Multiplies this Vector with the given multiplier */
  public multiply (multiplier: number): Vector {
    this.x *= multiplier;
    this.y *= multiplier;

    return this;
  }

  /** Substracts the given Vector from this Vector */
  public substract (substractor: Vector): Vector {
    return this.add(substractor.multiply(-1));
  }

  /** Divides this Vector by the given divisor */
  public divide (divisor: number): Vector {
    if (divisor === 0) throw new Error('Cannot normalize a vector with magnitude 0');

    return this.multiply(1 / divisor);
  }

  /** Normalizes this Vector to a unit vector (with magnitude 1) by changing the x and y value while maintaining the angle */
  public normalize (): Vector {
    return this.divide(this.magnitude);
  }

  /** Compares x and y values of the given Vector to this Vector */
  public equals (other: Vector): boolean {
    return this.x === other.x && this.y === other.y;
  }
}