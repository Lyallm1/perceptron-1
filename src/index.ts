import { Perceptron } from './neural-network/neuron/perceptron';
import { TrainingData } from './neural-network/training-data';
import { Canvas } from './dynamic-canvas/canvas/canvas';
import { Vector } from './dynamic-canvas/vector/vector';
import { Ball } from './dynamic-canvas/shapes/ball';
import { Line } from './dynamic-canvas/shapes/line';
import { Text } from './dynamic-canvas/shapes/text';

let perceptron = new Perceptron(2, 0.001);

let m = 0.5;
let b = 0.5;
let dataPoints = 1000;
let learningRate = 0.001;

let interval: any;

function f (x: number): number {
  return m * x + b;
}

const canvas = new Canvas(document.getElementById('graph'), { width: 800, height: 800 });
const perceptronVisualization = new Canvas(document.getElementById('perceptron'), { width: 400, height: 300 });
const lossVisualization = new Canvas(document.getElementById('loss'), { width: 400, height: 300 });
let lossHistory: number[] = [];

function drawGraph (trainingData: TrainingData[]): void {
  const halfWidth = canvas.width / 2;
  const halfHeight = canvas.height / 2;

  canvas.removeShapes();

  canvas.addShape(new Line(new Vector(halfWidth, 0), new Vector(halfWidth, canvas.width), 'grey'));
  canvas.addShape(new Line(new Vector(0, halfHeight), new Vector(canvas.height, halfWidth), 'grey'));

  canvas.addShape(new Text(new Vector(halfWidth + 10, 20), '-1', '20px', 'grey'));
  canvas.addShape(new Text(new Vector(halfWidth + 10, canvas.height - 5), '1', '20px', 'grey'));
  canvas.addShape(new Text(new Vector(5, halfHeight + 20), '-1', '20px', 'grey'));
  canvas.addShape(new Text(new Vector(canvas.width - 20, halfHeight + 20), '1', '20px', 'grey'));

  trainingData.map(data => new Ball(3, new Vector(data.values[0] * halfWidth + halfWidth, data.values[1] * halfHeight + halfHeight), data.label === 1 ? 'gold' : 'lightblue', data.error ? 'red' : 'green')).forEach(ball => canvas.addShape(ball));

  canvas.addShape(new Line(new Vector(0, perceptron.status.f(-1) * halfHeight + halfHeight), new Vector(canvas.height, perceptron.status.f(1) * halfHeight + halfHeight)));
  canvas.draw();
}

function drawPerceptron (p: Perceptron, x: number, y: number) {
  perceptronVisualization.removeShapes();
  perceptronVisualization.addShape(new Text(new Vector(15, 56), 'x', '24px'));
  perceptronVisualization.addShape(new Text(new Vector(15, 156), 'y', '24px'));

  perceptronVisualization.addShape(new Ball(25, new Vector(60, 50), 'white', 'black'));
  perceptronVisualization.addShape(new Ball(25, new Vector(60, 150), 'white', 'black'));
  perceptronVisualization.addShape(new Ball(25, new Vector(60, 250), 'white', 'black'));

  perceptronVisualization.addShape(new Line(new Vector(83, 60), new Vector(190, 145), 'black'));
  perceptronVisualization.addShape(new Line(new Vector(85, 150), new Vector(185, 150), 'black'));
  perceptronVisualization.addShape(new Line(new Vector(83, 240), new Vector(190, 155), 'black'));

  perceptronVisualization.addShape(new Text(new Vector(125, 86), p.status.weights[0].toFixed(3)));
  perceptronVisualization.addShape(new Text(new Vector(115, 145), p.status.weights[1].toFixed(3)));
  perceptronVisualization.addShape(new Text(new Vector(125, 225), p.status.biasWeight.toFixed(3)));

  perceptronVisualization.addShape(new Ball(25, new Vector(210, 150), 'white', 'black'));

  perceptronVisualization.addShape(new Line(new Vector(235, 150), new Vector(325, 150), 'black'));

  perceptronVisualization.addShape(new Text(new Vector(125, 290), `y = ${p.status.m.toFixed(2)}x + ${p.status.b.toFixed(2)}`, '30px'));

  perceptronVisualization.addShape(new Text(new Vector(55, 255), '1'));
  perceptronVisualization.addShape(new Text(new Vector(50, 290), 'bias', '12px'));
  if (x && y) {
    perceptronVisualization.addShape(new Text(new Vector(45, 55), x.toFixed(2)));
    perceptronVisualization.addShape(new Text(new Vector(45, 155), y.toFixed(2)));

    const weightedSum = x * p.status.weights[0] + y * p.status.weights[1] + p.status.biasWeight;
    perceptronVisualization.addShape(new Text(new Vector(195, 155), weightedSum.toFixed(2)));

    perceptronVisualization.addShape(new Ball(25, new Vector(350, 150), weightedSum > 0 ? 'gold' : 'lightblue', 'none'));
  }

  perceptronVisualization.draw();
}

canvas.addEventListener('mousemove', (e: MouseEvent) => {
  const graphContainer = document.getElementById('graph');
  const x = (e.clientX - graphContainer!.offsetLeft + window.scrollX) / 400 - 1;
  const y = (e.clientY - graphContainer!.offsetTop + window.scrollY) / 400 - 1;

  drawPerceptron(perceptron, x, y);
});

function drawLossHistory (h: number[]) {
  lossVisualization.removeShapes();

  const w = 350 / h.length;
  const m = Math.max(...h);

  lossVisualization.addShape(new Line(new Vector(25, 25), new Vector(25, 275), 'grey'));
  lossVisualization.addShape(new Line(new Vector(25, 275), new Vector(375, 275), 'grey'));
  lossVisualization.draw();

  const ctx = lossVisualization.context;
  ctx.beginPath();
  h.forEach((l, i) => {
    const x = 25 + w * i;
    const y = 275 - l / m * 250;
    ctx.fillStyle = 'grey';
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

function setM (event: Event) {
  m = Number((event.target as HTMLInputElement)?.value);
}

function setB (event: Event) {
  b = Number((event.target as HTMLInputElement)?.value);
}

function setDataPoints (event: Event) {
  dataPoints = Number((event.target as HTMLInputElement)?.value);
}

function setLearningRate (event: Event) {
  learningRate = Number((event.target as HTMLInputElement)?.value);
}

function startTraining () {
  if (interval) {
    clearInterval(interval);
    interval = null;
  }

  perceptron = new Perceptron(2, learningRate);

  const trainingData: TrainingData[] = new Array(dataPoints).fill(0).map(_ => {
    const x = Math.random() * 2 - 1;
    const y = Math.random() * 2 - 1; // TODO: use utils
    const label = (y > f(x) ? 1 : -1);

    return { values: [x, y], label, error: 1 };
  });

  lossHistory = [];

  interval = setInterval(() => {
    if (!trainingData.find(data => data.error)) {
      console.log(`Training completed: ${perceptron.status.m.toFixed(2)} * x + ${perceptron.status.b.toFixed(2)} (expected ${f(1) - f(0)} * x + ${f(0)})`);
      clearInterval(interval);
      return;
    }

    lossHistory.push(perceptron.train(trainingData));
    console.log(`Thinking: ${perceptron.status.m.toFixed(2)} * x + ${perceptron.status.b.toFixed(2)}`);
    drawGraph(trainingData);
    drawPerceptron(perceptron, 0, 0);
    drawLossHistory(lossHistory);
  }, 300);
}

function stopTraining () {
  clearInterval(interval);
}

document.getElementById('m')?.addEventListener('change', setM);
document.getElementById('b')?.addEventListener('change', setB);
document.getElementById('datapoints')?.addEventListener('change', setDataPoints);
document.getElementById('learningrate')?.addEventListener('change', setLearningRate);
document.getElementById('train-button')?.addEventListener('click', startTraining);
document.getElementById('stop-button')?.addEventListener('click', stopTraining);
window.addEventListener('load', startTraining);