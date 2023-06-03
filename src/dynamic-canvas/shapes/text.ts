import { Shape } from './shape.js';
import { Vector } from '../vector/vector.js';

export class Text extends Shape {
  constructor (public position: Vector, public text: string, public size = '14px', public color = 'black') {
    super(position);
  }

  draw(context: CanvasRenderingContext2D) {
    context.font = this.size + ' sans-serif';
    context.fillStyle = this.color;
    context.fillText(this.text, this.position.x, this.position.y);
  }
}
