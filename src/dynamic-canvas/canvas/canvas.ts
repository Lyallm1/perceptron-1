import { Shape } from '../shapes/shape';

export class Canvas {
  private canvasElement;
  public width;
  public height;

  private shapes: Shape[] = [];

  constructor (container: HTMLElement | null, { width = 800, height = 600, backgroundColor = 'white' } = {}) {
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

  public addEventListener (type: string, eventListener: any): void {
    this.canvasElement.addEventListener(type, eventListener);
  }
}