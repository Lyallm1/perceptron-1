import { Vector } from './../vector/vector';
import { Shape } from './shape';

export class Ball extends Shape {
  private radius: number;

  protected topOffset: number;
  protected bottomOffset: number;
  protected rightOffset: number;
  protected leftOffset: number;

  constructor (radius: number, position: Vector, velocity: Vector, acceleration: Vector, public color = 'blue', public stroke = 'red') {
    super(position, velocity, acceleration);
    this.radius = radius;
    this.topOffset = radius;
    this.rightOffset = radius;
    this.bottomOffset = radius;
    this.leftOffset = radius;
  }

  public draw (context: CanvasRenderingContext2D): void {
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