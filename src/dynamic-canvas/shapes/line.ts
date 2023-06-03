import { Shape } from './shape';
import { Vector } from '../vector/vector';

export class Line extends Shape {

  constructor (public start: Vector, public end: Vector, public color = 'black') {
    super(start);
    this.start = start;
    this.end = end;
  }

  draw (context: CanvasRenderingContext2D): void {
    context.beginPath();
    context.strokeStyle = this.color;
    context.lineWidth = 3;
    context.moveTo(this.start.x, this.start.y);
    context.lineTo(this.end.x, this.end.y);
    context.stroke();
  }

}