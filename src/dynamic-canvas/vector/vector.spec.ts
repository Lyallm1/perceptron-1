import { Vector } from './vector';

describe('Vector', () => {
  describe('constructor', () => {
    it('creates a vector with properties x and y', () => {
      expect(new Vector(0, 0)).toEqual({ x: 0, y: 0 });
      expect(new Vector(1, 1)).toEqual({ x: 1, y: 1 });
      expect(new Vector(0.123456, 0.123456)).toEqual({ x: 0.123456, y: 0.123456 });
      expect(new Vector(123456789.12345678, 123456789.12345678)).toEqual({ x: 123456789.12345678, y: 123456789.12345678 });

      expect(new Vector(-0, 0)).toEqual({ x: -0, y: 0 });
      expect(new Vector(1, -1)).toEqual({ x: 1, y: -1 });
      expect(new Vector(-0.123456, -0.123456)).toEqual({ x: -0.123456, y: -0.123456 });
      expect(new Vector(-123456789.12345678, 123456789.12345678)).toEqual({ x: -123456789.12345678, y: 123456789.12345678 });
    });
  });

  describe('copy', () => {
    it('returns a copy of the vector', () => {
      const vector = new Vector(123456.123456, -123.123);
      const copy = vector.copy();

      expect(copy).not.toBe(vector);
      expect(copy.x).toBe(vector.x);
      expect(copy.y).toBe(vector.y);
    });
  });

  describe('get magnitude', () => {
    it('returns the magnitude of the vector', () => {
      expect(new Vector(0, 0).magnitude).toBe(0);
      expect(new Vector(1, 1).magnitude).toBeCloseTo(1.414, 3);
      expect(new Vector(0.123456, 0.123456).magnitude).toBeCloseTo(0.175, 3);
      expect(new Vector(123456789.12345678, 123456789.12345678).magnitude).toBeCloseTo(174594265.545, 3);
    });

    it('returns the magnitude of vectors with negative coordinates', () => {
      expect(new Vector(-1, 1).magnitude).toBeCloseTo(1.414, 3);
      expect(new Vector(0.123456, -0.123456).magnitude).toBeCloseTo(0.175, 3);
      expect(new Vector(-123456789.12345678, -123456789.12345678).magnitude).toBeCloseTo(174594265.545, 3);
    });
  });

  describe('get angle', () => {
    it('calculates the angle in radians between the vector and the horizon ([0, 1])', () => {
      expect(new Vector(0, -5).angle).toBe(Math.PI / 2);
      expect(new Vector(-5, 0).angle).toBe(Math.PI);
      expect(new Vector(0, 5).angle).toBe(3 * Math.PI / 2);
      expect(new Vector(5, 0).angle).toBe(0);
      expect(new Vector(5, -5).angle).toBeCloseTo(Math.PI / 4, 3);
      expect(new Vector(-5, -5).angle).toBeCloseTo(3 * Math.PI / 4, 3);
      expect(new Vector(-5, 5).angle).toBeCloseTo(5 * Math.PI / 4, 3);
      expect(new Vector(5, 5).angle).toBeCloseTo(7 * Math.PI / 4, 3);
    });
  });

  describe('add', () => {
    it('adds the given additor to the vector', () => {
      const vector = new Vector(123.123, 456.456);
      const additor = new Vector(456.456, 123.123);
      vector.add(additor);
      expect(vector.x).toBeCloseTo(579.579);
      expect(vector.y).toBeCloseTo(579.579);
    });

    it('returns the vector for daisy chaining', () => {
      const vector = new Vector(1, 1);
      expect(vector.add(new Vector(5, 5))).toBe(vector);

      const addedVector = vector.add(new Vector(2, 2)).add(new Vector(3, 3)).add(new Vector(4, 4));
      expect(addedVector).toBe(vector);
      expect(addedVector.x).toBe(15);
      expect(addedVector.y).toBe(15);
    });
  });

  describe('multiply', () => {
    it('multiplies the vector with the given multiplier', () => {
      const vector = new Vector(1, 1);
      vector.multiply(5);
      expect(vector.x).toBe(5);
      expect(vector.y).toBe(5);
    });

    it('multiplies the vector with the given floating point multiplier', () => {
      const vector = new Vector(123.456, -123.456);
      vector.multiply(7.89);
      expect(vector.x).toBeCloseTo(974.068, 3);
      expect(vector.y).toBeCloseTo(-974.068, 3);
    });

    it('multiplies the vector with the given negative multiplier', () => {
      const vector = new Vector(123.456, -123.456);
      vector.multiply(-7.89);
      expect(vector.x).toBeCloseTo(-974.068, 3);
      expect(vector.y).toBeCloseTo(974.068, 3);
    });

    it('multiplies the vector with the given multiplier < 1', () => {
      const vector = new Vector(123.456, -123.456);
      vector.multiply(0.789);
      expect(vector.x).toBeCloseTo(97.407, 3);
      expect(vector.y).toBeCloseTo(-97.407, 3);
    });

    it('returns the vector for daisy chaining', () => {
      const vector = new Vector(1, 1);
      expect(vector.multiply(5)).toBe(vector);

      const multipliedVector = vector.multiply(2).multiply(3).multiply(4);
      expect(multipliedVector).toBe(vector);
      expect(multipliedVector.x).toBe(120);
      expect(multipliedVector.y).toBe(120);
    });
  });

  describe('substract', () => {
    it('substracts the given substractor to the vector', () => {
      const vector = new Vector(123.123, 579.579);
      const substractor = new Vector(579.579, 123.123);
      vector.substract(substractor);
      expect(vector.x).toBeCloseTo(-456.456);
      expect(vector.y).toBeCloseTo(456.456);
    });

    it('returns the vector for daisy chaining', () => {
      const vector = new Vector(15, 15);
      expect(vector.substract(new Vector(5, 5))).toBe(vector);

      const substractedVector = vector.substract(new Vector(2, 2)).substract(new Vector(3, 3)).substract(new Vector(4, 4));
      expect(substractedVector).toBe(vector);
      expect(substractedVector.x).toBe(1);
      expect(substractedVector.y).toBe(1);
    });
  });

  describe('divide', () => {
    it('divides the vector with the given divisor', () => {
      const vector = new Vector(5, 5);
      vector.divide(5);
      expect(vector.x).toBe(1);
      expect(vector.y).toBe(1);
    });

    it('divides the vector with the given floating point divisor', () => {
      const vector = new Vector(974.068, -974.068);
      vector.divide(7.89);
      expect(vector.x).toBeCloseTo(123.456, 3);
      expect(vector.y).toBeCloseTo(-123.456, 3);
    });

    it('divides the vector with the given negative divisor', () => {
      const vector = new Vector(974.068, -974.068);
      vector.divide(-7.89);
      expect(vector.x).toBeCloseTo(-123.456, 3);
      expect(vector.y).toBeCloseTo(123.456, 3);
    });

    it('divides the vector with the given divisor < 1', () => {
      const vector = new Vector(97.407, -97.407);
      vector.divide(0.789);
      expect(vector.x).toBeCloseTo(123.456, 3);
      expect(vector.y).toBeCloseTo(-123.456, 3);
    });

    it('returns the vector for daisy chaining', () => {
      const vector = new Vector(120, 120);
      expect(vector.divide(5)).toBe(vector);

      const multipliedVector = vector.divide(2).divide(3).divide(4);
      expect(multipliedVector).toBe(vector);
      expect(multipliedVector.x).toBe(1);
      expect(multipliedVector.y).toBe(1);
    });
  });

  describe('normalize', () => {
    it('normalizes the vector to magnitude 1', () => {
      expect(new Vector(5, 5).normalize().magnitude).toBeCloseTo(1.000, 3);
      expect(new Vector(123456.123456, 123.456).normalize().magnitude).toBeCloseTo(1.000, 3);
      expect(new Vector(-123456789.12345678, -3).normalize().magnitude).toBeCloseTo(1.000, 3);
    });

    it('throws an error when normalizing vectors with magnitude 0', () => {
      expect(() => { new Vector(0, 0).normalize(); }).toThrow('Cannot normalize a vector with magnitude 0');
    });
  });

  describe('equals', () => {
    it('returns true if the vectors are equal', () => {
      const vector1 = new Vector(-123456.123456, 2.345);
      const vector2 = new Vector(-123456.123456, 2.345);
      const vector3 = new Vector(1, 2.345);

      expect(vector1.equals(vector2)).toBe(true);
      expect(vector2.equals(vector1)).toBe(true);
      expect(vector1.equals(vector3)).toBe(false);
      expect(vector3.equals(vector2)).toBe(false);
    });
  });
});