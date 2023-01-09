import { Vector } from './../vector/vector';
import { Shape } from '../shapes/shape';

export class Canvas {
  private canvasElement;
  private width;
  private height;

  private shapes: Shape[] = [];
  private environmentForces: Vector[] = [];

  private loop: any;

  constructor (container: HTMLElement | null, { width = 800, height = 600, backgroundColor = 'lightgrey' } = {}) {
    this.width = width;
    this.height = height;

    this.canvasElement = document.createElement('canvas');
    this.canvasElement.width = width;
    this.canvasElement.height = height;
    this.canvasElement.style.backgroundColor = backgroundColor;

    if (container === null) throw Error('Invalid container element: null');

    container.appendChild(this.canvasElement);
  }

  public get context (): CanvasRenderingContext2D {
    const context = this.canvasElement.getContext('2d');
    if (context === null) throw new Error('Could not get 2D context of Canvas element');
    return context;
  }

  public removeShapes (): void {
    this.shapes = [];
  }

  public addShape (shape: Shape): void {
    this.shapes.push(shape);
  }


  public draw (): void {
    this.context.clearRect(0, 0, this.width, this.height);
    this.shapes.forEach((shape: Shape) => { shape.draw(this.context); });
  }

  public update (): void {
    this.shapes.forEach(shape => {
      this.environmentForces.forEach(force => {
        shape.applyForce(force);
      });
      shape.update(this.width, this.height);
    });
  }

  public addEventListener (type: string, eventListener: any): void {
    this.canvasElement.addEventListener(type, eventListener);
  }

  public startLoop (fps = 60): void {
    this.loop = setInterval(() => {
      this.update();
      this.draw();
    }, 1000 / fps);
  }

  public stopLoop (): void {
    clearInterval(this.loop);
  }
}