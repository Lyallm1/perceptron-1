import { Matrix } from './matrix';

describe('Matrix', () => {
  let m1: Matrix;
  let m2: Matrix;

  beforeEach(() => {
    // | -2.5    1    0 |
    // |  -1   3.33   2 |
    m1 = new Matrix(2, 3, [-2.5, 1, 0, -1, 3.33, 2]);

    // |   4   -3   -1 |
    // | -0.5   6    2 |
    // |  1.5   0   -3 |
    m2 = new Matrix(3, 3, [4, -3, -1, -0.5, 6, 2, 1.5, 0, -3]);
  });

  describe('static methods', () => {
    describe('Dot product', () => {
      it('calculates the dot product of 2 matrices', () => {
        expect(Matrix.dotProduct(m1, m2).values).toEqual([-10.50, 13.50, 4.50, -2.665, 22.98, expect.closeTo(1.66, 3)]);
      });

      it('throws an error if the calumns of a and the rows of b do not match', () => {
        expect(() => { Matrix.dotProduct(new Matrix(2, 3), new Matrix(4, 2)); }).toThrow('The amount of columns of a (3) does not match the amount of rows of b (4)');
      });

      it('creates a new Matrix', () => {
        const result = Matrix.dotProduct(m1, m2);
        expect(result === m1).toBe(false);
        expect(result === m2).toBe(false);
      });
    });

    describe('transpose', () => {
      it('transposes the matrix', () => {
        const result = Matrix.transpose(m1);
        expect(result.rows).toBe(3);
        expect(result.columns).toBe(2);
        expect(result.values).toEqual([-2.5, -1, 1, 3.33, 0, 2]);
      });

      it('creates a new Matrix', () => {
        const result = Matrix.transpose(m1);
        expect(result === m1).toBe(false);
      });
    });
  });

  describe('get values2D', () => {
    it('returns the values as a 2D array of rows and columns', () => {
      expect(m1.values2D).toEqual([[-2.5, 1, 0], [-1, 3.33, 2]]);
      expect(m2.values2D).toEqual([[4, -3, -1], [-0.5, 6, 2], [1.5, 0, -3]]);
    });
  });

  describe('randomize', () => {
    it('randomizes all values of the matrix', () => {
      const m2 = m1.clone().randomize();
      const m3 = m1.clone().randomize();
      expect(m2.values).not.toEqual(m1.values);
      expect(m3.values).not.toEqual(m1.values);
      expect(m3.values).not.toEqual(m2.values);
    });

    it('sets the values to a number between -1 and 1', () => {
      new Matrix(100, 100).randomize().values.forEach(value => {
        expect(value).toBeGreaterThanOrEqual(-1);
        expect(value).toBeLessThan(1);
      });
    });

    it('returns the Matrix for daisy chaining', () => {
      const result = m1.randomize();
      expect(result).toBe(m1);
    });
  });

  describe('add', () => {
    it('adds the additor to all values of the matrix', () => {
      m1.add(3.2);
      expect(m1.values).toEqual([expect.closeTo(0.7, 3), 4.2, 3.2, 2.2, 6.53, 5.2]);
    });

    it('returns the Matrix for daisy chaining', () => {
      const result = m1.add(1);
      expect(result).toBe(m1);
    });
  });

  describe('multiply', () => {
    it('multiplies all values of the matrix with the multiplier', () => {
      m1.multiply(3.2);
      expect(m1.values).toEqual([-8, 3.2, 0, -3.2, 10.656, 6.4]);
    });

    it('returns the Matrix for daisy chaining', () => {
      const result = m1.multiply(1);
      expect(result).toBe(m1);
    });
  });

  describe('clone', () => {
    it('returns a copy of the matrix', () => {
      const result = m1.clone();
      expect(result).not.toBe(m1);
      expect(result.rows).toBe(2);
      expect(result.columns).toBe(3);
      expect(result.values).toEqual([-2.5, 1, 0, -1, 3.33, 2]);
    });
  });

  describe('print', () => {
    beforeEach(() => {
      jest.spyOn(console, 'table');
    });

    it('prints the values of the matrix to the console as a 2 dimensional table', () => {
      m1.print();
      expect(console.table).toHaveBeenCalledWith([[-2.5, 1, 0], [-1, 3.33, 2]]);
    });
  });
});