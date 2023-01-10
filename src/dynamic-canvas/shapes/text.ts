import { Shape } from './shape';
import { Vector } from '../vector/vector';

export class Text extends Shape {

  constructor (public position: Vector, public text: string, public size = '12px', public color = 'black') {
    super(position);
  }

  draw (context: CanvasRenderingContext2D): void {
    context.font = this.size + ' sans-serif';
    context.fillStyle = this.color;
    context.fillText(this.text, this.position.x, this.position.y);
  }
}