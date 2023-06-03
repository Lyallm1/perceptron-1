import { Shape } from '../shapes/shape.js';

export class Canvas {
  private canvasElement = document.createElement('canvas');
  width: number;
  height: number;
  private shapes: Shape[] = [];

  constructor(container: HTMLElement | null, { width = 800, height = 600, backgroundColor = 'white' } = {}) {
    this.width = this.canvasElement.width = width;
    this.height = this.canvasElement.height = height;
    this.canvasElement.style.backgroundColor = backgroundColor;
    if (!container) throw Error('Invalid container element: null');
    container.appendChild(this.canvasElement);
  }

  get context() {
    const context = this.canvasElement.getContext('2d');
    if (!context) throw new Error('Could not get 2D context of Canvas element');
    return context;
  }

  removeShapes() {
    this.shapes = [];
  }

  addShape(shape: Shape) {
    this.shapes.push(shape);
  }

  draw() {
    this.context.clearRect(0, 0, this.width, this.height);
    this.shapes.forEach(shape => shape.draw(this.context));
  }

  addEventListener(type: string, eventListener: EventListenerOrEventListenerObject) {
    this.canvasElement.addEventListener(type, eventListener);
  }
}
