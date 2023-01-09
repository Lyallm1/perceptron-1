export class Matrix {
  constructor (
    public rows: number,
    public columns: number,
    public values: number[] = new Array(rows * columns).fill(0)) {
  }

  /** Calculates the dot product of 2 Matrices */
  public static dotProduct (a: Matrix, b: Matrix) {
    if (a.columns !== b.rows) throw new Error(`The amount of columns of a (${a.columns}) does not match the amount of rows of b (${b.rows})`);

    const values: number[] = [];
    for (let aRowIndex = 0; aRowIndex < a.rows; aRowIndex++) {
      for (let bColumnIndex = 0; bColumnIndex < b.columns; bColumnIndex++) {
        let sum = 0;
        for (let aColumnIndex = 0; aColumnIndex < a.columns; aColumnIndex++) {
          sum += a.values[aRowIndex * a.columns + aColumnIndex] * b.values[aColumnIndex * b.columns + bColumnIndex];
        }
        values.push(sum);
      }
    }
    return new Matrix(a.rows, b.columns, values);
  }

  /** Creates a new transposed Matrix of the given Matrix */
  public static transpose (matrix: Matrix): Matrix {
    const values = [];
    for (let columnIndex = 0; columnIndex < matrix.columns; columnIndex++) {
      for (let rowIndex = 0; rowIndex < matrix.rows; rowIndex++) {
        values.push(matrix.values[rowIndex * matrix.columns + columnIndex]);
      }
    }
    return new Matrix(matrix.columns, matrix.rows, values);
  }

  public static substract (a: Matrix, b: Matrix): Matrix {
    if (a.rows !== b.rows) throw new Error(`The amount of rows of a (${a.rows}) does not match the amount of rows of b (${b.rows})`);
    if (a.columns !== b.columns) throw new Error(`The amount of columns of a (${a.columns}) does not match the amount of columns of b (${b.columns})`);

    const values = a.values.map((value, index) => value - b.values[index]);

    return new Matrix(a.rows, a.columns, values);
  }

  /** Returns the values as a 2D array of rows and columns */
  public get values2D (): number[][] {
    const values2D: number[][] = [];
    for (let rowIndex = 0; rowIndex < this.rows; rowIndex++) {
      values2D[rowIndex] = [];
      for (let columnIndex = 0; columnIndex < this.columns; columnIndex++) {
        values2D[rowIndex][columnIndex] = this.values[rowIndex * this.columns + columnIndex];
      }
    }
    return values2D;
  }

  /** Sets all values of the Matrix to a random number between -1 and 1 */
  public randomize (): Matrix {
    this.values = this.values.map(_ => Math.random() * 2 - 1);
    return this;
  }

  /** Adds the additor to all values of the Matrix */
  public add (additor: number): Matrix {
    this.values = this.values.map(v => v + additor);
    return this;
  }

  public addMatrix (additor: Matrix): Matrix {
    this.values = this.values.map((value, index) => value + additor.values[index]);
    return this;
  }

  /** Multiplies all values of the Matrix with the multiplier */
  public multiply (multiplier: number): Matrix {
    this.values = this.values.map(v => v * multiplier);
    return this;
  }

  public multiplyMatrix (multiplier: Matrix): Matrix {
    this.values = this.values.map((value, index) => value * multiplier.values[index]);
    return this;
  }

  public mapValues (mapperFn: (value: number) => number): Matrix {
    this.values = this.values.map(mapperFn);
    return this;
  }

  /** Returns a copy of the Matrix */
  public clone (): Matrix {
    return new Matrix(this.rows, this.columns, this.values);
  }

  /** Prints the values of the Matrix with a decimal precision of 5 */
  public print () {
    console.table(this.values2D);
  }
}