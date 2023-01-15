import { Perceptron } from './neural-network/neuron/perceptron';
import { TrainingData } from './neural-network/training-data';
import { Canvas } from './dynamic-canvas/canvas/canvas';
import { Vector } from './dynamic-canvas/vector/vector';
import { Ball } from './dynamic-canvas/shapes/ball';
import { Line } from './dynamic-canvas/shapes/line';
import { Text } from './dynamic-canvas/shapes/text';

const perceptron = new Perceptron(2, 0.001);

function f (x: number): number {
  return 0.23 * x + 0.23;
}

const trainingData: TrainingData[] = new Array(500).fill(0).map(_ => {
  const x = Math.random() * 2 - 1;
  const y = Math.random() * 2 - 1; // TODO: use utils
  const label = (y > f(x) ? 1 : -1);

  return { values: [x, y], label, error: 1 };
});

const canvas = new Canvas(document.getElementById('graph'), { width: 800, height: 800 });
const perceptronVisualization = new Canvas(document.getElementById('perceptron'), { width: 400, height: 300 });
const lossVisualization = new Canvas(document.getElementById('loss'), { width: 400, height: 300 });
const lossHistory: number[] = [];

setInterval(() => {
  if (!trainingData.find(data => data.error)) {
    console.log(`Training completed: ${perceptron.status.m.toFixed(2)} * x + ${perceptron.status.b.toFixed(2)} (expected ${f(1) - f(0)} * x + ${f(0)})`);
    // TODO: stop interval
    return;
  }

  lossHistory.push(perceptron.train(trainingData));

  canvas.removeShapes();
  trainingData.map(data => new Ball(3, new Vector(data.values[0] * 400 + 400, data.values[1] * 400 + 400), data.label === 1 ? 'gold' : 'lightblue', data.error ? 'red' : 'green')).forEach(ball => canvas.addShape(ball));

  console.log(`Thinking: ${perceptron.status.m.toFixed(2)} * x + ${perceptron.status.b.toFixed(2)}`);

  canvas.addShape(new Line(new Vector(0, perceptron.status.f(-1) * 400 + 400), new Vector(800, perceptron.status.f(1) * 400 + 400)));
  canvas.draw();

  drawPerceptron(perceptron, 0, 0);
  drawLossHistory(lossHistory);
}, 300);

function drawPerceptron (p: Perceptron, x: number, y: number) {
  perceptronVisualization.removeShapes();
  perceptronVisualization.addShape(new Text(new Vector(5, 56), 'x', '24px'));
  perceptronVisualization.addShape(new Text(new Vector(5, 156), 'y', '24px'));
  perceptronVisualization.addShape(new Text(new Vector(5, 255), 'bias', '10px'));

  perceptronVisualization.addShape(new Ball(25, new Vector(50, 50), 'white', 'black'));
  perceptronVisualization.addShape(new Ball(25, new Vector(50, 150), 'white', 'black'));
  perceptronVisualization.addShape(new Ball(25, new Vector(50, 250), 'white', 'black'));

  perceptronVisualization.addShape(new Line(new Vector(75, 50), new Vector(175, 150), 'black'));
  perceptronVisualization.addShape(new Line(new Vector(75, 150), new Vector(175, 150), 'black'));
  perceptronVisualization.addShape(new Line(new Vector(75, 250), new Vector(175, 150), 'black'));

  perceptronVisualization.addShape(new Text(new Vector(105, 76), p.status.weights[0].toFixed(3)));
  perceptronVisualization.addShape(new Text(new Vector(105, 145), p.status.weights[1].toFixed(3)));
  perceptronVisualization.addShape(new Text(new Vector(105, 235), p.status.biasWeight.toFixed(3)));

  perceptronVisualization.addShape(new Ball(25, new Vector(200, 150), 'white', 'black'));

  perceptronVisualization.addShape(new Line(new Vector(225, 150), new Vector(325, 150), 'black'));

  perceptronVisualization.addShape(new Text(new Vector(75, 290), `y = ${p.status.m.toFixed(2)}x + ${p.status.b.toFixed(2)}`, '30px'));

  perceptronVisualization.addShape(new Text(new Vector(40, 255), '1'));
  if (x && y) {
    perceptronVisualization.addShape(new Text(new Vector(40, 55), x.toFixed(2)));
    perceptronVisualization.addShape(new Text(new Vector(40, 155), y.toFixed(2)));

    const weightedSum = x * p.status.weights[0] + y * p.status.weights[1] + p.status.biasWeight;
    perceptronVisualization.addShape(new Text(new Vector(190, 155), weightedSum.toFixed(2)));

    perceptronVisualization.addShape(new Ball(25, new Vector(360, 150), weightedSum > 0 ? 'gold' : 'lightblue', 'none'));
  }

  perceptronVisualization.draw();
}

canvas.addEventListener('mousemove', (e: MouseEvent) => {
  const graphContainer = document.getElementById('graph');
  const x = (e.clientX - graphContainer!.offsetLeft) / 400 - 1;
  const y = (e.clientY - graphContainer!.offsetTop + window.scrollY) / 400 - 1;

  drawPerceptron(perceptron, x, y);
});

function drawLossHistory (h: number[]) {
  lossVisualization.removeShapes();

  const w = 350 / h.length;
  const m = Math.max(...h);

  lossVisualization.addShape(new Line(new Vector(25, 25), new Vector(25, 275)));
  lossVisualization.addShape(new Line(new Vector(25, 275), new Vector(375, 275)));
  lossVisualization.draw();

  const ctx = lossVisualization.context;
  ctx.beginPath();
  h.forEach((l, i) => {
    const x = 25 + w * i;
    const y = 275 - l / m * 250;
    ctx.fillText(l + '', x - 3, y - 5);
    if (i === 0) ctx.moveTo(x, y);
    else {
      ctx.lineTo(x, y);
      ctx.moveTo(x, y);
    }
  });
  ctx.lineCap = 'round';
  ctx.strokeStyle = 'black';
  ctx.stroke();
}