import { Shape } from './shape';
import { Vector } from '../vector/vector';

export class Line extends Shape {
  protected bottomOffset = 0;
  protected leftOffset = 0;
  protected rightOffset = 0;
  protected topOffset = 0;

  constructor (public start: Vector, public end: Vector) {
    super(start, Vector.create(), Vector.create());
    this.start = start;
    this.end = end;
  }

  draw (context: CanvasRenderingContext2D): void {
    context.beginPath();
    context.strokeStyle = 'white';
    context.lineWidth = 3;
    context.moveTo(this.start.x, this.start.y);
    context.lineTo(this.end.x, this.end.y);
    context.stroke();
  }

}