import { Vector } from '../vector/vector.js';

export abstract class Shape {
  constructor(protected position: Vector) {}

  abstract draw(context: CanvasRenderingContext2D): void;
}
