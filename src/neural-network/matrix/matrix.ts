export class Matrix {
  constructor(public rows: number, public columns: number, public values: number[] = new Array(rows * columns).fill(0)) {}

  static dotProduct(a: Matrix, b: Matrix) {
    if (a.columns !== b.rows) throw new Error(`The amount of columns of a (${a.columns}) does not match the amount of rows of b (${b.rows})`);
    const values: number[] = [];
    for (let aRowIndex = 0; aRowIndex < a.rows; aRowIndex++) for (let bColumnIndex = 0; bColumnIndex < b.columns; bColumnIndex++) {
      let sum = 0;
      for (let aColumnIndex = 0; aColumnIndex < a.columns; aColumnIndex++) sum += a.values[aRowIndex * a.columns + aColumnIndex] * b.values[aColumnIndex * b.columns + bColumnIndex];
      values.push(sum);
    }
    return new Matrix(a.rows, b.columns, values);
  }

  static transpose(matrix: Matrix): Matrix {
    const values = [];
    for (let columnIndex = 0; columnIndex < matrix.columns; columnIndex++) for (let rowIndex = 0; rowIndex < matrix.rows; rowIndex++) values.push(matrix.values[rowIndex * matrix.columns + columnIndex]);
    return new Matrix(matrix.columns, matrix.rows, values);
  }

  static substract(a: Matrix, b: Matrix): Matrix {
    if (a.rows !== b.rows) throw new Error(`The amount of rows of a (${a.rows}) does not match the amount of rows of b (${b.rows})`);
    if (a.columns !== b.columns) throw new Error(`The amount of columns of a (${a.columns}) does not match the amount of columns of b (${b.columns})`);
    return new Matrix(a.rows, a.columns, a.values.map((value, i) => value - b.values[i]));
  }

  get values2D() {
    const values2D: number[][] = [];
    for (let r = 0; r < this.rows; r++) {
      values2D[r] = [];
      for (let c = 0; c < this.columns; c++) values2D[r][c] = this.values[r * this.columns + c];
    }
    return values2D;
  }

  randomize(): Matrix {
    this.values = this.values.map(() => Math.random() * 2 - 1);
    return this;
  }

  add(additor: number): Matrix {
    this.values = this.values.map(v => v + additor);
    return this;
  }

  addMatrix(additor: Matrix): Matrix {
    this.values = this.values.map((value, i) => value + additor.values[i]);
    return this;
  }

  multiply(multiplier: number): Matrix {
    this.values = this.values.map(v => v * multiplier);
    return this;
  }

  multiplyMatrix(multiplier: Matrix): Matrix {
    this.values = this.values.map((value, i) => value * multiplier.values[i]);
    return this;
  }

  mapValues(mapperFn: (value: number) => number): Matrix {
    this.values = this.values.map(mapperFn);
    return this;
  }

  clone(): Matrix {
    return new Matrix(this.rows, this.columns, this.values);
  }

  print() {
    console.table(this.values2D);
  }
}
