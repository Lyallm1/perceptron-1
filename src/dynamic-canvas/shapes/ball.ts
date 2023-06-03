import { Shape } from './shape.js';
import { Vector } from '../vector/vector.js';

export class Ball extends Shape {
  constructor (private radius: number, position: Vector, public color = 'blue', public stroke = 'red') {
    super(position);
  }

  draw(context: CanvasRenderingContext2D) {
    context.beginPath();
    context.fillStyle = this.stroke;
    context.arc(this.position.x, this.position.y, this.radius + 2, 0, Math.PI * 2);
    context.fill();
    context.beginPath();
    context.fillStyle = this.color;
    context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
    context.fill();
  }
}
