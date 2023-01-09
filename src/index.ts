import { Perceptron } from './neural-network/neuron/perceptron';
import { TrainingData } from './neural-network/training-data';
import { Canvas } from './dynamic-canvas/canvas/canvas';
import { Vector } from './dynamic-canvas/vector/vector';
import { Ball } from './dynamic-canvas/shapes/ball';
import { Line } from './dynamic-canvas/shapes/line';

const perceptron = new Perceptron(2, 0.01);

function f (x: number): number {
  return -0.2 * x + 0.35;
}

const trainingData: TrainingData[] = new Array(500).fill(0).map(_ => {
  const x = Math.random() * 2 - 1;
  const y = Math.random() * 2 - 1;
  const label = (y > f(x) ? 1 : -1);

  return { values: [x, y], label };
});

const canvas = new Canvas(document.getElementById('container'));

setInterval(() => {
  if (!trainingData.find(data => !data.correct)) return;
  perceptron.train(trainingData);
  canvas.removeShapes();
  trainingData.map(data => new Ball(3, new Vector(data.values[0] * 400 + 400, data.values[1] * 300 + 300), Vector.create(), Vector.create(), data.label === 1 ? 'gold' : 'lightblue', data.correct ? 'green' : 'red')).forEach(ball => canvas.addShape(ball));

  console.log(`Thinking: ${perceptron.m.toFixed(2)} * x + ${perceptron.b.toFixed(2)}`);

  const f = (x: number) => perceptron.m * x + perceptron.b;

  canvas.addShape(new Line(new Vector(0, f(-1) * 300 + 300), new Vector(800, f(1) * 300 + 300)));
  canvas.draw();
}, 300);

// while (trainingData.some(data => !data.correct)) {
//   perceptron.train(trainingData);
//   canvas.removeShapes();
//   trainingData.map(data => new Ball(3, new Vector(data.values[0] * 400 + 400, data.values[1] * 300 + 300), Vector.create(), Vector.create(), data.label === 1 ? 'yellow' : 'blue', data.correct ? 'green' : 'red')).forEach(ball => canvas.addShape(ball));
//
//   const f = (x: number) => perceptron.m * x + perceptron.b;
//
//   canvas.addShape(new Line(new Vector(0, f(-1) * 300 + 300), new Vector(800, f(1) * 300 + 300)));
//   canvas.draw();
// }

console.log(`Training completed: ${perceptron.m.toFixed(2)} * x + ${perceptron.b.toFixed(2)} (expected ${f(1) - f(0)} * x + ${f(0)})`);
