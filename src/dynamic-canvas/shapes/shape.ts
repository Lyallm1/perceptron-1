import { drag } from './../constants';
import { Vector } from '../vector/vector';

export abstract class Shape {
  protected position: Vector;

  constructor (position: Vector) {
    this.position = position;
  }

  public abstract draw (context: CanvasRenderingContext2D): void;
}