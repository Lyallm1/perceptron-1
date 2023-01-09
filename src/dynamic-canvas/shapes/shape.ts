import { drag } from './../constants';
import { Vector } from '../vector/vector';

export abstract class Shape {
  protected position: Vector;
  protected velocity: Vector;
  protected acceleration: Vector;

  protected abstract topOffset: number;
  protected abstract bottomOffset: number;
  protected abstract leftOffset: number;
  protected abstract rightOffset: number;

  constructor (position: Vector, velocity: Vector, acceleration: Vector) {
    this.position = position;
    this.velocity = velocity;
    this.acceleration = acceleration;
  }

  public abstract draw (context: CanvasRenderingContext2D): void;

  public update (width: number, height: number): Shape {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);

    if (this.position.x + this.rightOffset > width) {
      this.position.x = width - this.rightOffset;
      this.velocity.x -= drag * 1.5;
      this.velocity.x *= -1;
    }
    if (this.position.x - this.leftOffset < 0) {
      this.position.x = this.leftOffset;
      this.velocity.x += drag * 1.5;
      this.velocity.x *= -1;
    }
    if (this.position.y + this.bottomOffset > height) {
      this.position.y = height - this.bottomOffset;
      this.velocity.y -= drag;
      this.velocity.y *= -1;
    }
    if (this.position.y - this.topOffset < 0) {
      this.position.y = this.topOffset;
      this.velocity.y += drag;
      this.velocity.y *= -1;
    }

    return this;
  }

  public applyForce (force: Vector): Shape {
    this.velocity.add(force);
    return this;
  }
}