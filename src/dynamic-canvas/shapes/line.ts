import { Shape } from './shape.js';
import { Vector } from '../vector/vector.js';

export class Line extends Shape {
  constructor (public start: Vector, public end: Vector, public color = 'black') {
    super(start);
  }

  draw(context: CanvasRenderingContext2D) {
    context.beginPath();
    context.strokeStyle = this.color;
    context.lineWidth = 3;
    context.moveTo(this.start.x, this.start.y);
    context.lineTo(this.end.x, this.end.y);
    context.stroke();
  }
}
